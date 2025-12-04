export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/40">
      
        {/*}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand 
          
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dev
            </span>
            <p className="text-sm text-foreground/60 text-balance">Creando experiencias web modernas y accesibles.</p>
          </div>

          
          
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-primary transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-primary transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          
          
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Recursos</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  CV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

           
          
        </div>
        {*/}
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} Dev Portfolio. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ con React y Next.js</p>
        </div>
      
    </footer>
  )
}
