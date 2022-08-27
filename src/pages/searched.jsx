import React, { useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';


function Searched() {

    const param = useParams();
    const [recipe, setRecipe] = useState([]);

    const getSeacrhRecipe = async (name)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=11472a649f094a28ad11d4eecfe85eac&number=18&query=${name}`);
        const data = await api.json();
        console.log(data.results);
        setRecipe(data.results); 
    };

    useEffect(()=>{
        getSeacrhRecipe(param.input);
    },[param.input]);


  return (
    <Grid>
      {recipe.map((rec)=>{
        return (
            <Link to={'/recipe/'+ rec.id}>
              <Card key = {rec.id}>
                <img src={rec.image} alt="" />
                <h4>{rec.title}</h4>
              </Card>
            </Link>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display : grid;
  grid-template-columns : repeat(3,1fr);
  gap : 3rem;
`;

const Card = styled.div`
  display : flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor:pointer;

  h4{
    width:100%;
    text-align: center;
  }

  img{
    border-radius: 20px;
  }
`

export default Searched