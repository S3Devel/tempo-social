
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Map, Navigation, Users, Play, Pause } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type Runner = {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  avatar?: string;
};

// Sample dummy data for other runners (in a real app, this would come from a backend)
const dummyRunners: Runner[] = [
  { id: '1', latitude: -23.5505, longitude: -46.6333, name: 'Carlos Silva' },
  { id: '2', latitude: -23.5605, longitude: -46.6433, name: 'Maria Santos' },
  { id: '3', latitude: -23.5545, longitude: -46.6393, name: 'João Oliveira' },
  { id: '4', latitude: -23.5585, longitude: -46.6253, name: 'Ana Souza' },
];

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<[number, number] | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const pathRef = useRef<GeoJSON.Feature<GeoJSON.LineString> | null>(null);
  const otherRunnerMarkersRef = useRef<{[key: string]: mapboxgl.Marker}>({});
  const routeCoordinates = useRef<Array<[number, number]>>([]);
  const { toast } = useToast();

  // Function to initialize the map once we have an API key
  useEffect(() => {
    if (!apiKey || !mapContainer.current) return;

    mapboxgl.accessToken = apiKey;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-46.6333, -23.5505], // Default center (São Paulo)
        zoom: 13,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Initialize the map
      map.current.on('load', () => {
        // Add a source for the route path
        map.current?.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [],
            },
          },
        });

        // Add a layer for the route path
        map.current?.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#2E86C1',
            'line-width': 6,
          },
        });

        // Initialize path feature
        pathRef.current = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [],
          },
        };

        // Get current location and center map
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            setCurrentPosition([longitude, latitude]);
            
            // Center map on user's location
            map.current?.flyTo({
              center: [longitude, latitude],
              essential: true,
              zoom: 15,
            });

            // Add user marker
            addUserMarker([longitude, latitude]);

            // Add other runners
            addOtherRunners();

            toast({
              title: "Localização obtida",
              description: "Mapa centralizado na sua localização atual",
            });
          },
          (error) => {
            console.error('Error getting location:', error);
            toast({
              variant: "destructive",
              title: "Erro de localização",
              description: "Não foi possível obter sua localização. Verifique as permissões do navegador.",
            });
          }
        );
      });

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
      toast({
        variant: "destructive",
        title: "Erro ao inicializar mapa",
        description: "Verifique se a chave de API do Mapbox está correta.",
      });
    }
  }, [apiKey, toast]);

  // Function to add the user marker
  const addUserMarker = (position: [number, number]) => {
    if (!map.current) return;

    // Create a DOM element for the marker
    const el = document.createElement('div');
    el.className = 'user-marker';
    el.style.width = '20px';
    el.style.height = '20px';
    el.style.borderRadius = '50%';
    el.style.backgroundColor = '#2E86C1';
    el.style.border = '3px solid white';
    el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

    // Remove existing marker if there is one
    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    // Add marker to the map
    userMarkerRef.current = new mapboxgl.Marker(el)
      .setLngLat(position)
      .addTo(map.current);
  };

  // Function to add other runners to the map
  const addOtherRunners = () => {
    if (!map.current) return;

    // Add markers for other runners
    dummyRunners.forEach(runner => {
      // Create a DOM element for the marker
      const el = document.createElement('div');
      el.className = 'runner-marker';
      el.style.width = '16px';
      el.style.height = '16px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#28B463';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.3)';

      // Add marker to the map
      const marker = new mapboxgl.Marker(el)
        .setLngLat([runner.longitude, runner.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="text-align: center;">
            <div style="font-weight: bold;">${runner.name}</div>
            <div style="font-size: 12px; color: #666;">Correndo agora</div>
          </div>`
        ))
        .addTo(map.current);

      otherRunnerMarkersRef.current[runner.id] = marker;
    });
  };

  // Function to update the route path
  const updatePath = (newCoord: [number, number]) => {
    if (!map.current || !pathRef.current) return;

    routeCoordinates.current.push(newCoord);
    
    if (pathRef.current.geometry.coordinates) {
      pathRef.current.geometry.coordinates = routeCoordinates.current;
    }

    // Update the route source with typecasting to handle the setData method
    const source = map.current.getSource('route') as mapboxgl.GeoJSONSource;
    if (source) {
      source.setData(pathRef.current);
    }
  };

  // Function to track user's location
  const startTracking = () => {
    if (!map.current) return;

    setIsTracking(true);
    routeCoordinates.current = currentPosition ? [currentPosition] : [];
    
    toast({
      title: "Corrida iniciada",
      description: "Seu percurso está sendo rastreado em tempo real",
    });
    
    // Start watching position
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        const newPosition: [number, number] = [longitude, latitude];
        
        setCurrentPosition(newPosition);
        
        // Update user marker position
        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(newPosition);
        }
        
        // Update path
        updatePath(newPosition);
        
        // Center map on user (follow mode)
        map.current?.panTo(newPosition);
      },
      (error) => {
        console.error('Error tracking location:', error);
        toast({
          variant: "destructive",
          title: "Erro de rastreamento",
          description: "Não foi possível rastrear sua localização. Verifique as permissões do navegador.",
        });
        setIsTracking(false);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
    
    // Save watch ID for cleanup
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  };

  // Function to stop tracking
  const stopTracking = () => {
    setIsTracking(false);
    toast({
      title: "Corrida pausada",
      description: "Seu rastreamento foi pausado",
    });
  };

  // Toggle tracking
  const toggleTracking = () => {
    if (isTracking) {
      stopTracking();
    } else {
      startTracking();
    }
  };

  // Handle API key submission
  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKeyInput.trim()) {
      setApiKey(apiKeyInput.trim());
    }
  };

  if (!apiKey) {
    return (
      <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card p-6">
        <h2 className="text-xl font-bold mb-4">Configuração do Mapa</h2>
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          Para utilizar o mapa, você precisa fornecer uma chave de API do Mapbox. 
          Visite <a href="https://mapbox.com/" className="text-pace-blue underline" target="_blank" rel="noopener noreferrer">mapbox.com</a> e 
          obtenha sua chave pública na seção Tokens do dashboard.
        </p>
        <form onSubmit={handleApiKeySubmit} className="space-y-4">
          <div>
            <label htmlFor="api-key" className="block text-sm font-medium mb-1">
              Chave de API do Mapbox
            </label>
            <input
              id="api-key"
              type="text"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-md"
              placeholder="pk.eyJ1Ijoi..."
            />
          </div>
          <Button type="submit" className="w-full">Confirmar</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full bg-white dark:bg-slate-950 rounded-2xl shadow-card overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button 
          onClick={toggleTracking}
          size="lg" 
          className={isTracking ? "bg-red-500 hover:bg-red-600" : "bg-pace-blue hover:bg-pace-blue/90"}
        >
          {isTracking ? (
            <>
              <Pause className="mr-2 h-5 w-5" /> Pausar
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" /> Iniciar
            </>
          )}
        </Button>
      </div>
      <div className="absolute top-4 left-4 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center space-x-2">
        <Users size={20} className="text-pace-green" />
        <span className="text-sm font-medium">{dummyRunners.length} corredores próximos</span>
      </div>
    </div>
  );
};

export default MapComponent;
