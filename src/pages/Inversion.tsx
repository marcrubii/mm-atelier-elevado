import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Check, Plus, Minus, Camera } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto suele tardar una web?",
    a: "Depende de la complejidad del proyecto, pero la mayoría de las webs se completan en un plazo máximo de 5 días laborables. Te damos una estimación concreta tras la primera conversación.",
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
    q: "¿Qué incluye el mantenimiento mensual?",
    a: "Mantenimiento técnico, cambios menores de contenido, gestión del dominio y soporte continuo para cualquier duda o necesidad.",
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
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <AnimatedBackground variant="cool" />
        <div className="container-premium relative z-10">
          <AnimatedSection>
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-4">Inversión</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl">
              Transparencia total.
              <br />
              <span className="text-muted-foreground">Sin sorpresas.</span>
            </h1>
            <p className="mt-6 text-secondary-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Un modelo sencillo: un pago por tu web, un pago anual para mantenerla al día.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan 1: Web personalizada */}
            <AnimatedSection delay={0.1}>
              <div className="border border-border p-10 md:p-14 h-full flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                <div className="line-accent mb-6" />
                <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-2">Web personalizada</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">125€</span>
                  <span className="text-muted-foreground text-sm">/ desde</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Pago único por el diseño y desarrollo completo de tu web.</p>
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
                <div className="mt-8">
                  <Link to="/contacto" className="btn-primary-premium w-full text-center block">Solicitar presupuesto</Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Plan 2: Web + Mantenimiento */}
            <AnimatedSection delay={0.2}>
              <div className="border border-primary/30 p-10 md:p-14 h-full flex flex-col relative overflow-hidden group">
                {/* Recommended badge */}
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground font-heading text-[10px] tracking-widest uppercase px-4 py-1.5 font-semibold">
                    Recomendado
                  </div>
                </div>
                <div className="line-accent mb-6" />
                <p className="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-2">Web + Mantenimiento</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">150€</span>
                  <span className="text-muted-foreground text-sm">/ desde</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Diseño, desarrollo y 3 meses de mantenimiento incluido.</p>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-8">
                  Todo lo del plan anterior, más 3 meses de mantenimiento técnico, cambios menores de contenido, gestión del dominio y soporte continuo.
                </p>
                <ul className="space-y-3 mt-auto">
                  {[
                    "Todo lo incluido en Web personalizada",
                    "3 meses de mantenimiento técnico",
                    "Cambios menores de contenido",
                    "Gestión y renovación del dominio",
                    "Soporte por email",
                    "Seguridad y rendimiento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/contacto" className="btn-primary-premium w-full text-center block">Solicitar presupuesto</Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Photography extra */}
          <AnimatedSection delay={0.3} className="mt-8 max-w-5xl mx-auto">
            <div className="border border-border hover:border-primary/20 transition-colors duration-500 p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Camera className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-heading text-base font-semibold text-foreground">Fotografías profesionales</h4>
                    <span className="font-heading text-xs tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5">Opcional</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si tu negocio no dispone de imágenes, nos desplazamos y hacemos las fotografías necesarias.
                  </p>
                </div>
              </div>
              <span className="font-heading text-2xl font-bold text-foreground flex-shrink-0">+50€</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              ¿Quieres saber la inversión concreta para tu proyecto? Cuéntanos qué necesitas y te damos un presupuesto detallado.
            </p>
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
