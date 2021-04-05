import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h2 className="font-semibold text-xl mb-3">Page Not Found</h2>
    <h4 className="font-medium text-base mb-5">
      The page you're looking for does not exist or has moved.
    </h4>
    <Link className="hover:underline text-lime-500" to="/">
      Go Back Home &rarr;
    </Link>
  </div>
);
