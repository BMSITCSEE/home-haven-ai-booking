
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-airbnb-primary mb-4">404</h1>
          <p className="text-2xl font-medium text-gray-700 mb-6">Oops! Page not found</p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
