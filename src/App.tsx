import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  HardHat, 
  Shovel, 
  Truck, 
  Droplets, 
  LayoutGrid,
  Star,
  ArrowRight,
  PhoneCall,
  Facebook
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Services', href: '#services' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-gold-500/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://image2url.com/r2/default/images/1775482529058-3974839a-3c56-47f0-afc6-79a9d4d293ff.png" 
              alt="LAJR Excavation Logo" 
              className="h-16 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-bold tracking-tighter text-white hidden sm:block">
              LAJR<span className="text-gold-400">EXCAVATION</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:4187170566" 
              className="flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-black px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-gold-600/20"
            >
              <Phone size={16} />
              (418) 717-0566
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-t border-gold-500/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-300 hover:text-gold-400 hover:bg-zinc-900 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:4187170566" 
                  className="flex items-center justify-center gap-2 bg-gold-600 text-black w-full py-4 rounded-xl font-bold"
                >
                  <Phone size={18} />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen bg-zinc-950 pt-32 pb-20 flex items-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <img 
                src="https://image2url.com/r2/default/images/1775482529058-3974839a-3c56-47f0-afc6-79a9d4d293ff.png" 
                alt="LAJR Logo" 
                className="h-28 w-auto"
                referrerPolicy="no-referrer"
              />
              <div className="hidden sm:block h-16 w-px bg-gold-500/30"></div>
              <div className="flex flex-col">
                <span className="text-gold-500 font-black tracking-[0.4em] uppercase text-sm mb-1">Expertise & Précision</span>
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Depuis plus de 12 ans</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
              SOLIDITÉ DÈS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500">
                LA BASE
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl border-l-2 border-gold-500/30 pl-6">
              Des aménagements extérieurs haut de gamme, pensés pour durer à Québec. Une exécution précise, des matériaux durables et un souci du détail à chaque étape.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="#contact" 
                className="group relative px-8 py-5 bg-gold-600 text-black font-black text-lg rounded-none overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">DÉBUTER MON PROJET</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="tel:4187170566" 
                className="flex items-center gap-3 text-white font-bold text-lg hover:text-gold-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <Phone size={20} />
                </div>
                (418) 717-0566
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-gold-900/20 border border-white/10 aspect-[4/5] lg:aspect-square">
              <img 
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/663912444_1464509645087890_9057305419027963201_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Nznn5QIgGiEQ7kNvwGgf596&_nc_oc=Adqs2i1yMoGIPxZsbgKzJIDkA5l6lhUbdejYf8Hn0XlUMe8LHAGbs-fn1YDrKcyTF_0&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_ss=7a3a8&oh=03_Q7cD5AH8GQHPpKKr_kene9BQgbOb_HteV3kw4KD00qBXBb25vg&oe=69FB24FD" 
                alt="Excavation machine" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-gold-600 p-6 shadow-2xl z-20 hidden md:block"
            >
              <p className="text-black font-black text-4xl leading-none">PRESTIGE</p>
              <p className="text-black/70 font-bold text-sm uppercase tracking-widest mt-1">SANS COMPROMIS</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="a-propos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
              <img 
                src="https://scontent-lga3-3.xx.fbcdn.net/v/t1.15752-9/657904164_1512291933654968_5129939089774330062_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Cog8luPM0cAQ7kNvwGrOxzk&_nc_oc=AdqEYOsOGe1vr-avF96o4xE5KNYsXDJluXBl_UWy7m1FUJdrKz5hK4OqBFrlq_K_XZ4&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_ss=7a3a8&oh=03_Q7cD5AGYxuL6se56Ej-E8tkKuJ06yd-x46JrVYXndJkjkbo1RA&oe=69FA2B6E" 
                alt="Professional excavation work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-zinc-950 text-white p-8 rounded-3xl shadow-2xl border border-gold-500/30 hidden md:block">
              <p className="text-4xl font-bold mb-1 text-gold-500">12+</p>
              <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Années d'expertise</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">À Propos de nous</h2>
            <h3 className="text-4xl font-extrabold text-zinc-900 mb-6 leading-tight">
              Votre partenaire de confiance pour des fondations et terrains durables
            </h3>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Des aménagements extérieurs haut de gamme, pensés pour durer — à Québec. Une exécution précise. Des matériaux durables. Un souci du détail à chaque étape. Avec plus de 12 ans d’expérience en excavation et aménagement, nous mettons notre savoir-faire au service de vos projets, qu’il s’agisse d’une nouvelle construction ou d’un aménagement extérieur complet.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Chez LAJR Excavation, chaque projet est réalisé avec rigueur, précision et professionnalisme. Grâce à notre équipement moderne et à notre expertise sur le terrain, nous assurons des travaux durables, du nivellement laser à la préparation de fondations solides, en respectant les plus hauts standards de qualité. Nous ne faisons pas que préparer un terrain : nous créons des bases solides pour des aménagements qui dureront dans le temps.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Service clé en main",
                "Respect des délais",
                "Équipement moderne",
                "Expertise locale",
                "Transparence totale",
                "Qualité haut de gamme"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold-500 shrink-0" size={20} />
                  <span className="font-semibold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Aménagement paysager & Murets",
      description: "Création de paliers, pose de tourbe et construction de murets de soutènement. Nous transformons votre terrain brut en un espace extérieur fonctionnel et esthétique.",
      icon: <LayoutGrid className="w-10 h-10" />,
    },
    {
      title: "Excavation & Fondations",
      description: "Creusage de fondations pour maisons neuves, agrandissements et garages. Nous assurons un fond de coffrage impeccable et conforme aux plans d'ingénieur.",
      icon: <HardHat className="w-10 h-10" />,
    },
    {
      title: "Terrassement & Drainage",
      description: "Installation de drains français, correction de pente et nivellement de terrain. Évitez les infiltrations d'eau grâce à une gestion efficace du ruissellement.",
      icon: <Shovel className="w-10 h-10" />,
    },
    {
      title: "Génie civil & Voirie",
      description: "Entrées charretières, chemins d'accès et raccordements aux services. Nous préparons les infrastructures nécessaires pour vos projets résidentiels ou commerciaux.",
      icon: <Truck className="w-10 h-10" />,
    },
    {
      title: "Gestion de projet complète",
      description: "De la première pelletée de terre à la finition granulaire. Un seul interlocuteur pour coordonner l'excavation, le transport de matériaux et le nettoyage final.",
      icon: <CheckCircle2 className="w-10 h-10" />,
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gold-500/50"></span>
              Expertise Terrain
            </h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1]">
              Des fondations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Inébranlables.</span>
            </h3>
          </div>
          <p className="text-zinc-400 text-xl max-w-md pb-2 border-b border-gold-500/20">
            Nous maîtrisons l’art de l’excavation et de l’aménagement paysager pour transformer vos terrains en espaces solides, durables et haut de gamme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 bg-zinc-950 hover:bg-zinc-900/50 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-gold-500 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-black text-zinc-800 group-hover:text-gold-500/20 transition-colors duration-500">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold mb-6 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors mb-8">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-gold-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  En savoir plus <ArrowRight size={16} />
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold-500 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-gold-600 flex flex-col justify-center items-center text-center group cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <h4 className="text-3xl font-black text-black mb-6">Votre projet commence ici</h4>
            <div className="w-16 h-16 rounded-full bg-black text-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <PhoneCall size={28} />
            </div>
            <p className="mt-8 text-black font-bold uppercase tracking-widest text-sm">Demander un devis</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Maxime.L",
      role: "Propriétaire résidentiel",
      text: "Professionnels, projet clef en main supérieure à vos attentes. Des années d'expérience ça se vois avec la qualité et la précision. Service client impeccable à notre écoute ! Je recommande x1000",
      stars: 5
    },
    {
      name: "Jonathan.M",
      role: "Aménagement paysager",
      text: "Très satisfait de LAJR Excavation. Travail soigné, équipe fiable et communication claire du début à la fin. Excellent choix",
      stars: 5
    },
    {
      name: "Jonathan.B",
      role: "Entrepreneur général",
      text: "Excellent service de LAJR Excavation ! Équipe professionnelle, travail bien fait et respect des délais. Je recommande sans hésiter.",
      stars: 5
    }
  ];

  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">Témoignages</h2>
          <h3 className="text-4xl font-extrabold text-zinc-900">Ce que nos clients disent</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-zinc-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-zinc-900">{review.name}</p>
                <p className="text-sm text-zinc-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi à lajr.excavation@outlook.com
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-zinc-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-zinc-950 p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8">Obtenez une estimation juste pour vos travaux</h3>
                <p className="text-zinc-400 text-lg mb-12">
                  Décrivez-nous votre projet d'excavation ou d'aménagement. Nous nous déplaçons partout dans la grande région de Québec pour évaluer vos besoins et vous fournir une soumission détaillée.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-1">Téléphone</p>
                      <a href="tel:4187170566" className="text-xl font-semibold hover:text-gold-500 transition-colors">(418) 717-0566</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-1">Courriel</p>
                      <a href="mailto:lajr.excavation@outlook.com" className="text-xl font-semibold hover:text-gold-500 transition-colors">lajr.excavation@outlook.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider mb-1">Localisation</p>
                      <p className="text-xl font-semibold">Sainte-Brigitte-de-Laval, QC G0A 3K0</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-900">
                  <p className="text-zinc-500 text-sm">Zone de service : Québec, Lévis, Côte-de-Beaupré et environs.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="Jean Tremblay"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="(418) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Courriel</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    placeholder="jean@exemple.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Votre projet</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    placeholder="Décrivez brièvement vos besoins..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-zinc-200 text-zinc-500' : 'bg-gold-600 hover:bg-gold-500 text-black shadow-lg shadow-gold-900/20'}`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      Demander une soumission gratuite
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-zinc-400">
                  Nous vous répondrons dans les plus brefs délais, généralement sous 24h.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8 mb-10">
              <img 
                src="https://image2url.com/r2/default/images/1775482529058-3974839a-3c56-47f0-afc6-79a9d4d293ff.png" 
                alt="LAJR Excavation Logo" 
                className="h-32 w-auto self-start"
                referrerPolicy="no-referrer"
              />
              <span className="text-4xl font-black tracking-tighter">
                LAJR<span className="text-gold-400">EXCAVATION</span>
              </span>
            </div>
            <p className="text-zinc-400 text-lg max-w-md mb-8">
              Expert en excavation, fondations et aménagement paysager à Québec. Licencié RBQ et engagé pour la qualité de vos infrastructures.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61582972181503" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-gold-500/20 rounded-full flex items-center justify-center hover:bg-gold-600 hover:text-black transition-all cursor-pointer group"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook size={18} className="text-gold-500 group-hover:text-black transition-colors" />
              </a>
              <div className="w-10 h-10 bg-zinc-900 border border-gold-500/20 rounded-full flex items-center justify-center hover:bg-gold-600 hover:text-black transition-all cursor-pointer group">
                <span className="font-bold text-gold-500 group-hover:text-black transition-colors">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Liens rapides</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#accueil" className="hover:text-gold-500 transition-colors">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-gold-500 transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#temoignages" className="hover:text-gold-500 transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500" />
                (418) 717-0566
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500" />
                lajr.excavation@outlook.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold-500" />
                Sainte-Brigitte-de-Laval, QC
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} LAJR Excavation. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-300 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans bg-white selection:bg-emerald-500 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
