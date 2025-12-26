import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { LevelProgress } from '@/components/ui/LevelProgress';
import { BadgeCard } from '@/components/ui/BadgeCard';
import { mockUserStats, mockBadges } from '@/data/mockData';
import { 
  User, Settings, ChevronRight, Leaf, Droplets, TreePine, 
  Bell, Globe, LogOut, HelpCircle, Shield
} from 'lucide-react';
import { useState } from 'react';

export function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const impactStats = [
    {
      icon: <Droplets className="w-5 h-5 text-ubc" />,
      label: 'Sampah Didaur Ulang',
      value: `${mockUserStats.totalRecycled} item`,
      color: 'bg-ubc/10',
    },
    {
      icon: <Leaf className="w-5 h-5 text-success" />,
      label: 'CO₂ Tersimpan',
      value: `${mockUserStats.co2Saved} kg`,
      color: 'bg-success/10',
    },
    {
      icon: <TreePine className="w-5 h-5 text-primary" />,
      label: 'Setara Pohon',
      value: `${mockUserStats.treesEquivalent} pohon`,
      color: 'bg-primary/10',
    },
  ];

  const menuItems = [
    { icon: <Bell className="w-5 h-5" />, label: 'Notifikasi', hasToggle: true },
    { icon: <Globe className="w-5 h-5" />, label: 'Bahasa', value: language === 'id' ? 'Indonesia' : 'English' },
    { icon: <Shield className="w-5 h-5" />, label: 'Privasi & Keamanan' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Bantuan & FAQ' },
    { icon: <Settings className="w-5 h-5" />, label: 'Pengaturan' },
  ];

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <Card className="p-5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl">
              🌱
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground">Eco Warrior</h1>
              <p className="text-muted-foreground text-sm">eco.warrior@email.com</p>
              <div className="mt-2">
                <LevelProgress 
                  level={mockUserStats.level} 
                  progress={mockUserStats.levelProgress}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Impact Stats */}
        <div>
          <h2 className="font-semibold text-foreground mb-3">Dampak Positifmu 🌍</h2>
          <div className="grid grid-cols-3 gap-3">
            {impactStats.map((stat, index) => (
              <Card key={index} className="p-3 rounded-xl text-center">
                <div className={`w-10 h-10 mx-auto rounded-full ${stat.color} flex items-center justify-center mb-2`}>
                  {stat.icon}
                </div>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Badges Showcase */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Badge Terbaru</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              Lihat Semua
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {mockBadges.filter(b => b.unlocked).slice(0, 5).map((badge) => (
              <BadgeCard key={badge.id} badge={badge} size="sm" />
            ))}
          </div>
        </div>

        {/* Settings Menu */}
        <div>
          <h2 className="font-semibold text-foreground mb-3">Pengaturan</h2>
          <Card className="rounded-xl divide-y divide-border">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                onClick={() => {
                  if (item.label === 'Bahasa') {
                    setLanguage(language === 'id' ? 'en' : 'id');
                  }
                }}
              >
                <span className="text-muted-foreground">{item.icon}</span>
                <span className="flex-1 text-left font-medium text-foreground">
                  {item.label}
                </span>
                {item.hasToggle ? (
                  <Switch 
                    checked={notificationsEnabled} 
                    onCheckedChange={setNotificationsEnabled}
                  />
                ) : item.value ? (
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            ))}
          </Card>
        </div>

        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full rounded-xl text-destructive border-destructive/30 hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Keluar
        </Button>

        {/* App Version */}
        <p className="text-center text-xs text-muted-foreground">
          Nestlé ReTurn v1.0.0
        </p>
      </div>
    </MobileLayout>
  );
}
