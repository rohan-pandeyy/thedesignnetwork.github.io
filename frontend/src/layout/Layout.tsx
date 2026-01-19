import React from 'react';
import CardNav from '@/components/CardNav';
import { ModeToggle } from '@/components/mode-toggle';

const logo = '/logo.png';

const items = [
    {
        label: 'About',
        bgColor: '#0D0716',
        textColor: '#fff',
        links: [
            { label: 'Company', href: '#', ariaLabel: 'About Company' },
            { label: 'Careers', href: '#', ariaLabel: 'About Careers' },
        ],
    },
    {
        label: 'Projects',
        bgColor: '#170D27',
        textColor: '#fff',
        links: [
            { label: 'Featured', href: '#', ariaLabel: 'Featured Projects' },
            {
                label: 'Case Studies',
                href: '#',
                ariaLabel: 'Project Case Studies',
            },
        ],
    },
    {
        label: 'Contact',
        bgColor: '#271E37',
        textColor: '#fff',
        links: [
            { label: 'Email', href: '#', ariaLabel: 'Email us' },
            { label: 'Twitter', href: '#', ariaLabel: 'Twitter' },
            { label: 'LinkedIn', href: '#', ariaLabel: 'LinkedIn' },
        ],
    },
];

import { Footer } from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative min-h-screen w-full'>
            <CardNav
                logo={logo}
                logoAlt='Company Logo'
                items={items}
                baseColor='#fff'
                menuColor='#000'
                buttonBgColor='#111'
                buttonTextColor='#fff'
                ease='power3.out'
                action={<ModeToggle />}
            />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
