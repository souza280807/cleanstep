import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { SITE } from '../../data/siteContent';

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  if (!SITE.videoId) return null;

  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0f2644] text-white text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
            Veja funcionando
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-[#0a0e1a] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Clean Step em ação
          </h2>
          <p className="text-[#6b7280] text-lg max-w-md mx-auto">
            Assista ao resultado em tempo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)] bg-[#0a0e1a]"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${SITE.videoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Clean Step — demonstração"
            />
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${SITE.videoId}/maxresdefault.jpg`}
                alt="Vídeo demonstrativo Clean Step"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Reproduzir vídeo"
              >
                <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <Play size={28} className="text-[#0f2644] ml-1" fill="currentColor" />
                </div>
              </motion.button>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
