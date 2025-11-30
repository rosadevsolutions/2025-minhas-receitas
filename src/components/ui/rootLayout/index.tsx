import type React from "react";
import { Outlet } from "react-router";
import Header from "../header";

const RootLayout: React.FC = () => {
	return (
		<div>
      <Header />
      <main>
        <Outlet />
      </main>
		</div>
	);
};

export default RootLayout;
