import { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { PointsBadge } from '@/components/ui/PointsBadge';
import { Illustration } from '@/components/illustrations/Illustration';
import { categories } from '@/data/categories';
import { Camera, Flashlight, X, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WasteCategory } from '@/types/recycling';

type ScanState = 'ready' | 'scanning' | 'result' | 'bin-found';

interface ScanResult {
  type: 'product' | 'bin';
  category?: WasteCategory;
  productName?: string;
  binName?: string;
  binDistance?: string;
}

export function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>('ready');
  const [flashOn, setFlashOn] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleStartScan = () => {
    setScanState('scanning');
    // Simulate scan after 2 seconds
    setTimeout(() => {
      const mockResults: ScanResult[] = [
        { type: 'product', category: 'pet', productName: 'Botol AQUA 600ml' },
        { type: 'product', category: 'ubc', productName: 'Susu Milo Kotak' },
        { type: 'bin', binName: 'Smart Bin Plaza Indonesia', binDistance: '10m' },
      ];
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setScanResult(randomResult);
      setScanState('result');
    }, 2000);
  };

  const handleReset = () => {
    setScanState('ready');
    setScanResult(null);
  };

  const handleFindBin = () => {
    setScanState('bin-found');
  };

  const category = scanResult?.category ? categories.find(c => c.id === scanResult.category) : null;

  return (
    <MobileLayout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <header className="p-4 flex items-center justify-between bg-background/80 backdrop-blur z-10">
          <h1 className="text-xl font-bold text-foreground">Scan QR Code</h1>
          {scanState !== 'ready' && (
            <Button variant="ghost" size="icon" onClick={handleReset}>
              <X className="w-5 h-5" />
            </Button>
          )}
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          {scanState === 'ready' && (
            <div className="text-center space-y-6 animate-fade-in">
              <Illustration type="scan" />
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Siap untuk Scan?
                </h2>
                <p className="text-muted-foreground mt-2">
                  Arahkan kamera ke QR code pada produk Nestlé atau Smart Bin
                </p>
              </div>
              <Button size="lg" onClick={handleStartScan} className="rounded-xl gap-2">
                <Camera className="w-5 h-5" />
                Mulai Scan
              </Button>
            </div>
          )}

          {scanState === 'scanning' && (
            <div className="w-full max-w-xs animate-fade-in">
              {/* Camera viewfinder mockup */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-foreground/5 border-4 border-primary">
                {/* Corner markers */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
                
                {/* Scan line */}
                <div className="absolute left-8 right-8 h-1 bg-primary/60 rounded animate-scan-line" />
                
                {/* Grid pattern */}
                <div className="absolute inset-8 grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-muted/30 rounded" />
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-6 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    'w-12 h-12 rounded-full',
                    flashOn && 'bg-points text-points-foreground border-points'
                  )}
                  onClick={() => setFlashOn(!flashOn)}
                >
                  <Flashlight className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Mendeteksi QR code...
              </p>
            </div>
          )}

          {scanState === 'result' && scanResult && (
            <div className="w-full space-y-4 animate-scale-in">
              {scanResult.type === 'product' && category && (
                <>
                  <Card className="p-6 rounded-2xl text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
                      <span className="text-4xl">✅</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      Produk Terdeteksi!
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {scanResult.productName}
                    </p>
                  </Card>

                  <Card className="p-4 rounded-xl">
                    <div className="flex items-center gap-4">
                      <CategoryIcon category={category.id} size="lg" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">Kategori</p>
                        <p className="font-semibold text-foreground">{category.name}</p>
                        <p className="text-xs text-muted-foreground">{category.nameFull}</p>
                      </div>
                      <PointsBadge points={category.points} size="lg" showPlus />
                    </div>
                  </Card>

                  <Card className="p-4 rounded-xl bg-secondary/50">
                    <h3 className="font-semibold text-foreground mb-2">
                      📋 Instruksi Cepat
                    </h3>
                    <ol className="space-y-1 text-sm text-muted-foreground">
                      {category.instructions.slice(0, 3).map((instruction, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-medium">{i + 1}.</span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </Card>

                  <Button 
                    size="lg" 
                    className="w-full rounded-xl gap-2"
                    onClick={handleFindBin}
                  >
                    <MapPin className="w-5 h-5" />
                    Temukan Smart Bin Terdekat
                  </Button>
                </>
              )}

              {scanResult.type === 'bin' && (
                <>
                  <Card className="p-6 rounded-2xl text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-4xl">🗑️</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      Smart Bin Ditemukan!
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {scanResult.binName}
                    </p>
                  </Card>

                  <Card className="p-4 rounded-xl bg-success/10 border-success/20">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-success animate-pulse" />
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Lampu hijau menyala</span> pada tempat sampah yang sesuai
                      </p>
                    </div>
                  </Card>

                  <div className="grid grid-cols-5 gap-2">
                    {categories.map(cat => (
                      <div key={cat.id} className="flex flex-col items-center gap-1">
                        <CategoryIcon category={cat.id} size="md" />
                        <span className="text-xs text-muted-foreground">{cat.name}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full rounded-xl"
                    onClick={handleReset}
                  >
                    Scan Produk
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </>
              )}
            </div>
          )}

          {scanState === 'bin-found' && (
            <div className="w-full space-y-4 animate-scale-in">
              <Card className="p-6 rounded-2xl text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4 animate-pulse-glow">
                  <MapPin className="w-10 h-10 text-success" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Smart Bin Terdekat
                </h2>
                <p className="text-muted-foreground mt-1">
                  Plaza Indonesia, Lt. 1
                </p>
                <p className="text-sm text-primary font-medium mt-2">
                  📍 50 meter dari lokasi kamu
                </p>
              </Card>

              <Card className="p-4 rounded-xl bg-success/10 border-success/20">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-success animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Lampu indikator menyala
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ikuti lampu hijau yang berkedip pada bin
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 rounded-xl"
                  onClick={handleReset}
                >
                  Scan Lagi
                </Button>
                <Button 
                  size="lg" 
                  className="flex-1 rounded-xl"
                >
                  Buka Maps
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Tips footer for ready state */}
        {scanState === 'ready' && (
          <div className="p-4">
            <Card className="p-3 rounded-xl bg-secondary/50">
              <p className="text-xs text-muted-foreground text-center">
                💡 Tips: Pastikan QR code dalam kondisi bersih dan terlihat jelas
              </p>
            </Card>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
