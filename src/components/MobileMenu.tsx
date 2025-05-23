import { MenuItem } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import React from 'react';
import { ChevronsUpDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type MobileMenuProps = {
  navMenu: MenuItem[];
};

const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div>
      <ul className='mb-3'>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between">
                            {label} 
                            <ChevronsUpDown />
                        </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="ps-2">
                    <ul className="border-l border-l-muted-foreground/20">
                    {submenu.map(({ href, label }, index) => {
                      if (React.isValidElement(label)) {
                        return null;
                      }

                      return (
                        <li key={index}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-muted-foreground hover:bg-transparent"
                          >
                            <a href={href}>{label}</a>
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                    </CollapsibleContent>
                </Collapsible>
            ) : (
              <Button
                asChild
                variant='ghost'
                className='w-full justify-start'
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className="bg-muted-foreground/20"/>

      <div className="mt-2">
        <div>
            <Button className="w-full" >
              <a href="https://20.219.176.203/dengpmt/">Pay Fees Online</a>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
