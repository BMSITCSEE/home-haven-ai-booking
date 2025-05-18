
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add more detailed logging for GitHub Pages troubleshooting
console.log("Application starting on GitHub Pages...");
console.log("Current URL:", window.location.href);
console.log("Pathname:", window.location.pathname);
console.log("Hash:", window.location.hash);
console.log("Origin:", window.location.origin);
console.log("Host:", window.location.host);
console.log("Hostname:", window.location.hostname);

// GitHub Pages specific debugging
console.log("Is on GitHub Pages:", window.location.hostname.includes('github.io'));
console.log("Current Environment:", import.meta.env.MODE);
console.log("Public URL:", import.meta.env.BASE_URL || '/');

// Check for missing resources
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'SCRIPT' || target.tagName === 'LINK') {
    const resourceUrl = target.tagName === 'SCRIPT' 
      ? (target as HTMLScriptElement).src 
      : (target as HTMLLinkElement).href;
    console.error(`Failed to load resource: ${resourceUrl}`);
  }
}, true);

// GitHub Pages verification
window.addEventListener('load', function() {
  console.log("Window loaded successfully");
  console.log("Document readyState:", document.readyState);
  console.log("All scripts loaded:", Array.from(document.scripts).map(s => s.src));
});

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Root element found, rendering app");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
