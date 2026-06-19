import { Link } from 'react-router-dom';
import { AtSign, MessageCircle, Mail } from 'lucide-react';
import { SITE } from '../../data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-[#0f2644] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {SITE.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/carrinho" className="text-sm text-white/70 hover:text-white transition-colors">
                  Carrinho
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={16} className="text-[#2B7FFF]" />
                <span>{SITE.whatsappDisplay}</span>
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <AtSign size={16} className="text-[#2B7FFF]" />
                <span>@{SITE.instagram}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-[#2B7FFF]" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>{SITE.footer.copy}</span>
          <div className="flex gap-4">
            {SITE.footer.links.map((l) => (
              <Link key={l.label} to={l.path} className="hover:text-white/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
