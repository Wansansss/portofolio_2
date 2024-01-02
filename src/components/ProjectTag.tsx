import React from "react";

type Props = {
  name: any;
  onClick: any;
  isSelected: any;
};

const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const buttonStyle = isSelected
    ? "text-blue-800 border-blue-800"
    : "text-white border-white hover:border-blue-800 hover:text-blue-800";
  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyle}`}
    onClick={() => onClick(name)}
   >
      {name}
    </button>
  );
}

export default ProjectTag;
