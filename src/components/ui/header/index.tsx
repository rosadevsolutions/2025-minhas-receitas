import { PathRoutes } from "@/@types/enums";
import type React from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-center bg-white w-full h-[116px]">
			<section className="flex items-center justify-between w-[1276px]">
				<div className="flex items-center justify-between w-[520px]">
					<h1 className="text-[28px] font-extrabold text-orange-600 leading-1 font-[Fredoka]">
						MyReceipes
					</h1>
					<nav className="flex items-center justify-between w-[320px]">
						<Link
							to={PathRoutes.RECEITAS_FAVORITAS}
							className="text-[18px] font-normal text-gray-700 hover:text-orange-600 leading-1 font-[Fredoka] cursor-pointer"
						>
							Receitas Favoritas
						</Link>
						<Link
							to={PathRoutes.RECEITA}
							className="text-[18px] font-normal text-gray-700 hover:text-orange-600 leading-1 font-[Fredoka] cursor-pointer"
						>
							Receitas Públicas
						</Link>
					</nav>
				</div>
				<button
					type="button"
					className="flex justify-center items-center w-[200px] h-[50px] rounded-[15px] cursor-pointer bg-orange-600 hover:opacity-70 transition ease-in-out duration-800 hover:scale-103"
				>
					<span className="text-white text-[16px] font-[Inter] font-semibold leading-1">
						Nova Receita
					</span>
				</button>
			</section>
		</header>
	);
};

export default Header;
