import React, { type ReactNode } from "react";
import "./CommonButton.scss";

type CommonButtonVariant =
    | 'primary'
    | 'primary-dark'
    | 'primary-cream'
    | 'ghost'
    | 'outline'
    | 'outline-white'
    | 'outline-light';

interface CommonButtonProps {
    title?: string;
    variant?: CommonButtonVariant;
    className?: string;
    svgIcon?: ReactNode;
    imageIcon?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    to?: string;
    role?: "link" | "button";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    isLoading?: boolean;
    fluid?: boolean;
    text?: string;
    children?: ReactNode;
    target?: string;
}

const variantClassMap: Record<CommonButtonVariant, string> = {
    primary: '',
    'primary-dark': 'primary-dark',
    'primary-cream': 'primary-cream',
    ghost: 'ghost-btn',
    outline: 'border-btn',
    'outline-white': 'outline-white',
    'outline-light': 'outline-light',
};

const CommonButton: React.FC<CommonButtonProps> = ({
    title,
    variant = 'primary',
    className = "",
    svgIcon,
    imageIcon,
    onClick,
    to,
    role = "button",
    type = "button",
    disabled = false,
    isLoading = false,
    fluid = false,
    text,
    children,
    target
}) => {
    const content = (
        <>
            {(svgIcon || imageIcon) && (
                <span className="common_btn_icon">
                    {svgIcon && svgIcon}
                    {imageIcon && <img src={imageIcon} alt="" fetchPriority="high" />}
                </span>
            )}
            {title && <span className="common_btn_title">{title}</span>}
            {text && <span className="common_btn_text">{text}</span>}
            {isLoading ? (
                <span className="btn-loader" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            ) : (
                children
            )}
        </>
    );

    const fullClassName = `common_btn ${variantClassMap[variant]} ${fluid ? "full" : ""} ${className}`.trim();

    if (role === "link") {
        return (
            <a
                href={to || "#"}
                className={fullClassName}
                onClick={onClick as any}
                target={target}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            className={fullClassName}
            onClick={onClick as any}
            disabled={disabled || isLoading}
            type={type}
        >
            {content}
        </button>
    );
}

export default CommonButton;
