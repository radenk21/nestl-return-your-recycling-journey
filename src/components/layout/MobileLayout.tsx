import { ReactNode } from 'react';
import { BottomNavigation } from './BottomNavigation';

interface MobileLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
}

export function MobileLayout({ children, hideNavigation = false }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      <main className={`flex-1 ${hideNavigation ? '' : 'pb-20'}`}>
        {children}
      </main>
      {!hideNavigation && <BottomNavigation />}
    </div>
  );
}
