import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Heart,
  Award,
  ShieldCheck,
  Clock,
  Compass,
  Palette,
  ArrowRight,
  Phone,
  MessageCircle,
  Flower2,
  Users,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SpotlightCard } from '../../components/animations/SpotlightCard';
import { ScrollReveal } from '../../components/animations/ScrollReveal';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Lakshmanan K.',
      role: 'Founder & Principal Creative Director',
      bio: 'Over 10 years crafting bespoke event narratives, luxury mandaps, and signature wedding aesthetics across South India.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Vandhana Murugan',
      role: 'Master Floral Architect',
      bio: 'Trained in classical South Indian temple garlands and European botanical arrangements with exotic hydrangeas and orchids.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Arunachalam S.',
      role: 'Head of Structural Production',
      bio: 'Pioneer of modular aluminum stage rigging and safety-certified structures capable of supporting grand chandeliers and flower walls.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Kavitha R.',
      role: 'Client Experience & 3D Visualizer',
      bio: 'Brings clients’ dreams into photorealistic 3D renders, ensuring exact aesthetic synchronization before a single flower is cut.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Humble Beginnings',
      desc: 'Founded with a passion for handcrafted floral garlands and intimate family celebrations.',
    },
    {
      year: '2019',
      title: 'Expanded to Grand Ballrooms',
      desc: 'Expanded our wedding decoration work with bespoke floral mandaps and celebration styling.',
    },
    {
      year: '2022',
      title: 'Thematic 3D Workshop',
      desc: 'Established our in-house carpentry and fabrication facility for customized 3D character props and neon backdrops.',
    },
    {
      year: '2026',
      title: '500+ Unforgettable Milestones',
      desc: 'Now welcoming wedding and event decoration enquiries in Pondicherry and Puducherry.',
    },
  ];

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title="Our Story & Creative Philosophy"
        subtitle="Crafting extraordinary, emotionally resonant celebratory spaces where tradition blossoms into modern luxury."
        badge="ABOUT LAK.DECOR & EVENT MAKER"
        image="/assets/images/ai-hero-mandap.webp"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Brand Story Editorial Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Asymmetric image gallery */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80">
                  <img
                    src="/assets/images/real/signature-royal-wedding-mandap.jpg"
                    alt="Floral Mandap Artistry by lak.decor & event maker"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl p-6 bg-white border border-stone-200 shadow-sm text-center">
                  <span className="text-3xl font-serif font-bold text-[#7A245A] block">
                    {siteConfig.eventsCompleted}+
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Grand Celebrations Created
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl p-6 bg-[#7A245A] text-white shadow-lg text-center">
                  <Heart className="w-8 h-8 text-pink-200 mx-auto mb-2" />
                  <span className="text-3xl font-serif font-bold block">
                    {siteConfig.happyClientsPercentage}%
                  </span>
                  <span className="text-xs text-stone-200 font-light">
                    Client Referral & Joy Rate
                  </span>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80">
                  <img
                    src="/assets/images/real/reception-modern-petal-stage.jpg"
                    alt="Celebration Decor by lak.decor & event maker"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right: Story Prose */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18B59] block">
                CRAFTED WITH SOUL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#29251F] leading-tight">
                Every Celebration Deserves An{' '}
                <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7A245A] font-normal block">
                  Extraordinary Setting
                </span>
              </h2>

              <p className="text-base text-stone-600 font-light leading-relaxed">
                At <strong>lak.decor & event maker</strong>, we view event
                decoration not as mere ornamentation, but as spatial storytelling.
                Whether it is the auspicious scent of Madurai malli swaying from a
                traditional wedding mandap or the joyful colors of a pastel
                safari first birthday, every stage we design is a canvas of
                emotion.
              </p>

              <p className="text-base text-stone-600 font-light leading-relaxed">
                Founded with a conviction that premium luxury decor should be
                deeply personalized and executed with flawless punctuality, our
                team brings together master florists, structural designers, and
                lighting architects under one roof.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-stone-200">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#7A245A] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#29251F]">
                      Bespoke Tailoring
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Personalized color harmonies and custom structures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#B18B59] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#29251F]">
                      Timely Delivery
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Ready 3 hours prior to guest arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-[#F6F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR GUIDING COMPASS"
            title="Vision, Mission &"
            highlightText="Core Values"
            subtitle="The enduring artistic principles that anchor every event we undertake."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#7A245A]/10 text-[#7A245A] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#29251F] mb-3">
                Our Vision
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                To be the most trusted and creatively revered event decoration
                studio in South India, celebrated for blending rich heritage with
                modern cinematic staging.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#B18B59]/15 text-[#8E6838] flex items-center justify-center mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#29251F] mb-3">
                Our Mission
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                To eliminate the stress of celebration planning by delivering
                punctual, visually magnificent, and personalized event decor that
                exceeds expectations every single time.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#7A245A]/10 text-[#7A245A] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#29251F] mb-3">
                Our Values
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                Artistic integrity, respectful cultural observance, temperature-safe
                fresh botanicals, safety-engineered staging, and heartfelt
                service.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Team Presentation */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CREATIVE MINDS"
            title="Meet The Artisans"
            highlightText="Behind Your Dream Stage"
            subtitle="The passionate designers, florists, and production managers who bring magic to life."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-72 overflow-hidden bg-stone-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-serif font-medium text-[#29251F]">
                    {member.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#7A245A] uppercase tracking-wider block mt-1">
                    {member.role}
                  </span>
                  <p className="text-xs text-stone-500 font-light mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Journey */}
      <section className="py-20 bg-[#1C1917] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR JOURNEY"
            title="A Decade of"
            highlightText="Unforgettable Moments"
            subtitle="From our very first flower garland to 500+ landmark celebrations."
            light={true}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl bg-stone-900 border border-stone-800 relative"
              >
                <span className="text-3xl font-serif font-bold text-amber-200 block mb-2">
                  {m.year}
                </span>
                <h4 className="text-base font-semibold text-white mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {m.desc}
                </p>
                <span className="absolute top-6 right-6 text-xs text-[#B18B59]">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAF8F4] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#29251F] mb-4">
            Ready to bring your dream celebration to life?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light mb-8">
            Speak directly with our senior event stylists today. We are always happy to explore themes, colors, and layout possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="luxury-gradient-btn px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md"
            >
              Book A Free Consultation
            </Link>
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-[#29251F] bg-white border border-stone-200 hover:border-[#B18B59] hover:text-[#7A245A] transition-all shadow-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Specialist ({siteConfig.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
