import { useEffect } from 'react';
import PageHero from '../../components/ui/PageHero';
import Section from '../../components/ui/Section';
import { sharedStyles } from '../../utils/constants';

const ThemePage = () => {
    // SEO: Set page title and meta description
    useEffect(() => {
        document.title = "Theme 2026: The Ripple Effect | TEDxUOK";
    }, []);

    return (
        <main className={sharedStyles.layout.main}>
            <PageHero
                title="The Ripple Effect"
                description="Our Theme for 2026"
            />
            <Section>
                <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-gray-300">
                    <p>
                        Every idea, no matter how small, has the potential to create waves of change.
                        Like a single pebble dropped in water creates ripples that expand outward,
                        our ideas and actions can influence far beyond our immediate reach.
                    </p>
                    <p>
                        Through this theme, we'll explore stories of innovation, courage, and
                        transformation that started small but created lasting impact.
                    </p>
                </div>
            </Section>
        </main>
    );
};

export default ThemePage;
