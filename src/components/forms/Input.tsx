import { useState } from "react"
import { RegisterOptions, get, useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"

export type InputProps = {
	id: string
	label?: string
	hideError?: boolean
	validation?: RegisterOptions
	labelClassName?: string
} & React.ComponentPropsWithoutRef<"input">

export default function Input({
	id,
	label,
	hideError = false,
	validation,
	className,
	type = "text",
	readOnly = false,
	labelClassName,
	...rest
}: InputProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const [showPassword, setShowPassword] = useState(false)

	const error = get(errors, id)

	return (
		<div className="w-full space-y-2">
            {label && (
                <label 
                    htmlFor={id}
                    className={cn(
						"text-2xl text-primary",
						labelClassName,
					)}
                >
                    {label}
                </label>
            )}
			<div className="relative flex w-full gap-0 mt-2">
				<div className={cn("relative w-full")}>
					<input
						{...register(id, validation)}
						type={
							type === "password" ? (showPassword ? "text" : "password") : type
						}
						id={id}
						name={id}
						readOnly={readOnly}
						disabled={readOnly}
						className={cn(
							"h-[56px] px-4 w-full caret-black rounded-md",
							"ring-1 ring-light",
							"placeholder:text-gray-500",
							"focus:outline-none focus:ring-primary",
							"bg-dark text-white",
							readOnly && "cursor-not-allowed",
							className,
						)}
						aria-describedby={id}
						{...rest}
					/>

					{type === "password" && (
						<div
							className={cn(
								"absolute bottom-0 right-0 h-full",
								"flex items-center justify-center pr-3",
								"text-lg text-gray-900 md:text-xl",
								"cursor-pointer",
							)}
							onClick={() => setShowPassword(!showPassword)}
						> 
						</div>
					)}
				</div>
			</div>
			{error && !hideError && (
				<p
					className={cn(
						"text-red-500 text-sm",
						"mt-1 mr-2",
						"font-regular",
					)}
				>
					{error.message}
				</p>
			)}
		</div>
	)
}
