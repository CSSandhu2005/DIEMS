/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { JSX } from "react";

type MenuItem = {
    href: string;
    label: string;
    submenu?: SubmenuItem[]
  };
  
  type SubmenuItem = {
    href: string;
    icon: JSX.Element;
    label: string | JSX.Element;
    desc: string | JSX.Element;
  }
  
  export type { MenuItem };