const colors: string[] = ["tomato red", "blue", "cherry red", "green", "purple", "green-brown"];

interface DropdownProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	error: string;
}

export default function ColorDropdown({ value, onChange, error }: DropdownProps) {
	return (
		<>
			<label htmlFor="colors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a color</label>
			<select
				value={value}
				name="color"
				onChange={(e) => onChange(e)}
				id="colors"
				defaultValue= "Choose a color"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option value="">Choose a color</option>
				{colors.map((color) => <option key={ color } value={ color }>{ color } </option>)}
			</select>
			{ error ? <p className="text-red-500 text-center">Color { error }</p> : "" }
		</>
	);
}