# Frontend

This project uses environment variables for configuration.

## Environment Setup

1.  **Local Development:**
    - Copy `.env.example` to `.env`.
    - Fill in your actual EmailJS credentials in `.env`.
    - Vite will automatically load these variables when you run `npm run dev`.

2.  **Production Deployment (Vercel, Netlify, etc.):**
    - Do **NOT** commit your `.env` file to Git (it is ignored for security).
    - Go to your hosting provider's dashboard (e.g., Vercel Project Settings > Environment Variables).
    - Add the following variables with your production credentials:
        - `VITE_EMAILJS_SERVICE_ID`
        - `VITE_EMAILJS_TEMPLATE_ID`
        - `VITE_EMAILJS_PUBLIC_KEY`
    - Re-deploy your project. The build process will inject these values into the client-side bundle.

## Note on Security

Variables prefixed with `VITE_` are exposed to the client-side bundle. Do not store sensitive backend secrets (like private API keys) in these variables. EmailJS public keys are generally safe to expose but should be restricted by domain in the EmailJS dashboard if possible.
