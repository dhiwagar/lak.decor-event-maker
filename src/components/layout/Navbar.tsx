import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import logo from '../../assets/logo.webp';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/services';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 shadow-sm border-b border-stone-200/60'
          : 'bg-[#FAF7F5]/90 backdrop-blur-md py-3 sm:py-3.5 border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Business logo */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0 group"
          >
            <img src={logo} alt="LAK Decors & Events" className="h-11 sm:h-12 xl:h-14 w-auto max-w-[150px] sm:max-w-[170px] object-contain transition-transform group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Nav Links (Hidden below 1180px to prevent wrapping on 13-inch laptops) */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-shrink-0">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-[13px] 2xl:text-sm font-medium transition-colors py-2 whitespace-nowrap flex-shrink-0 ${
                        isActive(link.path)
                          ? 'text-[#7A245A] font-bold'
                          : 'text-[#483F4C] hover:text-[#7A245A]'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#7A245A]' : ''
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full -left-16 w-[520px] bg-white/98 backdrop-blur-xl border border-stone-200/90 shadow-2xl rounded-2xl p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#FAF7F5] transition-all group/item"
                          >
                            <img
                              src={service.heroImage}
                              alt={service.title}
                              className="w-10 h-10 rounded-lg object-cover group-hover/item:scale-105 transition-transform shadow-sm flex-shrink-0"
                            />
                            <div>
                              <h4 className="text-xs font-semibold text-[#231E26] group-hover/item:text-[#7A245A] transition-colors flex items-center gap-1 whitespace-nowrap">
                                {service.title}
                                <ArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#B18B59]" />
                              </h4>
                              <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                {service.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-[#8A685E] px-2">
                          <span>Bespoke styling for all occasions</span>
                          <Link
                            to="/services"
                            className="text-[#7A245A] font-bold hover:underline flex items-center gap-1"
                          >
                            View All Services &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] 2xl:text-sm font-medium transition-colors relative py-1 whitespace-nowrap flex-shrink-0 ${
                    isActive(link.path)
                      ? 'text-[#7A245A] font-bold'
                      : 'text-[#483F4C] hover:text-[#7A245A]'
                  }`}
                >
                  <span className="whitespace-nowrap inline-block">{link.name}</span>
                  {isActive(link.path) && (
                    <span className="absolute bottom-[-3px] left-0 right-0 h-0.5 bg-[#7A245A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: Phone, WhatsApp, Book CTA (Strict Single-Line & Non-shrinking) */}
          <div className="hidden xl:flex items-center gap-2.5 flex-shrink-0">
            {/* Phone Pill */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#231E26] bg-white border border-stone-200/90 hover:border-[#B18B59] hover:text-[#7A245A] transition-all shadow-sm whitespace-nowrap flex-shrink-0"
              title="Call Studio"
            >
              <Phone className="w-3.5 h-3.5 text-[#B18B59] flex-shrink-0" />
              <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
            </a>

            {/* WhatsApp Green Pill */}
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                'Hello lak.decor & event maker, I would like to enquire about event decoration.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-transform hover:scale-110 shadow-sm flex-shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
            </a>

            {/* Book Your Event Gradient Pill Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#7A245A] to-[#58143F] hover:from-[#6b1e4e] hover:to-[#450e30] text-white px-4 py-2 rounded-full text-xs 2xl:text-sm font-semibold tracking-wide flex items-center gap-1.5 shadow-md whitespace-nowrap flex-shrink-0 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-pink-200 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Your Event</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5 flex-shrink-0" />
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Button (Active below 1280px to guarantee zero wrapping) */}
          <div className="flex items-center gap-2 xl:hidden flex-shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2 rounded-full bg-white border border-stone-200 text-[#7A245A] shadow-sm flex-shrink-0"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                'Hello lak.decor & event maker, I would like to enquire about event decoration.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white shadow-sm flex-shrink-0"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-stone-200 text-[#231E26] shadow-sm flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#7A245A]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[58px] sm:top-[62px] bg-white/98 backdrop-blur-2xl border-b border-stone-200 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 text-base font-medium flex items-center justify-between border-b border-stone-100 ${
                  isActive(link.path)
                    ? 'text-[#7A245A] font-bold'
                    : 'text-[#231E26]'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <span className="w-2 h-2 rounded-full bg-[#7A245A]" />
                )}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <div className="p-3 bg-[#FAF7F5] rounded-xl border border-stone-200/60">
                <p className="text-xs text-[#8A685E] font-semibold mb-1">
                  Direct Decor Specialist Hotline:
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-base font-semibold text-[#7A245A] flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#7A245A] to-[#58143F] text-white w-full py-3 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Event Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
