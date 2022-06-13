import ContactForm from "../components/ContactForm";
import { SiUpwork, SiFiverr, SiMinutemailer, SiWhatsapp } from "react-icons/si";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="px-6 py-2">
        {/* //! Education & Experience */}
        <div className="grid gap-6 mb-4  md:grid-cols-2">
          <div className="bg-sky-900 dark:bg-gray-800 rounded p-4">
            <h5 className=" text-2xl font-bold">My contact info</h5>
            <div className="">
              <p className="">Eric Milfont</p>
              <p className="">eric@milfont.net</p>
              <p className="">+55 81 98139-2929 (WhatsApp Available)</p>
            </div>
          </div>
          <div className="bg-sky-900 dark:bg-gray-800 rounded p-4">
            <h5 className=" text-2xl font-bold mb-2">Hire me </h5>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 items-center font-xl">
              <Link
                href="https://www.upwork.com/freelancers/~0175c08f983f506afc"
                target="_blank"
              >
                <a>
                  <div className="rounded border-2 w-auto  border-sky-500 hover:border-white p-4">
                    <SiUpwork className="w-8 h-8 m-auto" />
                  </div>
                </a>
              </Link>
              <Link href="https://www.fiverr.com/milpps" target="_blank">
                <a>
                  <div className="rounded border-2 w-auto border-sky-500 hover:border-white p-4">
                    <SiFiverr className="w-8 h-8 m-auto  " />
                  </div>
                </a>
              </Link>
              <Link href="https://bit.ly/milfontwa" target="_blank">
                <a>
                  <div className="rounded border-2 w-auto border-sky-500 hover:border-white p-4">
                    <SiWhatsapp className="w-8 h-8 m-auto  " />
                  </div>
                </a>
              </Link>
              <Link href="https://t.me/ericmilfont" target="_blank">
                <a>
                  <div className="rounded border-2 w-auto border-sky-500 hover:border-white p-4">
                    <SiMinutemailer className="w-8 h-8 m-auto  " />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* EMAIL FORM */}
        <div className="grid gap-9 bg-sky-900 dark:bg-gray-800 rounded p-4 md:grid-cols-1  ">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
