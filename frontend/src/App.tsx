import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/Navbar/theme-provider';
import Layout from '@/layout/Layout';
import { Hero } from '@/components/Home/Hero';
import { Portfolio } from '@/components/Home/Portfolio';
import NotFound from '@/pages/NotFound';
import Loader from '@/components/ui/Loader';

const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));

import { ToolsTicker } from '@/components/CompaniesTicker';

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Layout>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Hero />
                                <Portfolio />
                                <ToolsTicker />
                            </>
                        }
                    />
                    <Route
                        path='/about'
                        element={
                            <Suspense
                                fallback={
                                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background'>
                                        <Loader />
                                    </div>
                                }
                            >
                                <About />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/contact'
                        element={
                            <Suspense
                                fallback={
                                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background'>
                                        <Loader />
                                    </div>
                                }
                            >
                                <Contact />
                            </Suspense>
                        }
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
