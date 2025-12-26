import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { LevelProgress } from '@/components/ui/LevelProgress';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { mockUserStats, mockNearbyBins, mockRecentActivity } from '@/data/mockData';
import { categories } from '@/data/categories';
import { MapPin, QrCode, BookOpen, Bell, Leaf, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function HomePage() {
  const recentAction = mockRecentActivity[0];
  
  return (
    <MobileLayout>
      <div className="space-y-6 p-4">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">Selamat datang kembali,</p>
            <h1 className="text-xl font-bold text-foreground">Eco Warrior! 👋</h1>
          </div>
          <button className="relative p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </header>

        {/* Points Card */}
        <Card className="p-5 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-primary-foreground/80 text-sm">Total Poin Kamu</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold">{mockUserStats.totalPoints.toLocaleString()}</span>
                <span className="text-xl">⭐</span>
              </div>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <Leaf className="w-8 h-8" />
            </div>
          </div>
          <LevelProgress 
            level={mockUserStats.level} 
            progress={mockUserStats.levelProgress}
            className="[&_*]:text-primary-foreground [&_.bg-secondary]:bg-primary-foreground/20 [&_[data-progress]]:bg-primary-foreground"
          />
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Link to="/scan">
            <Card className="p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Scan</span>
            </Card>
          </Link>
          <Link to="/guide">
            <Card className="p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ubc/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-ubc" />
              </div>
              <span className="text-sm font-medium text-foreground">Panduan</span>
            </Card>
          </Link>
          <Link to="/rewards">
            <Card className="p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow rounded-xl">
              <div className="w-12 h-12 rounded-full bg-points/10 flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <span className="text-sm font-medium text-foreground">Hadiah</span>
            </Card>
          </Link>
        </div>

        {/* Nearby Bin */}
        {mockNearbyBins.length > 0 && (
          <Card className="p-4 rounded-xl border-l-4 border-l-success">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">Smart Bin Terdekat</p>
                <p className="text-sm text-muted-foreground truncate">
                  {mockNearbyBins[0].name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  📍 {mockNearbyBins[0].distance} dari lokasi kamu
                </p>
              </div>
              <Button size="sm" variant="outline" className="rounded-lg flex-shrink-0">
                Arahkan
              </Button>
            </div>
          </Card>
        )}

        {/* Categories Quick Access */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Kategori Sampah</h2>
            <Link to="/guide" className="text-sm text-primary font-medium flex items-center gap-1">
              Lihat Semua
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/guide/${cat.id}`}
                className="flex flex-col items-center gap-2 flex-shrink-0"
              >
                <CategoryIcon category={cat.id} size="lg" />
                <span className="text-xs font-medium text-foreground">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        {recentAction && (
          <div>
            <h2 className="font-semibold text-foreground mb-3">Aktivitas Terakhir</h2>
            <Card className="p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <CategoryIcon category={recentAction.category} size="md" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">
                    Daur Ulang {categories.find(c => c.id === recentAction.category)?.name}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {recentAction.binLocation}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format(recentAction.timestamp, "d MMM yyyy, HH:mm", { locale: id })}
                  </p>
                </div>
                <PointsBadge points={recentAction.points} showPlus />
              </div>
            </Card>
          </div>
        )}

        {/* Eco Tip */}
        <Card className="p-4 rounded-xl bg-secondary/50">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-medium text-foreground text-sm">Tips Hari Ini</p>
              <p className="text-sm text-muted-foreground mt-1">
                Bilas kemasan plastik sebelum daur ulang untuk mengurangi kontaminasi dan meningkatkan kualitas daur ulang.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </MobileLayout>
  );
}
