'use client'
import { store } from '../store'
import { Provider } from 'react-redux'
import Categories from '../features/categories/Categories'
import AddCategoryForm from '../features/categories/addCategory'

interface GridProps {
	timeframe: string
}

export default function Grid({timeframe}: GridProps) {

	return (
		<Provider store={store}>
			{timeframe === 'add-category' ? <AddCategoryForm/> : <Categories timeframe={timeframe}/>}
		</Provider>
	)
}

