import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";
import Link from "next/link";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  return (
    <>
      <div className="cursor-pointer group">
        <Link href={deployed_url}>
          <a>
            <Image
              src={image_path}
              alt={name}
              className="cursor-pointer"
              layout="responsive"
              height="250"
              width="350"
            />
            {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
            <p className="my-2 text-center tracking-wider text-lg">{name}</p>
            <p className="my-2 text-center tracking-wider text-base">
              {description}
            </p>

            <p className="my-2 text-center tracking-wider text-base text-gray-200">
              {deployed_url}
            </p>

            <div className="relative grid grid-cols-2 gap-4 my-3 ">
              {key_techs.map((tech) => (
                <div
                  key={tech}
                  className="bg-cyan-800 p-2 rounded-lg text-center dark:bg-gray-700"
                >
                  {tech}
                </div>
              ))}
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
