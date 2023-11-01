// "use client";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// const EmailSec = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
//       const fromEmail = process.env.FROM_EMAIL;
//       const text = process.env.SERVICE_ID +" "+ process.env.TEMPLATE_ID+" "+ process.env.PUBLIC_KEY;
//       alert(fromEmail)
//       emailjs.sendForm('service_8j7pzdb', 'template_30e5dkt', form.current, 'JXIlJE819XncJtX5s')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
//   return (
//     <div>
//       <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input className='text-black' type="text" name="user_name" />
//       <label>Email</label>
//       <input className='text-black' type="email" name="user_email" />
//       <label>Message</label>
//       <textarea className='text-black' name="message" />
//       <input className='bg-white text-black hover:bg-green-400' type="submit" value="Send" />
//     </form>
//     </div>
//   )
// }

// export default EmailSec
