import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Check } from "lucide-react";

const Servicios = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-premium">
          <AnimatedSection>
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Servicios</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl">
              Diseño web con criterio.
              <br />
              <span className="text-muted-foreground">Sin atajos.</span>
            </h1>
            <p className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Creamos webs que hacen que tu negocio se vea exactamente como es: profesional, fiable y actual. Cada proyecto es único porque cada negocio lo es.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service detail — alternating layout */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium space-y-20 md:space-y-32">
          {[
            {
              title: "Diseño visual a medida",
              text: "Nada de plantillas ni soluciones genéricas. Diseñamos cada elemento pensando en tu marca, tu sector y tu cliente. El resultado es una web que no se parece a ninguna otra porque está hecha exclusivamente para ti.",
              items: ["Identidad visual coherente", "Tipografía y paleta propias", "Composición con criterio"],
            },
            {
              title: "Estructura clara y estratégica",
              text: "Organizamos la información para que tu cliente encuentre lo que busca sin esfuerzo. Cada sección tiene un propósito, cada página está pensada para comunicar y convertir.",
              items: ["Arquitectura de contenido", "Jerarquía visual definida", "Orientada a conversión"],
            },
            {
              title: "Experiencia mobile-first",
              text: "Tu web se verá y funcionará impecablemente en el móvil, que es donde la mayoría de tus clientes te encontrarán. Sin compromisos en calidad ni en velocidad.",
              items: ["Responsive impecable", "Carga rápida", "Navegación intuitiva"],
            },
            {
              title: "Enfoque profesional completo",
              text: "Nos encargamos de todo: desde la estrategia inicial hasta la publicación. Tú solo tienes que contarnos qué hace tu negocio. Nosotros hacemos el resto.",
              items: ["Acompañamiento integral", "Proceso transparente", "Entrega llave en mano"],
            },
          ].map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="line-accent mb-6" />
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed">{service.text}</p>
                  <ul className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-64 md:h-80 bg-secondary rounded-sm border border-border flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">0{i + 1}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Photography note */}
      <section className="border-t border-border section-padding">
        <div className="container-premium">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Material visual</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Si no tienes imágenes, nosotros nos encargamos
              </h3>
              <p className="text-secondary-foreground leading-relaxed">
                Si tu negocio no dispone de fotografías profesionales, también podemos ayudarte con el material visual necesario para que la web esté a la altura. Nos desplazamos y nos ocupamos de todo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing / Investment */}
      <section className="border-t border-border section-padding">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-16">
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Inversión</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Transparencia total
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Un modelo sencillo: un pago por tu web, un pago anual para mantenerla al día.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto">
            <AnimatedSection delay={0.1} className="bg-background p-10 md:p-14">
              <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-6">Diseño y desarrollo</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Pago único</h3>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-8">
                Incluye todo el proceso: reunión inicial, diseño a medida, desarrollo, revisiones y publicación de tu web.
              </p>
              <ul className="space-y-3">
                {["Diseño personalizado", "Desarrollo completo", "Responsive mobile-first", "Revisiones incluidas", "Publicación y puesta en marcha"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="bg-background p-10 md:p-14">
              <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-6">Mantenimiento</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Pago anual</h3>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-8">
                Tu web siempre al día. Incluye mantenimiento técnico, cambios menores y gestión del dominio.
              </p>
              <ul className="space-y-3">
                {["Mantenimiento técnico", "Cambios y actualizaciones", "Gestión del dominio", "Soporte continuo", "Seguridad y rendimiento"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link to="/inversion" className="inline-flex items-center gap-2 text-sm text-primary font-heading tracking-wide hover:gap-3 transition-all duration-300">
              Ver detalles de inversión <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border section-padding">
        <div className="container-premium text-center">
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
