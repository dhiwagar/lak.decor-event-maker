import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Users,
  Quote,
  Sparkles,
  ArrowRight,
  Maximize2,
  CheckCircle,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import { siteConfig } from '../../data/siteConfig';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SpotlightCard } from '../../components/animations/SpotlightCard';

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!project) {
    return <Navigate to="/our-work" replace />;
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title={project.title}
        subtitle={`${project.theme} • ${project.location}`}
        badge={project.categoryLabel}
        image={project.heroImage}
        breadcrumbs={[
          { label: 'Our Work', path: '/our-work' },
          { label: project.title },
        ]}
      />

      {/* Case Study Details Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Meta Stats Strip */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                Category
              </span>
              <span className="text-base font-serif font-bold text-[#7A245A]">
                {project.categoryLabel}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                Event Date
              </span>
              <span className="text-base font-serif font-bold text-[#29251F]">
                {project.date}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                Venue
              </span>
              <span className="text-base font-serif font-bold text-[#29251F] truncate block">
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                Guest Attendance
              </span>
              <span className="text-base font-serif font-bold text-[#B18B59]">
                {project.guestCount}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Breakdown */}
            <div className="lg:col-span-8 space-y-10">
              {/* The Concept */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18B59] block mb-2">
                  THE CREATIVE BRIEF
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#29251F] leading-tight">
                  Concept & Design Narrative
                </h2>
                <p className="text-base text-stone-600 font-light leading-relaxed mt-4">
                  {project.concept}
                </p>
              </div>

              {/* High-res Image Showcase */}
              <div>
                <h3 className="text-2xl font-serif font-medium text-[#29251F] mb-6">
                  Event Photography Archive
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} photograph ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges and Production Engineering */}
              <div className="bg-[#F6F1EA] rounded-3xl p-6 sm:p-8 border border-stone-200">
                <h3 className="text-xl font-serif font-medium text-[#29251F] mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#B18B59]" />
                  Production Engineering & Execution Highlights
                </h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {project.challengesAndSolution}
                </p>
              </div>

              {/* Client Quote Card */}
              {project.testimonialQuote && (
                <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md relative overflow-hidden">
                  <Quote className="absolute right-4 bottom-4 w-24 h-24 text-stone-100 pointer-events-none" />
                  <div className="relative z-10 space-y-4">
                    <p className="text-lg sm:text-xl font-serif italic text-[#29251F] leading-relaxed">
                      &ldquo;{project.testimonialQuote.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#7A245A]" />
                      <span className="font-semibold text-sm text-[#29251F]">
                        {project.testimonialQuote.author}
                      </span>
                      <span className="text-xs text-stone-500">
                        ({project.testimonialQuote.role})
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Column */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B18B59] block mb-1">
                  INSPIRED BY THIS THEME?
                </span>
                <h3 className="text-2xl font-serif font-medium text-[#29251F] mb-3">
                  Recreate This Look
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed mb-6">
                  Our design leads can adapt this aesthetic to fit your venue dimensions, guest capacity, and personalized color desires.
                </p>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="luxury-gradient-btn w-full py-3.5 rounded-xl text-center text-xs font-semibold tracking-wider uppercase block shadow-md"
                  >
                    Enquire About This Setup
                  </Link>
                  <a
                    href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello lak.decor, I was looking at the ${project.title} setup and would like to know more.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl text-center text-xs font-semibold text-[#29251F] bg-[#FAF8F4] border border-stone-200 hover:border-[#B18B59] hover:text-[#7A245A] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Inquiry ({siteConfig.phoneDisplay})</span>
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="p-6 bg-[#FAF8F4] rounded-2xl border border-stone-200/60">
                <span className="text-xs font-semibold text-stone-500 block mb-3 uppercase tracking-wider">
                  Event Style Tags:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white text-[#7A245A] border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Case Studies */}
          <div className="mt-24 pt-16 border-t border-stone-200">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#29251F] text-center mb-10">
              Explore More Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProjects.map((rel) => (
                <SpotlightCard
                  key={rel.id}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-md group"
                >
                  <Link to={`/our-work/${rel.slug}`} className="block">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={rel.heroImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-[#7A245A] font-semibold">
                        {rel.categoryLabel}
                      </span>
                      <h4 className="text-lg font-serif font-medium text-[#29251F] mt-1 group-hover:text-[#7A245A] transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal image preview */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Preview"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};
