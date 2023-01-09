import React from 'react'
import './Contact.scss'
import { Button, Form } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h2>Let's work together!</h2>
        <h3>Leave me a message</h3>

        <form className="row contactForm">
          <div className="formLeft col-6">
            <Form.Group className="mb-3" controlId='name'>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId='email'>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId='phone'>
              <Form.Control type="tel" placeholder="Contact phone" />
            </Form.Group>
            <Form.Group controlId="where">
              <Form.Label>Where did you find me?</Form.Label>
              <Form.Control as="select" className='select'>
                <option key='blankChoice' hidden value>Please, select one</option>
                <option>LinkedIn</option>
                <option>ZonaJobs</option>
                <option>Bumeran</option>
                <option>Computrabajo</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="formRight col-6">
            <Form.Group className="mb-3 formText" controlId="exampleForm.ControlTextarea1">
              <Form.Label>How can I help you?</Form.Label>
              <Form.Control as="textarea" rows={3} />
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