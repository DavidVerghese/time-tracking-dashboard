
"use client"
import {useState} from 'react'
import Timeframe from './timeframe'
import Dropdown from './dropdown'

interface FormData {
	title: string;
	timeframes: {
		daily: {
			current: number;
			previous: number;
		};
		weekly: {
			current: number;
			previous: number;
		};
		monthly: {
			current: number;
			previous: number;
		};
	};
};

export default function addCategory(){
	const [formData, setFormData] = useState<FormData>({
		title: '',
		timeframes: {
			daily: {
				current: 0,
				previous: 0
			},
			weekly: {
				current: 0,
				previous: 0
			},
			monthly: {
				current: 0,
				previous: 0
			}
		}
	});

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	}

	function handleTimeframeInputChange(event: React.ChangeEvent<HTMLInputElement>, timeframe: string) {
		const { name, value } = event.target;
		setFormData({
			...formData,
			timeframes: {
				...formData.timeframes,
				[timeframe]: { ...formData.timeframes[timeframe], [name]: value }
			}
		});
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		//onSubmit(formData);
	  }

	return (
		// https://v1.tailwindcss.com/components/forms
		<form className="w-full max-w-sm" onSubmit={handleSubmit}>
			 <div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label htmlFor="title" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
						Title
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="title"
						name="title"
						type="text"
						value={formData.title}
						onChange={handleInputChange}
					/>
				</div>
			</div>

			<Timeframe timeframe="daily" formData={formData} handleTimeframeInputChange={handleTimeframeInputChange}	/>
			<Timeframe timeframe="weekly" formData={formData} handleTimeframeInputChange={handleTimeframeInputChange}	/>
			<Timeframe timeframe="monthly" formData={formData} handleTimeframeInputChange={handleTimeframeInputChange}	/>
			<Dropdown/>
			<button onClick={()=>console.log(formData)} type="submit">Submit</button>
		</form>
	)
}

