import { lazy } from 'react';

const Signin = lazy(() => import('../Pages/Signin/Signin'));
const Wishlist = lazy(() => import('../Pages/Wishlist/Wishlist'));
const Cart = lazy(() => import('../Pages/Cart/Cart'));

const UserRoutes = [
  { path: '/signin', element: <Signin /> },
  { path: '/wishlist', element: <Wishlist /> },
  { path: '/cart', element: <Cart /> },
  
];

export default UserRoutes;
