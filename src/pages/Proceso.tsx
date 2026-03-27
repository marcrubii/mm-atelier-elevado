import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

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

const Proceso = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-premium">
          <AnimatedSection>
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Proceso</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl">
              Claro, ordenado
              <br />
              <span className="text-muted-foreground">y sin sorpresas.</span>
            </h1>
            <p className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Trabajar con nosotros es sencillo. Sabes en todo momento en qué fase está tu proyecto, qué necesitamos de ti y cuándo tendrás el resultado.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive process — tabbed/interactive layout */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <AnimatedSection>
            {/* Desktop: side-by-side interactive layout */}
            <div className="hidden md:grid grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
              {/* Left: step selector */}
              <div className="space-y-0 border-l border-border">
                {steps.map((step, i) => (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(i)}
                    className={`w-full text-left pl-6 pr-4 py-5 border-l-2 -ml-px transition-all duration-400 group ${
                      activeStep === i
                        ? "border-l-primary bg-primary/5"
                        : "border-l-transparent hover:border-l-border hover:bg-secondary/30"
                    }`}
                  >
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
                  </button>
                ))}
              </div>

              {/* Right: step content */}
              <div className="flex items-start pt-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-lg"
                  >
                    <span className="font-heading text-6xl lg:text-8xl font-bold text-primary/10 block mb-4">
                      {steps[activeStep].num}
                    </span>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-secondary-foreground leading-relaxed mb-6">
                      {steps[activeStep].desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {steps[activeStep].detail.split(" · ").map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-heading tracking-wider uppercase text-primary/80 border border-primary/20 bg-primary/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile: accordion-style */}
            <div className="md:hidden space-y-0">
              {steps.map((step, i) => (
                <div key={step.num} className="border-b border-border">
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
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photography note */}
      <section className="border-t border-border section-padding">
        <div className="container-premium">
          <AnimatedSection className="max-w-2xl">
            <div className="line-accent mb-6" />
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-4">
              ¿No tienes imágenes? No es un problema.
            </h3>
            <p className="text-secondary-foreground leading-relaxed">
              Cuando el proyecto lo necesita y el negocio no dispone de imágenes adecuadas, también podemos encargarnos de ese apoyo visual. Nos desplazamos, hacemos las fotografías y las integramos directamente en tu web.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border section-padding">
        <div className="container-premium text-center">
          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Proceso;
