import React from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Users, ArrowRight, Smartphone, Star, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// @ts-ignore
import appScreenshot from "@assets/WhatsApp_Image_2026-04-14_at_21.32.16_1776250745571.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-3xl">🐝</span>
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Wanderly</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">HOME</button>
            <button onClick={() => scrollTo('despre')} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">DESPRE NOI</button>
            <button onClick={() => scrollTo('functionalitati')} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">FUNCȚIONALITĂȚI</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors">CONTACT</button>
          </div>
          <Button onClick={() => scrollTo('download')} variant="default" className="font-semibold px-6 hidden md:inline-flex">
            DESCARCĂ
          </Button>
        </div>
      </nav>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/50 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Explorare asistată de AI</span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground">
                Pollinate the World <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">through Adventure!</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Wanderly este aplicația ta de explorare care transformă fiecare plimbare într-o experiență plină de aventură. Lasă-te ghidat de un roi digital către comori ascunse din orașul tău.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full font-semibold shadow-lg shadow-primary/25" onClick={() => scrollTo('download')}>
                  ÎNCEPE SĂ EXPLOREZI <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border hover:bg-card" onClick={() => scrollTo('aplicatie')}>
                  AFLĂ MAI MULTE
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative mx-auto lg:ml-auto max-w-sm"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src={appScreenshot} 
                alt="Wanderly App Interface" 
                className="relative z-10 w-full h-auto rounded-[3rem] border-[8px] border-card shadow-2xl"
              />
              {/* Decorative Hexagons around the phone */}
              <div className="absolute -top-12 -right-12 w-24 h-24 border border-primary/30 rotate-12 opacity-50" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
              <div className="absolute top-1/2 -left-16 w-16 h-16 bg-primary/10 rotate-[30deg]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            </motion.div>
          </div>
        </section>

        {/* APLICAȚIA WANDERLY */}
        <section id="aplicatie" className="py-24 relative z-10 bg-card/30 border-y border-border backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Descoperă Magia din Spatele <span className="text-primary">Wanderly</span></h2>
              <p className="text-muted-foreground text-lg">
                Fiecare stradă ascunde un secret, iar Wanderly este harta ta magică. Alimentată de inteligență artificială și validată cu date reale, aplicația transformă necunoscutul în terenul tău de joacă.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <MapPin className="w-8 h-8 text-primary" />, 
                  title: "Discover Hidden Gems", 
                  desc: "Inteligența artificială analizează interesele tale și generează rute personalizate către locuri uimitoare de care nu știai că există."
                },
                { 
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />, 
                  title: "Verify with Precision", 
                  desc: "Validare în timp real prin integrare cu Google Places. Niciun drum închis, nicio locație inexistentă. Doar experiențe autentice."
                },
                { 
                  icon: <Users className="w-8 h-8 text-primary" />, 
                  title: "Connect & Compete", 
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
                    <svg width="100" height="100" viewBox="0 0 60 100" className="fill-primary"><path d="M30 100L0 82.68V48l30-17.32L60 48v34.68L30 100zM0 34.68L30 17.32 60 34.68V0L30 0 0 0v34.68z"/></svg>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground font-serif">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FUNCȚIONALITĂȚI DETALIATE */}
        <section id="functionalitati" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">Transformă Orice Zi Într-o <span className="text-primary border-b-2 border-primary">Aventură</span></h2>
                  <p className="text-lg text-muted-foreground">Wanderly combină tehnologia de ultimă generație cu elemente de gamificare pentru a te scoate din casă și a te pune în mișcare.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Generare Rute AI", desc: "Setează timpul disponibil și intenția (relaxare, sport, cultură), iar AI-ul creează traseul perfect." },
                    { title: "Sistem de Puncte HIVE", desc: "Adună 'nectar' digital vizitând locații noi. Transformă punctele în reduceri la partenerii locali." },
                    { title: "Misiuni Zilnice", desc: "Provocări spontane care te răsplătesc cu trofee digitale și insigne unice de explorator." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
                        <Zap className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] bg-card border border-border p-8 relative overflow-hidden flex items-center justify-center shadow-2xl">
                  {/* Abstract representation of the app's routing logic */}
                  <div className="absolute inset-0 bg-primary/5 pattern-dots" />
                  <div className="relative z-10 w-full h-full max-w-sm mx-auto border border-primary/20 rounded-2xl bg-background/80 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">🐝</div>
                      <div>
                        <div className="font-bold">Misiune Generată</div>
                        <div className="text-xs text-primary">Spre Parcul Central</div>
                      </div>
                    </div>
                    <div className="h-32 bg-card rounded-xl border border-border overflow-hidden relative">
                      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(200,155,60,0.8)]" />
                      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(200,155,60,0.8)] flex items-center justify-center">
                        <Star className="w-2 h-2 text-background" />
                      </div>
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M 25 50 Q 150 20 225 33" fill="none" stroke="currentColor" className="text-primary/50" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>
                    </div>
                    <Button className="w-full mt-auto bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      ACCEPTĂ MISIUNEA
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DESPRE NOI */}
        <section id="despre" className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-4xl mb-6">🐝</div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Despre Echipa Wanderly</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Suntem un grup de entuziaști ai tehnologiei și exploratori urbani din România. Am creat Wanderly din dorința de a combate sedentarismul și rutina zilnică printr-o abordare inovatoare și distractivă.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Credem că fiecare ieșire din casă poate fi o mică aventură dacă știi unde să privești. Cu ajutorul inteligenței artificiale, ne propunem să "polenizăm" lumea cu curiozitate și bucuria descoperirii.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-left">
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">UTILIZATORI ACTIVI</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">50k+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">LOCAȚII DESCOPERITE</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">ASISTENȚĂ AI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section id="download" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
        <section id="contact" className="py-24 bg-card border-t border-border">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Email</div>
                      <div className="text-muted-foreground">salut@wanderly.ro</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Sediu</div>
                      <div className="text-muted-foreground">București, România</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-background p-8 rounded-2xl border border-border"
              >
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nume</label>
                    <Input placeholder="Cum te numești?" className="bg-card border-border h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="adresa@email.com" className="bg-card border-border h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mesaj</label>
                    <Textarea placeholder="Cu ce te putem ajuta?" className="bg-card border-border min-h-[120px]" />
                  </div>
                  <Button className="w-full h-12 text-lg font-medium mt-4">Trimite Mesajul</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-2xl">🐝</span>
          <span className="font-serif text-xl font-bold text-primary">Wanderly</span>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-sm text-muted-foreground">
          <button className="hover:text-primary transition-colors">Termeni și Condiții</button>
          <button className="hover:text-primary transition-colors">Politică de Confidențialitate</button>
          <button className="hover:text-primary transition-colors">Suport</button>
        </div>
        <p className="text-muted-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Wanderly App. Toate drepturile rezervate. Pollinate the world!
        </p>
      </footer>
    </div>
  );
}
