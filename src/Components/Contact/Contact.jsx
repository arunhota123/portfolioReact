import React, { useState } from "react";
import './Contact.css';
import { Link } from "react-scroll";
export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');
    return (
        <div className="contacts">
            <div className="contact animate-on-scroll">
           
                <div className="contact-text">
                    <h2>Contact<span>Me</span></h2>
                    <h4>Let's work Together</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, neque saepe! Deleniti totam pariatur,
                        aut provident veniam esse modi commodi cupiditate recusandae numquam sunt aspernatur hic voluptate
                        possimus molestiae illo.</p>
                    <div className="contact-list">
                        <li style={{color:'white'}}><i className='bx bxs-send'></i> mail@gmail.com</li>
                        <li style={{color:'white'}}><i className='bx bxs-phone'></i> 3637832181</li>
                    </div>
                    <div className="contact-icons">
                        <i className='bx bxl-gmail'></i>
                        <i className='bx bxl-linkedin'></i>
                        <i className='bx bxl-whatsapp'></i>
                    </div>
                   
                </div>

                <div className="contact-form animate-on-scroll">
                    <form>
                        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
                        <input type="text" placeholder="Enter Your Subject" value={subject} onChange={e => setSubject(e.target.value)} required />
                        <textarea name="msg" id="msg" cols="40" rows="10" placeholder="Enter Your Message" value={msg} onChange={e => setMsg(e.target.value)} required></textarea>
                        <a href=""><input type="submit" value="Submit" className="send"/></a>
                         {/* <input 
                        type="text"
                        value={name}
                        placeholder="name"
                        onChange={(e)=>setName(e.target.value)}
                        
                        /> */}
                        
                    </form>
                    
                </div>
            </div>
            <div className="last-text">
                <p className=" text-center " style={{color:'white'}}>&copy; 2024 Copyright: arunhota123@gmail.com</p>
            </div>
            {/* <a href="" className="top"><i className='bx bx-up-arrow-alt'></i></a> */}
            <Link to="banner" smooth={true} duration={500} className="top"><i className='bx bx-up-arrow-alt'></i></Link>
        </div>
    )
}