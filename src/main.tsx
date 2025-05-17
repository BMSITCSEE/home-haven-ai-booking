
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application starting...");
console.log("Current URL:", window.location.href);

createRoot(document.getElementById("root")!).render(<App />);
