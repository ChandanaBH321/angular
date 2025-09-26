import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Payment } from './payment/payment';
import { Success } from './success/success';
import { Orders } from './orders/orders';




export const routes: Routes = [
  { path: '', component: Home },
 { path: 'login', component: Login },
   { path: 'cart', component: Cart },
     { path: 'checkout', component: Checkout },
       { path: 'payment', component:Payment },
         { path: 'success', component: Success }, 
           { path: 'orders', component: Orders},
  { path: '**', redirectTo: '' }
  
];
