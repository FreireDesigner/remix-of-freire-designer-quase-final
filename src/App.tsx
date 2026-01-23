import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Producao from "./pages/Producao";
import FacaSua from "./pages/FacaSua";
import Equipe from "./pages/Equipe";
import Feedbacks from "./pages/Feedbacks";
import TodosModelos from "./pages/TodosModelos";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import CentralAtendimento from "./pages/CentralAtendimento";
import Interclasse from "./pages/Interclasse";
import Personagens from "./pages/Personagens";
import Desbravador from "./pages/Desbravador";
import Times from "./pages/Times";
import Gospel from "./pages/Gospel";
import DetalhesModelo from "./pages/DetalhesModelo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/faca-sua" element={<FacaSua />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/todos-modelos" element={<TodosModelos />} />
          <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
          <Route path="/central-atendimento" element={<CentralAtendimento />} />
          <Route path="/interclasse" element={<Interclasse />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/desbravador" element={<Desbravador />} />
          <Route path="/times" element={<Times />} />
          <Route path="/gospel" element={<Gospel />} />
          <Route path="/modelo/:id" element={<DetalhesModelo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
