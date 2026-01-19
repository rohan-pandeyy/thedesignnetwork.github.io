import LogoLoop from './LogoLoop';

const companyLogos = [
    {
        src: '/companies/jbmGroupLogo.svg',
        alt: 'JBM Group',
        href: 'https://www.jbmgroup.com',
    },
    {
        src: '/companies/lenskartLogo.svg',
        alt: 'Lenskart',
        href: 'https://www.lenskart.com',
    },
    // Add more companies here as needed
    {
        src: '/companies/jbmGroupLogo.svg',
        alt: 'JBM Group',
        href: 'https://www.jbmgroup.com',
    },
    {
        src: '/companies/lenskartLogo.svg',
        alt: 'Lenskart',
        href: 'https://www.lenskart.com',
    },
];

export function ToolsTicker() {
    return (
        <div className='w-full py-12 bg-background/50 backdrop-blur-sm border-t border-border/10'>
            <div className='container mx-auto px-4 mb-8 text-center'>
                <p className='text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium'>
                    Trusted By Industry Leaders
                </p>
            </div>

            <div
                className='relative overflow-hidden max-w-7xl mx-auto'
                style={{ height: '80px' }}
            >
                <LogoLoop
                    logos={companyLogos}
                    speed={30}
                    gap={60}
                    logoHeight={40}
                    pauseOnHover={true}
                    hoverSpeed={0}
                    fadeOut={true}
                    fadeOutColor='hsl(var(--background))'
                />
            </div>
        </div>
    );
}
