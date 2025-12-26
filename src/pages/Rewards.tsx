import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { BadgeCard } from '@/components/ui/BadgeCard';
import { LevelProgress } from '@/components/ui/LevelProgress';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { mockUserStats, mockBadges, mockRecentActivity, mockRewards } from '@/data/mockData';
import { categories } from '@/data/categories';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, History, Gift, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { cn } from '@/lib/utils';

export function RewardsPage() {
  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-bold text-foreground">Hadiah & Poin</h1>
          <p className="text-muted-foreground mt-1">
            Tukar poin dengan hadiah menarik
          </p>
        </header>

        {/* Points Summary Card */}
        <Card className="p-5 rounded-2xl bg-gradient-to-br from-points/20 to-accent/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Poin</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold text-foreground">
                  {mockUserStats.totalPoints.toLocaleString()}
                </span>
                <span className="text-2xl">⭐</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-points flex items-center justify-center">
              <Trophy className="w-8 h-8 text-points-foreground" />
            </div>
          </div>
          <div className="mt-4">
            <LevelProgress 
              level={mockUserStats.level} 
              progress={mockUserStats.levelProgress}
            />
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="rewards" className="w-full">
          <TabsList className="w-full grid grid-cols-3 rounded-xl h-12">
            <TabsTrigger value="rewards" className="rounded-lg gap-1">
              <Gift className="w-4 h-4" />
              Hadiah
            </TabsTrigger>
            <TabsTrigger value="badges" className="rounded-lg gap-1">
              <Trophy className="w-4 h-4" />
              Badge
            </TabsTrigger>
            <TabsTrigger value="history" className="rounded-lg gap-1">
              <History className="w-4 h-4" />
              Riwayat
            </TabsTrigger>
          </TabsList>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="mt-4 space-y-3">
            {mockRewards.map((reward, index) => (
              <Card 
                key={reward.id} 
                className="p-4 rounded-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl">
                    {reward.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{reward.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <PointsBadge points={reward.points} size="sm" />
                      {mockUserStats.totalPoints >= reward.points && (
                        <span className="text-xs text-success font-medium">Tersedia</span>
                      )}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant={mockUserStats.totalPoints >= reward.points ? "default" : "outline"}
                    disabled={mockUserStats.totalPoints < reward.points}
                    className="rounded-lg"
                  >
                    Tukar
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Badges Tab */}
          <TabsContent value="badges" className="mt-4">
            <div className="grid grid-cols-4 gap-2">
              {mockBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} size="sm" />
              ))}
            </div>
            
            {/* Progress summary */}
            <Card className="p-4 rounded-xl mt-4 bg-secondary/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    {mockBadges.filter(b => b.unlocked).length} / {mockBadges.length} Badge
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Terus kumpulkan untuk unlock semua!
                  </p>
                </div>
                <Progress 
                  value={(mockBadges.filter(b => b.unlocked).length / mockBadges.length) * 100} 
                  className="w-20 h-2"
                />
              </div>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="mt-4 space-y-3">
            {mockRecentActivity.map((activity, index) => {
              const category = categories.find(c => c.id === activity.category);
              return (
                <Card 
                  key={activity.id} 
                  className="p-3 rounded-xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon category={activity.category} size="md" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm">
                        {category?.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {activity.binLocation}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(activity.timestamp, "d MMM, HH:mm", { locale: id })}
                      </p>
                    </div>
                    <PointsBadge points={activity.points} size="sm" showPlus />
                  </div>
                </Card>
              );
            })}
            
            <Button variant="outline" className="w-full rounded-xl">
              Lihat Semua Riwayat
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
}
