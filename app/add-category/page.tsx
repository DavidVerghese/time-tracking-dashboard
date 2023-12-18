
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
	color: string;
	image?: string;
};

export default function addCategory() {
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
		},
		color: '',
		image: ''
	});

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	}
	function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
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
	  <>
		<div className="flex min-h-full flex-1 flex-col px-6">
		  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
			<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
			  Add a new category
			</h2>
		  </div>

		  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form className="space-y-6" action="#" method="POST">

			  <div>
				<label htmlFor="title" className="block text-sm font-medium leading-6">
				 	Title
				</label>
				<div className="mt-2">
				  <input
					id="title"
					name="title"
					type="text"
					value={ formData.title}
					onChange={handleInputChange}
					required
					className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
				  />
				</div>
			  </div>

			<Timeframe timeframe="daily" formData={formData} handleTimeframeInputChange={handleTimeframeInputChange}	/>
 			<Timeframe timeframe="weekly" formData={formData} handleTimeframeInputChange={handleTimeframeInputChange}	/>
 			<Timeframe timeframe="monthly" formData={formData} handleTimeframeInputChange={handleTimeframeInputChange}	/>

			 <Dropdown value={formData.color} onChange={handleSelectChange} />
			 
			  <div>
				<label htmlFor="image" className="block text-sm font-medium leading-6">
				 	Image (optional)
				</label>
				<div className="mt-2">
				  <input
					id="image"
					name="image"
					type="text"
					value={ formData.image }
					onChange={handleInputChange}
					className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
				  />
				</div>
			  </div>

			  <div>
				<button
				  type="submit"
				  onClick={()=>console.log(formData)}
				  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
				  Submit
				</button>
			  </div>
			</form>
		  </div>
		</div>
	  </>
	)
  }


