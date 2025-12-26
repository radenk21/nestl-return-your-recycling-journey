import { Recycle, Leaf } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-3xl',
};

const iconSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

export function Logo({ size = 'md', showTagline = false }: LogoProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Recycle className={`${iconSizes[size]} text-primary`} />
          <Leaf className="w-3 h-3 text-success absolute -top-1 -right-1" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`font-bold text-foreground ${sizeClasses[size]}`}>
            Nestlé
          </span>
          <span className={`font-extrabold text-primary ${sizeClasses[size]}`}>
            ReTurn
          </span>
        </div>
      </div>
      {showTagline && (
        <p className="text-xs text-muted-foreground">
          Daur ulang lebih mudah, bumi lebih sehat
        </p>
      )}
    </div>
  );
}
