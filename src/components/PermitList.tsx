import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";


const PermitList: React.FC = () =>{
    const [state, setState]= useState <any[]>([]);
    let sortedState=state.sort((a, b):number=> new Date(a.issue_date).getTime() - new Date(b.issue_date).getTime());
    console.log(sortedState)

    useEffect(()=>{
axios.get("https://data.cityofchicago.org/resource/ydr8-5enu.json")
.then((res)=>{
    setState(res.data)
    console.log(res.data)
})
.catch((err)=>console.log(err));
    }, [])
    return(
        <Background>
            <h1>Building Permits</h1>
           
            <Box>{state.map((stated)=>{
                return(
                    <div key={stated.id}>
                    <h4>{stated.street_name}</h4>
                    <p>{stated.application_start_date}</p>
                    <p>{stated.issue_date}</p>
               <button>click here</button>

                </div>
                )
            })}</Box>
        </Background>
    )

}

export default PermitList;

const Background = styled.div`
  /* background-color: blue; */
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 10px;
  row-gap: 15px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
  button{
    flex: 1;
    border: none;
    background: linear-gradient(to top right, #8162CE, #F54BA5);
    height: 40px;
    color: #ffffff;
    width: 20%;
    font-size: 12px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 9px;
    margin-right:10px;
  }
`;

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 15px;
  border-radius: 25px;
  background-color: #31394d;
  /* padding:20px; */
  padding-top: 10px;
  padding-bottom: 10px;
  color: #b3b8cd;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  :hover {
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
    transform: scale(1.02);
    transition: 0.7s ease-out;
  }
  p {
    font-size: 14px;
    color: #7c8097;
    font-size: 15px;
    font-weight: 100;
  }
  h4 {
    color: #ffffff;
    font-weight: 300;
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
  }
`;


