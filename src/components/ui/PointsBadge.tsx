import { cn } from '@/lib/utils';

interface PointsBadgeProps {
  points: number;
  size?: 'sm' | 'md' | 'lg';
  showPlus?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export function PointsBadge({ 
  points, 
  size = 'md', 
  showPlus = false,
  className 
}: PointsBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-bold rounded-full bg-points text-points-foreground',
        sizeClasses[size],
        className
      )}
    >
      <span>⭐</span>
      <span>{showPlus && '+'}{points}</span>
    </span>
  );
}
