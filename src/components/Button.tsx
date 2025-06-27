import { LoaderCircle, LucideIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'dark' | 'danger' | 'outline';
type ButtonSize = 'sm' | 'base';

type ButtonProps = {
  isLoading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      classNames,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={cn(
          'inline-flex items-center rounded-lg font-medium gap-1',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
          'shadow-sm',
          'transition-colors duration-75',
          'px-[29px] py-1.5 h-[46px]', 
          'text-sm md:text-2xl',
          'cursor-pointer',
          [
            variant === 'primary' && [
                'bg-primary text-dark',
                'hover:bg-primary-hover hover:bg-primary/50',
                'active:bg-primary-700',
                'disabled:bg-primary-700',
              ],
              variant === 'danger' && [
                'bg-error-main text-white hover:bg-error-light',
              ],
              variant === 'dark' && [
                'bg-dark text-white hover:bg-dark-hover',
                'active:bg-dark-700',
                'disabled:bg-dark-700',
                'text-primary'
              ],
              variant === 'outline' && [
                'bg-transparent text-primary',
                'border border-primary',
                'hover:bg-primary/50 hover:text-white',
              ]
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <LoaderCircle className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={cn([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              size='1em'
              className={cn(
                [
                  size === 'base' && 'md:text-md text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                classNames?.leftIcon
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={cn([
              size === 'base' && 'ml-1',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              size='1em'
              className={cn(
                [
                  size === 'base' && 'text-md md:text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                classNames?.rightIcon
              )}
            />
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;