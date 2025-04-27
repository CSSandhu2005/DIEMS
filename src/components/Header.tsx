import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import { navMenu } from '@/constants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link, useLocation } from 'react-router-dom'; // correct import

import { Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="relative container flex items-center justify-between">
        <Logo />
        <NavigationMenu className="max-xl:hidden mx-auto">
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <div>
                    <NavigationMenuTrigger className="relative">{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[640px] grid-cols-2 gap-2 p-3">
                        {submenu.map(({ href, icon, label, desc }, subIndex) => (
                          <li key={subIndex}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={href}
                                className={`flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5 ${location.pathname === href ? 'text-[#31C6F7]' : ''}`}
                              >
                                <div className="w-10 h-10 bg-primary/10 rounded-sm border-foreground-5 flex-shrink-0 grid place-items-center">
                                  {icon}
                                </div>
                                <div>
                                  <div className="text-[13px] leading-normal mb-1">{label}</div>
                                  <p className="text-[13px] leading-normal text-muted-foreground">{desc}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={href}
                      className={`${
                        navigationMenuTriggerStyle()
                      } ${location.pathname === href ? 'text-[#31C6F7]' : ''}`}
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="xl:hidden">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden"
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
