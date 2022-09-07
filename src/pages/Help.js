import HelpItem from '../components/HelpItem'
import NewsItem from '../components/NewsItem'
import MainTitle from '../Typography/MainTitle'

const Help = () => {
	return (
		<div className='help'>
			<MainTitle text={'Помощь'} className={'help-title mt-32'}/>
			<div className='news-item col-md-10 mtb-auto-0 p-24'>
				<HelpItem title={'С чего начать?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
				<HelpItem title={'Когда начисляются деньги?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
				<HelpItem title={'Что вообще делать?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
				<HelpItem title={'Что такое МФЦА?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
				<HelpItem title={'Кто я?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
				<HelpItem title={'Кто мы?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
				<HelpItem title={'Кто они?'} text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'} />
			</div>
		</div>
	)
}

export default Help