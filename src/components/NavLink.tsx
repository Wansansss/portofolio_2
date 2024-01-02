import { Bars2Icon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {
    href : string,
    title : string,
}

const NavLink = ({ href, title } : Props) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-blue-700"
    >
      {title}
      
    </Link>
  );
};

export default NavLink