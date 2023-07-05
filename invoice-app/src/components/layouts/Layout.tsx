import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout: FC = () => {
  return (
    <>
      <div className="flex bg-dark-dark">
        <Sidebar />
        <main className="flex w-full justify-center py-20">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
