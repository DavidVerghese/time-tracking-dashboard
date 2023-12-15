
export default function Timeframe({timeframe, formData, handleTimeframeInputChange}) {
	return (
		<>
			<h2>{timeframe}</h2>
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label htmlFor={`${timeframe}-current`} className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
						Current
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id={`${timeframe}-current`}
						name="current"
						type="number"
						value={formData.timeframes[timeframe].current}
						onChange={(e) => handleTimeframeInputChange(e, timeframe)}
					/>
				</div>
			</div>

			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label
						htmlFor={`${timeframe}-previous`}
						className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
					>
						Previous
					</label>
				</div>
				<div className="md:w-2/3">
					<input id={`${timeframe}-previous`} name="previous" type="number" value={formData.timeframes[timeframe].previous} onChange={(e) => handleTimeframeInputChange(e, timeframe)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
				</div>
			</div>
		</>
	)
}