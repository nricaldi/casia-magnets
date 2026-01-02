'use client';

import '../../globals.css';
import { LuMoveRight } from 'react-icons/lu';
import FadeIn from '../motion/fade-in';
import GalleryGrid from './gallery-grid';
import styles from '../main/gallery.module.css';
import type { Image as MagnetImage } from '../../types/image';
import Button from '../common/button';

type GallerySectionProps = { images: MagnetImage[] };

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <FadeIn delay={0.08}>
          <h1 className={styles.galleryTitle}>Featured</h1>
        </FadeIn>

        <GalleryGrid images={images} />
      </div>

      <div className={styles.viewGalleryButtonWrapper}>
        <FadeIn delay={0.08 + images.length * 0.04}>
          <Button as="link" href="/gallery" size="lg" variant="dark" icon={<LuMoveRight />}>
            VIEW FULL GALLERY
          </Button>
        </FadeIn>
      </div>

      <div className={styles.boxTop}></div>
      <div className={styles.curveTop}></div>

      <div className={styles.boxBottom}></div>
      <div className={styles.curveBottom}></div>
    </section>
  );
}
