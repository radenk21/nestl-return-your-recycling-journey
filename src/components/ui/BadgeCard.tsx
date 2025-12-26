import { Badge as BadgeType } from '@/types/recycling';
import { cn } from '@/lib/utils';
import { Lock } from 'lucide-react';

interface BadgeCardProps {
  badge: BadgeType;
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export function BadgeCard({ badge, size = 'md', onClick }: BadgeCardProps) {
  const sizeClasses = size === 'sm' 
    ? 'w-16 h-16 text-2xl' 
    : 'w-20 h-20 text-3xl';

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-2 p-2 rounded-xl transition-all',
        badge.unlocked 
          ? 'hover:bg-muted cursor-pointer' 
          : 'opacity-60 cursor-default'
      )}
    >
      <div
        className={cn(
          'rounded-2xl flex items-center justify-center relative',
          sizeClasses,
          badge.unlocked 
            ? 'bg-gradient-to-br from-points to-accent shadow-md' 
            : 'bg-muted'
        )}
      >
        {badge.unlocked ? (
          <span className="animate-bounce-in">{badge.icon}</span>
        ) : (
          <Lock className="w-6 h-6 text-muted-foreground" />
        )}
      </div>
      <span className={cn(
        'text-xs font-medium text-center leading-tight',
        badge.unlocked ? 'text-foreground' : 'text-muted-foreground'
      )}>
        {badge.name}
      </span>
    </button>
  );
}
