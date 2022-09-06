const SideCats = () => {
	const categoryArr = [
		'Кофта',
		'Джинсы',
		'Брюки',
		'Духи',
		'Разное',
		'Разное',
		'Разное',
		'Разное',
		'Разное',
		'Разное',
	]
	return (
		<div className='sideCats p-4'>
			<ul>
				{categoryArr.map((type, i) => {
					return <li key={i}><a href='#'>{type}</a></li>
				})}
			</ul>
		</div>
	)
}
export default SideCats