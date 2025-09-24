import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useMinecraftSounds } from '@/hooks/useMinecraftSounds';

function Index() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const { playClickSound, playHoverSound, playSuccessSound } = useMinecraftSounds();
  
  const serverStats = {
    online: 247,
    maxPlayers: 500,
    uptime: "99.7%",
    tps: 19.8,
    version: "1.16.5 Forge",
    ip: "Dark_Village.aternos.me",
    port: 56287
  };

  const regions = [
    { id: 'spawn', name: 'Spawn Village', x: 50, y: 50, color: '#4CAF50', players: 42 },
    { id: 'dark-forest', name: 'Dark Forest', x: 20, y: 30, color: '#2E7D32', players: 18 },
    { id: 'mountains', name: 'Crystal Mountains', x: 80, y: 25, color: '#607D8B', players: 15 },
    { id: 'desert', name: 'Cursed Desert', x: 75, y: 75, color: '#FF9800', players: 12 },
    { id: 'ocean', name: 'Deep Ocean', x: 15, y: 80, color: '#2196F3', players: 8 }
  ];

  const news = [
    { title: "Новое обновление сервера v2.1", date: "2024-09-20", type: "update" },
    { title: "Ивент: Охота на драконов", date: "2024-09-18", type: "event" },
    { title: "Техническое обслуживание", date: "2024-09-15", type: "maintenance" }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    playSuccessSound();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/img/7a4d1ab3-6997-4eb9-bd71-7e96523df604.jpg" 
              alt="Dark Village Logo" 
              className="w-24 h-24 minecraft-pixel rounded-lg mr-6 shadow-lg"
            />
            <div>
              <h1 className="text-6xl font-bold text-primary mb-2 tracking-wider" style={{textShadow: '2px 2px 0 #000'}}>
                DARK VILLAGE
              </h1>
              <p className="text-xl text-secondary font-mono">
                Приключения в тёмных землях
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Users" size={20} className="mr-2" />
              {serverStats.online}/{serverStats.maxPlayers} онлайн
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
              <Icon name="Wifi" size={20} className="mr-2" />
              TPS: {serverStats.tps}
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-secondary text-secondary">
              <Icon name="Zap" size={20} className="mr-2" />
              Версия {serverStats.version}
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
            <TabsTrigger value="main" className="minecraft-button text-lg py-3">
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="map" className="minecraft-button text-lg py-3">
              <Icon name="Map" size={20} className="mr-2" />
              Карта мира
            </TabsTrigger>
            <TabsTrigger value="stats" className="minecraft-button text-lg py-3">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Статистика
            </TabsTrigger>
          </TabsList>

          {/* Main Tab */}
          <TabsContent value="main" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Server Info */}
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Icon name="Server" size={24} className="mr-3" />
                    Информация о сервере
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Добро пожаловать в Dark Village - уникальный мир приключений
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{serverStats.online}</div>
                      <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                    </div>
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{serverStats.uptime}</div>
                      <div className="text-sm text-muted-foreground">Время работы</div>
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full minecraft-button text-lg py-6" 
                        size="lg"
                        onClick={() => playClickSound()}
                        onMouseEnter={() => playHoverSound()}
                      >
                        <Icon name="Play" size={20} className="mr-2" />
                        Подключиться к серверу
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="minecraft-card max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-primary text-center text-2xl mb-4">
                          <Icon name="Server" size={32} className="mx-auto mb-2" />
                          Подключение к серверу
                        </DialogTitle>
                        <DialogDescription className="text-center text-muted-foreground">
                          Скопируй IP адрес и добавь сервер в Minecraft
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-6">
                        {/* IP Address */}
                        <div className="bg-muted/20 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">IP адрес сервера:</div>
                              <div className="text-2xl font-bold text-primary font-mono">
                                {serverStats.ip}
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(serverStats.ip)}
                              onMouseEnter={() => playHoverSound()}
                              className="minecraft-button"
                            >
                              <Icon name="Copy" size={16} />
                            </Button>
                          </div>
                        </div>

                        {/* Port */}
                        <div className="bg-muted/20 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">Порт:</div>
                              <div className="text-xl font-bold text-secondary font-mono">
                                {serverStats.port}
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(serverStats.port.toString())}
                              onMouseEnter={() => playHoverSound()}
                              className="minecraft-button"
                            >
                              <Icon name="Copy" size={16} />
                            </Button>
                          </div>
                        </div>

                        {/* Full Address */}
                        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                          <div className="text-sm text-muted-foreground mb-2 text-center">
                            Полный адрес для подключения:
                          </div>
                          <div className="text-center">
                            <code className="text-lg font-bold text-primary bg-muted/20 px-3 py-2 rounded font-mono">
                              {serverStats.ip}:{serverStats.port}
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(`${serverStats.ip}:${serverStats.port}`)}
                              className="ml-2"
                            >
                              <Icon name="Copy" size={16} />
                            </Button>
                          </div>
                        </div>

                        {/* Instructions */}
                        <div className="bg-muted/10 p-4 rounded-lg">
                          <h4 className="font-bold text-foreground mb-2 flex items-center">
                            <Icon name="Info" size={16} className="mr-2 text-primary" />
                            Как подключиться:
                          </h4>
                          <ol className="text-sm text-muted-foreground space-y-1">
                            <li>1. Запусти Minecraft {serverStats.version}</li>
                            <li>2. Нажми "Сетевая игра"</li>
                            <li>3. Нажми "Добавить сервер"</li>
                            <li>4. Вставь IP адрес: <code className="bg-muted/20 px-1 rounded">{serverStats.ip}</code></li>
                            <li>5. Нажми "Готово" и подключайся!</li>
                          </ol>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* News */}
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Icon name="Newspaper" size={24} className="mr-3" />
                    Последние новости
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {news.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                      <Badge variant={item.type === 'event' ? 'default' : 'secondary'}>
                        {item.type === 'event' ? 'Ивент' : item.type === 'update' ? 'Обновление' : 'Техработы'}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="minecraft-card">
                <CardContent className="p-6 text-center">
                  <Icon name="Sword" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">PvP Арены</h3>
                  <p className="text-muted-foreground">Сражайся с другими игроками в эпических битвах</p>
                </CardContent>
              </Card>
              
              <Card className="minecraft-card">
                <CardContent className="p-6 text-center">
                  <Icon name="Pickaxe" size={48} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Кастомные руды</h3>
                  <p className="text-muted-foreground">Добывай уникальные ресурсы и создавай мощные предметы</p>
                </CardContent>
              </Card>
              
              <Card className="minecraft-card">
                <CardContent className="p-6 text-center">
                  <Icon name="Crown" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Гильдии</h3>
                  <p className="text-muted-foreground">Создавай альянсы и завоевывай территории</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Map Tab */}
          <TabsContent value="map" className="space-y-6">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Icon name="Map" size={24} className="mr-3" />
                  Интерактивная карта мира
                </CardTitle>
                <CardDescription>
                  Исследуй мир Dark Village. Нажми на регион для подробностей.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img 
                    src="/img/25f80a98-1423-4946-a3c0-f3b7bfd1cb91.jpg" 
                    alt="World Map" 
                    className="w-full h-96 minecraft-pixel rounded-lg object-cover"
                  />
                  
                  {/* Interactive Points */}
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg hover:scale-125 transition-all duration-200 animate-pulse"
                      style={{
                        backgroundColor: region.color,
                        left: `${region.x}%`,
                        top: `${region.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => {
                        playClickSound();
                        setSelectedRegion(selectedRegion === region.id ? null : region.id);
                      }}
                      onMouseEnter={() => playHoverSound()}
                    />
                  ))}
                </div>
                
                {/* Region Details */}
                <div className="grid md:grid-cols-5 gap-4 mt-6">
                  {regions.map((region) => (
                    <Card 
                      key={region.id}
                      className={`minecraft-card cursor-pointer transition-all ${
                        selectedRegion === region.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => {
                        playClickSound();
                        setSelectedRegion(selectedRegion === region.id ? null : region.id);
                      }}
                      onMouseEnter={() => playHoverSound()}
                    >
                      <CardContent className="p-4 text-center">
                        <div 
                          className="w-8 h-8 rounded-full mx-auto mb-2"
                          style={{backgroundColor: region.color}}
                        />
                        <h4 className="font-bold text-sm mb-1">{region.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Users" size={12} className="mr-1" />
                          {region.players}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="text-primary">Статистика сервера</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Загрузка ЦП</span>
                      <span>23%</span>
                    </div>
                    <Progress value={23} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Использование ОЗУ</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Заполненность</span>
                      <span>{Math.round((serverStats.online / serverStats.maxPlayers) * 100)}%</span>
                    </div>
                    <Progress value={(serverStats.online / serverStats.maxPlayers) * 100} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="text-primary">Топ игроков</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {['Steve_Master', 'Alex_Builder', 'Creeper_Hunter', 'Diamond_King', 'Enderman_Slayer'].map((player, index) => (
                    <div key={player} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center">
                        <Badge className="mr-3 minecraft-button">#{index + 1}</Badge>
                        <span className="font-mono">{player}</span>
                      </div>
                      <div className="text-secondary font-bold">
                        {Math.floor(Math.random() * 1000) + 500} очков
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Index;