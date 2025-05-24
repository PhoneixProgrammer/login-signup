import React from 'react'
import { CiUser, CiMail } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb"
import  {
  Container,
  LoginSignupBox,
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  Toggle,
  ToggleButton,
} from './Loginsignup.styles';


  
const Loginsignup = () => {

  const [action, setAction] = React.useState("Sign Up");

  return (
    <Container>

      <LoginSignupBox>
        <Title>{action}</Title>
        <Form>
          <InputGroup>
            <CiUser />
            <Input type="text" placeholder="Username" required />
          </InputGroup>
          <InputGroup>
            <CiMail />
            <Input type="email" placeholder="Email" required />
          </InputGroup>
          <InputGroup>
            <TbLockPassword />
            <Input type="password" placeholder="Password" required />
          </InputGroup>
          <SubmitButton type="submit">{action}</SubmitButton>
        </Form>
        <Toggle>
          Already have an account? 
          <ToggleButton onClick={() => setAction(action === "Sign Up" ? "Log In" : "Sign Up")}>
            {action === "Sign Up" ? "Log In" : "Sign Up"}
          </ToggleButton>
        </Toggle>
      </LoginSignupBox>
    </Container>
  )
}

export default Loginsignup