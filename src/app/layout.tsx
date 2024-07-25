import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/app/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getServerSideProps } from "@/helpers/auth";
import React from "react";
import dynamic from "next/dynamic";
import InitialDataComponent from "./initial-data";

const ReduxProvider = dynamic(() => import("@/app/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lema App",
  description: "El Futuro del Trabajo Ahora",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSideProps();
  // if (session.props?.session.user) {
  //   return {
  //     redirect: {
  //       destination: "/dashboard",
  //       permanent: false,
  //     },
  //   };
  // }
  return (
    <html lang="es">
      <body className={inter.className}>
        <ReduxProvider>
          <SessionProvider>
            <InitialDataComponent />
            {children}
            <ToastContainer />
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
