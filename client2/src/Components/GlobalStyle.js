import { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html{
    @media (max-width: 1894px){
            .circle{
            width: 28rem;
            }
            .skill,.vtc{
            padding-top: 4rem;
            }
        }
    @media (max-width: 1600px){
            
            font-size: 90%;
            .sbtn{
            letter-spacing: 4px;
            }
            .circle{
                width: 28rem;
            }
            p{
                letter-spacing: 5px;
            }
        }
    @media (max-width: 1424px){
            font-size: 80%;

            p {
                letter-spacing: 4px;
            }

            .sbtn{
            letter-spacing: 3px;
            }
            .circle{
            width: 30rem;
            transform: translate(-50%, -50%);
            }
            .skill,.vtc{
            padding-top: 4rem;
            width: 80%;
            }
            .girl{
                width: 25%;
            }
            .girl1,.books{
                width: 80%;
            }
        }
    @media (max-width: 1200px){
        font-size: 70%;
        .sbtn{
            letter-spacing: 2px;
            font-size: 1.2rem;
        }
        .circle{
            height: 30rem;
            width: 30rem;
            transform: translate(-50%,-50%);
            }
            .skill,.vtc{
            padding-top: 4rem;
            width: 70%;
            }
            .girl1,.books{
                width: 70%;
            }
            p{
                letter-spacing: 4px;
            }
        }
    @media (max-width: 1100px){

        font-size: 60%;
        p{
            letter-spacing: 3px;
        }

    }
        @media (max-width: 1010px){
        font-size:50%;
        p,h1{
            letter-spacing: 0px;
        }
    }
    @media (max-width: 890px){
        .circle{
            opacity: 0;
        }
    }
}
    
    body{

    background: #FFF;
    font-family: "Poppins",sans-serif;
    }
    
    button{
    cursor: pointer;
    background: rgba(16, 90, 246,0.72);
    color: white;
    border: none;
    border-radius: 9px;
    padding: .8rem 2rem;
    box-shadow: 0px 10px 15px 0px rgba(78,93,225,.47);
    text-shadow: 0px 10px 15px rgba(78,93,225,0.47);
        p {
        mix-blend-mode: screen;
        }
        
    }


`;

export default GlobalStyle;
