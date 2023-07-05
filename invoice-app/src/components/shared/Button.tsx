import { FC } from "react";
import { ButtonPropsTypes, ButtonVariantTypes } from "../../models";

const getButtonVariantStyles = (variant: ButtonVariantTypes) => {
  switch (variant) {
    case "primary":
      return `bg-primary hover:bg-primary-light text-secondary-light`;
    case "dark":
      return `bg-dark hover:bg-dark-light text-secondary-light`;
    case "danger":
      return `bg-danger hover:bg-danger-light text-secondary-light`;
    default:
      return `bg-secondary hover:bg-secondary-light text-dark`;
  }
};

export const Button: FC<ButtonPropsTypes> = (props) => {
  const {
    children,
    title,
    variant = "default",
    className,
    icon,
    loading,
    disabled,
    ...rest
  } = props;

  const variantStyles = getButtonVariantStyles(variant);

  return (
    <>
      <button
        className={`py-4 pl-4 pr-6 rounded-full font-semibold whitespace-nowrap ${variantStyles} ${className}`}
        {...rest}
        disabled={disabled}
      >
        {children ? (
          children
        ) : (
          <div className="flex items-center gap-x-3">
            {icon && <span className="bg-white rounded-full p-2">{icon}</span>}
            <span>{title}</span>
          </div>
        )}
      </button>
    </>
  );
};
