import NewsItem from '../components/NewsItem'
import MainTitle from '../Typography/MainTitle'

const News = () => {
	return (
		<div className='news'>
			<MainTitle text={'Новости'} className={'news-title mt-32'}/>
			<div className='news-item col-md-10 mtb-auto-0 p-24'>
				<NewsItem 
					day={'12'}
					month={'сентябрь'}
					title={'Стоп, снято! Делаем идеальные фото на iPhone'}
					text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'}
				/>
				<NewsItem 
					day={'12'}
					month={'сентябрь'}
					title={'Стоп, снято! Делаем идеальные фото на iPhone'}
					text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'}
				/>
				<NewsItem 
					day={'01'}
					month={'сентябрь'}
					year={'2022'}
					title={'Стоп, снято! Делаем идеальные фото на iPhone'}
					text={'7 июня Apple открыла Всемирную конференцию для разработчиков WWDC 2021. На ней компания представила обновления для своих операционных систем: iOS 15, iPadOS, watchOS 8 и macOS Monterey. Коротко о главном – в нашем материале.'}
					image={'../images/news/newsImage.png'}
				/>
			</div>
		</div>
	)
}

export default News