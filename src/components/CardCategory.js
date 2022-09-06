import MainTitle from '../Typography/MainTitle';

const CardCategory = ({text, backgroundImage}) => {
	return (
		<div className='card'>
			<div className='image-card'>
				<div className="img" style={{ backgroundImage: backgroundImage }}>
					<MainTitle text={text} className='card-category-text' />
				</div>
			</div>
		</div>
	)
}

export default CardCategory;