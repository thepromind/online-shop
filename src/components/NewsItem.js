const NewsItem = ({day, month, title, text, year, image}) => {
	return (
		<div className='row news-item-row mb-32'>
				<div className='col-md-1'>
					<div className='news-item-date'>
						<span className='underline font-size-33 mtb-0'>{day}</span> 
						<p className='mtb-0'>{month}</p>
						{year ? <p className='mtb-0'>{year}</p> : null}
					</div>
				</div>
				<div className='col-md-9'>
					<h2 className='font-size-33 mtb-0 underline'>
						{title}
					</h2>
					<p className='news-item-text mtb-0 mt-8'>
						{text}
					</p>
					{image 
						? <div>
								<img src={image} alt=""/>
							</div>
						: null}
				</div>
			</div>
	)
}

export default NewsItem;