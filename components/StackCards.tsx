import Link from "next/link";
import { VscFilePdf } from "react-icons/vsc";
import Marquee from "react-fast-marquee";
import { Stack } from "../types";
import { stacks } from "../data";
import { FunctionComponent } from "react";

const StackCard: FunctionComponent<{ stack: Stack }> = ({
  stack: { Icon, title },
}) => {
  return (
    <div className="p-8 space-y-3">
      <div className="container flex-col items-center text-center group hover:text-sky-200">
        <Icon className="w-auto h-40 m-auto " />
        <h1 className="text-2xl mt-2 font-semibold text-sky-100 capitalize dark:text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};
const StackCards = () => {
  return (
    <>
      <div className="container px-6 mx-auto">
        <Link href="ericmilfont-resume-en.pdf">
          <a>
            <div className="flex items-center cursor-pointer group ">
              <h1 className="text-3xl hover:text-sky-500 font-semibold text-sky-100 lg:text-4xl dark:text-white">
                Download my <br />
                <span className="underline underline-offset-1 decoration-cyan-400">
                  Resume Here
                </span>
              </h1>
              <VscFilePdf className="ml-2 h-32 w-auto hover:text-sky-400" />
            </div>
          </a>
        </Link>
        <p className="text-lg mt-2 text-sky-200 xl:mt-4 dark:text-gray-300">
          Available in{" "}
          <Link href="ericmilfont-resume-en.pdf">
            <a className="hover:text-sky-400 underline underline-offset-1 decoration-cyan-500">
              English
            </a>
          </Link>{" "}
          and{" "}
          <Link href="ericmilfont-resume-pt.pdf">
            <a className="hover:text-sky-400 underline underline-offset-1 decoration-cyan-500">
              Portuguese
            </a>
          </Link>
        </p>

        <Marquee className="mt-6" speed={100} gradient={false}>
          {stacks.map((stack) => (
            <StackCard stack={stack} />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default StackCards;
