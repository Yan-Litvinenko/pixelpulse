import Frame from '@/components/frame/Frame';
import Image from 'next/image';
import beginning from '@/public/assets/images/beginning.webp';
import styles from '@/styles/components/beginning/Beginning.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Beginning',
    description: 'Main page',
    openGraph: {
        title: 'Beginning',
        url: 'https://pixelpulse.by/beginning',
    },
    twitter: {
        title: 'Beginning',
        description: 'Main page',
    },
};

export default function Beginning(): React.JSX.Element {
    return (
        <section className={styles.beginning} data-beginning={true}>
            <div className={styles.beginning__inner}>
                <>
                    <div className={styles.beginning__box_title}>
                        <h2 className={styles.beginning__title}>
                            swimming through a vast network of interconnected devices and servers, spreading joy and
                            whimsy to users across the globe
                        </h2>
                        <h3 className={styles.beginning__subtitle}>Artwork generated with midjourney</h3>
                    </div>

                    <div className={styles.beginning__background_box}>
                        <Image
                            alt="Artwork of a whale swimming through a network of interconnected devices"
                            className={styles.beginning__background}
                            height={2000}
                            src={beginning.src}
                            width={2900}
                        />
                        <Frame className={styles.beginning__background_frame} />
                    </div>
                </>
            </div>
        </section>
    );
}
