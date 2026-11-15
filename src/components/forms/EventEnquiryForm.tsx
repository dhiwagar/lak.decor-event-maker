import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Send,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import { siteConfig, eventCategories } from '../../data/siteConfig';
import { EnquiryFormData } from '../../types';

interface EventEnquiryFormProps {
  preselectedEventType?: string;
  className?: string;
}

export const EventEnquiryForm: React.FC<EventEnquiryFormProps> = ({
  preselectedEventType = '',
  className = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    eventType: preselectedEventType || 'Wedding',
    eventDate: '',
    eventLocation: '',
    guestCount: '200-500 Guests',
    requirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const validate = () => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your proposed event date';
    }

    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = 'Please mention your event venue or city';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Generate formatted WhatsApp message
    const message = `*🌸 NEW EVENT DECOR ENQUIRY — lak.decor & event maker 🌸*
----------------------------------------
*Client Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Email:* ${formData.email || 'Not provided'}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate}
*Event Venue/City:* ${formData.eventLocation}
*Approx Guests:* ${formData.guestCount}
*Special Wishes / Decor Concept:*
${formData.requirements || 'Standard bespoke theme consultation'}
----------------------------------------
_Sent from lak.decor website enquiry form._`;

    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/91${siteConfig.whatsapp}?text=${encoded}`;
    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B18B59', '#7A245A', '#E8C585', '#FFF1DC'],
      });
    } catch {
      // Confetti fallback
    }

    // Try to open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`glass-card p-6 sm:p-10 rounded-3xl shadow-xl ${className}`}>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#B18B59]" />
                Full Name <span className="text-[#7A245A]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Sanjana Reddy"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all ${
                  errors.fullName
                    ? 'border-red-400 bg-red-50/20'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B18B59]" />
                Contact Phone / WhatsApp <span className="text-[#7A245A]">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. 9597265450"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all ${
                  errors.phoneNumber
                    ? 'border-red-400 bg-red-50/20'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1.5">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#B18B59]" />
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. sanjana@gmail.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all ${
                  errors.email
                    ? 'border-red-400 bg-red-50/20'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B18B59]" />
                Event Category <span className="text-[#7A245A]">*</span>
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all cursor-pointer"
              >
                {eventCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Event Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B18B59]" />
                Event Date <span className="text-[#7A245A]">*</span>
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all ${
                  errors.eventDate
                    ? 'border-red-400 bg-red-50/20'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              />
              {errors.eventDate && (
                <p className="text-red-500 text-xs mt-1.5">{errors.eventDate}</p>
              )}
            </div>

            {/* Event Location / Venue */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B18B59]" />
                Venue Name or City <span className="text-[#7A245A]">*</span>
              </label>
              <input
                type="text"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                placeholder="e.g. Ganapathichettikulam / Pondicherry venue"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all ${
                  errors.eventLocation
                    ? 'border-red-400 bg-red-50/20'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              />
              {errors.eventLocation && (
                <p className="text-red-500 text-xs mt-1.5">{errors.eventLocation}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Guest Count */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2">
                Estimated Guest Count
              </label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all cursor-pointer"
              >
                <option value="Under 100 Guests (Intimate)">Under 100 Guests (Intimate)</option>
                <option value="100 - 300 Guests">100 - 300 Guests</option>
                <option value="300 - 600 Guests">300 - 600 Guests</option>
                <option value="600 - 1,200+ Guests (Grand)">600 - 1,200+ Guests (Grand)</option>
              </select>
            </div>
          </div>

          {/* Requirements / Vision */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A443D] mb-2">
              Share Your Vision & Specific Requirements
            </label>
            <textarea
              name="requirements"
              rows={3}
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Tell us about your preferred colors (e.g. pastel blush, temple gold), stage size, specific flower wishes, or traditional ceremonies..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#29251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#B18B59]/50 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="luxury-gradient-btn w-full py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span>Connect & Send Enquiry via WhatsApp</span>
              <Send className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-xs text-stone-500 mt-3 flex items-center justify-center gap-1.5">
              <span>Direct connect to decor specialist at</span>
              <strong className="text-[#7A245A] font-semibold">
                +91 95972 65450
              </strong>
              <span>• Instant confirmation</span>
            </p>
          </div>
        </form>
      ) : (
        /* Submission Success Screen */
        <div className="text-center py-10 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-400">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#25D366] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B18B59] block mb-1">
              Enquiry Formatted Successfully!
            </span>
            <h3 className="text-3xl font-serif font-medium text-[#29251F]">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
              Your customized event decoration brief is ready for our senior
              designer. If WhatsApp did not open automatically, click the button
              below to connect right away!
            </p>
          </div>

          {/* Quick Summary Card */}
          <div className="bg-[#FAF8F4] rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2 border border-stone-200/80">
            <div className="flex justify-between border-b border-stone-200/60 pb-2">
              <span className="text-stone-500">Event:</span>
              <span className="font-semibold text-[#29251F]">{formData.eventType}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200/60 pb-2">
              <span className="text-stone-500">Date:</span>
              <span className="font-semibold text-[#29251F]">{formData.eventDate}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200/60 pb-2">
              <span className="text-stone-500">Venue / City:</span>
              <span className="font-semibold text-[#29251F]">{formData.eventLocation}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-gradient-btn px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Open Chat on WhatsApp ({siteConfig.phoneDisplay})</span>
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-stone-600 hover:text-[#29251F] bg-white border border-stone-200 hover:bg-stone-50 transition-colors w-full sm:w-auto"
            >
              Edit Details / New Enquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
