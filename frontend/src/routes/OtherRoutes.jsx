import { lazy } from 'react';

const Mystore = lazy(() => import('../Pages/Mystore/Mystore'));
const Support = lazy(() => import('../Pages/Support/Support'));

const OtherRoutes = [
  { path: '/mystore', element: <Mystore /> },
  { path: '/support', element: <Support /> },
];

export default OtherRoutes;
