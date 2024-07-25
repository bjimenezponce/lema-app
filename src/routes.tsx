import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  PresentationChartLineIcon,
  BeakerIcon,
  Cog6ToothIcon,
  ClockIcon,
  BookmarkIcon,
  ArrowRightCircleIcon,
  RocketLaunchIcon,
  GlobeAmericasIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Home from "@/app/dashboard/page";
import SignIn from "@/app/auth/signin/page";
import HomePage from "@/app/dashboard/page";
import MarketStudy from "./app/dashboard/job-postings/page";
import TecnologicalAnalisis from "@/app/dashboard/page";
import LaborMarket from "./app/dashboard/labor-market/page";
import TerritorialAnalysis from "./app/dashboard/territorial-analysis/page";
import IncomeEmploymentTabs from "./components/dashboard/income-employment/IncomeEmploymentTabs";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export interface Pages {
  icon: any;
  name: string;
  path: string;
  element: any;
}

export interface Routes {
  title: string;
  layout: string;
  pages: Pages[];
}

export const routes = [
  {
    title: "Analisis",
    layout: "dashboard",
    pages: [
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "Inicio",
      //   path: "/",
      //   element: <HomePage />,
      // },
      {
        icon: <GlobeAmericasIcon {...icon} />,
        name: "Analisis Territorial ES",
        path: "/territorial-analysis",
        element: <TerritorialAnalysis />,
      },
      {
        icon: <BeakerIcon {...icon} />,
        name: "Mercado Laboral",
        path: "/labor-market",
        element: <LaborMarket />,
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "Empleabilidad - ingresos",
        path: "/income-employment",
        element: <IncomeEmploymentTabs />,
      },
      {
        icon: <PresentationChartLineIcon {...icon} />,
        name: "Bolsas de empleo",
        path: "/job-postings",
        // path: "/market-study",
        element: <MarketStudy />,
      },
      // {
      //   icon: <RocketLaunchIcon {...icon} />,
      //   name: "Analisis Tecnologico",
      //   path: "/technological-analysis",
      //   element: <TecnologicalAnalisis />,
      // },

      // {
      //   icon: <Cog6ToothIcon {...icon} />,
      //   name: "Administracion",
      //   path: "/admin",
      //   element: <Home />,
      // },
    ],
  },
  // {
  //   title: "panel usuario",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ClockIcon {...icon} />,
  //       name: "Historial de consultas",
  //       path: "/sign-in",
  //       element: (
  //         <SignIn
  //           searchParams={{
  //             callbackUrl: undefined,
  //           }}
  //         />
  //       ),
  //     },
  //     {
  //       icon: <BookmarkIcon {...icon} />,
  //       name: "Marcadores",
  //       path: "/sign-up",
  //       element: (
  //         <SignIn
  //           searchParams={{
  //             callbackUrl: undefined,
  //           }}
  //         />
  //       ),
  //     },
  //     {
  //       icon: <ArrowRightCircleIcon {...icon} />,
  //       name: "Cerrar Sesión",
  //       path: "/login",
  //       element: (
  //         <SignIn
  //           searchParams={{
  //             callbackUrl: undefined,
  //           }}
  //         />
  //       ),
  //     },
  //   ],
  // },
];

export default routes;
