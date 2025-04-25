import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import { navMenu } from '@/constants';

import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex items-center justify-between'>
        <Logo />
        <Popover>
            <PopoverTrigger asChild>
                <Button
                variant='outline'
                size='icon'
                className='lg:hidden'
            >
                <Menu />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <MobileMenu navMenu={ navMenu }/>
            </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
