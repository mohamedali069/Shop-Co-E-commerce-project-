import { landing } from './homecomponents/landing/landing';
import { scrollUpButton } from './homecomponents/scrollupbtn/scrollup';
import { styling } from './homecomponents/stylingsection/styling';
import { testmonials } from './homecomponents/testmonials/testmonials';
import { topSellingssec } from './homecomponents/topselling';
import {newArivelssec} from './homecomponents/newarrivels'
import { cart } from './pagescomponents/cart/cart';





export const home = () => {
  const home = document.createElement('home');
  home.appendChild(landing());
  home.appendChild(topSellingssec());
  home.appendChild(newArivelssec())
  home.appendChild(styling());
  home.appendChild(scrollUpButton());
  home.appendChild(testmonials());
  cart()
  return home;
}
