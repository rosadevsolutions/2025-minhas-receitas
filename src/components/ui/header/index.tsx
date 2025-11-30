import type React from "react";

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-center bg-white w-full h-[116px]">
			<section className="flex items-center justify-between w-[1276px]">
				<div className="flex items-center justify-between w-[520px]">
					<h1 className="text-[28px] font-extrabold text-orange-600 leading-1 font-[Fredoka]">
						MyReceipes
					</h1>
					<nav>
						<ul className="flex items-center justify-between w-[320px]">
							<li>
								<a
                  className="font-normal text-gray-700 hover:text-orange-600 text-[18px] leading-1 font-[Fredoka] cursor-pointer transition ease-in-out duration-300"
                  href="#a"
                >
                  Receitas Favoritas
                </a>
							</li>
              <li>
								<a
                  className="font-normal text-gray-700 hover:text-orange-600 text-[18px] leading-1 font-[Fredoka] cursor-pointer"
                  href="#b"
                >
                  Receitas Públicas
                </a>
							</li>
						</ul>
					</nav>
				</div>
				<button className="flex justify-center items-center w-[200px] h-[50px] rounded-[15px] cursor-pointer bg-orange-600 hover:opacity-70 transition ease-in-out duration-800 hover:scale-103">
					<span className="text-white text-[16px] font-[Inter] font-semibold leading-1">
						Nova Receita
					</span>
				</button>
			</section>
		</header>
	);
};

export default Header;
