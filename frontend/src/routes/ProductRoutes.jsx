import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'));
const ItemDetails = lazy(() => import('../Pages/ItemDetails/ItemDetails'));
const MenCollection = lazy(() => import('../Pages/MenCollection/MenCollection'));
const WomenCollection = lazy(() => import('../Pages/WomenCollection/WomenCollection'));
const KidsCollection = lazy(() => import('../Pages/KidsCollection/KidsCollection'));
const ShoesCollection = lazy(() => import('../Pages/ShoesCollection/ShoesCollection'));
const SummerCollection = lazy(() => import('../Pages/SummerCollection/SummerCollection'));
const SalesCollection = lazy(() => import('../Pages/SalesCollection/SalesCollection'));
const SportsAccessories = lazy(() => import('../Pages/SportsAccessoriesCollection/SportsAccessoriesCollection'));
const SportsEquipment = lazy(() => import('../Pages/SportsEquipmentCollection/SportsEquipmentCollection'));

const ProductRoutes = [
  { path: '/', element: <Home /> },
  { path: '/item-details', element: <ItemDetails /> },
  { path: '/men', element: <MenCollection /> },
  { path: '/women', element: <WomenCollection /> },
  { path: '/kids', element: <KidsCollection /> },
  { path: '/shoes', element: <ShoesCollection /> },
  { path: '/summer-collection', element: <SummerCollection /> }, 
  { path: '/sales', element: <SalesCollection /> },
  { path: '/sports-accessories', element: <SportsAccessories /> },
  { path: '/sports-equipment', element: <SportsEquipment /> },
];

export default ProductRoutes;
