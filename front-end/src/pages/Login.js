import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Base } from '../components/Base';

const Login = () => {
  return (
    <Base>
        <Container>
            <Row className='mt-4'>
                <Col sm={{size:6,offset:3}}>
                <Card>
                <CardHeader>
                    <h3>Login </h3>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="username">Enter Username</Label>
                            <Input type='text' id='username'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Enter Password</Label>
                            <Input type='password' id='password'/>
                        </FormGroup>
                        <Container className='text-center'>
                            <Button type='submit' color='dark'>Register</Button>
                            <Button color='secondary' className='ms-2' type='reset'>Reset</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
                </Col>
            </Row>
        </Container>
    </Base>
  )
}

export default Login;
