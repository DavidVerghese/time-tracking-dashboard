'use client'
import { store } from '../store'
import { Provider } from 'react-redux'
import Categories from '../features/categories/Categories'

interface GridProps {
	timeframe: string
}

export default function Grid({timeframe}: GridProps) {

	return (
		<Provider store={store}>
			<Categories timeframe={timeframe}/>
		</Provider>
	)
}

