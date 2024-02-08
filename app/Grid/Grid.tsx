'use client'
import Category from "../Category/Category";
import tasksData from '../data.json'
import { store } from '../store'
import { Provider } from 'react-redux'
import Categories from '../features/categories/Categories'

interface GridProps {
	timeframe: string
}

export default function Grid({timeframe}: GridProps) {

	return (
		<Provider store={store}>
			<Categories />
			<div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:w-3/4 sm:h-4/5 m-4">
				{tasksData.map((category, key) => (
				<Category category={category} timeframe={timeframe} key={key} />
					))
				}
			</div>
		</Provider>
	)
}

