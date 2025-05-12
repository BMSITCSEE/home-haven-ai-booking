
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use HashRouter for GitHub Pages and BrowserRouter for other environments */}
      {isGitHubPages ? (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
            <Route path="/listings" element={<ListingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
            <Route path="/listings" element={<ListingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
