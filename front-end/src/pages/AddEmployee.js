import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Base } from '../components/Base';
import addEmployee from '../services/user-service'

const AddEmployee = () => {

    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        emailId:'',
        password:''
    })

    const [error, setError] = useState({
        error:{},
        isError:false
    })

    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            firstName:'',
        lastName:'',
        emailId:'',
        password:''
        })
    }

    const submitForm=(e)=>{
        e.preventDefault();

        addEmployee(data).then((resp)=>{
            console.log(resp);
            console.log("success log")
        }).catch((error)=>{
            console.log(error)
            console.log("Error Log")
        })
    }
  return (
    <Base>
        <Container>
            <Row className='mt-4'>

                {/* {JSON.stringify(data)} */}
                <Col sm={{size:6,offset:3}}>
                <Card>
                <CardHeader>
                    <h3>Register - Add Employee Information</h3>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for="firstName">Enter First Name</Label>
                            <Input type='text' id='firstName' value={data.firstName} onChange={(e)=>handleChange(e,'firstName')}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Enter Last Name</Label>
                            <Input type='text' id='lastName' value={data.lastName} onChange={(e)=>handleChange(e,'lastName')}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="emailId">Enter Email Id</Label>
                            <Input type='email' id='emailId' value={data.emailId} onChange={(e)=>handleChange(e,'emailId')}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Enter Password</Label>
                            <Input type='password' id='password' value={data.password} onChange={(e)=>handleChange(e,'password')}/>
                        </FormGroup>
                        <Container className='text-center'>
                            <Button type='submit' color='dark'>Register</Button>
                            <Button color='secondary' className='ms-2' type='reset' onClick={resetData}>Reset</Button>
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

export default AddEmployee;
