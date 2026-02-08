import { useState, useRef } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        };
        let isValid = true;

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Validation Error', {
                description: 'Please check the highlighted fields.',
            });
            return;
        }

        setIsSubmitting(true);

        if (form.current) {
            emailjs
                .sendForm(
                    'service_dd2fo0o',
                    'template_tqwqnqa',
                    form.current,
                    '5fyW5KsDVYYrhjnz2',
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        toast.success('Message sent!', {
                            description:
                                "We'll get back to you as soon as possible.",
                        });
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            message: '',
                        });
                        setErrors({
                            firstName: '',
                            lastName: '',
                            email: '',
                            message: '',
                        });
                        form.current?.reset();
                    },
                    (error) => {
                        console.error(error);
                        const errorMessage =
                            error?.text ||
                            error?.message ||
                            'Failed to send message. Please try again.';
                        toast.error('Error sending message', {
                            description: errorMessage,
                        });
                    },
                )
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    return (
        <div className='min-h-screen bg-background animate-fade-in'>
            <main className='max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-12'>
                {/* Header Section */}
                <div className='mb-16 text-center space-y-6'>
                    <div className='text-6xl mb-6'>Got Questions?</div>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                        Ready to Transform Your Space?
                    </h1>
                    <p className='text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                        From concept to creation, we're here to bring your
                        vision to life. Reach out to us for a consultation,
                        collaboration, or just to say hello.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Contact Info */}
                    <div className='space-y-8'>
                        <div className='rounded-2xl bg-card border border-border/50 shadow-sm p-8 h-full'>
                            <h2 className='text-2xl font-bold mb-6'>
                                Contact Info
                            </h2>
                            <div className='space-y-6'>
                                <div>
                                    <p className='text-sm font-medium text-muted-foreground mb-1'>
                                        Visit Us
                                    </p>
                                    <p className='text-lg leading-relaxed'>
                                        38/2/34, Site 4, Sahibabad Industrial
                                        Area,
                                        <br />
                                        Sahibabad, Ghaziabad,
                                        <br />
                                        Uttar Pradesh 201010, India
                                    </p>
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-muted-foreground mb-1'>
                                        Email
                                    </p>
                                    <a
                                        href='mailto:designnetwork2002@gmail.com'
                                        className='text-lg hover:opacity-60 transition-opacity'
                                    >
                                        designnetwork2002@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-muted-foreground mb-1'>
                                        Phone
                                    </p>
                                    <a
                                        href='tel:+918595039778'
                                        className='text-lg hover:opacity-60 transition-opacity'
                                    >
                                        +91 85950 39778
                                    </a>
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-muted-foreground mb-3'>
                                        Follow Us
                                    </p>
                                    <div className='flex gap-4'>
                                        <a
                                            href='https://instagram.com/__thedesignnetwork__'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-muted/80 transition-colors'
                                            aria-label='Instagram'
                                        >
                                            <svg
                                                className='w-5 h-5'
                                                fill='currentColor'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                            </svg>
                                        </a>
                                        <a
                                            href='https://www.linkedin.com/in/the-design-network-2a64a027a/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-muted/80 transition-colors'
                                            aria-label='LinkedIn'
                                        >
                                            <svg
                                                className='w-5 h-5'
                                                fill='currentColor'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='space-y-4'
                        noValidate
                    >
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <label
                                    htmlFor='firstName'
                                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                >
                                    First Name
                                </label>
                                <input
                                    id='firstName'
                                    name='firstName'
                                    type='text'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={cn(
                                        'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
                                        errors.firstName
                                            ? 'border-red-500 focus-visible:ring-red-500'
                                            : 'border-input',
                                    )}
                                    placeholder='Enter your first name'
                                />
                                {errors.firstName && (
                                    <p className='text-xs text-red-500 mt-1'>
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>
                            <div className='space-y-2'>
                                <label
                                    htmlFor='lastName'
                                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                >
                                    Last Name
                                </label>
                                <input
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={cn(
                                        'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
                                        errors.lastName
                                            ? 'border-red-500 focus-visible:ring-red-500'
                                            : 'border-input',
                                    )}
                                    placeholder='Enter your last name'
                                />
                                {errors.lastName && (
                                    <p className='text-xs text-red-500 mt-1'>
                                        {errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label
                                htmlFor='email'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                value={formData.email}
                                onChange={handleChange}
                                className={cn(
                                    'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
                                    errors.email
                                        ? 'border-red-500 focus-visible:ring-red-500'
                                        : 'border-input',
                                )}
                                placeholder='Enter your email address'
                            />
                            {errors.email && (
                                <p className='text-xs text-red-500 mt-1'>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className='space-y-2'>
                            <label
                                htmlFor='message'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={cn(
                                    'flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
                                    errors.message
                                        ? 'border-red-500 focus-visible:ring-red-500'
                                        : 'border-input',
                                )}
                                placeholder='Tell us about your project...'
                            />
                            {errors.message && (
                                <p className='text-xs text-red-500 mt-1'>
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full'
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Contact;
