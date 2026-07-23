import Link from 'next/link';
import { FOOTER_LINKS } from '@/constants/navigation';
import { Globe, MessageCircle, Mail, Share2, Video } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Social */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight">Accredian</span>
              <span className="text-xs text-gray-400 font-medium tracking-widest uppercase mt-1">Enterprise</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering professionals with top-tier education and practical skills to thrive in the modern workplace.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Globe size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Share2 size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Mail size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <p>
                <strong className="text-white block mb-1">Email:</strong>
                <a href={`mailto:${FOOTER_LINKS.contact.email}`} className="hover:text-white transition-colors">
                  {FOOTER_LINKS.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-white block mb-1">Phone:</strong>
                <a href={`tel:${FOOTER_LINKS.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {FOOTER_LINKS.contact.phone}
                </a>
              </p>
              <p>
                <strong className="text-white block mb-1">Address:</strong>
                {FOOTER_LINKS.contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
