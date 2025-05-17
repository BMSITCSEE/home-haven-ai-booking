
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application starting...");
console.log("Current URL:", window.location.href);
console.log("Base URL:", document.baseURI);
console.log("Pathname:", window.location.pathname);
console.log("Hash:", window.location.hash);

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Root element found, rendering app");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
