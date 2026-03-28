import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/servicios", label: "Servicios" },
  { path: "/proceso", label: "Proceso" },
  { path: "/inversion", label: "Inversión" },
  { path: "/contacto", label: "Contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-premium flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300">
            M&M <span className="font-light text-base md:text-lg text-muted-foreground">Studio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-heading text-[13px] tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menú"
          >
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="container-premium py-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-3 font-heading text-sm tracking-widest uppercase transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container-premium py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground">M&M <span className="font-light text-base text-muted-foreground">Studio</span></span>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
                Diseño web con criterio para negocios que quieren proyectar la profesionalidad que ya tienen.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-xs tracking-widest uppercase text-muted-foreground mb-4">Navegación</h4>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-secondary-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xs tracking-widest uppercase text-muted-foreground mb-4">Contacto</h4>
              <a
                href="mailto:mm.simplificagestion@gmail.com"
                className="text-sm text-secondary-foreground hover:text-primary transition-colors duration-300 break-all"
              >
                mm.simplificagestion@gmail.com
              </a>
              <p className="mt-4 text-sm text-muted-foreground">Barcelona, España</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} M&M Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
