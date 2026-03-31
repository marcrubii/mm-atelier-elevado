import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Check, Camera, Sparkles } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Diseño visual a medida",
    text: "Nada de plantillas ni soluciones genéricas. Diseñamos cada elemento pensando en tu marca, tu sector y tu cliente. El resultado es una web que no se parece a ninguna otra porque está hecha exclusivamente para ti.",
    items: ["Identidad visual coherente", "Tipografía y paleta propias", "Composición con criterio"],
    accent: "from-[hsl(24_90%_50%/0.2)] to-[hsl(28_80%_45%/0.05)]",
  },
  {
    num: "02",
    title: "Estructura clara y estratégica",
    text: "Organizamos la información para que tu cliente encuentre lo que busca sin esfuerzo. Cada sección tiene un propósito, cada página está pensada para comunicar y convertir.",
    items: ["Arquitectura de contenido", "Jerarquía visual definida", "Orientada a conversión"],
    accent: "from-[hsl(28_95%_55%/0.2)] to-[hsl(24_70%_40%/0.05)]",
  },
  {
    num: "03",
    title: "Experiencia mobile-first",
    text: "Tu web se verá y funcionará impecablemente en el móvil, que es donde la mayoría de tus clientes te encontrarán. Sin compromisos en calidad ni en velocidad.",
    items: ["Responsive impecable", "Carga rápida", "Navegación intuitiva"],
    accent: "from-[hsl(20_85%_50%/0.2)] to-[hsl(24_60%_35%/0.05)]",
  },
  {
    num: "04",
    title: "Enfoque profesional completo",
    text: "Nos encargamos de todo: desde la estrategia inicial hasta la publicación. Tú solo tienes que contarnos qué hace tu negocio. Nosotros hacemos el resto.",
    items: ["Acompañamiento integral", "Proceso transparente", "Entrega llave en mano"],
    accent: "from-[hsl(30_80%_50%/0.2)] to-[hsl(24_70%_40%/0.05)]",
  },
];

const Servicios = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-8 md:pb-10 relative overflow-hidden">
        <AnimatedBackground variant="warm" />

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
            Servicios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl"
          >
            Diseño web con criterio.
            <br />
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground inline-block"
            >
              Sin atajos.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Creamos webs que hacen que tu negocio se vea exactamente como es: profesional, fiable y actual. Cada proyecto es único porque cada negocio lo es.
          </motion.p>
        </div>
      </section>

      {/* Horizontal scroll carousel */}
      <section ref={carouselRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <AnimatedBackground variant="intense" />

          {/* Progress bar */}
          <div className="container-premium mb-8 relative z-10">
            <div className="max-w-xs h-px bg-border relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-[hsl(28_95%_60%)] origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </div>

          <motion.div
            className="flex gap-6 md:gap-8 pl-6 md:pl-16 w-fit relative z-10"
            style={{ x }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] border border-border/60 bg-card/60 backdrop-blur-sm p-8 md:p-12 flex flex-col group hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-[80px] transition-all duration-700 pointer-events-none" />

                <span className="relative font-heading text-5xl md:text-6xl font-bold text-primary/15 group-hover:text-primary/50 transition-colors duration-500 mb-6">
                  {service.num}
                </span>
                <div className="relative h-px w-12 bg-gradient-to-r from-primary/40 to-transparent group-hover:from-primary group-hover:w-20 transition-all duration-500 mb-6" />
                <h3 className="relative font-heading text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-secondary-foreground leading-relaxed text-sm mb-8 flex-1">
                  {service.text}
                </p>
                <ul className="relative space-y-3 mt-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photography note — Material visual */}
      <section className="section-divider section-padding relative overflow-hidden">
        <AnimatedBackground variant="cool" />

        {/* Decorative floating elements — CSS only */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-primary/5 rounded-full pointer-events-none animate-[spin_45s_linear_infinite_reverse]" />

        <div className="container-premium relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
              >
                <Camera className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>
              <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Material visual</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Si no tienes imágenes, nosotros nos encargamos
              </h3>
              <p className="text-secondary-foreground leading-relaxed">
                Si tu negocio no dispone de fotografías profesionales, también podemos ayudarte con el material visual necesario para que la web esté a la altura. Nos desplazamos y nos ocupamos de todo.
              </p>

              {/* Decorative sparkles */}
              <motion.div
                className="flex items-center justify-center gap-3 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <Sparkles className="w-4 h-4 text-primary/50" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-divider section-padding relative overflow-hidden">
        <AnimatedBackground variant="warm" />
        <div className="container-premium text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              ¿Empezamos?
            </h2>
            <p className="mt-4 text-secondary-foreground max-w-md mx-auto">
              Cuéntanos qué necesitas. Te explicamos cómo podemos ayudarte, sin compromiso.
            </p>
            <div className="mt-8">
              <Link to="/contacto" className="btn-primary-premium">Solicitar proyecto</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Servicios;
