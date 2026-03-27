import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-abstract.jpg";
import { Monitor, Smartphone, MessageSquare, Palette, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Diseño web premium"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        </div>

        <div className="container-premium relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-primary mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-6"
            >
              Estudio de diseño web · Barcelona
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Tu negocio merece
              <br />
              <span className="text-gradient-orange">una web a su altura.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 md:mt-8 text-base md:text-lg text-secondary-foreground leading-relaxed max-w-xl"
            >
              Diseñamos webs personalizadas, modernas y pensadas para móvil. Un proceso claro, una ejecución profesional y un resultado que refleja quién eres de verdad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contacto" className="btn-primary-premium text-center">
                Solicitar proyecto
              </Link>
              <Link to="/proceso" className="btn-secondary-premium text-center">
                Conocer el proceso
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-6 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Problem / Value section */}
      <section className="section-padding border-t border-border">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="line-accent mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-foreground">
                Tu negocio funciona.
                <br />
                <span className="text-muted-foreground">Tu web, todavía no.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-secondary-foreground leading-relaxed text-base md:text-lg">
                Muchos negocios ofrecen un servicio excelente, pero su presencia online no lo refleja. Una web anticuada, poco profesional o directamente inexistente hace que pierdas credibilidad frente a clientes que ya te están buscando.
              </p>
              <p className="mt-6 text-secondary-foreground leading-relaxed text-base md:text-lg">
                En M&M creamos webs a medida que transmiten exactamente lo que tu negocio es: serio, profesional y de confianza. Con un diseño actual, una estructura pensada y una experiencia impecable en cualquier dispositivo.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credibility pillars */}
      <section className="section-padding">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Por qué M&M</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Lo que nos define
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {[
              { icon: Palette, title: "Diseño a medida", desc: "Cada web se diseña desde cero para tu negocio. Sin plantillas, sin soluciones genéricas." },
              { icon: Monitor, title: "Imagen profesional", desc: "Un resultado visual que transmite seriedad, criterio y confianza desde el primer segundo." },
              { icon: Smartphone, title: "Pensada para móvil", desc: "Experiencia impecable en smartphone, que es donde tu cliente te encuentra primero." },
              { icon: MessageSquare, title: "Trato directo", desc: "Comunicación clara, sin intermediarios. Sabes en todo momento en qué punto está tu proyecto." },
              { icon: ShieldCheck, title: "Acompañamiento real", desc: "No termina con la entrega. Mantenimiento, cambios y soporte anual para que tu web siga al día." },
            ].map((item, i) => (
              <AnimatedSection
                key={item.title}
                delay={i * 0.1}
                className="bg-background p-8 md:p-10 flex flex-col"
              >
                <item.icon className="w-5 h-5 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="section-padding border-t border-border">
        <div className="container-premium text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              ¿Listo para tener la web
              <br />
              <span className="text-gradient-orange">que tu negocio merece?</span>
            </h2>
            <p className="mt-6 text-secondary-foreground max-w-lg mx-auto">
              Cuéntanos qué necesitas. Sin compromiso, sin letra pequeña.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="btn-primary-premium">Solicitar proyecto</Link>
              <Link to="/servicios" className="btn-secondary-premium">Ver servicios</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
