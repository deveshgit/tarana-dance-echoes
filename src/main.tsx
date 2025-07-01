
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ComingSoon from './components/ComingSoon.tsx'
import './index.css'

// Configuration: Set to true to show "Coming Soon" page, false to show the full app
const SHOW_COMING_SOON = false;

const AppToRender = SHOW_COMING_SOON ? <ComingSoon /> : <App />;

createRoot(document.getElementById("root")!).render(AppToRender);
