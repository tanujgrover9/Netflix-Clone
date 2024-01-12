import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '../utils/firebase.config';
import { useNavigate } from 'react-router-dom';
 
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-templates-row:15vh 85vh;
    .body{
      gap:1rem;
      .text{
        gap: 1rem;
        text-align: center;
        font-size:2rem;
        h1{
          padding: 0 10rem;
        }
      }
      .form{
       display: grid;
       grid-template-columns : ${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};
       width: 60%;
       input{
        color: black;
        border: none;
        padding : 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        background-color:white;
       }
       button{
        padding : 0.5rem 1rem;
      background-color: #e50914;
      color: white;
      cursor: pointer;
      border:none;
      border-radius: 0.5rem;
      font-weight: bolder;
       }
      }
      button{
      padding : 0.5rem 1rem;
      background-color: #e50914;
      color: white;
      cursor: pointer;
      border:none;
      border-radius: 0.5rem;
      font-weight: bolder;
       }
    }
  }
`;


const Signup = () => {
    const[showPassword, setshowPassword] = useState(false)
    const[formvalue, setformvalue] = useState({
      email:"", password:""
    })
    const navigate = useNavigate();
    const handlesign = async()=>{
      try {
        const {email,password} = formvalue;
        console.log(email,password);
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
          console.log(error);
      }
    }
      onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser) navigate("/");
      })



  return (
    <Container showPassword={showPassword}>
        <BackgroundImage/>
        <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies,TV shows and more</h1>
                <h4>Watch anywhere, Cancel anytime.</h4>
                <h6>ready to watch? Enter your email to create or restart membership</h6>
            </div>
            <div className="form">
                <input type="email" placeholder='email address' name='email' value={formvalue.email}
                onChange={(e)=>setformvalue({...formvalue,[e.target.name]:e.target.value})}/>
                {
                  showPassword && (
                    <input type="password" placeholder='password' name='password' value={formvalue.password} 
                    onChange={(e)=>setformvalue({...formvalue,[e.target.name]:e.target.value})}/>
                  )}
                {!showPassword && <button onClick={()=> setshowPassword(true)}>Get Started</button>
                }
            </div>
            <button onClick={handlesign}>Sign Up</button>
        </div>
      </div>
    </Container>
  )
}

export default Signup