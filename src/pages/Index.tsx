import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import YnkLogo from "@/components/YnkLogo";
import {
  Bot,
  QrCode,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Sparkles,
  Smartphone,
  ChevronRight,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Agente IA Inteligente",
    description: "Um assistente virtual que atende seus clientes 24/7 com respostas personalizadas.",
  },
  {
    icon: QrCode,
    title: "Conexão Instantânea",
    description: "Conecte seu WhatsApp em segundos via QR Code, sem complicações técnicas.",
  },
  {
    icon: Zap,
    title: "Respostas Rápidas",
    description: "Atendimento automático e veloz que impressiona seus clientes.",
  },
  {
    icon: Shield,
    title: "Seguro & Confiável",
    description: "Dados protegidos e conexão estável com a Evolution API.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-ocean">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <YnkLogo size="md" />
          <div className="flex items-center gap-3">
            <Link to="/demo-schema">
              <Button variant="outline" size="sm" className="hidden border-indigo-500/30 text-indigo-300 md:inline-flex shadow-glow hover:bg-indigo-500/10">
                Ver Demo Schema
              </Button>
            </Link>
            <Link to="/demo-cursor">
              <Button variant="outline" size="sm" className="hidden border-gray-500/30 text-gray-300 md:inline-flex hover:bg-white/10">
                Ver Crystal Cursor
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Entrar
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white shadow-ocean">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-ocean mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Automação Inteligente para WhatsApp</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up">
            Seu Agente de IA no{" "}
            <span className="text-gradient-ocean">WhatsApp</span>
            <br />
            em minutos.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Conecte, personalize e ative um assistente virtual inteligente para atender seus clientes 24 horas por dia. Sem código, sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 shadow-ocean text-base">
                <Zap className="w-5 h-5 mr-2" />
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="#precos">
              <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-card/50 font-semibold px-8 text-base">
                Ver Preços
              </Button>
            </a>
          </div>

          {/* Floating Phone Mockup */}
          <div className="mt-16 relative animate-float">
            <div className="w-72 mx-auto rounded-3xl bg-card border border-border/50 p-6 shadow-ocean glass-ocean">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">YNK Bot</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-primary/10 rounded-xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-foreground">Olá! 👋 Como posso ajudar?</p>
                </div>
                <div className="bg-secondary rounded-xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
                  <p className="text-sm text-foreground">Quero saber sobre preços</p>
                </div>
                <div className="bg-primary/10 rounded-xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-foreground">Claro! Nossos planos começam em R$60/mês 🚀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Uma plataforma completa para gerenciar seu agente de IA no WhatsApp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl glass-ocean hover:border-primary/30 transition-all duration-300 hover:shadow-ocean"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Como funciona?
            </h2>
            <p className="text-muted-foreground text-lg">
              Três passos simples para ativar seu agente.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Assine o plano",
                description: "Escolha seu plano e realize o pagamento. Setup único + mensalidade acessível.",
                icon: CreditCard,
              },
              {
                step: "02",
                title: "Conecte o WhatsApp",
                description: "Escaneie o QR Code pelo painel e conecte seu número em segundos.",
                icon: Smartphone,
              },
              {
                step: "03",
                title: "Agente ativo!",
                description: "Seu agente de IA começa a atender automaticamente. Monitore tudo pelo painel.",
                icon: Bot,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-ocean group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Preços transparentes
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Sem surpresas. Pague o setup, escolha seu plano mensal e pronto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Setup Card */}
            <div className="rounded-2xl glass-ocean p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pagamento Único</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Taxa de Setup</h3>
                <p className="text-sm text-muted-foreground mb-6">Personalização completa do seu agente de IA</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-foreground">R$ 100</span>
                  <span className="text-muted-foreground">,00</span>
                </div>
                <ul className="space-y-3">
                  {["Configuração do agente IA", "Personalização de respostas", "Treinamento do modelo", "Integração com seu negócio"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Monthly Card */}
            <div className="rounded-2xl glass-ocean p-8 relative overflow-hidden border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/15 to-transparent" />
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-white text-xs font-bold rounded-b-lg">
                Recomendado
              </div>
              <div className="relative z-10 pt-4">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mensal</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mensalidade</h3>
                <p className="text-sm text-muted-foreground mb-6">Manutenção, suporte e uso contínuo do sistema</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-foreground">R$ 60</span>
                  <span className="text-muted-foreground">,00/mês</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Agente IA ativo 24/7",
                    "Painel de gerenciamento",
                    "Conexão WhatsApp via QR Code",
                    "Suporte dedicado",
                    "Atualizações incluídas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-10 shadow-ocean text-base">
                Contratar Agora
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-4">
              Total para começar: R$ 160,00 (setup + primeiro mês)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl glass-ocean p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Pronto para automatizar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Junte-se a empresas que já estão atendendo clientes com IA no WhatsApp.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-10 shadow-ocean text-base">
                <Bot className="w-5 h-5 mr-2" />
                Criar Minha Conta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <YnkLogo size="sm" />
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacidade</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Termos</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 YNK Sistemas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
