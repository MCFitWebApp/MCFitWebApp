import { createTheme } from '@mui/material/styles';
import React, { useState } from "react";
//Stylesheet
import './signup.css';
import Signup1 from './signup1';
import Signup2 from './signup2';
import Signup3 from './signup3';
import Signup4 from './signup4';
import Signup5 from './signup5';
import Signup6 from './signup6';
import Signup7 from './signup7';
import Signup8 from './signup8';

const theme = createTheme({
    palette: {
      neutral: {
        main: 'black',
        contrastText: 'white',
      },
    },
  });

const Signup = () => {


  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    setStep(step - 1)
  }

  const [formData, setFormData] = useState({
    user:'',
    emergency_contact:'',
    fitness_goal:'',
    gender:'',
    weight:'',
    dob: '',
    address:'',
    phone_num:'',
    height:'',
    physical_activity:'',
    diet:'',
    photo: '',
  });

  const {phone_num,address,emergency_contact,fitness_goal,gender,weight,dob,height,physical_activity,diet} = formData;

  
  // Switching the step the user is on changes the state of the page. Each step represents a part of the sign up process
  switch(step) {
    case 1:
      return(
        <div>
        <Signup1 nextStep = {nextStep} setFormData = {setFormData} formData = {formData} phone_num={phone_num} address={address} emergency_contact = {emergency_contact}/>
        </div>
    )
    case 2:
      return(
        <div>
        <Signup2 nextStep = {nextStep} previousStep = {previousStep}/>
        </div>
    )
    case 3:
      return(
        <div>
        <Signup3 nextStep = {nextStep} previousStep = {previousStep} setFormData = {setFormData} formData = {formData} fitness_goal = {fitness_goal}/>
        </div>
    )
    case 4:
      return(
        <div>
        <Signup4 nextStep = {nextStep} previousStep = {previousStep} setFormData = {setFormData} formData = {formData} gender = {gender}/>
        </div>
    )
    case 5:
      return(
        <div>
        <Signup5 nextStep = {nextStep} previousStep = {previousStep} setFormData = {setFormData} formData = {formData} weight = {weight} dob = {dob} height = {height}/>
        </div>
    )
    case 6:
      return(
        <div>
        <Signup6 nextStep = {nextStep} previousStep = {previousStep} setFormData = {setFormData} formData = {formData} physical_activity = {physical_activity}/>
        </div>
    )
    case 7:
      return(
        <div>
        <Signup7 nextStep = {nextStep} previousStep = {previousStep} setFormData = {setFormData} formData = {formData} diet = {diet}/>
        </div>
    )
    case 8:
      return(
        <div>
        <Signup8 previousStep = {previousStep} setFormData = {setFormData} formData = {formData}/>
        </div>
    )
  }
};

  export default Signup;