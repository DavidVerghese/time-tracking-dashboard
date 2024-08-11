'use client'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from './categoriesSlice';
import Timeframe from './timeframe'
import ColorDropdown from './colorDropdown'
import IconDropdown from './iconDropdown'
import { object, string, number, InferType } from 'yup';
import { error } from 'console';

let categorySchema = object({
	title: string().required().min(3, { "key": "title", "field": "title", "message": "must be more than 2 characters" }),
	timeframes: object({
		daily: object({
			current: number().required().max(24, { "key": "timeframes.daily.current", "field": "Today's hours", "message": "cannot be over 24" }),
			previous: number().required().max(24, { "key": "timeframes.daily.previous", "field": "Yesterday's hours", "message": "cannot be over 24" })
		}).required(),
		weekly: object({
			current: number().required().max(168, { "key": "timeframes.weekly.current", "field": "This week's hours", "message": "cannot be over 168" }),
			previous: number().required().max(168, { "key": "timeframes.weekly.previous", "field": "Last week's hours", "message": "cannot be over 168" })
		}).required(),
		monthly: object({
			current: number().required().max(744, { "key": "timeframes.monthly.current", "field": "This month's hours", "message": "cannot be over 744" }),
			previous: number().required().max(744, { "key": "timeframes.monthly.previous", "field": "Last month's hours", "message": "cannot be over 744" })
		}).required()
	}).required(),
	color: string().required({ "key": "color", "field": "color", "message": "must be present" }),
	icon: string().required({ "key": "icon", "field": "icon", "message": "must be present" })
});

type Category = InferType<typeof categorySchema>;


const validate = async (data: Category):Promise<Object> => {
	try {
		return await categorySchema.validate(data, { abortEarly: false });
	} catch (error) {
		return error;
	}
};

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
	color?: string;
	icon?: string;
};

interface FormErrors{
	title: string;
	timeframes: {
		daily: {
			current: string;
			previous: string;
		};
		weekly: {
			current: string;
			previous: string;
		};
		monthly: {
			current: string;
			previous: string;
		};
	};
	color?: string;
	icon?: string;
};

interface FormErrorsList {
	errors: {
		"key": string;
		"field": string;
		"message": string;
	}[];
}
export default function AddCategoryForm() {
	const dispatch = useDispatch()
	const [validationErrors, setValidationErrors] = useState<FormErrors>({
		title: '',
		timeframes: {
			daily: {
				current: '',
				previous: ''
			},
			weekly: {
				current: '',
				previous: ''
			},
			monthly: {
				current: '',
				previous: ''
			}
		},
		color: '',
		icon: ''
	});
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
		icon: ''
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
				[timeframe]: { ...formData.timeframes[timeframe],[name]: value }
			}
		});
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		const result = validate(formData).then((result)=> {
			if (result instanceof Error) {
				const findError = function(errors: any, key: string) {
					return errors.find((error: any) => error.key === key)?.message || '';
				}
				const resultList = result as unknown as FormErrorsList; // ? why do I need to do this?

				setValidationErrors({
					title: findError(resultList.errors, "title"),
					timeframes: {
						daily: {
							current: findError(resultList.errors, "timeframes.daily.current"),
							previous: findError(resultList.errors, "timeframes.daily.previous")
						},
						weekly: {
							current: findError(resultList.errors, "timeframes.weekly.current"),
							previous: findError(resultList.errors, "timeframes.weekly.previous")
						},
						monthly: {
							current: findError(resultList.errors, "timeframes.monthly.current"),
							previous: findError(resultList.errors, "timeframes.monthly.previous")
						}
					},
					color: findError(resultList.errors, "color"),
					icon: findError(resultList.errors, "icon")
				});
			} else {
				setValidationErrors({
					title: '',
					timeframes: {
						daily: {
							current: '',
							previous: ''
						},
						weekly: {
							current: '',
							previous: ''
						},
						monthly: {
							current: '',
							previous: ''
						}
					},
					color: '',
					icon: ''
				});
				setFormData({
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
					icon: ''
				});
				dispatch(addCategory(formData))
			}
		});
	}

	return (

	<div className="w-full">
		<div className="flex min-h-full flex-1 flex-col px-6">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
				Add a new category
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full">
				<form className="grid sm:grid-cols-2" action="#" method="POST" onSubmit={handleSubmit}>
					<div className="px-2">
						<div>
							<label htmlFor="title" className="block text-sm font-medium leading-6">
								Title
							</label>
							<div className="mt-2">
							<input
								id="title"
								name="title"
								type="text"
								value={ formData.title }
								onChange={ (e)=>handleInputChange(e) }
								required
								className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
							/>
							{ validationErrors.title ? <p className="text-red-500 text-center">{ validationErrors.title }</p> : "" }
							</div>
						</div>
						<ColorDropdown value={ formData.color } onChange={ handleSelectChange } error={ validationErrors.color } />
						<IconDropdown value={ formData.icon } onChange={ handleSelectChange } error={ validationErrors.icon } />
						<Timeframe timeframe="daily" formData={ formData } handleTimeframeInputChange={ handleTimeframeInputChange } errors={ validationErrors.timeframes.daily }	/>
					</div>
					<div className="px-2">
						<Timeframe timeframe="weekly" formData={ formData } handleTimeframeInputChange={ handleTimeframeInputChange } errors={ validationErrors.timeframes.weekly }/>
						<Timeframe timeframe="monthly" formData={ formData } handleTimeframeInputChange={ handleTimeframeInputChange } errors={ validationErrors.timeframes.monthly }/>
						<div className="mt-3">
							<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
							Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	)
}