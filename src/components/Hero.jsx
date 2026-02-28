import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState('[--:--:--]');

  // Relógio em tempo real - Fuso de Brasília
  useEffect(() => {
    const updateTime = () => {
      const agora = new Date();
      const formatador = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setTime(`[${formatador.format(agora)}]`);
    };

    updateTime();
    const intervalo = setInterval(updateTime, 1000);
    return () => clearInterval(intervalo);
  }, []);

  // Simulador de carregamento fluido de 0 a 100
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 500);
      } else {
        setProgress(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Separação do texto em duas linhas para dar ênfase máxima
  const word1 = "penguin".split("");
  const word2 = "growth".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, 
        delayChildren: 0.4,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 120, rotateX: -80 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      }
    }
  };

  // Links da navegação
  const navLinks = [
    { label: 'sites', id: 'sites' },
    { label: 'automação', id: 'automacoes' }
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* TELA DE LOADING MINIMALISTA                               */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-penguin-white flex flex-col items-center justify-center"
          >
            <motion.img
              layoutId="penguin-logo"
              src="/images/logo.png"
              alt="Carregando..."
              className="w-24 md:w-32 h-auto mb-8 drop-shadow-md relative z-10"
            />
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-display text-3xl font-medium text-penguin-black tracking-widest"
            >
              {progress}%
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* CONTEÚDO PRINCIPAL (HERO)                                 */}
      {/* ========================================================= */}
      <section className="min-h-[100svh] bg-penguin-white flex flex-col relative overflow-hidden text-penguin-black px-6 sm:px-12 py-8">
        
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? -20 : 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full flex justify-between items-start z-30 font-body relative shrink-0"
        >
          {/* Esquerda: LOGO em cima do RELÓGIO */}
          <div className="w-1/3 flex flex-col items-start gap-3">
            {!isLoading && (
              <motion.img
                layoutId="penguin-logo"
                src="/images/logo.png"
                alt="Penguin Growth"
                className="w-14 md:w-20 h-auto"
                style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))" }}
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
              />
            )}
            <span className="text-xs md:text-sm font-medium tracking-widest text-penguin-black/60">
              {time}
            </span>
          </div>

          {/* Centro: Links */}
          <div className="w-1/3 flex justify-center items-center gap-6 md:gap-10 pt-4">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="group relative text-sm md:text-lg font-medium cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Direita: Botão de Contato */}
          <div className="w-1/3 flex justify-end pt-2">
            <a 
              href="#contato" 
              className="relative px-5 py-3 flex items-center justify-center cursor-pointer group no-underline text-penguin-black"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-penguin-black transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-penguin-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-penguin-black transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-penguin-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              
              <span className="text-sm md:text-lg font-medium pb-0.5">contato</span>
            </a>
          </div>
        </motion.header>

        {/* ÁREA CENTRAL - TEXTO E VÍDEO */}
        <main className="flex-1 flex flex-col items-center justify-center relative z-10 w-full mt-10 md:mt-16 pb-12">
          
          {/* TEXTO GIGANTE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
            className="flex flex-col items-center text-center perspective-[1200px]"
            style={{ perspective: "1200px" }}
          >
            {/* Linha 1: PENGUIN */}
            <h1 className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.8] tracking-tighter text-penguin-black flex">
              {word1.map((char, index) => (
                <motion.span
                  key={`w1-${index}`}
                  variants={letterVariants}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Linha 2: GROWTH */}
            <h1 className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.8] tracking-tighter text-penguin-black flex items-baseline ml-8 md:ml-24 mt-2 md:mt-4">
              {word2.map((char, index) => (
                <motion.span
                  key={`w2-${index}`}
                  variants={letterVariants}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
              
              {/* Ponto final colorido */}
              <motion.span 
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1, transition: { type: "spring", delay: 1.5, damping: 10 } }
                }}
                className="inline-block w-4 h-4 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 ml-4 md:ml-6"
              />
            </h1>
          </motion.div>

          {/* VÍDEO EM LOOPING CRU E DIRETO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isLoading ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mt-16 md:mt-24"
          >
            <video 
              src="/video/home.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
        </main>
      </section>
    </>
  );
}