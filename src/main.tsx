
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add more detailed logging for GitHub Pages troubleshooting
console.log("Application starting...");
console.log("Current URL:", window.location.href);
console.log("Pathname:", window.location.pathname);
console.log("Hash:", window.location.hash);
console.log("Origin:", window.location.origin);
console.log("Host:", window.location.host);
console.log("Hostname:", window.location.hostname);

// GitHub Pages specific debugging
const isGitHubPages = window.location.hostname.includes('github.io');
console.log("Is on GitHub Pages:", isGitHubPages);
console.log("Current Environment:", import.meta.env.MODE);
console.log("Public URL:", import.meta.env.BASE_URL || '/');

// Track document ready state
console.log("Initial document readyState:", document.readyState);
document.addEventListener('readystatechange', () => {
  console.log("Document readyState changed:", document.readyState);
});

// Check for missing resources
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'SCRIPT') {
    console.error(`Failed to load script: ${(target as HTMLScriptElement).src}`);
  } else if (target.tagName === 'LINK') {
    console.error(`Failed to load link: ${(target as HTMLLinkElement).href}`);
  } else if (target.tagName === 'IMG') {
    console.error(`Failed to load image: ${(target as HTMLImageElement).src}`);
  }
}, true);

// GitHub Pages verification and error recovery
window.addEventListener('load', function() {
  console.log("Window loaded successfully");
  console.log("Document readyState:", document.readyState);
  console.log("All scripts loaded:", Array.from(document.scripts).map(s => s.src));
  
  // Attempt to force render if needed
  const rootElement = document.getElementById("root");
  if (rootElement && !rootElement.hasChildNodes()) {
    console.log("Root element found but empty, forcing render");
    try {
      createRoot(rootElement).render(<App />);
    } catch (err) {
      console.error("Error during forced render:", err);
    }
  }
});

// Error boundary for rendering
try {
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    console.log("Root element found, rendering app");
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
    // Create root element if missing
    const newRoot = document.createElement("div");
    newRoot.id = "root";
    document.body.appendChild(newRoot);
    console.log("Created new root element");
    createRoot(newRoot).render(<App />);
  }
} catch (err) {
  console.error("Fatal error during app initialization:", err);
  // Show error on page
  document.body.innerHTML = `
    <div style="padding: 20px; color: red;">
      <h1>App Loading Error</h1>
      <p>There was an error loading the application. Please check the console for details.</p>
      <pre>${String(err)}</pre>
    </div>
  `;
}
