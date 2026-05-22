import CommonButton from '../../../components/common/CommonButton'
import type { FashionSocialConfig } from '../fashionShoppingData'

type FashionSocialButtonsProps = {
    social: FashionSocialConfig
    className?: string
}

export default function FashionSocialButtons({ social, className = '' }: FashionSocialButtonsProps) {
    const buttons = [
        social.instagram ? { label: 'Instagram', variant: 'primary-dark' as const } : null,
        social.facebook ? { label: 'Facebook', variant: 'outline' as const } : null,
    ].filter((item): item is { label: string; variant: 'primary-dark' | 'outline' } => Boolean(item))

    if (!buttons.length) return null

    return (
        <div className={`fashion-social-actions ${className}`.trim()}>
            {buttons.map((btn) => (
                <CommonButton
                    key={btn.label}
                    title={btn.label}
                    variant={btn.variant}
                    type="button"
                    onClick={(e) => e.preventDefault()}
                />
            ))}
        </div>
    )
}
