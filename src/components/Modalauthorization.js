import { useEffect } from 'react';
import MainTitle from '../Typography/MainTitle';
import Title15 from '../Typography/Title15';
import Button from './Button';
import Input from './Input';

const Modalauthorization = ({isOpenModalAutorization, setIsOpenModalAutorization, isSendMail, setIsSendMail}) => {

	useEffect(() => {
		isOpenModalAutorization ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

		if(isOpenModalAutorization) {
			document.addEventListener('keydown', (event) => {
				if (event.code === "Escape") {
						setIsOpenModalAutorization(false)
						setIsSendMail(false)
				}
			})
		}

	}, [isOpenModalAutorization])

	const closeModalWindow = (e) => {
		if(e.target === document.querySelector('.modal')) {
			setIsOpenModalAutorization(false)
			setIsSendMail(false)
		}
	}

	const onSubmit = (event) => {
		event.preventDefault();
		setIsSendMail(true)
	}

	const endAutorization = () => {
		setIsOpenModalAutorization(false)
		setIsSendMail(false)
	}

	const toggleModalWindow = () => {
		if(isSendMail) {
			return <>
				<MainTitle text={'LOGO'} className={"font-size-33 black mb-32"}/>
				<MainTitle text={'Проверьте почту'} className={'black mb-8'}/>
				<Title15 text={'Мы отправили код на ваш почтовый адрес. Пожалуйста подтвердите ваш электронный адрес.'} className={'black mb-16'}/>
				<Button text={'Понятно'} className={'btn btn-primary w-100'} event={()=>endAutorization()} />
			</>
		} else {
			return <>
				<MainTitle text={'LOGO'} className={"font-size-33 black mb-32"}/>
				<MainTitle text={'Войдите по почте'} className={'black mb-8'}/>
				<Title15 text={'Мы отправим код на ваш почтовый адрес.'} className={'black mb-16'}/>
				<Title15 text={'Почта'} className={'black'}/>
				<form onSubmit={(e) => onSubmit(e)}>
					<Input text={'hello@example.com'} className={'w-100 mb-32'}/>
					<Button text={'Получить код'} className={'btn btn-primary w-100'}/>
				</form>
			</>
		}
	}

	return (
		<div className='modal' style={{display: `${isOpenModalAutorization ? 'block' : 'none'}`}} onClick={(e) => closeModalWindow(e)}>
			<div className='modal-window'>
				<div className='modal-content p-32'>
					{toggleModalWindow()}
				</div>
			</div>
		</div>
	)
}

export default Modalauthorization;