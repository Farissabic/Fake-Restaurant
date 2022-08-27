import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Coisine() {

  

  const [cuisine,setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name)=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=11472a649f094a28ad11d4eecfe85eac&number=9&cuisine=${name}`);
    const data = await api.json();
    setCuisine(data.results);
    console.log(cuisine);
  };

  useEffect(()=>{
    getCuisine(params.type);
    console.log(params.type);
  },[params.type]);

 
  return (
    <Grid 
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
     {cuisine.map((recipe)=>{
      return (
        <Link  to={'/recipe/'+ recipe.id}>
          <Card key = {recipe.id}>
          <img src={recipe.image} alt="" />
          <h4>{recipe.title}</h4>
          </Card>
        </Link>
        
      )
     })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Coisine