import { useState } from 'react';

const HelpItem = ({title, text}) => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='row help-item-row ptb-24'>
				<div className='col-md-10' onClick={() => setIsOpen(!isOpen)}>
					<h2 className={isOpen ? 'mb-24' : ''} >
						{title}
					</h2>
					<p className={isOpen ? 'open-help-item' : 'close-help-item'} style={{display: `${isOpen ? '' : 'none'}`}}>
						{text}
					</p>
				</div>
			</div>
	)
}

export default HelpItem;