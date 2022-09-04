import { useEffect } from 'react'

const SideBar = ({isOpenSideBar, setIsOpenSideBar}) => {

	const dataSideBar = [
		{
				name: 'Женщинам',
		},
		{
				name: 'Мужчинам',
				innerData: [
					{
						name: 'Подарки Мужчинам',
						innerData: [
							{
								name: 'Кофта'
							},
							{
								name: 'Джинсы'
							},
							{
								name: 'Брюки'
							},
							{
								name: 'Духи'
							},
							{
								name: 'Разное'
							},
						]
					},
					{
						name: 'Кофта'
					},
					{
						name: 'Джинсы'
					},
					{
						name: 'Брюки'
					},
					{
						name: 'Духи'
					},
					{
						name: 'Разное'
					},
				]
		},
		{
				name: 'Женщинам',
		},
		{
				name: 'Женщинам',
		},
		{
				name: 'Женщинам',
		},
		{
				name: 'Женщинам',
		},
	]

	useEffect(() => {
		sideBarCloseKeydown()
	})

	const sideBarCloseKeydown = () => {
		document.addEventListener('keydown', (event) => {
			console.log(event)
			console.log(isOpenSideBar)
				if (event.code === "Escape" && isOpenSideBar) {
						setIsOpenSideBar(false)
				}
		})
	}

	const sideBarClose = (e) => {
		if(e.target === document.querySelector('.sideBar')){
			setIsOpenSideBar(false)
		}
	}

	const innerSideBar = (arr) => {
		return (
				<div className='inner_sideBar'>
					{
						arr.map((item, i) => {
							const haveInnerData = item.innerData ? true : false
							return (
								<div	
									className='sideBar_block' 
									key={i}
								>
									<div>
										<svg height="24" width="24">
											<use href={'/icons/sr-hearth.svg#root'}></use>
										</svg>
										<p>
											{item.name}
										</p>
									</div>
									{haveInnerData ? <div>{'>'}</div> : null}
								</div>
							)
						})
					}
				</div>
		)
	}
	
	return (
		<div 
			className={`sideBar ${isOpenSideBar ? '' : 'hide'}`}
			onClick={sideBarClose}
		>
			<div className='sideBar_main' >

				{dataSideBar.map((item, i) => {
					const haveInnerData = item.innerData ? true : false
					return (
						<>
							<div 
								className='sideBar_block' 
								key={i}
							>
								<div>
									<svg height="24" width="24">
										<use href={'/icons/sr-hearth.svg#root'}></use>
									</svg>
									<p>
										{item.name}
									</p>
								</div>
								{haveInnerData ? <div>{'>'}</div> : null}
							</div>
							{
								haveInnerData 
									? innerSideBar(item.innerData)
									: null 
							}
						</>
					)
				})}

			</div>
			<div onClick={() => setIsOpenSideBar(false)} style={{cursor: 'pointer'}}>
				&times;
			</div>
		</div>
	)
}

export default SideBar;