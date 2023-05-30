import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { VariantProps, cva } from 'class-variance-authority';
import { useFormContext } from 'react-hook-form';

const inputStyles = cva(
	'rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
	{
		variants: {
			hasError: {
				true: 'border-danger',
				false: 'border-gray-300',
			},
		},
	}
);

interface InputProps extends VariantProps<typeof inputStyles> {
	label: string;
	isRequired?: boolean;
	error?: string;
	type?: 'text' | 'number';
	name: string;
	placeholder: string;
	rows?: number;
}

const Input = ({
	label,
	name,
	isRequired = false,
	type = 'text',
	error,
	placeholder,
	rows,
	...props
}: InputProps) => {
	const { register } = useFormContext();
	const hasError = !!error;
	return (
		<div className="relative flex flex-col items-start gap-1">
			<label htmlFor={name} className="text-gray-700">
				{label}
				{isRequired && <span className="text-danger">*</span>}
			</label>
			<div className="relative w-full">
				{!rows ? (
					<input
						{...register(name)}
						{...props}
						type={type}
						placeholder={placeholder}
						className={inputStyles({
							hasError,
						})}
						step={type === 'number' ? '0.01' : undefined}
					/>
				) : (
					<textarea
						{...register(name)}
						{...props}
						placeholder={placeholder}
						className={inputStyles({
							hasError,
						})}
					/>
				)}
				{error && (
					<ExclamationCircleIcon className="absolute right-2 top-3 h-5 w-5 text-danger" />
				)}
			</div>
			{error && <p className="text-xs text-danger">{error}</p>}
		</div>
	);
};

export default Input;
