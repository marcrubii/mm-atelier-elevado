import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Entendemos tu negocio",
    desc: "Hablamos contigo para conocer a fondo qué haces, a quién te diriges y qué necesitas transmitir. Esta conversación marca la dirección de todo el proyecto.",
  },
  {
    num: "02",
    title: "Definimos la estructura",
    desc: "Organizamos la información de tu web: qué páginas, qué secciones, qué orden. Todo con un enfoque estratégico para que tu cliente encuentre lo que busca sin esfuerzo.",
  },
  {
    num: "03",
    title: "Diseñamos la propuesta visual",
    desc: "Creamos un diseño a medida que refleje tu marca: colores, tipografía, composición. Un resultado visual con criterio, coherente y profesional.",
  },
  {
    num: "04",
    title: "Desarrollamos la web",
    desc: "Construimos cada página con atención al detalle. Navegación fluida, carga rápida, experiencia impecable en móvil y escritorio.",
  },
  {
    num: "05",
    title: "Revisamos contigo",
    desc: "Te presentamos el resultado y ajustamos los últimos detalles juntos. Tu opinión importa: no publicamos nada que no te convenza al cien por cien.",
  },
  {
    num: "06",
    title: "Publicamos y entregamos",
    desc: "Dejamos tu web lista, online y funcionando. Nos aseguramos de que todo esté perfecto antes de dar el proyecto por terminado.",
  },
  {
    num: "07",
    title: "Mantenimiento continuo",
    desc: "Con el plan anual, tu web se mantiene actualizada, segura y al día. Incluye cambios menores, soporte técnico y gestión del dominio.",
  },
];

const Proceso = () => {
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

      {/* Process steps — editorial layout */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden md:block" />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "up"}>
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-12 py-12 md:py-16 border-b border-border last:border-b-0 group">
                    {/* Number */}
                    <div className="relative flex items-start">
                      <span className="font-heading text-3xl md:text-4xl font-bold text-primary/20 group-hover:text-primary/60 transition-colors duration-500">
                        {step.num}
                      </span>
                      {/* Dot on timeline */}
                      <div className="hidden md:block absolute left-8 top-3 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-500 -translate-x-1/2" />
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
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
