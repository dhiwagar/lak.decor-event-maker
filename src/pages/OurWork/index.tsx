import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Sparkles, Users } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SpotlightCard } from '../../components/animations/SpotlightCard';

export const OurWorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'receptions', label: 'Receptions' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'engagements', label: 'Engagements' },
    { id: 'haldi', label: 'Haldi & Traditional' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title="Featured Case Studies & Productions"
        subtitle="Go behind the scenes of our signature events, from creative concept blueprints to on-site ballroom execution."
        badge="PORTFOLIO ARCHIVE"
        image="/assets/images/ai-royal-mandap.jpg"
        breadcrumbs={[{ label: 'Our Work' }]}
      />

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="IN-DEPTH PRODUCTIONS"
            title="Stories Of Love,"
            highlightText="Celebration & Craft"
            subtitle="Explore how our team engineered unique thematic worlds for couples and families across South India."
          />

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === c.id
                    ? 'luxury-gradient-btn shadow-md text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-[#B18B59]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <SpotlightCard
                key={project.id}
                className="bg-white rounded-3xl border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group"
              >
                <Link to={`/our-work/${project.slug}`} className="flex flex-col h-full">
                  {/* Hero Photo with zoom */}
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-md text-[#7A245A] shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-stone-200">
                        <MapPin className="w-3.5 h-3.5 text-[#B18B59]" />
                        <span className="truncate max-w-[200px]">{project.location}</span>
                      </div>
                      <span className="text-amber-200 font-medium">{project.date}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-medium text-[#29251F] group-hover:text-[#7A245A] transition-colors leading-snug mb-2">
                        {project.title}
                      </h3>
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
