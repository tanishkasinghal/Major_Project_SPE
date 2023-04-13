import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Base } from '../components/Base';
import addEmployee from '../services/user-service';
import loadcategories from '../services/department-service.js';

const AddEmployee = () => {

    const[departments,setDepartments]=useState([])

    useEffect(() => {
        loadcategories().then((data)=>{
            console.log(data)
            setDepartments(data)
        }).catch(error=>{
            console.log(error)
        })
    }, [])
    

    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        emailId:'',
        password:'',
        dept_id:''
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
        

        //validation
        if(data.firstName.trim()===''){
            alert("FirstName is required")
            return;
        }
        if(data.emailId.trim()===''){
            alert("EmailId is required")
            return;
        }
        if(data.password.trim()===''){
            alert("password is required")
            return;
        }
        if(data.dept_id===''){
            alert("Assign Department")
            return;
        }

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
                    {/* {JSON.stringify(data)} */}   
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
                        <FormGroup>
                        <Label for="department">Select</Label>
                            <Input id="department" defaultValue={0} name="dept_id" type="select" onChange={(e)=>handleChange(e,'dept_id')}>
                                <option disabled value={0}>-- Select Category --</option>
                            {
                                departments.map((department)=>(
                                    <option value={department.id} key={department.id }>{department.deptName}</option>
                                ))
                            }
                            </Input>
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
