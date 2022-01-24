import './Contact.css';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import address from '../../images/address.png';
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (event) => {
      event.preventDefault();

      emailjs.sendForm('service_zngtfzq',
       'template_ll6jpr7',
        formRef.current,
        'user_HOTMNO7np3jJnLvxt6dpc')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });      
    }


  return(
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">E ai, bora criar esse projeto?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +55 (15) 99173-9262
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              mateusgambaro@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Rua Quinzinho de Barros, Vila Hortência | Sorocaba/SP
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Como posso te ajudar?</b> Entre em contato.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nome" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Assunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensagem" name="message"></textarea>
            <button> Enviar </button>
            {done && "Obrigado! Seu email foi enviado."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;