


export default function Timeframe({timeframe, formData, handleTimeframeInputChange, errors}) {
	return (
		<>
			<h2>{timeframe}</h2>
			<div>
				<label htmlFor={`${timeframe}-current`}className="block text-sm font-medium leading-6">
					Current
				</label>
				<div className="mt-2">
					<input
						id={`${timeframe}-current`}
						name="current"
						type="number"
						value={formData.timeframes[timeframe].current}
						onChange={(e) => handleTimeframeInputChange(e, timeframe)}
						required
						className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
					/>
 				</div>
				{ errors.current ? <p className="text-red-500 text-center">{errors.current}</p> : "" }
			</div>

			<div>
				<label htmlFor={`${ timeframe }-previous`}className="block text-sm font-medium leading-6">
					Previous
				</label>
				<div className="mt-2">
					<input
						id={`${timeframe}-previous`}
						name="previous"
						type="number"
						value={formData.timeframes[timeframe].previous}
						onChange={(e) => handleTimeframeInputChange(e, timeframe)}
						required
						className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
					/>
 				</div>
				{ errors.previous ? <p className="text-red-500 text-center">{ errors.previous }</p> : "" }
			</div>
		</>
	)
}