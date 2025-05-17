
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ListingsPage from "./pages/ListingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Check if running on GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');

console.log("Is GitHub Pages:", isGitHubPages);
console.log("Hostname:", window.location.hostname);
console.log("Pathname:", window.location.pathname);
console.log("Full URL:", window.location.href);

// Always use HashRouter for GitHub Pages deployments
const App = () => {
  console.log("App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
