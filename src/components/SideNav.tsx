"use client";
import PropTypes from "prop-types";
import LemaLogo from "../../public/lemalogo.png";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, IconButton, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { root } from "postcss";
import { Pages, Routes } from "@/routes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/router";

const defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Proyecto Lema",
};

const propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const SideNav = ({ brandImg, brandName, routes }: { brandImg: any; brandName: any; routes: any }) => {
  // const router = useRouter();
  // const currentUrl = router.asPath;

  const [openSideNav, setOpenSidenav] = useState(true);
  const [activeTab, setActiveTab] = useState(routes[0].pages[0].path);
  // const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavColor = "gray";
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  const sidenavType = "white";
  const openSidenav = true;
  const currentPath = usePathname();
  let active: boolean = false;
  return (
    <aside
      className={`bg-white ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl border border-blue-gray-100 transition-transform duration-300 xl:translate-x-0`}
    >
      <div className={`relative`}>
        <Link href="/" className="px-8 py-6 text-center">
          <Typography variant="h6" color={sidenavType === "white" ? "blue-gray" : "white"}>
            <Image src={LemaLogo} alt="Login Form" width={500} />
            {/* {brandName} */}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="ml-4 mr-4">
        {routes.map(({ layout, title, pages }: Routes, key: any) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mb-2 mt-4">
                <Typography
                  variant="small"
                  color={sidenavType === "white" ? "blue-gray" : "white"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }: Pages) => {
              currentPath === path ? (active = true) : (active = false);
              return (
                <li key={name}>
                  <Link href={`/${layout}${path}`}>
                    <Button
                      variant={active ? "gradient" : "text"}
                      ripple={true}
                      color={active ? sidenavColor : sidenavType === "white" ? "blue-gray" : "white"}
                      onClick={() => setActiveTab(path)}
                      className={`flex items-center gap-4 px-4 capitalize ${
                        activeTab === path ? "text-gray-100 bg-blue-700 hover:bg-light-blue-700" : ""
                      }
                      `}
                      fullWidth
                    >
                      {icon}
                      <Typography color="inherit" className="font-medium capitalize">
                        {name}
                      </Typography>
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </aside>
  );
};

// Sidenav.displayName = "/src/widgets/layout/sidenav.tsx";

export default SideNav;
