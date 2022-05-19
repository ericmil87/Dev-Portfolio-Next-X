
import ContactForm from "../components/ContactForm";


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
          <h5 className=" text-2xl font-bold">Hire me</h5>
          <div className="">
            <p className="">Upwork</p>
            <p className="">Fiverr</p>
            <p className="">Contact form</p>
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
