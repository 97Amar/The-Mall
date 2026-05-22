import { AnimatePresence } from 'framer-motion';
import { FadeOverlay, PulseLetterSpacingH1, ExpandLine, PulseText } from './animations/Motion';
import './LoadingOverlay.scss';

interface LoadingOverlayProps {
    isLoading: boolean;
    message?: string;
}

export default function LoadingOverlay({ isLoading, message = "THE MALL" }: LoadingOverlayProps) {
    return (
        <AnimatePresence>
            {isLoading && (
                <FadeOverlay duration={0.8} className="loading-overlay">
                    {/* Background blur */}
                    <div className="loading-overlay__blur" />

                    <div className="loading-overlay__inner">
                        <PulseLetterSpacingH1
                            className="loading-overlay__title"
                            message={message}
                        />

                        <ExpandLine className="loading-overlay__line" />

                        <PulseText className="loading-overlay__text">
                            Loading Awesomeness
                        </PulseText>
                    </div>
                </FadeOverlay>
            )}
        </AnimatePresence>
    );
}
