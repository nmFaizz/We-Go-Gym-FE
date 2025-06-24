import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  name: string;
  label?: string;
  options: Option[];
  direction?: 'row' | 'column';
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  direction = 'column',
  className,
  labelClassName,
  inputClassName,
}) => {
  const { control } = useFormContext();
    
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <>
        {label && <label className='text-primary text-2xl'>{label}</label>}
        <div className={cn('flex', direction === 'row' ? 'flex-row gap-4' : 'flex-col gap-2', className)}>
            {options.map((option) => (
                <label key={option.value} className={cn('flex items-center gap-2', labelClassName)}>
                <input
                    type="radio"
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                    className={cn(
                        'appearance-none w-[30px] h-[30px] border-2 border-white rounded-full flex items-center justify-center',
                        'checked:border-4 checked:bg-primary',
                        inputClassName
                    )}
                />
                {option.label}
                </label>
            ))}
        </div>
    </>
  );
};
