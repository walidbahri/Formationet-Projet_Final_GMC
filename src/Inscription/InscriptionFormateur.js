import React from "react" ;
import styled from "styled-components" ;
import {Container, Button, Header, Image, Modal } from 'semantic-ui-react'


const Wrapper = styled.div`
*{
        box-sizing:border-box ;
}
  font-weight: 700;
  padding: 23px;
  background-color: rgba(232, 232, 232, 0.3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #0000004a;
  margin: 65px auto;
 .logo{
  display: flex ;
  justify-content: center ; 
  margin: 20px ;
 }

 input[type=text],
 input[type=password],
 input[type=date],
 input[type=number]{
  border-radius: 5px;
  border: solid 1px rgba(105, 105, 105, 0.44);
  height: 40px;
  padding: 0 20px;
  margin-bottom: 20px;
  width: 100%;
 }
  label {
    display: block;
    padding-bottom: 10px;
    font-weight: 400;
    color: #6e6e6e;
  }
 .Log-in-radio{
         display: flex ;
         align-items: center ;
 }
 .Log-in-buttons{
         display: flex ;
         justify-content: space-around ;
         text-align: center ;
 }
 .Log-in-button{
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
 input[type=radio] {
   color:red;
 }
 .Log-in-radio {
   padding-bottom: 20px;
   label {
    padding-bottom: 0;
  }
}
 #cancel:hover{
         background-color: transparent;
         color: #c00000 ;
         margin-top: 19px ;
 }
                        
`

class InscriptionFormateur extends React.Component {
        constructor(props) {
                super(props);
        }

        render() {
            return(
                    <Wrapper>
                <div className="container">
                            {/* Log IN FORM */}
                <form>
                            {/* First Name input */}
                    <label htmlFor="Nom"> Nom formateur : </label>
                    <input id="Nom" type="text"></input>

                            {/* Last Name input */}
                    <label htmlFor="Prénom"> Prénom : </label>
                    <input id="Prénom" type="text"></input>

                            {/* Email input */}
                    <label htmlFor="Adresse email"> Adresse email : </label>
                    <input id="Adresse email" type="text"></input>

                            {/* PassWord input */}
                    <label htmlFor="Mot de passe"> Mot de passe : </label>
                    <input id="Mot de passe" type="password"></input> 

                            {/* Gender Radio */}
                    <div className="Log-in-radio">
                           <label> sexe : </label>
                           <input type="radio" name="gender" value="female" /> <span>Femme</span>
                           <input type="radio" name="gender" value="male" /> <span>Homme</span>
                    </div>
                            {/* Birthday Date */}
                    <label htmlFor="Birth-day-date"> date de naissance : </label>
                    <input type="date" id="Birth-day-date"></input>

                            {/* Domaine de compétences */}
                    <label htmlFor="Domaine-de-compétences"> Domaine de compétences : </label>
                    <select class="ui fluid search dropdown" multiple="">
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                     </select>
                            {/* Domaine de compétences */}
                    <label htmlFor="Annees-experience"> Années(s) d'expérience : </label>
                    <input id="Annees-experience" type="number"></input>

                            {/* Submit Button */}
                    <div className="Log-in-buttons">
                        <input className="Log-in-button" id="submit" type="submit" value="Sign In" />
                        <input className="Log-in-button" id="cancel" type="button" value="Cancel"/>
                    </div>
                    </form>
                </div>
                
                </Wrapper>
            )
        }
}

export default InscriptionFormateur ;