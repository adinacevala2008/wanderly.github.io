import { motion } from "framer-motion";
import { MapPin, Zap, Users, ArrowRight, Smartphone, Star, Mail, ShieldCheck, Trophy, Gamepad2, Globe, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background hex-bg selection:bg-primary/30 selection:text-primary">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="text-3xl">🐝</span>
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Wanderly</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">HOME</button>
            <button onClick={() => scrollTo("despre")} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">DESPRE NOI</button>
            <button onClick={() => scrollTo("functionalitati")} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">FUNCȚIONALITĂȚI</button>
            <button onClick={() => scrollTo("contact")} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">CONTACT</button>
          </div>
          <Button onClick={() => scrollTo("download")} variant="default" className="font-semibold px-6 hidden md:inline-flex">
            DESCARCĂ
          </Button>
        </div>
      </nav>

      <main className="pt-20">

        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/50 pointer-events-none" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 pointer-events-none"
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />

          <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Explorare asistată de AI</span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground">
                Pollinate the World <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">through Adventure!</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Wanderly este aplicația ta de explorare care transformă fiecare plimbare într-o experiență plină de aventură.
                Folosește puterea AI-ului pentru a te ghida spre locuri noi și interesante, toate învăluite într-o temă captivantă de albine!
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full font-semibold shadow-lg shadow-primary/25" onClick={() => scrollTo("download")}>
                  ÎNCEPE SĂ EXPLOREZI <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border hover:bg-card" onClick={() => scrollTo("despre")}>
                  AFLĂ MAI MULTE
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hex decorations */}
          <div className="absolute right-16 top-1/4 w-32 h-32 border border-primary/20 opacity-40" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <div className="absolute right-48 top-1/2 w-20 h-20 bg-primary/10 opacity-40" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <div className="absolute right-8 bottom-1/4 w-16 h-16 border border-primary/30 opacity-30" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
        </section>

        {/* APLICAȚIA WANDERLY - cele 3 carduri */}
        <section id="aplicatie" className="py-24 relative z-10 bg-card/30 border-y border-border backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Aplicația <span className="text-primary">Wanderly</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Descoperă o lume plină de surprize care wanderly! Aplicația transformă plimbările obișnuite în aventuri captivante,
                folosind inteligența artificială și oferind experiențe personalizate. Explorează locuri care îți bucură sufletul și fac
                fiecare pas al călătoriei pentru distracție.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-8 h-8 text-primary" />,
                  title: "Descoperă Locuri Ascunse",
                  subtitle: "AI-Driven Curation",
                  desc: "Inteligența artificială analizează interesele tale și generează rute personalizate către locuri uimitoare de care nu știai că există."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                  title: "Verificare cu Precizie",
                  subtitle: "Google Places Verification",
                  desc: "Validare în timp real prin integrare cu Google Places. Niciun drum închis, nicio locație inexistentă. Doar experiențe autentice."
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: "Conectează-te și Concurează",
                  subtitle: "Leaderboard, Check-in Bonuses",
                  desc: "Adaugă prieteni, adună puncte prin check-in-uri și urcă în clasamentul exploratorilor. Mișcarea devine un joc recompensat."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-background border border-primary/20 hover:border-primary/50 transition-all p-8 rounded-2xl group hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg width="100" height="100" viewBox="0 0 60 100" className="fill-primary"><path d="M30 100L0 82.68V48l30-17.32L60 48v34.68L30 100zM0 34.68L30 17.32 60 34.68V0L30 0 0 0v34.68z" /></svg>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground font-serif">{feature.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3 uppercase tracking-wide">{feature.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FUNCȚIONALITĂȚILE APLICAȚIEI */}
        <section id="functionalitati" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                  Funcționalitățile Aplicației <span className="text-primary">Wanderly</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wanderly transformă deplasările zilnice într-o experiență interactivă, utilizând inteligența artificială pentru a genera misiuni
                  adaptate locației tale. Aplicația îmbină explorarea locurilor mai puțin cunoscute cu elemente de joc, oferind un sistem motivant
                  de recompense care încurajează mișcarea și descoperirea constantă a mediului înconjurător.
                </p>
                <Button size="lg" className="h-14 px-8 rounded-full font-semibold" onClick={() => scrollTo("download")}>
                  DESCOPERIȚI ACUM! <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl aspect-video bg-card flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="text-6xl">🐝</div>
                    <div className="font-serif text-2xl font-bold text-primary">Explorează cu Wanderly</div>
                    <p className="text-muted-foreground">Descoperă lumea din jurul tău într-un mod nou și captivant</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Grid funcționalități */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-center mb-12">
                Funcționalitățile <span className="text-primary">Noastre</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Zap className="w-7 h-7 text-primary" />,
                    title: "Misiuni Generate de AI",
                    desc: "Wanderly utilizează un sistem avansat de AI pentru a genera obiective personalizate pentru fiecare utilizator. Aplicația analizează contextul urban sau natural și propune provocări specifice, cum ar fi explorarea unui traseu nou pe bicicletă sau descoperirea unor puncte de interes aflate la mică distanță. Astfel, fiecare ieșire devine o oportunitate de a rămâne activ într-un mod dinamic și inovator."
                  },
                  {
                    icon: <Trophy className="w-7 h-7 text-primary" />,
                    title: "Sistem de Joc",
                    desc: `Transformăm mișcarea într-o activitate distractivă printr-un sistem de joc interactiv. În rolul de "albină exploratoare", fiecare deplasare îți aduce puncte și "nectar". Sistem de Streak-uri: Recompensăm constanța în activitatea fizică zilnică. Leaderboard: O secțiune dedicată unde poți concura cu ceilalți utilizatori și îți poți monitoriza progresul în comunitate.`
                  },
                  {
                    icon: <Globe className="w-7 h-7 text-primary" />,
                    title: "Descoperire Locală",
                    desc: `Wanderly te îndeamnă să ieși de pe traseele obișnuite și să descoperi orașul dintr-o perspectivă nouă. Punem accent pe "locurile ascunse" - acele parcuri liniștite sau străzi cu farmec care nu apar de obicei în ghidurile turistice standard. Obiectivul nostru este să transformăm fiecare plimbare sau drum spre muncă într-o experiență autentică de explorare.`
                  },
                  {
                    icon: <Gamepad2 className="w-7 h-7 text-primary" />,
                    title: "Gamificare Eficientă",
                    desc: "Prin gamificare, activitățile obișnuite devin provocări incitante, care mențin utilizatorii motivați și implicați. Fiecare check-in, fiecare loc nou descoperit și fiecare misiune completată îți aduce recompense care fac experiența unică și de neuitat."
                  },
                  {
                    icon: <Smartphone className="w-7 h-7 text-primary" />,
                    title: "Interfață Prietenoasă",
                    desc: "Wanderly oferă o experiență de utilizare intuitivă cu un design modern, ușor de navigat, care atrage atenția. Interfața a fost gândită pentru toți utilizatorii, indiferent de experiența tehnologică, astfel încât toată lumea să poată explora cu ușurință."
                  },
                  {
                    icon: <MapPin className="w-7 h-7 text-primary" />,
                    title: "Rute Personalizate",
                    desc: "Setează timpul disponibil și intenția (relaxare, sport, cultură), iar AI-ul creează traseul perfect adaptat preferințelor tale. Fiecare rută este unică și adaptată contextului tău, oferind o experiență de explorare autentică și plăcută."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="bg-card border border-border hover:border-primary/40 transition-all p-6 rounded-2xl group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-foreground font-serif">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DESPRE WANDERLY */}
        <section id="despre" className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                  Despre Wanderly — <span className="text-primary">Explorare în Stil Nou</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Descoperiți universul fascinant al Wanderly, o aplicație care transformă explorarea într-o experiență captivantă
                  și interactivă. Folosind inteligența artificială și teme inspirate din lumea albinelor, fiecare utilizator este
                  încurajat să își descopere împrejurimile într-un mod distractiv.
                </p>
                <Button size="lg" className="h-14 px-8 rounded-full font-semibold" onClick={() => scrollTo("download")}>
                  ÎNCEPE AVENTURA! <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/3] bg-background flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <span className="text-4xl">🐝</span>
                    </div>
                    <div className="font-serif text-3xl font-bold text-primary">Wanderly</div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {["🗺️", "📅", "Wanderly", "👥"].map((item, i) => (
                        <div key={i} className="bg-card border border-border rounded-xl p-3 text-center text-xs text-muted-foreground">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CINE SUNTEM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-primary">Cine suntem?</h2>
              <div className="grid md:grid-cols-2 gap-8 bg-background rounded-3xl border border-border p-8 md:p-12">
                <div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Suntem un grup de elevi de clasa a X-a, de la Colegiul Național „Spiru Haret", pasionați de tehnologie
                    și de explorare activă. Echipa noastră este formată din: Adina Cevală, Leon Ungureanu, Albert Jucătoru.
                    Activitatea noastră este coordonată și susținută de doamna profesor Mihaela Onica, care ne-a ghidat în
                    transformarea conceptului Wanderly dintr-o simplă idee într-un proiect digital concret.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Împreună, ne propunem să folosim inovația pentru a încuraja mișcarea și descoperirea locurilor de lângă noi.
                    Credem că tehnologia poate fi un instrument puternic pentru a ne ajuta să explorăm lumea din jurul nostru
                    într-un mod distractiv și educativ, contribuind totodată la un stil de viață mai activ și mai sănătos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALORILE NOASTRE */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                Valorile <span className="text-primary">Noastre</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-primary" />,
                  title: "Inovație",
                  desc: "Folosim tehnologia de ultimă oră pentru a-ți oferi experiențe de explorare pe care nu le vei uita."
                },
                {
                  icon: <Heart className="w-10 h-10 text-primary" />,
                  title: "Comunitate",
                  desc: "Încurajăm colaborarea și schimbul de experiențe între utilizatorii care împărtășesc aceeași pasiune."
                },
                {
                  icon: <Leaf className="w-10 h-10 text-primary" />,
                  title: "Sustenabilitate",
                  desc: "Avem grijă de mediul înconjurător prin promovarea unui comportament responsabil față de natură."
                }
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="text-center p-8"
                >
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{val.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* ECHIPA NOVAHORIZON */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
                Echipa <span className="text-primary">NovaHorizon</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Cevală Adina-Gabriela",
                    role: "Creativă, inovatoare pasionată de tehnologie și de explorare."
                  },
                  {
                    name: "Ungureanu Mihai-Leon",
                    role: "Expert în dezvoltarea de aplicații și soluții AI."
                  },
                  {
                    name: "Jucătoru Albert",
                    role: "Responsabil de partea vizuală și interfața utilizatorului."
                  }
                ].map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20 text-2xl">
                      🐝
                    </div>
                    <h4 className="text-lg font-bold text-primary font-serif mb-2">{member.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.role}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-card border border-border rounded-2xl p-6 text-center">
                <p className="text-muted-foreground">
                  Activitatea echipei este coordonată și susținută de{" "}
                  <span className="text-primary font-semibold">doamna profesor Mihaela Onica</span>,
                  care ne-a ghidat în transformarea conceptului Wanderly dintr-o simplă idee într-un proiect digital concret.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section id="download" className="py-32 relative overflow-hidden bg-card border-y border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-6">🐝</div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
                Gata Să Începi <span className="text-primary">Aventura?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Alătură-te mii de exploratori care redescoperă orașul în fiecare zi. Descarcă aplicația gratuit și începe prima ta misiune Wanderly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-16 px-8 rounded-full text-lg w-full sm:w-auto flex items-center gap-3">
                  <Smartphone className="w-6 h-6" />
                  Descarcă pe iOS
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-8 rounded-full text-lg w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 flex items-center gap-3">
                  <Smartphone className="w-6 h-6" />
                  Descarcă pe Android
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Păstrăm Legătura</h2>
                <p className="text-muted-foreground mb-8">
                  Ai o întrebare, o sugestie sau pur și simplu vrei să ne spui cum a fost ultima ta aventură? Scrie-ne!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Email</div>
                      <div className="text-muted-foreground">salut@wanderly.ro</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Școală</div>
                      <div className="text-muted-foreground">Colegiul Național „Spiru Haret", București</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nume</label>
                    <Input placeholder="Cum te numești?" className="bg-background border-border h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="adresa@email.com" className="bg-background border-border h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mesaj</label>
                    <Textarea placeholder="Cu ce te putem ajuta?" className="bg-background border-border min-h-[120px]" />
                  </div>
                  <Button className="w-full h-12 text-lg font-medium mt-4">Trimite Mesajul</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-2xl">🐝</span>
          <span className="font-serif text-xl font-bold text-primary">Wanderly</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 italic">
          "Pollinate the World through Adventure!"
        </p>
        <div className="flex justify-center gap-6 mb-8 text-sm text-muted-foreground">
          <button className="hover:text-primary transition-colors">Termeni și Condiții</button>
          <button className="hover:text-primary transition-colors">Politică de Confidențialitate</button>
          <button className="hover:text-primary transition-colors">Suport</button>
        </div>
        <p className="text-muted-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Wanderly — Echipa NovaHorizon. Colegiul Național „Spiru Haret". Toate drepturile rezervate.
        </p>
      </footer>
    </div>
  );
}
