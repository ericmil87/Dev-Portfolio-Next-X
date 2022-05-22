import { FunctionComponent, useState } from "react";
import toast from "react-hot-toast";
import { sendContactMail } from "../services/sendMail";






const ContactForm: FunctionComponent<{
            
        
     }> = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
    
        if (!phone || !email || !message) {
          toast('Please fill up all required fields before sending your message.');
          return;
        }
    
        try {
          setLoading(true);
          console.log (name + ' - ' + phone + ' - ' + email + ' - ' + message )
          await sendContactMail(name, phone, email, message);
          setName('');
          setEmail('');
          setMessage('');
    
          toast('Thank you for your message! I will get back to you soon.');
        } catch (error) {
          toast('Something wrong happend. Please send your message to: eric@milfont.net');
        } finally {
          setLoading(false);
        }
    }
    return (
    <div className="">

        {/* init */} 
        <h5 className=" text-2xl font-bold mb-4">Send me a message</h5>
        <p className="-mt-4 mb-4">Tell me more about your project...</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-6 col-span-2">
            <label htmlFor="name" className="block mb-2 text-base font-medium text-sky-100 dark:text-gray-300">Name</label>
            <input type="text" id="name"  placeholder="Your name here" 
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-base font-medium text-sky-100 dark:text-gray-300">E-mail</label>
            <input type="email" id="email" placeholder="Your e-mail here"
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div>
        <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-base font-medium text-sky-100 dark:text-gray-300">Phone</label>
            <input type="text" id="phone" placeholder="Full phone number"
                    onChange={({ target }) => setPhone(target.value)}
                    value={phone} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        <div className="mb-6 col-span-2">
            <label htmlFor="message" className="block mb-2 text-base font-medium text-sky-100 dark:text-gray-300">Message</label>
            <textarea rows={4} placeholder="I want to build a website for my company. Required features are contact form, clean design, responsive, SEO and booking form..." 
                        onChange={({ target }) => setMessage(target.value)}
                        value={message}
                        id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        
        <button type="submit" className="text-white bg-sky-500 hover:bg-sky-200 hover:text-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
        </form>


        {/* end */}
    
    </div>
  );
};
export default ContactForm;
