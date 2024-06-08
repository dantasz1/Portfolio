import { styled } from "@mui/material"

import Logo from "../../../../assets/images/logo.png"


const StyledHero = styled("div")(()=> ({
    backgroundColor : "var(--cinza)",

   padding : "20px"
   
    }))
   
    const StyledImg = styled("img")(()=> ({
       width: "200px",
       
      
       }))




const  Hero = () => {
  



    return (
      <>
        <StyledHero>
           
            <StyledImg src={Logo} />
        </StyledHero>
      </>
    )
  }
  
  export default Hero