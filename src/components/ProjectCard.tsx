import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string
  previewUrl: string
};

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: Props) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-gray-400 hover:border-blue-800 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-blue-800" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-blue-800 group/link"
          >
            <EyeIcon className="h-10 w-10 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-blue-800" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-gray-700 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
