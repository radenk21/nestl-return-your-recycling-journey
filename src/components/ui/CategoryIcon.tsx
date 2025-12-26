import { WasteCategory } from '@/types/recycling';
import { cn } from '@/lib/utils';

interface CategoryIconProps {
  category: WasteCategory;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
  className?: string;
}

const categoryEmojis: Record<WasteCategory, string> = {
  ubc: '🥛',
  carton: '📦',
  'flex-plastic': '🍬',
  pet: '🍼',
  aluminium: '🥫',
};

const sizeClasses = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-12 h-12 text-2xl',
  lg: 'w-16 h-16 text-3xl',
  xl: 'w-20 h-20 text-4xl',
};

const bgClasses: Record<WasteCategory, string> = {
  ubc: 'bg-ubc-light',
  carton: 'bg-carton-light',
  'flex-plastic': 'bg-flex-plastic-light',
  pet: 'bg-pet-light',
  aluminium: 'bg-aluminium-light',
};

export function CategoryIcon({ 
  category, 
  size = 'md', 
  showBackground = true,
  className 
}: CategoryIconProps) {
  return (
    <div
      className={cn(
        'rounded-2xl flex items-center justify-center transition-transform hover:scale-105',
        sizeClasses[size],
        showBackground && bgClasses[category],
        className
      )}
    >
      <span role="img" aria-label={category}>
        {categoryEmojis[category]}
      </span>
    </div>
  );
}
