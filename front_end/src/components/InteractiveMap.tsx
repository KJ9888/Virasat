import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons in Vite setups
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Props = {
  origin: string;
  destination: string;
  travelMode: "flight" | "train";
  className?: string;
  height?: number;
};

type LatLng = { lat: number; lng: number };

const modeColor: Record<Props["travelMode"], string> = {
  flight: "#d946ef", // fuchsia-500
  train: "#34d399", // emerald-400
};

async function geocode(query: string): Promise<LatLng | null> {
  if (!query) return null;
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", India")}`;
    const res = await fetch(url, { headers: { "Accept-Language": "en" } });
    const data = (await res.json()) as Array<{ lat: string; lon: string }>;
    if (Array.isArray(data) && data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
  } catch (_) {
    // ignore network errors; map will simply not draw the route
  }
  return null;
}

const FitBounds: React.FC<{ points: LatLng[] }> = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    if (points.length === 1) {
      map.setView([points[0].lat, points[0].lng], 8);
      return;
    }
    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [points, map]);
  return null;
};

const InteractiveMap: React.FC<Props> = ({ origin, destination, travelMode, className, height = 400 }) => {
  const [originCoord, setOriginCoord] = useState<LatLng | null>(null);
  const [destCoord, setDestCoord] = useState<LatLng | null>(null);
  const [routeCoords, setRouteCoords] = useState<LatLng[] | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const [o, d] = await Promise.all([geocode(origin), geocode(destination)]);
      if (!active) return;
      setOriginCoord(o);
      setDestCoord(d);
    })();
    return () => {
      active = false;
    };
  }, [origin, destination]);

  const points = useMemo(() => {
    const arr: LatLng[] = [];
    if (originCoord) arr.push(originCoord);
    if (destCoord) arr.push(destCoord);
    return arr;
  }, [originCoord, destCoord]);

  // Fetch driving route polyline for non-flight modes using OSRM public server
  useEffect(() => {
    let cancelled = false;
    async function fetchRoute() {
      if (!originCoord || !destCoord) {
        setRouteCoords(null);
        return;
      }
      if (travelMode === "flight") {
        setRouteCoords(null);
        return;
      }
      try {
        const url = `https://router.project-osrm.org/route/v1/driving/${originCoord.lng},${originCoord.lat};${destCoord.lng},${destCoord.lat}?overview=full&geometries=geojson`;
        const res = await fetch(url);
        const data = await res.json();
        const coords = data?.routes?.[0]?.geometry?.coordinates as Array<[number, number]> | undefined;
        if (!cancelled && Array.isArray(coords)) {
          setRouteCoords(coords.map(([lng, lat]) => ({ lat, lng })));
        }
      } catch (_) {
        if (!cancelled) setRouteCoords(null);
      }
    }
    fetchRoute();
    return () => {
      cancelled = true;
    };
  }, [originCoord, destCoord, travelMode]);

  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={[20.5937, 78.9629]} // India center
        zoom={5}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {originCoord && (
          <Marker position={[originCoord.lat, originCoord.lng]}>
            <Popup>
              <div>
                <div className="font-semibold">Origin</div>
                <div className="text-sm">{origin}</div>
              </div>
            </Popup>
          </Marker>
        )}
        {destCoord && (
          <Marker position={[destCoord.lat, destCoord.lng]}>
            <Popup>
              <div>
                <div className="font-semibold">Destination</div>
                <div className="text-sm">{destination}</div>
              </div>
            </Popup>
          </Marker>
        )}

        {originCoord && destCoord && (
          <Polyline
            positions={
              routeCoords && routeCoords.length > 1
                ? (routeCoords.map((p) => [p.lat, p.lng]) as [number, number][])
                : ([
                    [originCoord.lat, originCoord.lng],
                    [destCoord.lat, destCoord.lng],
                  ] as [number, number][])
            }
            pathOptions={{ color: modeColor[travelMode], weight: 4, opacity: 0.9 }}
          />
        )}

        <FitBounds points={points} />
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;