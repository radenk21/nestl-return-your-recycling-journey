import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/brand/Logo';
import { Illustration } from '@/components/illustrations/Illustration';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  illustration: 'welcome' | 'how-it-works' | 'steps' | 'first-step';
}

const slides: OnboardingSlide[] = [
  {
    id: 1,
    title: 'Selamat Datang di ReTurn!',
    description: 'Bersama-sama kita bisa membuat perubahan nyata untuk bumi dengan daur ulang yang lebih pintar.',
    illustration: 'welcome',
  },
  {
    id: 2,
    title: 'Apa itu Smart Bin?',
    description: 'Tempat sampah pintar yang bisa mengenali jenis sampah dan memberi poin untuk setiap daur ulang.',
    illustration: 'how-it-works',
  },
  {
    id: 3,
    title: 'Cara Kerjanya Mudah',
    description: 'Scan produk atau tempat sampah, ikuti petunjuk pemilahan, buang sampah, dan dapatkan poin!',
    illustration: 'steps',
  },
  {
    id: 4,
    title: 'Langkah Pertamamu',
    description: 'Selesaikan tantangan pertama dan dapatkan badge spesial sebagai awal perjalanan hijau!',
    illustration: 'first-step',
  },
];

export function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/home');
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    navigate('/home');
  };

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header with skip */}
      <header className="p-4 flex justify-between items-center">
        <Logo size="sm" />
        {!isLastSlide && (
          <Button variant="ghost" size="sm" onClick={handleSkip}>
            Lewati
          </Button>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Illustration */}
        <div className="mb-8 animate-fade-in" key={slide.id}>
          <Illustration type={slide.illustration} />
        </div>

        {/* Text content */}
        <div className="text-center space-y-4 animate-slide-up" key={`text-${slide.id}`}>
          <h1 className="text-2xl font-bold text-foreground">
            {slide.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {slide.description}
          </p>
        </div>
      </main>

      {/* Footer with navigation */}
      <footer className="p-6 space-y-4">
        {/* Progress dots */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          {currentSlide > 0 && (
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrev}
              className="flex-1 rounded-xl"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Kembali
            </Button>
          )}
          <Button
            size="lg"
            onClick={handleNext}
            className={cn(
              'rounded-xl',
              currentSlide === 0 ? 'w-full' : 'flex-1'
            )}
          >
            {isLastSlide ? 'Mulai Sekarang' : 'Lanjut'}
            {!isLastSlide && <ChevronRight className="w-5 h-5 ml-1" />}
          </Button>
        </div>
      </footer>
    </div>
  );
}
