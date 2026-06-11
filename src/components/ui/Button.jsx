import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-base',
  };

  const variants = {
    primary:
      'bg-[#2B7FFF] text-white shadow-[0_4px_20px_rgba(43,127,255,0.35)] hover:bg-[#1a5cd8] hover:shadow-[0_6px_28px_rgba(43,127,255,0.45)] active:scale-95',
    secondary:
      'bg-white text-[#2B7FFF] border-2 border-[#2B7FFF] hover:bg-[#eff6ff] active:scale-95',
    ghost:
      'bg-transparent text-[#2B7FFF] hover:bg-[#eff6ff] active:scale-95',
    dark:
      'bg-[#0f2644] text-white hover:bg-[#1a3a6e] active:scale-95',
    white:
      'bg-white text-[#1a1c1e] shadow-md hover:shadow-lg active:scale-95',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
