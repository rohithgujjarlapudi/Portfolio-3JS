import { useState,useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/index";
import { slideIn } from "../utils/motion";
import { useSpriteLoader } from "@react-three/drei";
import { useViewTransitionState } from "react-router-dom";
//template_g3tkpvv
//service_0erm9gk
//qoUvbShSAwQC60MSY

const Contact = () => {
  const formRef =useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading] = useState(false);
  const handleChange =(e) =>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const handlesubmit =(e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_0erm9gk',
      'template_g3tkpvv',
      {
        from_name: form.name,
        to_name: 'Rohith',
        from_email:form.email,
        to_email:'rohithgujjarlapudi@gmail.com',
        message:form.message,
      },
      'qoUvbShSAwQC60MSY'

    )
    .then(()=>{
      setLoading(false);
      alert('Thank you i will get back to you as soon as possible');
      setForm({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      setLoading(false)
      console.log(error);
      alert('something went wrong')
    
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
      variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form 
        ref={formRef}
        onSubmit={handlesubmit}
        className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Whats your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text_white rounded-lg outlined-nane border-name font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input 
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What is your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text_white rounded-lg outlined-nane border-name font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea 
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text_white rounded-lg outlined-nane border-name font-medium"/>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">

            
         {loading?'sending...':'send'}
         </button>
        </form>

      </motion.div>
      <motion.div 
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")