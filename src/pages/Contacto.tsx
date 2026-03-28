import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
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
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.mensaje.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.mymstudio.net/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
          website: formData.website,
        }),
      });
      if (!res.ok) throw new Error("API error");
      setStatus("sent");
      setFormData({ nombre: "", email: "", mensaje: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        {/* Ambient glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--orange-subtle))] blur-[140px] pointer-events-none"
        />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent mb-10 max-w-md"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Contacto
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl"
          >
            El primer paso es
            <br />
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gradient-orange inline-block"
            >
              una conversación.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Cuéntanos qué necesitas. Sin compromiso, sin formularios interminables. Te respondemos rápido y te explicamos cómo podemos ayudarte.
          </motion.p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border border-primary/30 bg-primary/5 p-10 md:p-14"
                >
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Mensaje recibido</h3>
                  <p className="text-secondary-foreground">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: "Nombre", type: "text", name: "nombre" as const, placeholder: "Tu nombre o el de tu empresa" },
                    { label: "Email", type: "email", name: "email" as const, placeholder: "tu@email.com" },
                  ].map((field, i) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <label className="block font-heading text-xs tracking-widest uppercase text-muted-foreground mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
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
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="btn-primary-premium inline-flex items-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Enviar mensaje <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-10">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
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
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground">Ubicación</span>
                  </div>
                  <p className="text-secondary-foreground text-sm">Barcelona, España</p>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 border border-border overflow-hidden rounded-sm"
                >
                  <BarcelonaMap />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
