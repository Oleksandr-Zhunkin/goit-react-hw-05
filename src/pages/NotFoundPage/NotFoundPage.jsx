import { Link } from "react-router-dom";
import notFound from "../../image/not-found-01.png";

export const NotFoundPage = () => {
  return (
    <div className="p-5 ">
      <Link
        className="border-2 rounded-xl py-2 px-5 text-blue-950 border-blue-950 font-bold hover:text-blue-950 hover:bg-blue-200"
        to="/"
      >
        Home
      </Link>
      {<img src={notFound} alt="not found page" /> || (
        <p className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl ">
          Not Found...
        </p>
      )}
    </div>
  );
};
