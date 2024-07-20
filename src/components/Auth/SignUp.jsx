import React from 'react'
import { MymainBody, Wrapper,AuthHeader,Logo,NavRight} from "./AuthStyle"
import LogoImg from "../../assets/Logo.png"


const SignUp = () => {
  return (
    <MymainBody>
        <Wrapper>
            <AuthHeader>
                <Logo>
                    <img src={LogoImg} alt="" />
                </Logo>

                <NavRight>
                    <span>Already registered?</span>
                    <button>Login</button>
                </NavRight>
            </AuthHeader>
        </Wrapper>
    </MymainBody>
  )
}

export default SignUp