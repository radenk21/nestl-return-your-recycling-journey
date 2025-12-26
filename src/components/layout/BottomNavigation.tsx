import { Home, BookOpen, QrCode, Gift, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/home', icon: Home, label: 'Beranda' },
  { to: '/guide', icon: BookOpen, label: 'Panduan' },
  { to: '/scan', icon: QrCode, label: 'Scan', isMain: true },
  { to: '/rewards', icon: Gift, label: 'Hadiah' },
  { to: '/profile', icon: User, label: 'Profil' },
];

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-bottom max-w-md mx-auto">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all',
                item.isMain
                  ? 'relative -mt-6'
                  : isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                {item.isMain ? (
                  <div className={cn(
                    'w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all',
                    isActive 
                      ? 'bg-primary animate-pulse-glow' 
                      : 'bg-primary hover:scale-105'
                  )}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                ) : (
                  <item.icon className={cn(
                    'w-6 h-6 transition-transform',
                    isActive && 'scale-110'
                  )} />
                )}
                <span className={cn(
                  'text-xs font-medium',
                  item.isMain && 'mt-1'
                )}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
