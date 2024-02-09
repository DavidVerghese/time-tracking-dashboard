'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { addCategory } from './categoriesSlice';
import Timeframe from './timeframe'
import ColorDropdown from './colorDropdown'
import IconDropdown from './iconDropdown'
import { object, string, number, date, InferType } from 'yup';

let categorySchema = object({
	title: string().required().min(3),
	timeframes: object({
		daily: object({
			current: number().required().max(24),
			previous: number().required().max(24)
		}).required(),
		weekly: object({
			current: number().required().max(168),
			previous: number().required().max(168)
		}).required(),
		monthly: object({
			current: number().required().max(744),
			previous: number().required().max(744)
		}).required()
	}).required(),
	color: string(),
	icon: string()
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

export default function AddCategoryForm() {

    const categories = useSelector((state: RootState) => state.categories)
    const dispatch = useDispatch()
	const [validationErrors, setValidationErrors] = useState<any>();
	const [submitted, setSubmitted] = useState(false);

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

	useEffect(() => {
		const result = validate(formData).then((result)=> {
			if (result instanceof Error) {
				setValidationErrors(result);
			} else {
				setValidationErrors("")
			}
		});
	}, [submitted]);

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
		setSubmitted(!submitted);
		if (!validationErrors) {
			// console.log('no errors occured')
			// console.log(formData)
			dispatch(addCategory(formData))
		}
		else {
			// console.log('errors occured')
			// console.log('validationErrors', validationErrors.errors)
			// console.log('formData', formData)
		}
	}

    return (

    <div>
        <div className="flex min-h-full flex-1 flex-col px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                Add a new category
                </h2>
            </div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST" onClick={e=>handleSubmit(e)}>
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
							onChange={ handleInputChange }
							required
							className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
						/>
						</div>
					</div>
					<Timeframe timeframe="daily" formData={ formData } handleTimeframeInputChange={ handleTimeframeInputChange }	/>
					<Timeframe timeframe="weekly" formData={ formData } handleTimeframeInputChange={ handleTimeframeInputChange }	/>
					<Timeframe timeframe="monthly" formData={ formData } handleTimeframeInputChange={ handleTimeframeInputChange }	/>
					<ColorDropdown value={ formData.color } onChange={ handleSelectChange } />
					<IconDropdown value={ formData.icon } onChange={ handleSelectChange } />
					{/* <div>
						<label htmlFor="icon" className="block text-sm font-medium leading-6">
							Icon (optional)
						</label>
						<div className="mt-2">
							<input
								id="icon"
								name="icon"
								type="text"
								value={ formData.icon }
								onChange={ handleInputChange }
								className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black sm:leading-6"
							/>
						</div>
					</div> */}

					<div>
						<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
						Submit
						</button>
						{ validationErrors ? validationErrors.errors.map((error, index) => (<div key={ index } className="text-red-500 text-center">{ error }</div>)) : "" }
					</div>
				</form>
			</div>
        </div>
    </div>
    )
  }