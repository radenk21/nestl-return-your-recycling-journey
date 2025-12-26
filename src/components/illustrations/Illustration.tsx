import { ReactNode } from 'react';

interface IllustrationProps {
  type: 'welcome' | 'how-it-works' | 'steps' | 'first-step' | 'scan' | 'empty' | 'success';
  className?: string;
}

export function Illustration({ type, className = '' }: IllustrationProps) {
  const illustrations: Record<string, ReactNode> = {
    welcome: (
      <div className={`relative ${className}`}>
        <div className="w-48 h-48 mx-auto relative">
          {/* Earth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary/20 animate-float" />
          {/* Recycling items floating around */}
          <div className="absolute top-2 left-4 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🥛</div>
          <div className="absolute top-8 right-2 text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>📦</div>
          <div className="absolute bottom-8 left-0 text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🍼</div>
          <div className="absolute bottom-4 right-4 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🥫</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">🌍</div>
        </div>
      </div>
    ),
    'how-it-works': (
      <div className={`relative ${className}`}>
        <div className="w-48 h-48 mx-auto relative">
          {/* Smart bin illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-40 bg-gradient-to-b from-primary to-primary/80 rounded-t-3xl rounded-b-lg relative shadow-lg">
              {/* Bin opening */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-foreground/10 rounded-full" />
              {/* Screen */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              {/* LED indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-success animate-pulse" />
            </div>
          </div>
          {/* Floating arrow */}
          <div className="absolute -top-2 right-8 text-3xl animate-bounce">⬇️</div>
        </div>
      </div>
    ),
    steps: (
      <div className={`relative ${className}`}>
        <div className="flex items-center justify-center gap-4">
          {/* Step 1: Scan */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl shadow-md">
              📱
            </div>
            <span className="text-xs font-medium text-muted-foreground">Scan</span>
          </div>
          <div className="text-2xl text-primary">→</div>
          {/* Step 2: Sort */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-ubc-light flex items-center justify-center text-3xl shadow-md">
              🗂️
            </div>
            <span className="text-xs font-medium text-muted-foreground">Pilah</span>
          </div>
          <div className="text-2xl text-primary">→</div>
          {/* Step 3: Drop */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-success-light flex items-center justify-center text-3xl shadow-md">
              ♻️
            </div>
            <span className="text-xs font-medium text-muted-foreground">Buang</span>
          </div>
        </div>
      </div>
    ),
    'first-step': (
      <div className={`relative ${className}`}>
        <div className="w-48 h-48 mx-auto relative">
          {/* Trophy/Achievement */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-points to-accent flex items-center justify-center text-5xl shadow-lg animate-pulse-glow">
                🏆
              </div>
              {/* Stars around */}
              <div className="absolute -top-4 -left-4 text-2xl animate-bounce">⭐</div>
              <div className="absolute -top-2 -right-6 text-xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
              <div className="absolute -bottom-4 -right-2 text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</div>
            </div>
          </div>
        </div>
      </div>
    ),
    scan: (
      <div className={`relative ${className}`}>
        <div className="w-48 h-48 mx-auto flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-primary rounded-2xl relative">
            {/* QR Code pattern */}
            <div className="absolute inset-4 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm ${Math.random() > 0.3 ? 'bg-foreground' : 'bg-transparent'}`}
                />
              ))}
            </div>
            {/* Scan line */}
            <div className="absolute left-0 right-0 h-1 bg-primary animate-scan-line" />
          </div>
        </div>
      </div>
    ),
    empty: (
      <div className={`relative ${className}`}>
        <div className="w-32 h-32 mx-auto flex items-center justify-center">
          <div className="text-6xl opacity-50">📭</div>
        </div>
      </div>
    ),
    success: (
      <div className={`relative ${className}`}>
        <div className="w-48 h-48 mx-auto flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-success/20 flex items-center justify-center animate-bounce-in">
            <div className="w-24 h-24 rounded-full bg-success flex items-center justify-center text-5xl">
              ✅
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return illustrations[type] || null;
}
