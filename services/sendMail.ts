import axios from 'axios';

export const sendContactMail = async (
  name: string,
  phone: string,
  senderMail: string,
  content: string
) => {
  const data = {
    name,
    phone,
    senderMail,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};