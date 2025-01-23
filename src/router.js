
import {home} from './home'
import {onsale} from './pagescomponents/onsale/onsale'
import { singleproductPage } from './pagescomponents/singleproduct/singleproduct';
import { cartPage } from './pagescomponents/cart/cart';
import { shopproductspage } from './pagescomponents/shoproducts/shoppro';
import { newArivelssec } from './homecomponents/newarrivels';



const routes = {
    '/' : "home",
    '/on-sale':"onsale",
    '/cart':"cartPage",
    '/shop-products':"shopproductspage",
    '/single-product':"singleproductPage",
    '/new-arrival':"newArivelssec",
    '/product/:id' : 'product'

}

export const Router = () => {
    const path = window.location.hash.replace('#', '') || '/';
    const app = document.getElementById('app');
    app.innerHTML = ''; // Clear previous content
    app.appendChild(routes[path] ? eval(routes[path])() : home()); // Default to Main if route doesn't exist

}


