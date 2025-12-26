import { useParams, Link, useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { getCategoryById } from '@/data/categories';
import { ArrowLeft, CheckCircle2, XCircle, QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CategoryDetailPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId || '');

  if (!category) {
    return (
      <MobileLayout>
        <div className="p-4 text-center py-20">
          <span className="text-6xl">🤷</span>
          <p className="text-muted-foreground mt-4">Kategori tidak ditemukan</p>
          <Button onClick={() => navigate('/guide')} className="mt-4">
            Kembali ke Panduan
          </Button>
        </div>
      </MobileLayout>
    );
  }

  const colorClasses: Record<string, string> = {
    ubc: 'from-ubc to-ubc/80',
    carton: 'from-carton to-carton/80',
    'flex-plastic': 'from-flex-plastic to-flex-plastic/80',
    pet: 'from-pet to-pet/80',
    aluminium: 'from-aluminium to-aluminium/80',
  };

  return (
    <MobileLayout>
      {/* Header with gradient */}
      <div className={cn(
        'relative pt-4 pb-24 px-4 bg-gradient-to-br text-white',
        colorClasses[category.id]
      )}>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali</span>
        </button>
        
        <div className="mt-6 flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-5xl">
            {category.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{category.name}</h1>
            <p className="text-white/80">{category.nameFull}</p>
            <div className="mt-2">
              <PointsBadge points={category.points} size="md" />
            </div>
          </div>
        </div>
      </div>

      {/* Content overlapping header */}
      <div className="px-4 -mt-16 pb-6 space-y-4">
        {/* Description Card */}
        <Card className="p-4 rounded-xl">
          <p className="text-muted-foreground">{category.description}</p>
        </Card>

        {/* Correct Examples */}
        <Card className="p-4 rounded-xl">
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-success" />
            Yang Benar ✅
          </h3>
          <ul className="space-y-2">
            {category.correctExamples.map((example, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-success mt-0.5">•</span>
                {example}
              </li>
            ))}
          </ul>
        </Card>

        {/* Incorrect Examples */}
        <Card className="p-4 rounded-xl">
          <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-destructive" />
            Yang Salah ❌
          </h3>
          <ul className="space-y-2">
            {category.incorrectExamples.map((example, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-destructive mt-0.5">•</span>
                {example}
              </li>
            ))}
          </ul>
        </Card>

        {/* Instructions */}
        <Card className="p-4 rounded-xl">
          <h3 className="font-semibold text-foreground mb-3">
            📋 Cara Daur Ulang
          </h3>
          <ol className="space-y-3">
            {category.instructions.map((instruction, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-sm"
              >
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-semibold text-xs">
                  {index + 1}
                </span>
                <span className="text-muted-foreground pt-0.5">{instruction}</span>
              </li>
            ))}
          </ol>
        </Card>

        {/* CTA Button */}
        <Link to="/scan" className="block">
          <Button size="lg" className="w-full rounded-xl gap-2">
            <QrCode className="w-5 h-5" />
            Scan & Daur Ulang Sekarang
          </Button>
        </Link>
      </div>
    </MobileLayout>
  );
}
