import React, { FC, ReactNode, ComponentPropsWithoutRef, useState } from 'react';
import classNames from 'classnames';

// Define a generic type for the ButtonProps
type ButtonProps<T = {}> = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
} & T;

// Create the Button component as a generic functional component
const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  className,
  children,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Determine the class name based on the variant prop
  const classNameCombined = classNames(
    'headless-button',
    variant,
    size,
    {
      disabled: disabled,
      loading: loading,
      fullWidth: fullWidth,
      'btn-pressed': isPressed,
      'btn-over': !isPressed && isHovered
    },
    className
  );

  // Render the button element with the provided props
  return (
    <button
      className={classNameCombined}
      disabled={disabled || loading}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {loading && <span className='loader' />} {/* Display loader if loading is true */}
      {icon && <span className='icon'>{icon}</span>} {/* Display icon if provided */}
      {children}
    </button>
  );
};

export default Button;
