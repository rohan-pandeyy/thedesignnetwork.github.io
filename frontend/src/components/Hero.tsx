'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { logger } from '@/lib/logger';
import Loader from './Loader';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Ensure video is muted immediately on load to prevent any audio
    useEffect(() => {
        const video = videoRef.current;
        if (!video) {
            return;
        }

        logger.info('Video element found, setting up...');
        video.volume = 0;
        video.muted = true;
        video.defaultMuted = true;

        // Define event handlers so they can be removed on cleanup
        const handleLoadStart = () => {
            logger.info('Video: loadstart');
        };

        const handleLoadedMetadata = () => {
            logger.info('Video: loadedmetadata');
        };

        const handleCanPlay = () => {
            logger.info('Video: canplay');
            setIsLoading(false);
        };

        const handlePlaying = () => {
            logger.info('Video: playing');
            setIsLoading(false);
        };

        const handleError = (e: Event) => {
            logger.error('Video error:', e);
            // In case of error, we should probably hide the loader so the site isn't stuck
            setIsLoading(false);
        };

        const handlePlay = () => {
            logger.info('Video play event fired');
            video.muted = true;
            video.volume = 0;
        };

        // Add event listeners for debugging
        video.addEventListener('loadstart', handleLoadStart);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('playing', handlePlaying);
        video.addEventListener('error', handleError);
        video.addEventListener('play', handlePlay);

        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => logger.info('Video autoplay successful'))
                .catch((error) =>
                    logger.error('Video autoplay failed:', error),
                );
        }

        // Cleanup: remove all event listeners when component unmounts
        return () => {
            video.removeEventListener('loadstart', handleLoadStart);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('playing', handlePlaying);
            video.removeEventListener('error', handleError);
            video.removeEventListener('play', handlePlay);
        };
    }, []);

    return (
        <div className='relative h-screen w-full overflow-hidden bg-black'>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className='fixed inset-0 z-[100] flex items-center justify-center bg-background'
                    >
                        <Loader />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MASSIVE VIDEO - Takes up 95% of space */}
            <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src='/Thedesignnetwork.MP4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Big Studio Title - Lower Left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className='absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40'
            >
                <div className='max-w-2xl'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white'>
                        <span className='block'>End to End</span>
                        <span className='block'>Interior Design</span>
                        <span className='block'>Your story, styled.</span>
                    </h1>
                </div>
            </motion.div>
        </div>
    );
}
