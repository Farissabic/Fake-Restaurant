import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {Link, useNavigate } from 'react-router-dom';


function Search() {

    const [searchData, setSearchData] = useState('');
    const navigate = useNavigate();

    const onEnter = (e)=>{
        console.log(searchData);
        e.preventDefault();
        navigate('/seacrh/'+searchData);
    }
    

  return (
    <SeachWrep>
        <Link to={'/'}> <h2>FakeRestaurant</h2> </Link>
   
        <FromStyled onSubmit={onEnter}>
            <div>
                <FaSearch/>
                <input onChange={(e)=> {setSearchData(e.target.value)}} type="text" placeholder='Search' />
            </div>
        </FromStyled>
    </SeachWrep>
  )
}

const SeachWrep = styled.div`
    h2{
        text-align : center;
        margin-top:5rem;
        font-family: 'Dancing Script', cursive;
        font-weight: bold;
    }
`;

const FromStyled = styled.form`
    padding-top : 5rem;
    display: flex;
    justify-content: center;
    align-itmes-center;

    div{
        background: black;
        color:white;
        width:50%;
        border-radius: 30px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-itmes-center;
        gap:2rem;
        padding : 2rem;
    }

    div input{
        width: 90%;
        height:100%;
        background: black;
        color:white;
       
    }
`
export default Search