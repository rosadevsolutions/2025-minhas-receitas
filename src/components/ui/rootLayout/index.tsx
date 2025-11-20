import type React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
	return (
		<div>
      Navbar
      <main>
        <Outlet />
      </main>
		</div>
	);
};

export default RootLayout;
