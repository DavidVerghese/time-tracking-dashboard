const icons: string[] = ["Suitcase", "Controller", "Book", "Runner", "Speech Bubble", "Heart"];

interface DropdownProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	error: string;
}

export default function IconDropdown({ value, onChange, error }: DropdownProps) {
	return (
		<>
			<label htmlFor="icons" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a icon</label>
			<select
				value={value}
				name="icon"
				onChange={(e) => onChange(e)}
				id="icons"
				defaultValue= "Choose a icon"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
				<option value="">Choose a icon</option>
				{icons.map((icon, index) => <option key={ index } value={ icon }>{ icon }</option>)}
			</select>
			{ error ? <p className="text-red-500 text-center">Icon { error }</p> : "" }
		</>
	);
}