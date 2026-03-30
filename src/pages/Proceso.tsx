import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from "@/components/ui/scroll-x-carousel";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";

import projectReformas from "@/assets/project-reformas.png";
import projectBarberia from "@/assets/project-barberia.png";
import projectRestaurante from "@/assets/project-restaurante.png";

const steps = [
  {
    num: "01",
    title: "Entendemos tu negocio",
    desc: "Hablamos contigo para conocer a fondo qué haces, a quién te diriges y qué necesitas transmitir. Esta conversación marca la dirección de todo el proyecto.",
    detail: "Reunión inicial · Análisis del sector · Objetivos claros",
  },
  {
    num: "02",
    title: "Definimos la estructura",
    desc: "Organizamos la información de tu web: qué páginas, qué secciones, qué orden. Todo con un enfoque estratégico para que tu cliente encuentre lo que busca sin esfuerzo.",
    detail: "Arquitectura web · Flujo de usuario · Estrategia de contenido",
  },
  {
    num: "03",
    title: "Diseñamos la propuesta visual",
    desc: "Creamos un diseño a medida que refleje tu marca: colores, tipografía, composición. Un resultado visual con criterio, coherente y profesional.",
    detail: "Identidad visual · Paleta y tipografía · Composición",
  },
  {
    num: "04",
    title: "Desarrollamos la web",
    desc: "Construimos cada página con atención al detalle. Navegación fluida, carga rápida, experiencia impecable en móvil y escritorio.",
    detail: "Código limpio · Mobile-first · Rendimiento",
  },
  {
    num: "05",
    title: "Revisamos contigo",
    desc: "Te presentamos el resultado y ajustamos los últimos detalles juntos. Tu opinión importa: no publicamos nada que no te convenza al cien por cien.",
    detail: "Feedback · Ajustes · Aprobación final",
  },
  {
    num: "06",
    title: "Publicamos y entregamos",
    desc: "Dejamos tu web lista, online y funcionando. Nos aseguramos de que todo esté perfecto antes de dar el proyecto por terminado.",
    detail: "Publicación · Verificación · Entrega completa",
  },
  {
    num: "07",
    title: "Mantenimiento continuo",
    desc: "Con el plan anual, tu web se mantiene actualizada, segura y al día. Incluye cambios menores, soporte técnico y gestión del dominio.",
    detail: "Actualizaciones · Soporte · Dominio",
  },
];

const PROJECTS = [
  {
    id: "project-1",
    title: "M&M Reformas Integrales",
    description: "Web corporativa para empresa de reformas integrales en Barcelona. Diseño premium con enfoque en conversión y experiencia móvil.",
    imageUrl: projectReformas,
    href: "https://www.reformascompletas.com/",
  },
  {
    id: "project-2",
    title: "Studio Barbería",
    description: "Web para barbería de alto nivel. Estética oscura, elegante y con atención al detalle visual.",
    imageUrl: projectBarberia,
    href: "#",
  },
  {
    id: "project-3",
    title: "Alma Restaurante",
    description: "Web para restaurante con ambiente íntimo. Diseño cálido, fotografía envolvente y reservas integradas.",
    imageUrl: projectRestaurante,
    href: "#",
  },
];

const Proceso = () => {
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.95]);

  return (
    <>
      {/* Header with parallax */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden"
      >
        <AnimatedBackground variant="warm" />
        {/* Animated grid lines background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-border/30"
              style={{ left: `${(i + 1) * 12.5}%` }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        <div className="container-premium relative">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-xs uppercase text-primary mb-4"
          >
            Proceso
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl"
            >
              Claro, ordenado
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-muted-foreground"
            >
              y sin sorpresas.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Trabajar con nosotros es sencillo. Sabes en todo momento en qué fase está tu proyecto, qué necesitamos de ti y cuándo tendrás el resultado.
          </motion.p>
        </div>
      </motion.section>

      {/* Interactive process — timeline with unique reveal */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          {/* Desktop: side-by-side with animated connector */}
          <div className="hidden md:grid grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
            {/* Left: step selector with animated progress line */}
            <div className="relative">
              {/* Animated vertical progress */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <motion.div
                  className="absolute left-0 top-0 w-full bg-primary"
                  animate={{
                    height: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className="space-y-0">
                {steps.map((step, i) => (
                  <motion.button
                    key={step.num}
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    whileHover={{ x: 6 }}
                    className={`w-full text-left pl-6 pr-4 py-5 -ml-px transition-colors duration-300 group relative ${
                      activeStep === i
                        ? "bg-primary/5"
                        : "hover:bg-secondary/30"
                    }`}
                  >
                    {/* Active indicator dot */}
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary"
                      initial={false}
                      animate={{
                        scale: activeStep === i ? 1 : 0,
                        opacity: activeStep === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    <div className="flex items-center gap-4">
                      <span className={`font-heading text-sm font-bold transition-colors duration-300 ${
                        activeStep === i ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {step.num}
                      </span>
                      <span className={`font-heading text-sm font-medium transition-colors duration-300 ${
                        activeStep === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: step content with unique clip-path reveal */}
            <div className="flex items-start pt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-lg"
                >
                  <motion.span
                    className="font-heading text-6xl lg:text-8xl font-bold text-primary/10 block mb-4"
                    initial={{ opacity: 0, scale: 1.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {steps[activeStep].num}
                  </motion.span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed mb-6">
                    {steps[activeStep].desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {steps[activeStep].detail.split(" · ").map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + tagIdx * 0.1 }}
                        className="px-3 py-1.5 text-xs font-heading tracking-wider uppercase text-primary/80 border border-primary/20 bg-primary/5"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: accordion with horizontal slide */}
          <div className="md:hidden space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="border-b border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <button
                  onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                  className="w-full flex items-center gap-4 py-6 text-left group"
                >
                  <span className={`font-heading text-lg font-bold transition-colors duration-300 ${
                    activeStep === i ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {step.num}
                  </span>
                  <span className={`font-heading text-base font-medium transition-colors duration-300 flex-1 ${
                    activeStep === i ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </span>
                  <motion.div
                    animate={{ rotate: activeStep === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-primary text-xl">+</span>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-10">
                        <p className="text-secondary-foreground leading-relaxed text-sm mb-4">
                          {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.detail.split(" · ").map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[10px] font-heading tracking-wider uppercase text-primary/80 border border-primary/20 bg-primary/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio showcase */}
      <section className="border-t border-border section-padding">
        <div className="container-premium mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Proyectos</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Algunos de nuestros trabajos
            </h2>
          </motion.div>
        </div>

        <ScrollXCarousel className="h-[200vh]">
          <ScrollXCarouselContainer className="h-screen flex flex-col justify-center">
            <ScrollXCarouselWrap
              className="flex gap-8 px-8 md:px-16 [&>*:first-child]:ml-8"
              xRange={["0%", "-60%"]}
            >
              {PROJECTS.map((project) => {
                const hasLink = project.href && project.href !== "#";
                const Wrapper = hasLink ? "a" : "div";
                const wrapperProps = hasLink
                  ? { href: project.href, target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};
                return (
                  <Wrapper
                    key={project.id}
                    {...wrapperProps}
                    className="block flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[50vw]"
                  >
                    <CardHoverReveal className={`rounded-lg h-[50vh] md:h-[60vh] ${hasLink ? "cursor-pointer" : "cursor-default"}`}>
                      <CardHoverRevealMain>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </CardHoverRevealMain>
                      <CardHoverRevealContent className="p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                          {project.description}
                        </p>
                      </CardHoverRevealContent>
                    </CardHoverReveal>
                  </Wrapper>
                );
              })}
            </ScrollXCarouselWrap>
            <div className="container-premium mt-8">
              <ScrollXCarouselProgress />
            </div>
          </ScrollXCarouselContainer>
        </ScrollXCarousel>
      </section>

      {/* CTA */}
      <section className="border-t border-border section-padding">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              ¿Te parece buen plan?
            </h2>
            <p className="mt-4 text-secondary-foreground max-w-md mx-auto">
              Hablemos de tu proyecto. Te explicamos todo con detalle y sin compromiso.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="btn-primary-premium">Solicitar proyecto</Link>
              <Link to="/inversion" className="btn-secondary-premium">Ver inversión</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Proceso;
