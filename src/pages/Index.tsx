import { Bug, Shield, Leaf, Droplet, Microscope, BookOpen } from "lucide-react";
import { MicroCard } from "@/components/MicroCard";
import { DetailSection } from "@/components/DetailSection";
import { InfoCard } from "@/components/InfoCard";
import heroImage from "@/assets/hero-microbiologia.jpg";
import bacteriaStructure from "@/assets/bacteria-structure.jpg";
import virusStructure from "@/assets/virus-structure.jpg";
import fungiStructure from "@/assets/fungi-structure.jpg";
import protozoaStructure from "@/assets/protozoa-structure.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-primary/20">
              <Microscope className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Explore o Mundo Microscópico</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Microbiologia<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Desvendada
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Descubra o fascinante universo dos microrganismos: bactérias, vírus, fungos e protozoários. 
              Uma jornada completa pelo mundo invisível que molda nossa existência.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg shadow-[var(--shadow-glow)]">
              <BookOpen className="w-5 h-5 mr-2" />
              Começar Exploração
            </Button>
          </div>
        </div>
      </header>

      {/* Main Categories */}
      <section className="py-16 px-4 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Categorias Principais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MicroCard
              title="Bactérias"
              description="Organismos unicelulares procariontes, essenciais para a vida na Terra."
              icon={Bug}
              color="from-primary to-primary-glow"
            />
            <MicroCard
              title="Vírus"
              description="Partículas infecciosas que necessitam de células hospedeiras para replicação."
              icon={Shield}
              color="from-accent to-blue-500"
            />
            <MicroCard
              title="Fungos"
              description="Organismos eucarióticos que incluem leveduras, bolores e cogumelos."
              icon={Leaf}
              color="from-secondary to-green-500"
            />
            <MicroCard
              title="Protozoários"
              description="Microrganismos eucarióticos unicelulares com grande diversidade."
              icon={Droplet}
              color="from-primary to-accent"
            />
          </div>
        </div>
      </section>

      {/* Bacteria Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-white font-semibold mb-4 shadow-lg">
              Procariontes Fundamentais
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Bactérias</h2>
            <div className="max-w-md mx-auto mb-8">
              <img src={bacteriaStructure} alt="Diagrama estrutural da célula bacteriana mostrando organelas e componentes" className="w-full rounded-2xl shadow-[var(--shadow-soft)] border-4 border-primary/20" />
              <p className="text-sm text-muted-foreground mt-3 italic">Estrutura celular bacteriana detalhada</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            title="Estrutura Celular"
            content="As bactérias são organismos unicelulares procariontes, ou seja, não possuem núcleo definido. Seu material genético (DNA) está disperso no citoplasma em uma região chamada nucleoide. Possuem parede celular rígida feita de peptidoglicano, que protege a célula e mantém sua forma característica."
          />
          <InfoCard
            title="Formas e Classificação"
            content="Classificadas por suas formas: cocos (esféricas), bacilos (bastonetes), espirilos (espirais) e vibriões (vírgula). Podem ser gram-positivas ou gram-negativas, diferenciadas pela composição da parede celular e importante para tratamentos antibióticos."
          />
          <InfoCard
            title="Metabolismo e Reprodução"
            content="Apresentam metabolismo extremamente diverso: aeróbicas, anaeróbicas ou facultativas. Reproduzem-se principalmente por fissão binária, um processo assexuado rápido. Algumas podem formar esporos em condições adversas, garantindo sua sobrevivência."
          />
          <InfoCard
            title="Importância Ecológica"
            content="Essenciais para ciclos biogeoquímicos, como fixação de nitrogênio e decomposição de matéria orgânica. Presentes na microbiota humana, auxiliam na digestão e síntese de vitaminas. Também são usadas na indústria para produção de alimentos, medicamentos e biocombustíveis."
          />
          <InfoCard
            title="Bactérias Patogênicas"
            content="Causam doenças como tuberculose (Mycobacterium tuberculosis), pneumonia (Streptococcus pneumoniae), sífilis (Treponema pallidum) e infecções urinárias (Escherichia coli). O uso inadequado de antibióticos levou ao surgimento de superbactérias resistentes, um problema de saúde pública global."
          />
          <InfoCard
            title="Bactérias Benéficas"
            content="A microbiota intestinal humana contém trilhões de bactérias benéficas que auxiliam na digestão, síntese de vitaminas K e B12, e proteção contra patógenos. Probióticos são suplementos com bactérias vivas que promovem saúde intestinal. Bactérias do gênero Rhizobium fixam nitrogênio atmosférico em raízes de leguminosas."
          />
          </div>
        </div>
      </section>

      {/* Virus Section */}
      <section className="py-16 px-4 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-accent to-blue-500 text-white font-semibold mb-4 shadow-lg">
              Agentes Infecciosos Acelulares
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Vírus</h2>
            <div className="max-w-md mx-auto mb-8">
              <img src={virusStructure} alt="Diagrama estrutural do vírus mostrando capsídeo, envelope e material genético" className="w-full rounded-2xl shadow-[var(--shadow-soft)] border-4 border-accent/20" />
              <p className="text-sm text-muted-foreground mt-3 italic">Estrutura viral com suas camadas e componentes</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            title="Estrutura Viral"
            content="Vírus não são considerados seres vivos por não possuírem estrutura celular. São compostos por material genético (DNA ou RNA) envolto por uma cápsula proteica chamada capsídeo. Alguns possuem envelope lipídico adicional derivado da membrana da célula hospedeira."
          />
          <InfoCard
            title="Replicação Viral"
            content="São parasitas intracelulares obrigatórios, necessitando de células hospedeiras para replicação. O ciclo lítico envolve adesão, penetração, síntese de componentes virais, montagem e liberação. No ciclo lisogênico, o DNA viral integra-se ao genoma do hospedeiro."
          />
          <InfoCard
            title="Classificação"
            content="Classificados pelo tipo de ácido nucleico (DNA ou RNA), presença ou ausência de envelope, forma do capsídeo e mecanismo de replicação. Vírus de RNA incluem retrovírus (como HIV), que transcrevem RNA em DNA usando transcriptase reversa."
          />
          <InfoCard
            title="Impacto na Saúde"
            content="Causam diversas doenças: resfriados, gripe, COVID-19, AIDS, hepatites, dengue. Alguns estão associados a cânceres (HPV, hepatite B). Vacinas previnem infecções virais estimulando o sistema imunológico. Antivirais específicos podem inibir replicação viral."
          />
          <InfoCard
            title="Bacteriófagos"
            content="Vírus que infectam exclusivamente bactérias, possuem estrutura complexa com cabeça icosaédrica, cauda contrátil e fibras da cauda. São usados em terapia fágica como alternativa aos antibióticos, especialmente contra bactérias resistentes. Desempenham papel crucial na regulação de populações bacterianas nos ecossistemas."
          />
          <InfoCard
            title="Vacinas e Imunização"
            content="Vacinas contêm antígenos virais (vírus atenuados, inativados ou proteínas virais) que estimulam resposta imunológica sem causar doença. A memória imunológica gerada protege contra infecções futuras. Vacinas erradicaram a varíola e reduziram drasticamente doenças como poliomielite, sarampo e rubéola."
          />
          </div>
        </div>
      </section>

      {/* Fungi Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-secondary to-green-500 text-white font-semibold mb-4 shadow-lg">
              Reino dos Decompositores
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Fungos</h2>
            <div className="max-w-md mx-auto mb-8">
              <img src={fungiStructure} alt="Diagrama estrutural da célula fúngica mostrando parede celular e organelas" className="w-full rounded-2xl shadow-[var(--shadow-soft)] border-4 border-secondary/20" />
              <p className="text-sm text-muted-foreground mt-3 italic">Estrutura celular dos fungos com parede de quitina</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            title="Características Gerais"
            content="Organismos eucarióticos com parede celular de quitina. Podem ser unicelulares (leveduras) ou multicelulares (bolores e cogumelos). São heterotróficos, obtendo nutrientes por absorção após secreção de enzimas digestivas no ambiente."
          />
          <InfoCard
            title="Estrutura e Morfologia"
            content="Fungos filamentosos formam hifas, filamentos tubulares que se ramificam formando o micélio. As hifas podem ser septadas (com divisões) ou cenocíticas (sem divisões). Estruturas reprodutivas incluem esporos, produzidos assexuada ou sexuadamente."
          />
          <InfoCard
            title="Reprodução Fúngica"
            content="Reprodução assexuada ocorre por brotamento (leveduras), fragmentação ou produção de esporos assexuados. Reprodução sexuada envolve fusão de hifas compatíveis, formando esporos sexuados com variabilidade genética, importantes para adaptação."
          />
          <InfoCard
            title="Importância e Aplicações"
            content="Essenciais como decompositores na reciclagem de nutrientes. Usados na indústria alimentícia (pães, queijos, cervejas) e farmacêutica (antibióticos como penicilina). Alguns são comestíveis, outros patogênicos causando micoses. Formam simbioses como líquens e micorrizas."
          />
          <InfoCard
            title="Fungos na Biotecnologia"
            content="Saccharomyces cerevisiae é usado em fermentação alcoólica e panificação. Penicillium chrysogenum produz penicilina, revolucionando a medicina. Aspergillus niger produz ácido cítrico para indústria alimentícia. Fungos filamentosos são usados na produção de enzimas industriais e proteínas recombinantes."
          />
          <InfoCard
            title="Micoses e Patologias"
            content="Causam infecções superficiais (pé de atleta, candidíase) e sistêmicas (histoplasmose, aspergilose). Micotoxinas produzidas por fungos contaminantes de alimentos podem causar intoxicações graves. Tratamento com antifúngicos como azóis e equinocandinas que inibem síntese da parede celular ou membrana plasmática fúngica."
          />
          </div>
        </div>
      </section>

      {/* Protozoa Section */}
      <section className="py-16 px-4 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold mb-4 shadow-lg">
              Eucariontes Unicelulares
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Protozoários</h2>
            <div className="max-w-md mx-auto mb-8">
              <img src={protozoaStructure} alt="Diagrama estrutural dos protozoários mostrando estruturas de locomoção" className="w-full rounded-2xl shadow-[var(--shadow-soft)] border-4 border-primary/20" />
              <p className="text-sm text-muted-foreground mt-3 italic">Estrutura dos protozoários com diferentes sistemas de locomoção</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            title="Características Celulares"
            content="Organismos eucarióticos unicelulares com grande diversidade morfológica e fisiológica. Possuem núcleo definido, organelas membranosas e podem apresentar estruturas especializadas como vacúolos contráteis, cílios, flagelos e pseudópodes para locomoção."
          />
          <InfoCard
            title="Classificação por Locomoção"
            content="Sarcodíneos (amebas) movem-se por pseudópodes. Flagelados possuem um ou mais flagelos. Ciliados apresentam numerosos cílios. Esporozoários são parasitas sem estruturas locomotoras especializadas na fase adulta, como o Plasmodium causador da malária."
          />
          <InfoCard
            title="Nutrição e Metabolismo"
            content="Maioria é heterotrófica, alimentando-se de bactérias, algas e outros protozoários por fagocitose. Alguns são parasitas obrigatórios. Protozoários fotossintetizantes (como Euglena) são classificados como algas. Apresentam metabolismo aeróbico ou anaeróbico."
          />
          <InfoCard
            title="Ciclo de Vida e Patogenias"
            content="Muitos alternam entre forma trofozoíta (ativa) e cisto (resistente). Causam doenças importantes: malária (Plasmodium), doença de Chagas (Trypanosoma cruzi), amebíase, giardíase e toxoplasmose. Transmissão ocorre por água contaminada, vetores ou alimentos."
          />
          <InfoCard
            title="Protozoários e Saúde Pública"
            content="A malária mata cerca de 600 mil pessoas anualmente, principalmente na África. O Plasmodium tem ciclo complexo envolvendo mosquito Anopheles e humanos. A doença de Chagas afeta milhões na América Latina, causada pelo Trypanosoma cruzi transmitido pelo barbeiro. Medidas preventivas incluem controle de vetores e saneamento básico."
          />
          <InfoCard
            title="Paramécio e Organismos Modelo"
            content="O Paramecium é um ciliado amplamente estudado como organismo modelo. Possui dois núcleos (macronúcleo e micronúcleo) e reproduz-se por fissão binária ou conjugação. Sua complexidade celular ilustra organização avançada em unicelulares, com organelas especializadas como tricocistos para defesa e vacúolos digestivos."
          />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Microscope className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Microbiologia Desvendada</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Explorando o mundo microscópico através da ciência e educação
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Microbiologia Desvendada. Material educacional para estudo e pesquisa.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
