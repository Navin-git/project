import { Link } from "react-router-dom";
import * as Icons from "../../assets/icons";
import * as Images from "../../assets/images";
const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-24 bg-dark rounded-tr-xl rounded-br-xl flex flex-col justify-between gap-y-8 overflow-hidden z-20">
        {/* Logo */}
        <Link to="/" className="flex justify-center py-6 bg-primary">
          <Icons.Logo />
        </Link>
        <div className="flex flex-col divide-y divide-gray-600">
          {/* Theme Toggler */}
          <div className="flex justify-center py-4 w-full">
            <button type="button" className="">
              <Icons.SunIcon className="" />
            </button>
          </div>
          {/* Avatar */}
          <div className="py-4">
            <img
              src={Images.AvatarImg}
              alt="Avatar"
              className="rounded-full w-10 h-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
