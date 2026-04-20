import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Zap, Users, ArrowRight, Mail, ShieldCheck, Trophy, Gamepad2, Globe, Heart, Leaf, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// @ts-ignore
import logoImg from "@assets/logo_nou-Picsart-AiImageEnhancer_1776267648609.png";
// @ts-ignore
import phoneImg from "@assets/telefon_gemini-removebg-preview_1776272992745.png";
// @ts-ignore
import screen1 from "@assets/image_1776267707591.png";
// @ts-ignore
import screen2 from "@assets/image_1776267722559.png";
// @ts-ignore
import screen3 from "@assets/image_1776267734605.png";
// @ts-ignore
import screen4 from "@assets/image_1776267746282.png";
// @ts-ignore
import screen5 from "@assets/image_1776267760276.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
};


export default function Home() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Mesaj de la ${name} — Wanderly`);
    const body = encodeURIComponent(`Nume: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`);
    window.open(`mailto:wanderly.learning.app@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background hex-bg selection:bg-primary/30 selection:text-primary">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logoImg} alt="Wanderly Logo" className="h-12 w-12 rounded-xl object-cover" />
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Wanderly</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "HOME", id: "" },
              { label: "DESPRE NOI", id: "despre" },
              { label: "FUNCȚIONALITĂȚI", id: "functionalitati" },
              { label: "CONTACT", id: "contact" },
            ].map(({ label, id }) => (
              <button
                key={label}
                onClick={() => id ? scrollTo(id) : window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollTo("download")} className="font-semibold px-6 hidden md:inline-flex">
            DESCARCĂ
          </Button>
        </div>
      </nav>

      <main className="pt-20">

        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/50 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6 text-foreground">
                Pollinate the World <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">through Adventure!</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
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

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />
              <img
                src={phoneImg}
                alt="Wanderly App pe telefon"
                className="relative z-10 w-auto max-h-[520px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Hex decorations */}
          <div className="absolute right-8 bottom-1/3 w-24 h-24 border border-primary/20 opacity-30" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
          <div className="absolute left-1/3 bottom-10 w-14 h-14 bg-primary/10 opacity-30" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
        </section>


        {/* APLICAȚIA WANDERLY — cele 3 carduri */}
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
                Descoperă o lume plină de surprize! Aplicația transformă plimbările obișnuite în aventuri captivante,
                folosind inteligența artificială și oferind experiențe personalizate. Explorează locuri care îți bucură sufletul.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-8 h-8 text-primary" />,
                  title: "Descoperă Locuri Ascunse",
                  subtitle: "AI-Driven Curation",
                  desc: "Inteligența artificială analizează interesele tale și generează rute personalizate către locuri uimitoare."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                  title: "Verificare cu Precizie",
                  subtitle: "Google Places Verification",
                  desc: "Validare în timp real prin integrare cu Google Places. Niciun drum închis, nicio locație inexistentă."
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: "Conectează-te și Concurează",
                  subtitle: "Leaderboard, Check-in Bonuses",
                  desc: "Adaugă prieteni, adună puncte prin check-in-uri și urcă în clasamentul exploratorilor."
                }
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-background border border-primary/20 hover:border-primary/50 transition-all p-8 rounded-2xl group hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg width="90" height="90" viewBox="0 0 60 100" className="fill-primary"><path d="M30 100L0 82.68V48l30-17.32L60 48v34.68L30 100zM0 34.68L30 17.32 60 34.68V0L30 0 0 0v34.68z" /></svg>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-foreground font-serif">{f.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3 uppercase tracking-wide">{f.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FUNCȚIONALITĂȚI */}
        <section id="functionalitati" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Funcționalitățile Aplicației <span className="text-primary">Wanderly</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Wanderly transformă deplasările zilnice într-o experiență interactivă, utilizând inteligența artificială
                pentru a genera misiuni adaptate locației tale. Explorează mai mult, descoperă mai mult!
              </p>
              <Button size="lg" className="h-14 px-8 rounded-full font-semibold" onClick={() => scrollTo("download")}>
                DESCOPERIȚI ACUM! <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Grid funcționalități */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-center mb-12">
                Funcționalitățile <span className="text-primary">Noastre</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Zap className="w-7 h-7 text-primary" />,
                    title: "Misiuni Generate de AI",
                    desc: "Wanderly utilizează un sistem avansat de AI pentru a genera obiective personalizate. Aplicația analizează contextul urban sau natural și propune provocări specifice — de la explorarea unui traseu nou pe bicicletă, la descoperirea unor puncte de interes aflate la mică distanță."
                  },
                  {
                    icon: <Trophy className="w-7 h-7 text-primary" />,
                    title: "Sistem de Joc",
                    desc: `Transformăm mișcarea într-o activitate distractivă. In rolul de "albina exploratoare", fiecare deplasare iti aduce puncte si "nectar". Sistem de Streak-uri: Recompensam constanta in activitatea fizica zilnica. Leaderboard: Concureaza cu ceilalti si monitorizeaza-ti progresul.`
                  },
                  {
                    icon: <Globe className="w-7 h-7 text-primary" />,
                    title: "Descoperire Locala",
                    desc: `Wanderly te indeamna sa iesi de pe traseele obisnuite si sa descoperi orasul dintr-o perspectiva noua. Punem accent pe "locurile ascunse" - acele parcuri linistite sau strazi cu farmec care nu apar in ghidurile turistice standard.`
                  },
                  {
                    icon: <Gamepad2 className="w-7 h-7 text-primary" />,
                    title: "Gamificare Eficientă",
                    desc: "Prin gamificare, activitățile obișnuite devin provocări incitante, care mențin utilizatorii motivați și implicați. Fiecare check-in și fiecare misiune completată îți aduce recompense unice."
                  },
                  {
                    icon: <MapPin className="w-7 h-7 text-primary" />,
                    title: "Interfață Prietenoasă",
                    desc: "Wanderly oferă o experiență de utilizare intuitivă cu un design modern, ușor de navigat, care atrage atenția. Gândită pentru toți utilizatorii, indiferent de experiența tehnologică."
                  },
                  {
                    icon: <Users className="w-7 h-7 text-primary" />,
                    title: "Rute Personalizate",
                    desc: "Setează timpul disponibil și intenția (relaxare, sport, cultură), iar AI-ul creează traseul perfect adaptat preferințelor tale. Fiecare rută este unică și adaptată contextului tău."
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

        {/* PREZENTARE INTERFEȚE APP */}
        <section id="interfete" className="py-24 bg-card/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-4"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                Interfețele <span className="text-primary">Aplicației</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un design elegant, intuitiv și inspirat din lumea albinelor. Descoperă cum arată Wanderly pe telefonul tău.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start"
            >
              {[
                { src: screen1, label: "Autentificare" },
                { src: screen2, label: "Hartă & Misiuni" },
                { src: screen3, label: "Misiunile Mele" },
                { src: screen4, label: "Locuri Ascunse" },
                { src: screen5, label: "Profilul Meu" },
              ].map(({ src, label }, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="relative w-full rounded-[2rem] overflow-hidden border-4 border-border shadow-xl group-hover:border-primary/50 transition-all group-hover:scale-[1.03] duration-300">
                    <img
                      src={src}
                      alt={`Wanderly - ${label}`}
                      className="w-full object-cover"
                      style={{ aspectRatio: "9/19" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-medium text-primary tracking-wide">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DESPRE WANDERLY */}
        <section id="despre" className="py-24 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                  Despre Wanderly — <span className="text-primary">Explorare în Stil Nou</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Descoperiți universul fascinant al Wanderly, o aplicație care transformă explorarea într-o experiență
                  captivantă și interactivă. Folosind inteligența artificială și teme inspirate din lumea albinelor,
                  fiecare utilizator este încurajat să își descopere împrejurimile într-un mod distractiv.
                </p>
                <Button size="lg" className="h-14 px-8 rounded-full font-semibold" onClick={() => scrollTo("download")}>
                  ÎNCEPE AVENTURA! <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* CINE SUNTEM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-primary">Cine suntem?</h2>
              <div className="grid md:grid-cols-2 gap-8 bg-card rounded-3xl border border-border p-8 md:p-12">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Suntem un grup de elevi de clasa a X-a, de la Colegiul Național „Spiru Haret" din Târgu Jiu, pasionați de
                  tehnologie și de explorare activă. Echipa noastră este formată din: Adina Cevală, Leon Ungureanu, Albert Jucătoru.
                  Activitatea noastră este coordonată și susținută de doamna profesor Mihaela Onica, care ne-a ghidat în
                  transformarea conceptului Wanderly dintr-o simplă idee într-un proiect digital concret.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Împreună, ne propunem să folosim inovația pentru a încuraja mișcarea și descoperirea locurilor de lângă noi.
                  Credem că tehnologia poate fi un instrument puternic pentru a explora lumea din jurul nostru într-un mod
                  distractiv și educativ, contribuind totodată la un stil de viață mai activ și mai sănătos.
                </p>
              </div>
            </motion.div>

            {/* VALORILE NOASTRE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
                Valorile <span className="text-primary">Noastre</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: <Zap className="w-10 h-10 text-primary" />, title: "Inovație", desc: "Folosim tehnologia de ultimă oră pentru a-ți oferi experiențe de explorare pe care nu le vei uita." },
                  { icon: <Heart className="w-10 h-10 text-primary" />, title: "Comunitate", desc: "Încurajăm colaborarea și schimbul de experiențe între utilizatorii care împărtășesc aceeași pasiune." },
                  { icon: <Leaf className="w-10 h-10 text-primary" />, title: "Sustenabilitate", desc: "Avem grijă de mediul înconjurător prin promovarea unui comportament responsabil față de natură." }
                ].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="text-center p-8 bg-card rounded-2xl border border-border"
                  >
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                      {v.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ECHIPA NOVAHORIZON */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
                Echipa <span className="text-primary">NovaHorizon</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { name: "Cevală Adina-Gabriela", role: "Creativă, inovatoare pasionată de tehnologie și de explorare." },
                  { name: "Ungureanu Mihai-Leon", role: "Expert în dezvoltarea de aplicații și soluții AI." },
                  { name: "Jucătoru Albert", role: "Responsabil de partea vizuală și interfața utilizatorului." }
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
                  >
                    <h4 className="text-lg font-bold text-primary font-serif mb-2">{m.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.role}</p>
                  </motion.div>
                ))}
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <p className="text-muted-foreground">
                  Activitatea echipei este coordonată și susținută de{" "}
                  <span className="text-primary font-semibold">doamna profesor Mihaela Onica</span>,
                  care ne-a ghidat în transformarea conceptului Wanderly dintr-o simplă idee într-un proiect digital concret.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOWNLOAD CTA — DOAR ANDROID */}
        <section id="download" className="py-32 relative overflow-hidden bg-card border-y border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={logoImg} alt="Wanderly" className="w-24 h-24 mx-auto mb-6 rounded-2xl object-cover shadow-xl" />
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
                Gata Să Începi <span className="text-primary">Aventura?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                Alătură-te exploratorilor care redescoperă orașul în fiecare zi. Descarcă aplicația gratuit pe Android și începe prima ta misiune Wanderly.
              </p>
              <p className="text-sm text-primary/80 mb-10 font-medium">
                Disponibil momentan doar pe Android
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="h-16 px-10 rounded-full text-lg flex items-center gap-3 shadow-lg shadow-primary/25" onClick={() => window.open("https://download1586.mediafire.com/ouy2wsuf7xygHWGBQmNwr0E0T8-mDExRuZWx0nMwezlbokYe3YnS3aTOHBXa4RoxOUA34t3fyWQS6TsO2BaZr_m9dM_oF6j80ywHlismg1yL3zJV-M4WAzD23ULjM834HAwwHaxOhWkDGUKaAQxB5mF_CuSKnL_2UiY2fgBCbA/k9xjcjbubm3dsor/wanderly.apk", "_blank", "noopener,noreferrer")}>
                  <Download className="w-6 h-6" />
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
                      <div className="text-muted-foreground">wanderly.learning.app@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Școală</div>
                      <div className="text-muted-foreground">Colegiul Național „Spiru Haret", Târgu Jiu</div>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nume *</label>
                    <Input
                      placeholder="Cum te numești?"
                      className="bg-background border-border h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="adresa@email.com"
                      className="bg-background border-border h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mesaj *</label>
                    <Textarea
                      placeholder="Cu ce te putem ajuta?"
                      className="bg-background border-border min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-medium mt-4"
                    disabled={sent}
                  >
                    {sent ? "Mesaj deschis in clientul tau de email!" : "Trimite Mesajul"}
                  </Button>
                  {sent && (
                    <p className="text-center text-sm text-primary mt-2">
                      Se deschide clientul tau de email cu mesajul pre-completat. Trimite-l de acolo!
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src={logoImg} alt="Wanderly" className="w-10 h-10 rounded-xl object-cover" />
          <span className="font-serif text-xl font-bold text-primary">Wanderly</span>
        </div>
        <p className="text-muted-foreground text-sm mb-6 italic">
          "Pollinate the World through Adventure!"
        </p>
        <p className="text-muted-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Wanderly — Echipa NovaHorizon, Colegiul Național „Spiru Haret" Târgu Jiu.
        </p>
      </footer>
    </div>
  );
}
