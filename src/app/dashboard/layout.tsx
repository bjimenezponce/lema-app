import DashboardNavbar from "@/components/DashboardNavbar";
import SideNav from "@/components/SideNav";
import routes from "@/routes";
import InitialDataComponent from "../initial-data";
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const defaultProps = {
    brandImg: "/img/logo-ct.png",
    brandName: "Proyecto Lema",
  };
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <SideNav brandName={defaultProps.brandName} brandImg={defaultProps.brandImg} routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <section>{children}</section>
      </div>
    </div>
  );
}
