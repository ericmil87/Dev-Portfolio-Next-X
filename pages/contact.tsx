
import ContactForm from "../components/ContactForm";
import { SiUpwork, SiFiverr, SiMinutemailer, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 mb-4  md:grid-cols-2">
        <div className="bg-sky-900 rounded p-4">
          <h5 className=" text-2xl font-bold">My contact info</h5>
          <div className="">
            
            <p className="">Eric Milfont</p>
            <p className="">eric@milfont.net</p>
            <p className="">+55 81 98139-2929 (WhatsApp Available)</p>
            
          </div>
        </div>
        <div className="bg-sky-900 rounded p-4">
          <h5 className=" text-2xl font-bold mb-2">Hire me </h5>
          <div className="flex flex-cols lg:justify-between  gap-4 items-center font-xl">
          
            <div className="rounded border-2 border-sky-500 hover:border-white p-4"><SiUpwork className="w-8 h-8 " /></div>
            <div className="rounded border-2 border-sky-500 hover:border-white p-4"><SiFiverr className="w-8 h-8  " /></div>
            <div className="rounded border-2 border-sky-500 hover:border-white p-4"><SiWhatsapp className="w-8 h-8  " /></div>
            <div className="rounded border-2 border-sky-500 hover:border-white p-4"><SiMinutemailer className="w-8 h-8  " /></div>
          </div>
        </div>
      </div>

      {/* EMAIL FORM */}
      <div className="grid gap-9 bg-sky-900 rounded p-4 md:grid-cols-1  ">
          
          <ContactForm />
      </div>
      
    </div>
    
    </>
  );
};

export default Contact;
