import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface LevelProgressProps {
  level: number;
  progress: number;
  className?: string;
}

const levelNames = [
  'Pemula',
  'Penjelajah',
  'Pelindung',
  'Pahlawan',
  'Eco Warrior',
  'Green Champion',
  'Earth Guardian',
];

export function LevelProgress({ level, progress, className }: LevelProgressProps) {
  const levelName = levelNames[level - 1] || `Level ${level}`;
  
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            {level}
          </div>
          <span className="font-semibold text-foreground">{levelName}</span>
        </div>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-xs text-muted-foreground">
        {100 - progress}% lagi ke level berikutnya
      </p>
    </div>
  );
}
