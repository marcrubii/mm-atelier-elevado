import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Send } from "lucide-react";
import MapLibreGL from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const BarcelonaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreGL.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new MapLibreGL.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [2.1734, 41.3851],
      zoom: 11,
      attributionControl: false,
      interactive: true,
    });

    mapRef.current = map;

    map.on("load", () => {
      new MapLibreGL.Marker({
        color: "hsl(24, 85%, 55%)",
      })
        .setLngLat([2.1734, 41.3851])
        .addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[200px] rounded-sm opacity-70"
    />
  );
};

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-premium">
          <AnimatedSection>
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Contacto</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl">
              El primer paso es
              <br />
              <span className="text-gradient-orange">una conversación.</span>
            </h1>
            <p className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Cuéntanos qué necesitas. Sin compromiso, sin formularios interminables. Te respondemos rápido y te explicamos cómo podemos ayudarte.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <AnimatedSection>
              {sent ? (
                <div className="border border-primary/30 bg-primary/5 p-10 md:p-14">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Mensaje recibido</h3>
                  <p className="text-secondary-foreground">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-heading text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre o el de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Cuéntanos
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="¿Qué tipo de negocio tienes? ¿Qué necesitas?"
                    />
                  </div>
                  <button type="submit" className="btn-primary-premium inline-flex items-center gap-2">
                    Enviar mensaje <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-10">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground">Email</span>
                  </div>
                  <a
                    href="mailto:mm.simplificagestion@gmail.com"
                    className="text-foreground hover:text-primary transition-colors duration-300 text-sm break-all"
                  >
                    mm.simplificagestion@gmail.com
                  </a>
                </div>


                {/* Location */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground">Ubicación</span>
                  </div>
                  <p className="text-secondary-foreground text-sm">Barcelona, España</p>
                </div>

                {/* Map — subtle MapLibre dark map */}
                <div className="mt-8 border border-border overflow-hidden rounded-sm">
                  <BarcelonaMap />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
