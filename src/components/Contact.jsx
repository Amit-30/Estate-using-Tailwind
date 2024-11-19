import React from 'react'
import { toast } from 'react-toastify';

function Contact() {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd47a0a4-2b47-46db-8296-13f7ac2a40f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div 
    className='text-center p-6 py-10 lg:px-32 w-full overflow-hidden'
    id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></h1>
        <p className='text-gray-600 text-center max-w-80 mb-8 mx-auto'>
            Ready to Make a Move? Let's Build your Future Together
        </p>

        <form 
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                
                <div className='w-full md:w-1/2 text-left'>
                    Your Name 
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Enter Your Name' required/>
                </div>
                
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email 
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Enter Your Email' required/>
                </div>
                
            </div>
            <div className='my-6 text-left'>
                Message 
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Enter Your Message' required></textarea>
            </div>
            <button className='bg-blue-600 hover:bg-blue-500 px-10 py-2 rounded text-white'>
                {result ? result : "Send Message"}
            </button>
        </form>
    </div>
  )
}

export default Contact