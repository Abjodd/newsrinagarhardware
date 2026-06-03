import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-2">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          <Home size={20} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
