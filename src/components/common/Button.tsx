import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';

import 'assets/scss/common/button.scss';

interface IButtonProps {
    text: string;
    className?: string;
    icon?: string;
    prefixIcon?: string;
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Button: FC<IButtonProps> = ({ text, className = "", icon, onClick, prefixIcon }) => {
    return (
        <div className={clsx("primary-btn fill-width flex-x", className, !icon ? "center" : "space-between")} onClick={onClick}>
            {prefixIcon && <img src={prefixIcon} className="prefixIcon" alt="prefixIcon" />}
            {text}
            {icon && <img src={icon} alt="icon" />}
        </div>
    );
};

export const SecondaryButton: FC<IButtonProps> = ({ text, className = "", onClick }) => {
    return (
        <div className={clsx("secondary-btn fill-width", className)} onClick={onClick}>
            {text}
        </div>
    );
};

interface IButtonWithIconProps extends IButtonProps {
    icon: any;
}

export const ButtonWithIcon: FC<IButtonWithIconProps> = ({ text, className = "", icon }) => {
    return (
        <div className={clsx("icon-btn fill-width d-flex", className)}>
            {icon && <img src={icon} alt="icon" />}
            <span className="m-auto">{text}</span>
        </div>
    );
};

export default Button;
