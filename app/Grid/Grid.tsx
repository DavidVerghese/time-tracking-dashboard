import Category from "../Category/Category";
import tasksData from '../data.json'

interface GridProps {
	timeframe: string
}

export default function Grid({timeframe}: GridProps) {

	return (
		<div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:w-3/4 sm:h-4/5 m-4">
			{tasksData.map((category, key) => (
			<Category category={category} timeframe={timeframe} key={key} />
				))
			}
		</div>
	)
}

