import { PathRoutes } from "@/@types/enums";
import type React from "react";
import { Link, useNavigate } from "react-router";

const Header: React.FC = () => {
	const navigate = useNavigate();
	const onNovasReceitas = () => {
		navigate(PathRoutes.NOVAS_RECEITAS);
	};

	return (
		<header className="flex items-center justify-center bg-white w-full h-[116px]">
			<section className="flex items-center justify-between w-[1240px]">
				<div className="flex items-center justify-start w-[50%] gap-14">
					<Link to={PathRoutes.HOME} className="cursor-pointer">
						<span className="text-orange-600 text-[28px] font-bold leading-none font-[Fredoka]">
							Minhas Receitas
						</span>
					</Link>
					<nav className="flex items-center justify-start gap-10">
						<Link
							to={PathRoutes.RECEITAS_FAVORITAS}
							className="text-gray-700 hover:text-orange-600 text-[18px] font-normal leading-1 font-[Fredoka] cursor-pointer"
						>
							Receitas Favoritas
						</Link>
						<Link
							to={PathRoutes.RECEITA}
							className="text-gray-700 hover:text-orange-600 text-[18px] font-normal  leading-1 font-[Fredoka] cursor-pointer"
						>
							Receitas Públicas
						</Link>
					</nav>
				</div>
				<button
					type="button"
					className="flex justify-center items-center w-[200px] h-[50px] rounded-[15px] cursor-pointer bg-orange-600 hover:opacity-70 transition ease-in-out duration-800 hover:scale-103"
					onClick={onNovasReceitas}
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
