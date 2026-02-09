import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='min-h-screen bg-background animate-fade-in'>
            <main className='max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-12'>
                {/* Hero Section */}
                <div className='mb-16 text-center space-y-6'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down'>
                        About The Design Network
                    </h1>
                    <p className='text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1 max-w-2xl mx-auto'>
                        The Design Network is an interior designer solution,
                        popular for its thoughtful & refined design approach.
                        Specialized in space designing & artistic projects.
                    </p>
                </div>

                {/* Who We Are Section */}
                <section className='mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2'>
                    <h2 className='text-3xl font-bold text-foreground mb-6'>
                        Our Story
                    </h2>
                    <p>
                        We are a renowned firm of expert architects, planners,
                        and interior designers, dedicated specialists in a wide
                        range of commercial, residential, and public sector
                        projects.
                    </p>
                    <p>
                        Embark on an epic journey of house renovation and
                        transformation with The Design Network - a place where
                        your dream house becomes a reality! We provide a
                        comprehensive repertoire of trendy, functional and
                        sensational options that turn houses into veritable
                        works of art!
                    </p>
                </section>

                {/* What We Do Section */}
                <section className='mb-16 rounded-2xl bg-card border border-border/50 shadow-sm overflow-hidden'>
                    <div className='grid md:grid-cols-2'>
                        <div className='p-6 md:p-8 h-64 md:h-[28rem] flex items-center justify-center'>
                            <img
                                src='/IMG_014.jpg'
                                alt='Interior Design Example'
                                className='w-full h-full object-cover rounded-3xl shadow-sm'
                            />
                        </div>
                        <div className='p-8 md:p-12 flex flex-col justify-center'>
                            <h2 className='text-3xl font-bold mb-6'>
                                What We Do
                            </h2>
                            <div className='space-y-4 text-muted-foreground'>
                                <p>
                                    We deliver end to end services at your door
                                    step. We have an expertise in transforming
                                    your home into an unforgettable living
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Domains Section */}
                <section className='mb-16'>
                    <h2 className='text-3xl font-bold mb-8'>
                        Some of Our Domains
                    </h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors duration-300'>
                            <h3 className='text-xl font-semibold mb-3 flex items-center gap-2'>
                                Modular Kitchens
                            </h3>
                            <p className='text-muted-foreground'>
                                Modern, functional, and aesthetic kitchen spaces
                                designed for your culinary needs.
                            </p>
                        </div>
                        <div className='p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors duration-300'>
                            <h3 className='text-xl font-semibold mb-3 flex items-center gap-2'>
                                Furniture & Units
                            </h3>
                            <p className='text-muted-foreground'>
                                Bespoke modular units and furniture that
                                maximize space and style.
                            </p>
                        </div>
                        <div className='p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors duration-300'>
                            <h3 className='text-xl font-semibold mb-3 flex items-center gap-2'>
                                Full Home Interiors
                            </h3>
                            <p className='text-muted-foreground'>
                                Comprehensive interior design solutions for
                                every corner of your home.
                            </p>
                        </div>
                        <div className='p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors duration-300'>
                            <h3 className='text-xl font-semibold mb-3 flex items-center gap-2'>
                                Office Interior
                            </h3>
                            <p className='text-muted-foreground'>
                                Professional and ergonomic workspaces that boost
                                productivity and morale.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className='text-center py-12 rounded-2xl bg-card border border-border/50 shadow-sm'>
                    <h2 className='text-3xl font-bold mb-4'>
                        Ready for a transformation?
                    </h2>
                    <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
                        Contact us today to start your journey towards a
                        beautiful living space.
                    </p>
                    <Button
                        asChild
                        className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8'
                    >
                        <Link to='/contact'>
                            <Mail className='mr-2 h-4 w-4' />
                            Get in Touch
                        </Link>
                    </Button>
                </section>
            </main>
        </div>
    );
};

export default About;
