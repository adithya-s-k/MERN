import React,{useRef} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="test-center mb-4">
                Sign Up
            </h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="passwordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmationRef} required />
                </Form.Group>
                <Button type="submit" className="w-100">
                    Sign Up
                </Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account? Log In
    </div>
    </>
  )
}
