export default function Category({ category, timeframe, key }) {
    
    const colorMap = { 
		"Work": "light-red-work",
		"Play": "soft-blue-play",
		"Study": "light-red-study",
		"Exercise": "lime-green-exercise ",
		"Social": "violet-social",
		"Self Care": "soft-orange-self-care",
	}

    return (
        <div key={key} className={`bg-${colorMap[category.title]} rounded-xl flex flex-col justify-end max-sm:h-48`}>
			<div className="bg-dark-blue h-4/5 rounded-xl">
                <p>{category.title}</p>
                <p>{category.timeframes[timeframe].current}</p>
                <p>Last: {category.timeframes[timeframe].previous}</p>
			</div>	
		</div>
    )
}