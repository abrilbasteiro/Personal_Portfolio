import React from 'react'
import './Contact.scss'
import { Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import swal from 'sweetalert'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b7vjmel', 'template_c3qdaxn', form.current, 'Q_94S1KW0s4XtmVKO')
      .then((result) => {
        swal({
          title: 'Your message has been sent successfully', 
          text: 'I will answer you promptly',
          icon: 'success',
          button: 'OK'})
    }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact' id='contact'>
        <h2>Let's work together!</h2>
        <h3>Leave me a message</h3>

        <form ref={form} className="row contactForm"  onSubmit={sendEmail}>
          <div className="formLeft col-6">
            <Form.Group className="mb-3" controlId='name'>
              <Form.Control type="text" placeholder="Name" name='name' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='email'>
              <Form.Control type="email" placeholder="Email" name='email' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='phone'>
              <Form.Control type="tel" placeholder="Contact phone" name='phone' required/>
            </Form.Group>
            <Form.Group controlId="foundIn">
              <Form.Label>Where did you find me?</Form.Label>
              <Form.Control as="select" className='select' name='foundIn' required>
                <option key='blankChoice' hidden value>Please, select one</option>
                <option value='linkedIn'>LinkedIn</option>
                <option value='zonaJobs'>ZonaJobs</option>
                <option value='bumeran'>Bumeran</option>
                <option value='computrabajo'>Computrabajo</option>
                <option value='other'>Other</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="formRight col-6">
            <Form.Group className="mb-3 formText" controlId="exampleForm.ControlTextarea1">
              <Form.Label>How can I help you?</Form.Label>
              <Form.Control as="textarea" rows={3} name='message' required />
            </Form.Group>
            <Button variant="primary" type="submit" className='submitBtn'>
              Submit
            </Button>
          </div>
        </form>
    </section>
  )
}

export default Contact