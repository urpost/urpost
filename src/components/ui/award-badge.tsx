import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Trophy, Medal, Award } from 'lucide-react';

interface AwardBadgeProps {
  rank: number;
  className?: string;
}

export function AwardBadge({ rank, className }: AwardBadgeProps) {
  const getBadgeDetails = () => {
    switch (rank) {
      case 1:
        return {
          icon: Trophy,
          colors: 'from-amber-400 via-yellow-500 to-amber-600',
          border: 'border-yellow-500/50',
          glow: 'shadow-[0_0_20px_rgba(251,191,36,0.4)]',
          text: 'text-yellow-100'
        };
      case 2:
        return {
          icon: Medal,
          colors: 'from-slate-300 via-gray-400 to-slate-500',
          border: 'border-slate-400/50',
          glow: 'shadow-[0_0_15px_rgba(148,163,184,0.3)]',
          text: 'text-slate-100'
        };
      case 3:
        return {
          icon: Award,
          colors: 'from-orange-400 via-amber-700 to-orange-800',
          border: 'border-orange-500/50',
          glow: 'shadow-[0_0_15px_rgba(217,119,6,0.3)]',
          text: 'text-orange-100'
        };
      default:
        return {
          icon: Award,
          colors: 'from-blue-400 via-blue-500 to-blue-600',
          border: 'border-blue-500/50',
          glow: 'shadow-[0_0_15px_rgba(59,130,246,0.3)]',
          text: 'text-blue-100'
        };
    }
  };

  const details = getBadgeDetails();
  const Icon = details.icon;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative flex items-center justify-center w-12 h-12 rounded-full",
        "bg-gradient-to-br border",
        details.colors,
        details.border,
        details.glow,
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-[2px]" />
      <Icon className={cn("w-6 h-6 relative z-10", details.text)} />
    </motion.div>
  );
}
