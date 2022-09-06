import { useState } from 'react';
import Title15 from '../Typography/Title15';

const Accordion = () => {
	const [isOpenAccordion, setIsOpenAccordion] = useState(false);
	return (
		<div className="accordion">
			<div className={`accordion__item ${isOpenAccordion ? 'accordion__item_show' : ''}`}>
				<div className="accordion__header" onClick={() => setIsOpenAccordion(!isOpenAccordion)}>
					<Title15 text={'Категория'} className={'mb-16'}/>
				</div>
				<div className="accordion__body">
					<ul>
						<li className='mb-8'>Туфли</li>
						<li className='mb-8'>Лоферы</li>
						<li className='mb-8'>Кроссы</li>
						<li className='mb-8'>Макасины</li>
						<li className='mb-8'>Хеофорды</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Accordion