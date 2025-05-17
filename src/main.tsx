
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application starting on GitHub Pages...");
console.log("Current URL:", window.location.href);
console.log("Pathname:", window.location.pathname);
console.log("Hash:", window.location.hash);

// GitHub Pages specific debugging
console.log("Is on GitHub Pages:", window.location.hostname.includes('github.io'));
console.log("Current Environment:", import.meta.env.MODE);

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Root element found, rendering app");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
