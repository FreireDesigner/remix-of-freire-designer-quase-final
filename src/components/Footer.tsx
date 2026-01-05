const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-4">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-sm font-bold text-background mb-4 uppercase tracking-wide">
            Institucional
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-bold text-background mb-4 uppercase tracking-wide">
            Serviços
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Camisetas Interclasse
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Camisetas Personalizadas
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Times e Eventos
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Empresas
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-background/20 pt-6">
        <p className="text-center text-sm text-background/60">
          © 2024 Freire Designer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
