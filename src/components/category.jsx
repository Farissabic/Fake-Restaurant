import React from 'react';
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <div className='section'>
        <div className='container'>
            <List>
                <NavLink to={'cuisine/Italian'} className="navLink">
                    <FaPizzaSlice className='icon'></FaPizzaSlice>
                    <h4>Italian</h4>
                </NavLink>
                <NavLink to={'cuisine/American'} className="navLink">
                    <FaHamburger className='icon'></FaHamburger>
                    <h4>American</h4>
                </NavLink>
                <NavLink to={'cuisine/Thai'} className="navLink">
                    <GiNoodles className='icon'></GiNoodles>
                    <h4>Thai</h4>
                </NavLink>
                <NavLink to={'cuisine/Japanese'} className="navLink">
                    <GiChopsticks className='icon'></GiChopsticks>
                    <h4>Japanese</h4>
                </NavLink>
            </List>
        </div>
    </div>
  )
};



const List = styled.div`
    display: flex;
    width : 100%;
    justify-content: center;
    align-itmes-center;
    gap: 2rem;

    .navLink{
        background: black;
        border-radius : 100%;
        color : white;
        width: 8rem;
        height: 8rem;
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        cursor:pointer;
        transition: 200ms ease;


        .icon{
            font-size: 2rem;
        }

        h4{
            color: white;
        }

        &.active{
            background:white;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            color:black;
            border: solid 1px gray;

            h4{
                color:black;
            }
        }
    }

    .navLink:hover{
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
`;


export default Category