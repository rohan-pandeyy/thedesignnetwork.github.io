'use client';

import { useIsMobile } from '@/hooks/use-mobile';

export function Footer() {
    const isMobile = useIsMobile();
    const services = [
        'Residential Design',
        'Commercial Interiors',
        'Spatial Planning',
        '3D Visualization',
        'Sustainable Living',
        'Custom Furniture',
        'Lighting Design',
        'Kitchen & Bath',
        'Project Management',
        'Color Consultation',
        'Art Curation',
        'Styling & Decor',
    ];

    return (
        <footer
            className={`relative bg-background text-foreground border-t border-border ${isMobile ? 'py-12' : 'py-20'}`}
        >
            <div className='container mx-auto px-6 sm:px-8 lg:px-12'>
                <div
                    className={`grid grid-cols-12 ${isMobile ? 'gap-8' : 'gap-12'}`}
                >
                    {/* Logo and Description */}
                    <div className='col-span-12 md:col-span-4'>
                        <div>
                            <div
                                className={`font-bagel text-foreground tracking-wider mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}
                            >
                                The Design Network
                            </div>
                            <p className='text-foreground/70 leading-relaxed mb-6'>
                                Revolutionizing interior designing with a
                                passion for creativity, storytelling, and human
                                emotion.
                            </p>
                            {/* Social Media Icons */}
                            <div className='flex items-center space-x-6'>
                                {/* Instagram */}
                                <a
                                    href='https://instagram.com/__thedesignnetwork__'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:scale-110 gentle-animation cursor-pointer'
                                >
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='url(#instagram-gradient)'
                                    >
                                        <defs>
                                            <linearGradient
                                                id='instagram-gradient'
                                                x1='0%'
                                                y1='0%'
                                                x2='100%'
                                                y2='100%'
                                            >
                                                <stop
                                                    offset='0%'
                                                    stopColor='#833AB4'
                                                />
                                                <stop
                                                    offset='50%'
                                                    stopColor='#E1306C'
                                                />
                                                <stop
                                                    offset='100%'
                                                    stopColor='#F56040'
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href='https://www.linkedin.com/in/the-design-network-2a64a027a/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:scale-110 gentle-animation cursor-pointer'
                                >
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='#0077B5'
                                    >
                                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='col-span-12 md:col-span-8'>
                        <div>
                            <h4 className='font-black text-2xl text-foreground mb-4'>
                                OUR EXPERTISE
                            </h4>

                            {/* Services Description */}
                            <p className='text-foreground/70 text-base mb-8 leading-relaxed'>
                                Crafting timeless environments that blend
                                aesthetics with functionality. We specialize in
                                transforming visions into reality through
                                innovative design, meticulous planning, and a
                                deep understanding of spatial harmony.
                            </p>

                            <div
                                className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'}`}
                            >
                                {services.map((service) => (
                                    <div
                                        key={service}
                                        className='text-background/80 dark:text-foreground/80 gentle-animation text-sm font-medium'
                                    >
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className={`border-t border-background/20 dark:border-foreground/20 mt-16 ${isMobile ? 'pt-6 text-center' : 'pt-8'}`}
                >
                    <div
                        className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-col md:flex-row justify-between items-center'}`}
                    >
                        <div className='text-sm text-background/70 dark:text-foreground/70'>
                            © {new Date().getFullYear()} The Design Network. All
                            rights reserved.
                        </div>
                        <div
                            className={`text-sm text-background/70 dark:text-foreground/70 ${isMobile ? 'text-xs px-4' : ''}`}
                        >
                            38/2/34, Site 4, Sahibabad Industrial Area Site 4,
                            Sahibabad, Ghaziabad, Uttar Pradesh 201010, India
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
