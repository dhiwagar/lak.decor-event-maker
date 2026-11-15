import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { PageBanner } from '../../components/common/PageBanner';
import { SpotlightCard } from '../../components/animations/SpotlightCard';

export const OurWorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'receptions', label: 'Receptions' },
    { id: 'engagements', label: 'Engagements' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'haldi', label: 'Haldi & Mehendi' },
    { id: 'floral', label: 'Floral & Grand Decor' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <PageBanner
        badge="REAL CELEBRATIONS"
        title="Our Featured Event Portfolio"
        subtitle="Explore our in-depth case studies celebrating exquisite weddings, milestone birthdays, and lavish receptions executed with precision."
        image="/assets/images/real/signature-royal-wedding-mandap.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Work' },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'luxury-gradient-btn shadow-md text-white scale-105'
                    : 'bg-white text-stone-600 hover:text-[#7A245A] border border-stone-200/80 hover:border-[#B18B59]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <SpotlightCard
                key={project.id}
                className="bg-white rounded-3xl border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group"
              >
                <Link to={`/our-work/${project.slug}`} className="flex flex-col h-full">
                  {/* Clean Hero Photo - Smooth zoom only, NO text overlay */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Body with all details clean below the image */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#B18B59] bg-[#FAF8F4] px-2.5 py-0.5 rounded-full border border-stone-200/60">
                          {project.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-stone-400">
                          <Calendar className="w-3.5 h-3.5 text-[#B18B59]" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-serif font-medium text-[#29251F] group-hover:text-[#7A245A] transition-colors leading-snug mb-2">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#B18B59] flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 font-light line-clamp-2 mb-4 leading-relaxed">
                        {project.concept}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <Users className="w-3.5 h-3.5 text-[#B18B59]" />
                        <span>{project.guestCount}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#7A245A] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read Case Study &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const OurWork = OurWorkPage;
