import React from 'react';
import CardNav from '@/components/Navbar/CardNav';
import { ModeToggle } from '@/components/Navbar/mode-toggle';

const logo = '/logo.png';

const items = [
    {
        label: 'About',
        href: '/about',
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
        href: '/contact',
        bgColor: '#271E37',
        textColor: '#fff',
        links: [
            {
                label: 'Email',
                href: 'mailto:designnetwork2002@gmail.com',
                ariaLabel: 'Email us',
            },
            {
                label: 'Instagram',
                href: 'https://instagram.com/__thedesignnetwork__',
                ariaLabel: 'Instagram',
            },
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/the-design-network-2a64a027a/',
                ariaLabel: 'LinkedIn',
            },
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
