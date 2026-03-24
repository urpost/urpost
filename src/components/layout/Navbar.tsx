import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, PlusCircle, Sparkles, BadgeCheck, PenSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Join', path: '/join', icon: PlusCircle },
    { name: 'Get Verified', path: '/verified', icon: BadgeCheck },
    { name: 'Submit Post', path: '/submit', icon: PenSquare },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <header className="hidden sm:flex w-[88px] xl:w-[275px] flex-col justify-between py-4 px-2 xl:px-6 h-screen sticky top-0">
        <div className="space-y-2">
          <div className="p-3 w-fit rounded-full hover:bg-white/10 transition-colors cursor-pointer mb-2">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 p-3 w-fit rounded-full transition-colors duration-200 text-xl",
                    isActive ? "font-bold text-white" : "text-white hover:bg-white/10"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className="w-7 h-7" strokeWidth={isActive ? 2.5 : 2} />
                    <span className="hidden xl:inline">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 z-50 flex justify-around p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "p-2 rounded-full transition-colors",
                isActive ? "text-white" : "text-gray-500 hover:bg-white/10"
              )
            }
          >
            {({ isActive }) => (
              <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
