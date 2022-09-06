import React, { useEffect } from "react";



function SideBar({isOpenSideBar, setIsOpenSideBar}) {

useEffect(() => {
	if(isOpenSideBar) {
		document.addEventListener('keydown', (event) => {
				if (event.code === "Escape" && isOpenSideBar) {
						setIsOpenSideBar(false)
				}
		})
	}
}, [isOpenSideBar])

return (
    <div className={`sidebar ${isOpenSideBar ? 'open-side' : ''}`}>
        <div className="sidebar-inner">
			<ul className="level-one-list">
				<li>
					<a href="#" className="sidebar-link">
						<div className="text-link">
							<svg height="20" width="20">
								<use href='/icons/sr-placemarker-20.svg#root'></use>
							</svg>
							Женщинам
						</div>
						
						<svg height="16" width="16" className="svg-link">
							<use href='/icons/sr-chevron-right.svg#root'></use>
						</svg>
					</a>
				</li>
				<li>
					<a href="#" className="sidebar-link">
						<div className="text-link">
							<svg height="20" width="20">
								<use href='/icons/sr-placemarker-20.svg#root'></use>
							</svg>
							Женщинам
						</div>
						
						<svg height="16" width="16" className="svg-link">
							<use href='/icons/sr-chevron-right.svg#root'></use>
						</svg>
					</a>
				</li>
				<li>
					<a href="#" className="sidebar-link">
						<div className="text-link">
							<svg height="20" width="20">
								<use href='/icons/sr-placemarker-20.svg#root'></use>
							</svg>
							Женщинам
						</div>
						
						<svg height="16" width="16"  className="svg-link">
							<use href='/icons/sr-chevron-right.svg#root'></use>
						</svg>
					</a>
				</li>
				<li>
					<a href="#" className="sidebar-link">
						<div className="text-link">
							<svg height="20" width="20">
								<use href='/icons/sr-placemarker-20.svg#root'></use>
							</svg>
							Женщинам
						</div>
						
						<svg height="16" width="16" className="svg-link">
							<use href='/icons/sr-chevron-right.svg#root'></use>
						</svg>
					</a>
				</li>
				
			</ul>
		</div>
		<div className="sidebar-next">
			<div className="sidebar-next-inner">
				<h3 className="sidebar-title">Мужчинам</h3>
				<ul className="level-one-list">
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
							
							<svg height="16" width="16" className="svg-link">
								<use href='/icons/sr-chevron-right.svg#root'></use>
							</svg>
						</a>
					</li>
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
							
							<svg height="16" width="16" className="svg-link">
								<use href='/icons/sr-chevron-right.svg#root'></use>
							</svg>
						</a>
					</li>
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
						</a>
					</li>
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
						</a>
					</li>
					
				</ul>
			</div>

			<div className="sidebar-next-inner">
				<h3 className="sidebar-title">Мужчинам</h3>
				<ul className="level-one-list">
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинамdsfdsf dsfsdf fdsf
							</div>
						</a>
					</li>
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
						</a>
					</li>
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
						</a>
					</li>
					<li>
						<a href="#" className="sidebar-link">
							<div className="text-link">
								Женщинам
							</div>
						</a>
					</li>
					
				</ul>
			</div>

		</div>
		<button className="sidebar-close" onClick={() => setIsOpenSideBar(false)}>
			<svg height="32" width="32" className="svg-link">
				<use href='/icons/sr-close.svg#root'></use>
			</svg>
		</button>
    </div>
);
}

export default SideBar;