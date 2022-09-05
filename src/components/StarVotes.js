const StarVotes = ({rating}) => {
	const renderStars = (rating) => {
		if(rating < .5) {
			return ( 
				<svg height="24" width="24">
						<use href='/icons/sr-star-empty.svg#root'></use>
				</svg>
			)
		} else if (rating < 1) {
			return (
				<svg height="24" width="24">
						<use href='/icons/sr-star-half.svg#root'></use>
				</svg>
			)
		} else {
			return (
				<svg height="24" width="24">
						<use href='/icons/sr-star-full.svg#root'></use>
				</svg>
			)
		}
	} 
	return (
		<div className='star-votes' style={{display: "flex", gap: '9px'}}>
			{renderStars(rating)}
			{renderStars(rating - 1)}
			{renderStars(rating - 2)}
			{renderStars(rating - 3)}
			{renderStars(rating - 4)}
		</div>
	)
}

export default StarVotes;