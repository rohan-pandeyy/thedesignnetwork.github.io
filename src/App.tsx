import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <div className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-4xl font-bold text-primary'>
                        The Design Network
                    </h1>
                    <ModeToggle />
                </div>
                <p className='mt-4 text-muted-foreground'>
                    End-to-End Interior Experience
                </p>
            </div>
        </ThemeProvider>
    );
}

export default App;
