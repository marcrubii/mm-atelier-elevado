import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedBackground from "@/components/AnimatedBackground";
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
              Diseñamos webs personalizadas, modernas y funcionales. Un proceso claro, una ejecución profesional y un resultado que refleja quién eres de verdad.
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
          <div
            className="w-px h-6 bg-gradient-to-b from-primary/60 to-transparent animate-bounce"
            style={{ animationDuration: '1.5s' }}
          />
        </motion.div>
      </section>

      {/* Problem / Value section */}
      <section className="section-padding section-divider relative overflow-hidden">
        <AnimatedBackground variant="warm" />

        <div className="container-premium relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-primary mb-6"
              />
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-foreground">
                Tu negocio funciona.
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-muted-foreground inline-block"
                >
                  Tu web, todavía no.
                </motion.span>
              </h2>
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.2}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-secondary-foreground leading-relaxed text-base md:text-lg"
                >
                  Muchos negocios ofrecen un servicio excelente, pero su presencia online no lo refleja. Una web anticuada, poco profesional o directamente inexistente hace que pierdas credibilidad frente a clientes que ya te están buscando.
                </motion.p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6 text-secondary-foreground leading-relaxed text-base md:text-lg"
                >
                  En M&M Studio creamos webs a medida que transmiten exactamente lo que tu negocio es: serio, profesional y de confianza. Con un diseño actual, una estructura pensada y una experiencia impecable en cualquier dispositivo.
                </motion.p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility pillars — "Lo que nos define" */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedBackground variant="intense" />

        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container-premium relative z-10">
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-xs uppercase text-primary mb-4"
            >
              Por qué M&M Studio
            </motion.p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Lo que nos define
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {[
              { icon: Palette, title: "Diseño a medida", desc: "Cada web se diseña desde cero para tu negocio. Sin plantillas, sin soluciones genéricas." },
              { icon: Monitor, title: "Imagen profesional", desc: "Un resultado visual que transmite seriedad, criterio y confianza desde el primer segundo." },
              { icon: Smartphone, title: "Pensada para móvil", desc: "Experiencia impecable en smartphone, que es donde tu cliente te encuentra primero." },
              { icon: MessageSquare, title: "Trato directo", desc: "Comunicación clara, sin intermediarios. Sabes en todo momento en qué punto está tu proyecto." },
              { icon: ShieldCheck, title: "Acompañamiento real", desc: "No termina con la entrega. Mantenimiento, cambios y soporte para que tu web siga al día." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group p-8 md:p-10 flex flex-col rounded-sm border border-border/60 bg-card/80 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(24_90%_50%/0.15)]"
              >
                {/* Gradient top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-500" />

                <motion.div
                  whileHover={{ scale: 1.3, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="section-padding section-divider relative overflow-hidden">
        <AnimatedBackground variant="cool" />
        <div className="container-premium text-center relative z-10">
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
