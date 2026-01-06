import { Home, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-freire-designer.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Main Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <img src={logo} alt="Freire Designer" className="w-8 h-8 object-contain" />
          <span className="text-lg font-extrabold text-primary">FDesigner</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Link to="/" className="p-1.5 hover:bg-secondary rounded-full transition-colors">
            <Home className="w-5 h-5 text-foreground" />
          </Link>
          
          <button className="p-1.5 hover:bg-secondary rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5 text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-1.5 hover:bg-secondary rounded-full transition-colors">
            <User className="w-5 h-5 text-foreground" />
          </button>
          
          <button className="p-1.5 hover:bg-secondary rounded-full transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center gap-4 px-3 py-2 overflow-x-auto hide-scrollbar border-t border-border bg-background">
        <button className="flex items-center gap-1 text-xs font-bold text-foreground whitespace-nowrap">
          Todos os Modelos
          <ChevronDown className="w-3 h-3" />
        </button>
        <Link to="/producao" className="text-xs font-bold text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
          Produção
        </Link>
        <Link to="/faca-sua" className="text-xs font-bold text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
          Faça a Sua
        </Link>
        <Link to="/equipe" className="text-xs font-bold text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
          Conheça a Equipe
        </Link>
        <Link to="/feedbacks" className="text-xs font-bold text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
          Feedbacks
        </Link>
      </nav>
    </header>
  );
};

export default Header;
