import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Flower2,
  Heart,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import logo from '../../assets/logo.webp';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-20 pb-12 border-t border-stone-800 relative overflow-hidden">
      {/* Decorative ambient gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7A245A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B18B59]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-stone-800">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="LAK Decors & Events"
                className="h-16 sm:h-20 w-auto max-w-[160px] object-contain group-hover:scale-[1.03] transition-transform"
              />
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              We specialize in turning life’s most precious celebrations into
              timeless memories. From grand royal Indian wedding mandaps and
              reception stages to whimsical milestone birthdays and traditional
              Valaikappu setups.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram SVG */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800/80 hover:bg-[#7A245A] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-stone-700/50"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800/80 hover:bg-[#1877F2] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-stone-700/50"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.8C10.5 0 9 1.5 9 4.6V8z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800/80 hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-stone-700/50"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80 max-w-sm">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% On-Time Execution Guarantee</span>
              </div>
              <p className="text-xs text-stone-400">
                Over 500+ events decorated with a 98% client delight record.
              </p>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="text-white font-serif text-lg font-medium tracking-wide mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B18B59]" />
              Quick Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>All Services</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>Portfolio Gallery</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/our-work"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>Case Studies</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>Client Testimonials</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-200 transition-colors flex items-center justify-between group"
                >
                  <span>Book Your Event</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B18B59]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Featured Services */}
          <div>
            <h4 className="text-white font-serif text-lg font-medium tracking-wide mb-5 flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-[#B18B59]" />
              Event Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-amber-200 transition-colors text-stone-400 hover:text-white line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-amber-300 font-medium hover:underline text-xs inline-block pt-1"
                >
                  + View 3 More Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg font-medium tracking-wide mb-5">
              Contact Studio
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#B18B59] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-stone-400">Direct Phone / Enquiries</p>
                  <p className="font-semibold text-white">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello lak.decor & event maker, I would like to enquire about decor services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-stone-400">WhatsApp Fast Connect</p>
                  <p className="font-semibold text-white">{siteConfig.whatsappDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#B18B59] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-stone-400">Email Address</p>
                  <p className="text-stone-300">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-4 h-4 text-[#B18B59] mt-1 flex-shrink-0" />
                <p className="text-xs leading-relaxed">
                  {siteConfig.address.line1}, {siteConfig.address.city},{' '}
                  {siteConfig.address.state} - {siteConfig.address.pincode}
                </p>
              </div>

              <div className="flex items-start gap-3 text-stone-400">
                <Clock className="w-4 h-4 text-[#B18B59] mt-1 flex-shrink-0" />
                <p className="text-xs leading-relaxed">{siteConfig.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Services in Pondicherry Bar */}
        <div className="py-8 my-4 border-t border-stone-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B18B59] block mb-1">
                Local Event Decoration in Pondicherry & Puducherry
              </span>
              <p className="text-xs text-stone-400">
                Specialized wedding mandaps, reception stages, and milestone birthday decor across Pondicherry, Cuddalore, Villupuram & ECR.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-300">
              <Link to="/wedding-decoration-pondicherry" className="hover:text-amber-200 transition-colors">
                Wedding Decorators Pondicherry
              </Link>
              <span className="text-stone-700">•</span>
              <Link to="/birthday-decoration-pondicherry" className="hover:text-amber-200 transition-colors">
                Birthday Decoration Pondicherry
              </Link>
              <span className="text-stone-700">•</span>
              <Link to="/engagement-decoration-pondicherry" className="hover:text-amber-200 transition-colors">
                Engagement Decoration Pondicherry
              </Link>
              <span className="text-stone-700">•</span>
              <Link to="/reception-decoration-pondicherry" className="hover:text-amber-200 transition-colors">
                Reception Stage Decor Pondicherry
              </Link>
              <span className="text-stone-700">•</span>
              <Link to="/event-decorators-pondicherry" className="hover:text-amber-200 transition-colors">
                Event Decorators Puducherry
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} lak.decor & event maker. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for unforgettably beautiful Indian celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
