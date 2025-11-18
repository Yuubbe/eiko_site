'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  backgroundImage?: string;
  type: 'title' | 'clan' | 'history-chapter' | 'objectif' | 'disponibilites';
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'CLAN UCHIHA',
    subtitle: 'Héritiers du Feu',
    type: 'title',
  },
  {
    id: 2,
    title: 'Naissance du Clan Uchiha',
    subtitle: 'Héritiers du Feu',
    content: 'Après la chute de Madara Uchiha, puis la mort d\'Hashirama et de Tobirama Senju, une ère de silence et de désillusion s\'abattit sur le monde shinobi. Les flammes de la haine s\'éteignirent peu à peu, remplacées par les braises d\'une paix fragile. Dans ce contexte, Meiren Uchiha et Kenshirama Senju scellèrent une amitié improbable, symbole d\'un renouveau tant attendu entre leurs clans autrefois ennemis.\n\nDésormais, les Uchiha cherchent à se reconstruire, à racheter les fautes du passé et à canaliser l\'arrogance qui les a perdus. Ils ne veulent plus être les porteurs de rancune, mais les gardiens d\'un nouvel équilibre. Un feu qui éclaire, et non qui consume.\n\nCe n\'est pas une renaissance guidée par la vengeance, mais une quête de rédemption, une lutte pour prouver que le sang Uchiha n\'est pas condamné à la tragédie.\n\nLes héritiers à venir porteront cette promesse:\nDe maîtriser leur feu intérieur\nD\'honorer leurs ancêtres sans répéter leurs erreurs\nEt de servir la paix sans renier leur fierté',
    type: 'clan',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfmjhu4-2acb26b5-b9be-4384-81dd-9da6e6cfe711.gif-6C0e4T5YqaI1bsrg4PJsKautIcpXpa.jpeg',
  },
  {
    id: 3,
    title: 'Enfance banale, clan exigeant',
    subtitle: 'Histoire d\'Eiko - Chapitre 1',
    content: 'Eiko Uchiha est né dans une période où Konoha connaissait enfin un semblant de stabilité. L\'époque des batailles sanglantes, des rivalités meurtrières et des drames familiaux semblait s\'être apaisée. Dans le domaine Uchiha, les enfants grandissaient sans la pression d\'une guerre imminente, mais l\'exigence du clan, elle, n\'avait jamais diminué.\n\nLes autres jeunes du clan passaient leurs journées à s\'entraîner, répétaient des mudras, apprenaient l\'histoire, les stratégies, les lignées. Eiko, lui, s\'en fichait complètement. Il préférait jouer, dormir dehors, disparaître pour aller observer les poissons de la rivière ou passer l\'après-midi à faire la sieste sur les toits.\n\nOn le voyait rarement aux cours. Quand il venait, il arrivait en retard, les cheveux en bataille, l\'air de quelqu\'un qui n\'avait même pas essayé. Pour beaucoup, il n\'était pas "faible". Il était absent.\n\nC\'est cette attitude qui lui a collé l\'étiquette de "raté du clan" bien avant son premier vrai test.',
    type: 'history-chapter',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animesher.com_obito-naruto-shippuden-gif-2119344-ucSPt2zWsidX8Bvwru9mUPMce1RNxv.gif',
  },
  {
    id: 4,
    title: 'Une anomalie que personne n\'adresse',
    subtitle: 'Histoire d\'Eiko - Chapitre 2',
    content: 'Sans que personne ne le sache vraiment, Eiko souffrait d\'un problème que ni lui ni les instructeurs ne comprenaient : son chakra n\'était pas stable. Il circulait de façon irrégulière, parfois trop lentement, parfois trop vite.\n\nCe n\'était pas une maladie, encore moins une malédiction, juste une instabilité que personne n\'avait pris la peine d\'étudier. Les Uchiha de son entourage, persuadés que "le talent se voit tout de suite", ne s\'intéressaient même pas à la question.\n\nPour eux, Eiko n\'avait simplement pas l\'étoffe d\'un shinobi. Sa famille essayait de rester bienveillante, mais même eux finissaient par admettre qu\'ils ne savaient pas comment l\'aider.\n\nL\'instabilité de son chakra rendait chaque technique difficile. Quand il essayait de former un Katon, l\'énergie se dispersait. Quand il tentait de se concentrer, son esprit s\'échappait. Il grandit donc en silence, acceptant cette faiblesse invisible que personne ne savait comment corriger.',
    type: 'history-chapter',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TxjPM.gif-6C0e4T5YqaI1bsrg4PJsKautIcpXpa.jpeg',
  },
  {
    id: 5,
    title: 'Le test du Katon : l\'incident',
    subtitle: 'Histoire d\'Eiko - Chapitre 3',
    content: 'Le test du Katon était un passage obligé pour tous les enfants Uchiha. Certains l\'abordaient avec confiance, d\'autres avec appréhension. Pour Eiko, c\'était surtout un moment où personne ne savait quoi attendre et où beaucoup espéraient secrètement assister à un spectacle maladroit.\n\nLe jour de l\'épreuve, plusieurs membres du clan s\'étaient rassemblés autour de la petite cour réservée aux tests. Ce n\'était pas vraiment pour le soutenir, mais plutôt pour voir ce que "le clown de l\'Académie" allait encore produire. Eiko sentit leurs regards peser sur lui avant même de commencer.\n\nIl avança jusqu\'au cercle tracé au sol, inspira brièvement, puis forma les mudras approximatifs, un peu trop rapides, comme toujours. Dès qu\'il commença à faire circuler son chakra, il comprit que quelque chose dérapait. L\'énergie montait trop vite, se compressait dans sa poitrine comme une chaleur prête à éclater.\n\nLa flamme qu\'il produisit n\'en était pas vraiment une. C\'était une déferlante, un jet de feu irrégulier, incontrôlé et trop large pour un enfant de son âge. Le souffle frappa un mur du domaine, embrasa une bannière suspendue, et projeta des braises dans l\'air. Une partie du toit adjacent prit feu presque instantanément.\n\nAlors qu\'Eiko reculait, un retour de chaleur jaillit et une langue de flammes effleura sa joue. La brûlure fut immédiate, brutale, et son cri coupa court à toutes les moqueries silencieuses.',
    type: 'history-chapter',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfmjhu4-2acb26b5-b9be-4384-81dd-9da6e6cfe711.gif-6C0e4T5YqaI1bsrg4PJsKautIcpXpa.jpeg',
  },
  {
    id: 6,
    title: 'La cicatrice : un rappel permanent',
    subtitle: 'Histoire d\'Eiko - Chapitre 4',
    content: 'Les jours qui suivrent furent difficiles. La brûlure avait laissé une marque irrégulière sur sa joue gauche, une cicatrice visible que personne ne semblait vouloir ignorer. Les rumeurs se propagèrent vite:\n"Il a brûlé son propre domaine."\n"Même un Katon basique, il le foire."\n"On ne devrait pas le laisser s\'entraîner."\n\nChez les enfants, la cicatrice devint un prétexte pour se moquer. Chez les adultes, un signe de gêne et de déception. Pour Eiko, c\'était surtout un rappel constant de ce moment où tout avait basculé.\n\nMais plus les jours passaient, plus quelque chose changeait chez lui. Il ne riait plus pour masquer son malaise. Il évitait les réactions impulsives. Il observait davantage, écoutait plus longtemps, réfléchissait plus profondément. Comme si l\'incident avait écrabouilli une partie de son enfance, mais ouvert en même temps une porte vers une maturité qu\'il n\'aurait pas dû atteindre si tôt.\n\nIl commença à analyser le comportement des autres, leurs attentes, leurs non-dits. À comprendre le poids du clan, l\'image qu\'on attendait de chaque membre, et la façon dont une seule erreur pouvait définir toute une vie.',
    type: 'history-chapter',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/220062-z3D8VpcmUcIaJudtIy78Of7UR9tCnC.gif',
  },
  {
    id: 7,
    title: 'Le passage à Genin : une montée inattendue',
    subtitle: 'Histoire d\'Eiko - Chapitre 5',
    content: 'Malgré ses maladresses et son manque de technique, Eiko persista. Il s\'entraînait seul, souvent tard le soir, cherchant à dompter un chakra qui semblait se moquer de lui. Ce n\'était pas glorieux, mais c\'était constant.\n\nSes instructeurs finirent par remarquer quelque chose d\'étonnant. Lors des exercices, quand d\'autres élèves paniquaient, se laissaient emporter ou perdaient leur concentration, lui restait étrangement calme. Sa maîtrise technique n\'était pas bonne, mais sa capacité à réagir au bon moment l\'était. Il réfléchissait toujours deux fois avant d\'agir. Il cherchait la faille, la logique, l\'ouverture.\n\nC\'est cette attitude et uniquement celle-là qui lui permit d\'obtenir le statut de Genin apprenti. Pas son talent. Pas sa maîtrise du Katon. Pas ses compétences physiques.\n\nJuste cette façon différente de raisonner, presque froide, presque analytique.\n\nIl n\'était pas le prodige du clan.\nIl n\'était pas le futur espoir du Sharingan.\nIl n\'était même pas un bon utilisateur du feu.\n\nMais il possédait une rareté que personne n\'avait anticipée chez "le raté du domaine":\n\nune intelligence silencieuse, précise, presque inquiétante.\n\nUne manière de penser qui, un jour peut-être, finirait par surpasser ceux qui se moquaient de lui.',
    type: 'history-chapter',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animesher.com_obito-naruto-shippuden-gif-2119344-ucSPt2zWsidX8Bvwru9mUPMce1RNxv.gif',
  },
  {
    id: 8,
    title: 'Objectif RP',
    subtitle: 'Court, Moyen et Long terme',
    content: 'COURT TERME\nSe démarquer progressivement en mission par son intelligence d\'analyse et sa capacité d\'adaptation\nAméliorer sa maîtrise du Katon pour ne plus répéter l\'incident du domaine\nGagner la confiance de son équipe et de ses supérieurs grâce à son sérieux et sa fiabilité\nObserver discrètement le fonctionnement du village et comprendre comment les différentes unités opèrent\n\nMOYEN TERME\nDevenir le leader de son équipe en s\'appuyant sur sa réflexion stratégique\nDévelopper une réputation de shinobi capable de gérer les situations tendues avec calme\nSe faire remarquer par des figures importantes du village pour intégrer une branche où l\'analyse et la prise de décision sont essentielles\nProuver aux autres Uchiha et à lui-même que le travail, la persévérance et l\'effort surpassent le talent inné\nRenforcer sa maîtrise des deux éléments du clan : la stratégie du Sharingan et la gestion du Katon\n\nLONG TERME\nDevenir un leader reconnu dans le village, apprécié pour sa façon de diriger les troupes et d\'organiser les opérations\nIntégrer, ou même diriger, une branche diplomatique ou stratégique du village\nMarquer l\'histoire comme l\'Uchiha qui a démontré qu\'un "raté" peut surpasser les génies grâce à l\'effort et à la maîtrise de soi\nDevenir une figure respectée, non pas pour sa puissance brute, mais pour sa vision, son intelligence et sa capacité à prendre des décisions justes',
    type: 'objectif',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfmjhu4-2acb26b5-b9be-4384-81dd-9da6e6cfe711.gif-6C0e4T5YqaI1bsrg4PJsKautIcpXpa.jpeg',
  },
  {
    id: 9,
    title: 'Disponibilités',
    subtitle: 'Horaires de jeu',
    type: 'disponibilites',
    backgroundImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/220062-z3D8VpcmUcIaJudtIy78Of7UR9tCnC.gif',
  },
];

export default function UchihaSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayTimerRef.current = setTimeout(() => {
        nextSlide();
      }, 8000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [currentSlide, isAutoPlay]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <audio ref={audioRef} loop muted={isMuted} className="hidden">
        {/* Prefer site-local copy in /public (ost.mp3). Falls back to remote if needed. */}
        <source src="/ost.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative w-full h-full">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <SlideContent slide={s} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-red-600/30 hover:bg-red-600/50 text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-600 w-6'
                  : 'bg-gray-600 hover:bg-red-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-red-600/30 hover:bg-red-600/50 text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute top-6 right-6 flex gap-3 items-center z-20">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-red-600/30 hover:bg-red-600/50 text-white transition-all duration-300"
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-red-600/30 rounded-lg appearance-none cursor-pointer accent-red-600"
          aria-label="Volume control"
        />
      </div>

      <div className="absolute top-6 left-6 text-white/60 text-sm font-mono z-20">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {slide.type === 'title' && <TitleSlide />}
      {slide.type === 'clan' && <ClanSlide content={slide.content} backgroundImage={slide.backgroundImage} />}
      {slide.type === 'history-chapter' && <HistoryChapterSlide content={slide.content} backgroundImage={slide.backgroundImage} title={slide.title} subtitle={slide.subtitle} />}
      {slide.type === 'objectif' && <ObjectifSlide content={slide.content} backgroundImage={slide.backgroundImage} />}
      {slide.type === 'disponibilites' && <DisponibiliteSlide backgroundImage={slide.backgroundImage} />}
    </div>
  );
}

function ClanSlide({ content, backgroundImage }: { content?: string; backgroundImage?: string }) {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full h-full overflow-auto flex flex-col">
        <div className="flex-shrink-0 pt-12 px-8 text-center border-b border-red-600/30">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider drop-shadow-lg" style={{
            textShadow: '0 0 40px rgba(220, 38, 38, 0.8), 0 0 80px rgba(220, 38, 38, 0.4)'
          }}>
            Histoire du Clan Uchiha
          </h2>
          <p className="text-lg md:text-xl text-red-300/80 tracking-wider drop-shadow-md" style={{
            textShadow: '0 0 20px rgba(220, 38, 38, 0.6)'
          }}>
            Héritiers du Feu
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-base md:text-lg text-gray-100/90 leading-relaxed font-serif">
              {content?.split('\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-justify animate-fadeInUp hover:text-red-200/80 transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    textShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 2px 10px rgba(139, 0, 0, 0.3), 0 0 40px rgba(139, 0, 0, 0.3)'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function HistoryChapterSlide({ content, backgroundImage, title, subtitle }: { content?: string; backgroundImage?: string; title?: string; subtitle?: string }) {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 w-full h-full overflow-auto flex flex-col">
        <div className="flex-shrink-0 pt-12 px-8 text-center border-b border-red-600/30">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider drop-shadow-lg" style={{
            textShadow: '0 0 40px rgba(220, 38, 38, 0.8), 0 0 80px rgba(220, 38, 38, 0.4)'
          }}>
            {title}
          </h2>
          <p className="text-lg md:text-xl text-red-300/80 tracking-wider drop-shadow-md" style={{
            textShadow: '0 0 20px rgba(220, 38, 38, 0.6)'
          }}>
            {subtitle}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-base md:text-lg text-gray-100/90 leading-relaxed font-serif">
              {content?.split('\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-justify animate-fadeInUp hover:text-red-200/80 transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    textShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 2px 10px rgba(139, 0, 0, 0.3), 0 0 40px rgba(139, 0, 0, 0.3)'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function ObjectifSlide({ content, backgroundImage }: { content?: string; backgroundImage?: string }) {
  const parseObjectives = (content?: string) => {
    if (!content) return { court: [], moyen: [], long: [] };
    
    const sections = {
      court: [] as string[],
      moyen: [] as string[],
      long: [] as string[]
    };
    
    let currentSection = '';
    content.split('\n').forEach(line => {
      if (line.startsWith('COURT TERME')) {
        currentSection = 'court';
      } else if (line.startsWith('MOYEN TERME')) {
        currentSection = 'moyen';
      } else if (line.startsWith('LONG TERME')) {
        currentSection = 'long';
      } else if (line.trim()) {
        sections[currentSection as keyof typeof sections].push(line.trim());
      }
    });
    
    return sections;
  };

  const objectives = parseObjectives(content);

  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 w-full h-full overflow-auto flex flex-col">
        <div className="flex-shrink-0 pt-12 px-8 text-center border-b border-red-600/30">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider drop-shadow-lg" style={{
            textShadow: '0 0 40px rgba(220, 38, 38, 0.8), 0 0 80px rgba(220, 38, 38, 0.4)'
          }}>
            Objectifs RP
          </h2>
          <p className="text-lg md:text-xl text-red-300/80 tracking-wider" style={{
            textShadow: '0 0 20px rgba(220, 38, 38, 0.6)'
          }}>
            Court, Moyen et Long terme
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <ObjectiveTable 
              title="COURT TERME" 
              objectives={objectives.court}
              delay={0}
            />
            
            <ObjectiveTable 
              title="MOYEN TERME" 
              objectives={objectives.moyen}
              delay={200}
            />
            
            <ObjectiveTable 
              title="LONG TERME" 
              objectives={objectives.long}
              delay={400}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function ObjectiveTable({ title, objectives, delay }: { title: string; objectives: string[]; delay: number }) {
  return (
    <div 
      className="animate-slideInLeft border-2 border-red-600/50 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md hover:border-red-500/70 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-r from-red-600/50 via-red-700/40 to-red-600/30 px-8 py-4 border-b-2 border-red-600/50">
        <h3 className="text-xl font-bold text-red-100 tracking-wider uppercase drop-shadow-lg" style={{
          textShadow: '0 0 15px rgba(220, 38, 38, 0.6)'
        }}>
          {title}
        </h3>
      </div>

      <div className="divide-y divide-red-600/30 px-8 py-6 space-y-4">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="flex gap-4 items-start py-3 hover:bg-red-600/15 px-4 rounded-lg transition-all duration-300 animate-slideInLeft group"
            style={{ animationDelay: `${delay + index * 80}ms` }}
          >
            <span className="text-red-400 text-2xl flex-shrink-0 group-hover:text-red-300 transition-colors duration-300 drop-shadow-lg">
              —
            </span>
            <span className="text-gray-100 text-base md:text-lg leading-relaxed font-serif group-hover:text-red-100/90 transition-colors duration-300" style={{
              textShadow: '0 0 15px rgba(220, 38, 38, 0.4), 0 2px 5px rgba(139, 0, 0, 0.2)'
            }}>
              {objective}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function DisponibiliteSlide({ backgroundImage }: { backgroundImage?: string }) {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-12">
          Disponibilités
        </h2>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AvailabilityTable title="SCOLAIRE" data={[
            { day: 'Lundi', time: '14h à 00h' },
            { day: 'Mardi', time: '12h à 00h' },
            { day: 'Mercredi', time: '15h à 00h' },
            { day: 'Jeudi', time: '14h à 00h' },
            { day: 'Vendredi', time: '13h à 00h' },
            { day: 'Samedi', time: 'Toute la journée' },
            { day: 'Dimanche', time: 'Toute la journée' },
          ]} startDelay={0} />
          
          <AvailabilityTable title="VACANCES" data={[
            { day: 'Lundi', time: '13h à 01h' },
            { day: 'Mardi', time: '13h à 01h' },
            { day: 'Mercredi', time: '13h à 01h' },
            { day: 'Jeudi', time: '13h à 01h' },
            { day: 'Vendredi', time: '13h à 01h' },
            { day: 'Samedi', time: 'Toute la journée' },
            { day: 'Dimanche', time: 'Toute la journée' },
          ]} startDelay={350} />
        </div>
      </div>
    </div>
  );
}

function AvailabilityTable({ title, data, startDelay }: { title: string; data: Array<{ day: string; time: string }>; startDelay: number }) {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-red-600/50 bg-black/50 backdrop-blur-md shadow-2xl hover:border-red-500/70 transition-all duration-300">
      <div className="bg-gradient-to-r from-red-600/40 to-red-700/30 px-6 py-4 border-b-2 border-red-600/50">
        <h3 className="text-xl font-bold text-red-200 tracking-wider uppercase">{title}</h3>
      </div>
      <div className="divide-y divide-red-600/30">
        {data.map((item, index) => (
          <div
            key={index}
            className="px-6 py-4 flex justify-between items-center hover:bg-red-600/20 transition-all duration-300 animate-slideIn"
            style={{ animationDelay: `${startDelay + index * 60}ms` }}
          >
            <span className="text-gray-100 font-semibold text-lg">{item.day}</span>
            <span className="text-red-200/90 font-light text-lg">{item.time}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function TitleSlide() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-black via-red-950/20 to-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center space-y-8 px-6">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/design-mode/uchiha-clan-logo-naruto-anime-free-vector.png"
            alt="Uchiha Clan Logo"
            className="w-56 h-56 drop-shadow-2xl object-contain"
          />
        </div>

        <h1 className="text-7xl md:text-8xl font-bold text-white tracking-wider animate-fade-in drop-shadow-lg" style={{
          textShadow: '0 0 30px rgba(220, 38, 38, 0.8), 0 0 60px rgba(220, 38, 38, 0.4)'
        }}>
          CLAN
        </h1>
        <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-red-600 to-red-700 bg-clip-text text-transparent animate-fade-in filter drop-shadow-lg" style={{ 
          animationDelay: '0.2s',
          textShadow: '0 0 40px rgba(220, 38, 38, 0.6)'
        }}>
          UCHIHA
        </h2>

        <p className="text-xl md:text-2xl text-red-300/80 tracking-widest font-light animate-fade-in" style={{ 
          animationDelay: '0.4s',
          textShadow: '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.2)'
        }}>
          Héritiers du Feu
        </p>

        <div className="flex items-center justify-center gap-4 pt-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600" />
          <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
