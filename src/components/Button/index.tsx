import { cva, VariantProps } from 'class-variance-authority';
import Spinner from '../Spinner';

const buttonStyles = cva(
	'inline-block rounded border border-white px-4 py-2 text-sm font-semibold leading-none text-text outline-0 transition-colors delay-150 ease-linear hover:border-transparent ',
	{
		variants: {
			intent: {
				primary:
					'bg-primary text-white hover:enabled:bg-white hover:opacity-80 hover:enabled:text-primary',
				secondary:
					'bg-secondary text-black hover:bg-black  hover:text-secondary',
				danger: 'bg-danger text-white hover:bg-white hover:text-danger',
			},
			fullWidth: {
				true: 'w-full',
				false: 'w-auto',
			},
		},
		defaultVariants: {
			intent: 'primary',
			fullWidth: false,
		},
	}
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
	label: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	loading?: boolean;
	icon?: JSX.Element;
	type?: 'button' | 'submit' | 'reset';
}

const Button = ({
	label,
	onClick,
	disabled,
	loading,
	intent,
	fullWidth,
	icon,
	type,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={buttonStyles({
				intent,
				fullWidth,
			})}
			disabled={loading || disabled}
			onClick={onClick}
			type={type}
		>
			<div className="flex items-center justify-center gap-1">
				{!loading && icon ? <span>{icon}</span> : null}
				{loading ? <Spinner /> : null}
				<>{label}</>
			</div>
		</button>
	);
};

export default Button;
