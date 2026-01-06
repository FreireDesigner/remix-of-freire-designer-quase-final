import { useState } from "react";
import { MessageCircle, Phone, Sparkles, ChevronRight, ChevronDown, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CentralAtendimento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-primary text-white px-4 py-12 text-center relative">
        <h1 className="text-3xl font-bold mb-2 leading-tight">
          Central de
        </h1>
        <h1 className="text-3xl font-bold mb-4 text-white">
          Atendimento
        </h1>
        
        <p className="text-white/90 text-base font-semibold mb-2">
          Estamos prontos para transformar sua ideia em realidade!
        </p>
        
        <p className="text-white/80 text-sm font-light max-w-sm mx-auto">
          Entre em contato agora e receba atendimento personalizado de nossa equipe especializada
        </p>
        
        <WaveDivider variant="blue-to-white" />
      </section>

      {/* Contact Form */}
      <section className="px-4 py-8">
        <h2 className="text-xl font-bold text-foreground mb-2">Envie sua Mensagem</h2>
        <p className="text-muted-foreground text-sm font-light mb-6">
          Preencha o formulário e retornaremos em breve
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Telefone
            </label>
            <input
              type="tel"
              name="telefone"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Assunto *
            </label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, assunto: value }))}>
              <SelectTrigger className="w-full px-4 py-3 h-auto rounded-xl border border-border bg-card text-foreground">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="orcamento">Solicitar Orçamento</SelectItem>
                <SelectItem value="duvida">Tirar Dúvidas</SelectItem>
                <SelectItem value="parceria">Proposta de Parceria</SelectItem>
                <SelectItem value="reclamacao">Reclamação</SelectItem>
                <SelectItem value="outro">Outro Assunto</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Mensagem *
            </label>
            <textarea
              name="mensagem"
              placeholder="Conte-nos sobre seu projeto ou dúvida..."
              required
              rows={5}
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>

      {/* Quick Contact */}
      <section className="px-4 py-8">
        <h2 className="text-xl font-bold text-foreground mb-2">Atendimento Rápido</h2>
        <p className="text-muted-foreground text-sm font-light mb-6">
          Escolha a melhor forma de contato
        </p>
        
        {/* WhatsApp Card */}
        <div className="bg-primary rounded-2xl p-6 text-center text-white mb-4">
          <MessageCircle className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
          <p className="text-white/90 text-sm mb-4">
            Resposta rápida e atendimento personalizado
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5511932856472", "_blank")}
            className="bg-white text-primary px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </button>
        </div>
        
        {/* Contact Info */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Telefone / WhatsApp</h4>
              <a href="tel:+5511932856472" className="text-primary font-medium">(11) 93285-6472</a>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">E-mail</h4>
              <a href="mailto:contato@freiredesigner.com" className="text-primary font-medium text-sm">contato@freiredesigner.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 pb-12">
        <div className="bg-white border-2 border-primary rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          
          <h3 className="text-xl font-bold text-primary mb-2">
            Não achou o estilo<br />que precisava?
          </h3>
          
          <h4 className="text-lg font-bold text-foreground mb-4">
            Crie a sua com a gente!
          </h4>
          
          <p className="text-muted-foreground text-sm mb-4">
            Nossa equipe de designers está pronta para desenvolver um projeto{" "}
            <span className="text-primary font-semibold">100% exclusivo e personalizado</span>{" "}
            especialmente para você!
          </p>
          
          <button 
            onClick={() => window.location.href = "/faca-sua"}
            className="w-full bg-primary text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5" />
            Criar Minha Camiseta Exclusiva
          </button>
          
          <p className="text-sm text-muted-foreground">
            Arte gratuita • Aprovação ilimitada • Resultado garantido
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CentralAtendimento;
