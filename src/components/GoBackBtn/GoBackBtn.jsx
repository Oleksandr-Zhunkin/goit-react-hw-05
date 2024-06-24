import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const GoBackBtn = ({ path }) => {
  return (
    <div className="relative">
      <Link
        className="border-2 rounded-xl py-2 px-7  text-blue-950 border-blue-950 font-bold hover:text-blue-950 hover:bg-blue-200"
        to={path}
      >
        Go back
      </Link>
      <MdOutlineKeyboardBackspace className="absolute top-1 left-2" />
    </div>
  );
};

export default GoBackBtn;
