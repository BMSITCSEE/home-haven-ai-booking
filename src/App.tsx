
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ListingsPage from "./pages/ListingsPage";
import NotFound from "./pages/NotFound";

// Create query client for API requests
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});

const App = () => {
  // Log GitHub Pages deployment information
  const isGitHubPages = window.location.hostname.includes('github.io');
  console.log("App component rendering with HashRouter");
  console.log("Is GitHub Pages:", isGitHubPages);
  console.log("Full path:", window.location.pathname);
  console.log("Hash fragment:", window.location.hash);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* HashRouter is essential for GitHub Pages - it correctly handles subpaths */}
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
