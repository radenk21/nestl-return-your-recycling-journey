import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { categories } from '@/data/categories';
import { ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export function GuidePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.nameFull.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-bold text-foreground">Panduan Daur Ulang</h1>
          <p className="text-muted-foreground mt-1">
            Pelajari cara memilah dan mendaur ulang dengan benar
          </p>
        </header>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cari kategori..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl bg-card"
          />
        </div>

        {/* Categories List */}
        <div className="space-y-3">
          {filteredCategories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/guide/${cat.id}`}
              className="block animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className="p-4 rounded-xl hover:shadow-md transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-4">
                  <CategoryIcon category={cat.id} size="lg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{cat.name}</h3>
                      <PointsBadge points={cat.points} size="sm" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {cat.nameFull}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <span className="text-4xl">🔍</span>
            <p className="text-muted-foreground mt-3">
              Tidak ada kategori yang cocok dengan "{searchQuery}"
            </p>
          </div>
        )}

        {/* Tips Section */}
        <Card className="p-4 rounded-xl bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <span>♻️</span> Tips Umum Daur Ulang
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Selalu bilas kemasan sebelum daur ulang
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Pisahkan tutup dari wadah jika berbeda material
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Lipat atau tekan kemasan untuk menghemat ruang
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Periksa simbol daur ulang pada kemasan
            </li>
          </ul>
        </Card>
      </div>
    </MobileLayout>
  );
}
