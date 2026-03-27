import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto suele tardar una web?",
    a: "Depende de la complejidad del proyecto, pero la mayoría de las webs se completan en un plazo de 3 a 6 semanas. Te damos una estimación concreta tras la primera conversación.",
  },
  {
    q: "¿Puedo pedir cambios durante el proceso?",
    a: "Por supuesto. El proceso incluye fases de revisión donde puedes proponer ajustes. Trabajamos contigo hasta que el resultado te convenza por completo.",
  },
  {
    q: "¿La web se verá bien en móvil?",
    a: "Sí. Todas nuestras webs se diseñan con un enfoque mobile-first. La experiencia en smartphone es igual de cuidada que en escritorio.",
  },
  {
    q: "¿Qué incluye el mantenimiento anual?",
    a: "Mantenimiento técnico, actualizaciones de seguridad, cambios menores de contenido, gestión del dominio y soporte continuo para cualquier duda o necesidad.",
  },
  {
    q: "¿Y si todavía no tengo imágenes?",
    a: "No te preocupes. Si tu negocio no dispone de material visual adecuado, podemos desplazarnos y hacer las fotografías necesarias para que la web quede a la altura.",
  },
  {
    q: "¿Necesito tenerlo todo preparado para empezar?",
    a: "No. Solo necesitamos una conversación para entender tu negocio. Nosotros nos encargamos de guiarte en el proceso y de pedirte solo lo imprescindible, cuando sea necesario.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-heading text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 pr-8">
          {q}
        </span>
        {open ? (
          <Minus className="w-4 h-4 text-primary flex-shrink-0" />
        ) : (
          <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-secondary-foreground text-sm leading-relaxed max-w-2xl">{a}</p>
      </div>
    </div>
  );
};

const Inversion = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-premium">
          <AnimatedSection>
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Inversión</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl">
              Un modelo claro.
              <br />
              <span className="text-muted-foreground">Sin sorpresas.</span>
            </h1>
            <p className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Trabajamos con un sistema sencillo y transparente: un pago por el diseño y desarrollo de tu web, y un pago anual para mantenerla al día.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing blocks */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Design & Dev */}
            <AnimatedSection delay={0.1}>
              <div className="border border-border p-10 md:p-14 h-full flex flex-col">
                <div className="line-accent mb-6" />
                <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-2">Diseño y desarrollo</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Pago único</h3>
                <p className="text-sm text-muted-foreground mb-8">Inversión inicial por la creación completa de tu web.</p>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-8">
                  Incluye reunión inicial, diseño a medida, desarrollo profesional, optimización para móvil, revisiones y publicación. Todo lo que necesitas para tener una web de nivel.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "Diseño visual personalizado",
                    "Desarrollo completo y responsive",
                    "Estructura y contenido optimizados",
                    "Revisiones hasta tu aprobación",
                    "Publicación y puesta en marcha",
                    "Formación básica si es necesario",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Maintenance */}
            <AnimatedSection delay={0.2}>
              <div className="border border-border p-10 md:p-14 h-full flex flex-col">
                <div className="line-accent mb-6" />
                <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-2">Mantenimiento</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Pago anual</h3>
                <p className="text-sm text-muted-foreground mb-8">Para que tu web siga funcionando perfectamente.</p>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-8">
                  Tu web necesita atención continua: actualizaciones técnicas, cambios de contenido, gestión del dominio y soporte ante cualquier duda o necesidad.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "Mantenimiento técnico y seguridad",
                    "Actualizaciones periódicas",
                    "Cambios menores de contenido",
                    "Gestión y renovación del dominio",
                    "Soporte por email",
                    "Rendimiento y optimización",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              ¿Quieres saber la inversión concreta para tu proyecto? Cuéntanos qué necesitas y te damos un presupuesto detallado.
            </p>
            <div className="mt-6">
              <Link to="/contacto" className="btn-primary-premium">Solicitar presupuesto</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border section-padding">
        <div className="container-premium max-w-3xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Preguntas frecuentes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Resolvemos tus dudas
            </h2>
          </AnimatedSection>

          <div>
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border section-padding">
        <div className="container-premium text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="mt-4 text-secondary-foreground max-w-md mx-auto">
              Sin compromiso, sin presión. Cuéntanos qué necesitas y te asesoramos.
            </p>
            <div className="mt-8">
              <Link to="/contacto" className="btn-primary-premium">Contactar</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Inversion;
