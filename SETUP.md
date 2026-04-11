# InboxCleaner Setup Instructions

## Google OAuth Setup

1. **Create a Google Cloud project**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Click "Select a project" → "New Project"
   - Enter a project name (e.g., "InboxCleaner") and click "Create"

2. **Enable Gmail API**
   - In the Google Cloud Console, navigate to "APIs & Services" → "Library"
   - Search for "Gmail API" and click on it
   - Click "Enable"

3. **Create OAuth 2.0 credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - If prompted, configure the OAuth consent screen:
     - Choose "External" user type
     - Fill in the required fields (App name, User support email, Developer contact)
     - Save and continue through the steps
   - Under "Application type", select "Web application"
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback` (for development)
   - Click "Create"
   - Note down your **Client ID** and **Client Secret**

4. **Configure environment variables**
   - Create a `.env.local` file in the project root
   - Add the following:
     ```
     GOOGLE_CLIENT_ID=your-client-id
     GOOGLE_CLIENT_SECRET=your-client-secret
     NEXT_PUBLIC_BASE_URL=http://localhost:3000
     ```
   - Replace `your-client-id` and `your-client-secret` with the values from step 3

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and import the repository
3. Add the same environment variables in the Vercel project settings
4. Update the authorized redirect URI in Google Cloud Console to include your Vercel domain:
   - `https://your-app.vercel.app/api/auth/callback`

## Run Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. Click "Login with Google"
2. Grant permission to read your Gmail messages
3. You will be redirected to the dashboard showing your newsletter subscriptions
4. Click "Unsubscribe" next to any sender to open the unsubscribe link
