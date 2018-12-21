import React from "react" ;
import styled from "styled-components"


const Wrapper = styled.div`
*{
        box-sizing:border-box ;
}
background-color: rgba(232,232,232,0.3);
        padding: 23px;
        padding: 5px ;
        display:flex ;
        justify-content:center ;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px #0000004a;
        margin: 65px auto;
        font-weight: 400;
        color: #6e6e6e;
 .logo{
         display: flex ;
         justify-content: center ; 
         margin: 20px ;
 }
 input[type=text],
 input[type=password] {
        border-radius: 5px;
        border: solid 1px rgba(105,105,105,0.44);
        height: 40px;
        padding: 0 20px;
        margin-bottom: 20px;
        width: 100%;
 }
 label{
    display: block;
    padding-bottom: 10px;
    font-weight: 400;
    color: #6e6e6e;
}
 


 .log-in-buttons{
         display: flex ;
         justify-content: space-around ;
         text-align: center ;
 }
 .log-in-button{
         width: 40% ;
         height: 40px ;
         margin: 20px ;
         padding:10px; 
         font-weight: bold ;
         font-size: 15px ;
 }
 #submit{
        background-color: green;
    border: solid green 2px;
    color: #fff;
    font-weight: 200;
    text-transform: uppercase;
 }
 #submit:hover{
    background-color: transparent;
    color: green;
    margin-top: 19px;
    -webkit-transition: .2s;
    transition: .2s;
 }
 #cancel{
  background-color: #c00000;
    border: solid #c00000 2px;
    color: #fff;
    font-weight: 200;
    text-transform: uppercase;
    transition: .2s;
         
 }
 #cancel:hover{
        background-color: transparent;
         color: #c00000 ;
         margin-top: 19px ;
 }
`

class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Wrapper>
            <div className="container">
            <form>
                            {/* Email input */}
                    <label htmlFor="email"> Email adress : </label>
                    <input id="email" type="text"></input>
                    <br/><br/>
                            {/* PassWord input */}
                    <label htmlFor="passWord"> password : </label>
                    <input id="passWord" type="password"></input>  
                    <br/><br/>   
                            {/* Submit Button */}
                    <div className="log-in-buttons">
                        <input className="log-in-button" id="submit" type="submit" value="Log In" />
                        <input className="log-in-button" id="cancel" type="button" value="Cancel"/>
                    </div>
                    </form>
            </div>
            </Wrapper>
        )
    }
}

export default LogIn ;