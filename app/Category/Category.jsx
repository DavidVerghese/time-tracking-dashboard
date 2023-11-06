export default function Category({ category, timeframe, key }) {

    const colorMap = {
		"Work": "bg-light-red-work",
		"Play": "bg-soft-blue-play",
		"Study": "bg-light-red-study",
		"Exercise": "bg-lime-green-exercise ",
		"Social": "bg-violet-social",
		"Self Care": "bg-soft-orange-self-care",
    }

    return (
        <div key={key} className={`${colorMap[category.title]} rounded-xl flex flex-col justify-end max-sm:h-48`}>
            <div className="bg-dark-blue h-4/5 rounded-xl">
                <h2>{category.title}</h2>
                <p class = "text-4xl font-bold">{category.timeframes[timeframe].current}</p>
                <p>Last: {category.timeframes[timeframe].previous}</p>
			</div>
		</div>
    )
}