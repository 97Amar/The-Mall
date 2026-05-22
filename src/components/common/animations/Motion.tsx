import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children?: ReactNode;
    delay?: number;
    duration?: number;
    once?: boolean;
    className?: string;
    useAnimate?: boolean;
    isVisible?: boolean;
}

interface BaseProps {
    as?: keyof typeof motion;
    targetState?: any;
    baseInitial?: any;
    overrideTransition?: any;
    exitState?: any;
    whileHoverState?: any;
    [key: string]: any;
}

const BaseComponent = ({
    as = "div",
    useAnimate = false,
    isVisible = true,
    once = true,
    duration = 0.6,
    delay = 0,
    className = "",
    children,
    targetState,
    baseInitial,
    overrideTransition,
    exitState,
    whileHoverState,
    ...props
}: BaseProps) => {
    // Dynamically select the correct framer-motion component based on 'as'
    const Component = motion[as as keyof typeof motion] as any;

    return (
        <Component
            initial={baseInitial}
            // Only mount whileInView if we are NOT using strict explicit animations
            whileInView={(!useAnimate && targetState) ? targetState : undefined}
            animate={(useAnimate && targetState) ? targetState : undefined}
            exit={exitState}
            whileHover={whileHoverState}
            viewport={once !== undefined ? { once } : undefined}
            transition={overrideTransition || { duration, delay }}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
}

/**
 * Fades in and slides up by a slight offset
 */
export interface FadeUpProps extends MotionWrapperProps {
    yOffset?: number;
}
export function FadeUp({ yOffset = 30, isVisible = true, ...props }: FadeUpProps) {
    return (
        <BaseComponent
            {...props}
            isVisible={isVisible}
            baseInitial={{ opacity: 0, y: yOffset }}
            targetState={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : yOffset }}
        />
    );
}

/**
 * Pure opacity fade
 */
export function FadeIn({ isVisible = true, ...props }: MotionWrapperProps) {
    return (
        <BaseComponent
            {...props}
            isVisible={isVisible}
            baseInitial={{ opacity: 0 }}
            targetState={{ opacity: isVisible ? 1 : 0 }}
        />
    );
}

/**
 * Fades in and slides horizontally
 */
export interface SlideInProps extends MotionWrapperProps {
    direction?: 'left' | 'right';
    offset?: number;
    asSpan?: boolean;
}
export function SlideIn({ direction = 'left', offset = 50, isVisible = true, asSpan = false, ...props }: SlideInProps) {
    const xOffset = direction === 'left' ? -offset : offset;
    return (
        <BaseComponent
            {...props}
            as={asSpan ? "span" : "div"}
            isVisible={isVisible}
            baseInitial={{ opacity: 0, x: xOffset }}
            targetState={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : xOffset }}
        />
    );
}

/**
 * Pure scale fade
 */
export function ScaleUp({ isVisible = true, ...props }: MotionWrapperProps) {
    return (
        <BaseComponent
            {...props}
            isVisible={isVisible}
            baseInitial={{ opacity: 0, scale: 0.95 }}
            targetState={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
        />
    );
}

/**
 * Fades in while expanding letter spacing (luxury effect)
 */
export interface LetterSpacingFadeInProps extends MotionWrapperProps {
    fromSpacing?: string;
    toSpacing?: string;
}
export function LetterSpacingFadeIn({ fromSpacing = '0.2em', toSpacing = '0.45em', isVisible = true, ...props }: LetterSpacingFadeInProps) {
    return (
        <BaseComponent
            {...props}
            as="p"
            isVisible={isVisible}
            baseInitial={{ opacity: 0, letterSpacing: fromSpacing }}
            targetState={{ opacity: isVisible ? 1 : 0, letterSpacing: isVisible ? toSpacing : fromSpacing }}
        />
    );
}

/**
 * Scale Down Image Reveal
 */
export function ScaleDownImage({ src, alt, className, style, duration = 1.2 }: any) {
    return (
        <BaseComponent
            as="img"
            src={src}
            alt={alt}
            className={className}
            style={style}
            baseInitial={{ scale: 1.08 }}
            targetState={{ scale: 1 }}
            overrideTransition={{ duration, ease: 'easeOut' }}
            // Fallback for custom image tags since they don't accept standard children
            children={undefined}
        />
    );
}

/**
 * Loading Overlay Wrapper components
 */
export function FadeOverlay({ children, className, duration = 0.8 }: any) {
    return (
        <BaseComponent
            className={className}
            useAnimate={true}
            baseInitial={{ opacity: 0 }}
            targetState={{ opacity: 1 }}
            exitState={{ opacity: 0 }}
            overrideTransition={{ duration, ease: "easeInOut" }}
        >
            {children}
        </BaseComponent>
    );
}

export function PulseLetterSpacingH1({ className, message }: any) {
    return (
        <BaseComponent
            as="h1"
            className={className}
            useAnimate={true}
            baseInitial={{ opacity: 0, scale: 0.9, letterSpacing: "0.2em" }}
            targetState={{ opacity: 1, scale: 1, letterSpacing: "0.8em" }}
            overrideTransition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
        >
            {message}
        </BaseComponent>
    );
}

export function ExpandLine({ className }: any) {
    return (
        <BaseComponent
            useAnimate={true}
            className={className}
            baseInitial={{ width: 0 }}
            targetState={{ width: "200px" }}
            overrideTransition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
    );
}

export function PulseText({ children, className }: any) {
    return (
        <BaseComponent
            as="p"
            useAnimate={true}
            className={className}
            baseInitial={{ opacity: 0 }}
            targetState={{ opacity: [0, 1, 0] }}
            overrideTransition={{ duration: 2, repeat: Infinity }}
        >
            {children}
        </BaseComponent>
    );
}

/**
 * Hover Anchor tag wrapper
 */
export function HoverUpAnchor({ href, className, children }: any) {
    return (
        <BaseComponent
            as="a"
            href={href}
            className={className}
            whileHoverState={{ y: -2 }}
        >
            {children}
        </BaseComponent>
    );
}
