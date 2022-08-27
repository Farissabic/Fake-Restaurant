import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';



function Veg() {
  const [veg, setVeg] = useState([]);

  useEffect(()=>{
      getVegRecipe();
  }, []);

 

  const getVegRecipe = async () =>{

      const check = localStorage.getItem("veg");

      if(check){
          setVeg(JSON.parse(check));
      }
      else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=11472a649f094a28ad11d4eecfe85eac&number=9&tags=vegetarian`);
          const data = await api.json();
          localStorage.setItem("veg", JSON.stringify(data.recipes));
          setVeg(data.recipes);
          console.log(veg)
      }
  };

return (
  <Wrapper>
       <h3>Vegetarian Picks</h3>
      <Splide
          options={ {
              perPage: 3,
              pagination: false,
              arrows: false,
              draf: 'free',
              gap:'5rem',
            } }
      >
      {veg.map((recipe) =>{
          return(
              <SplideSlide key={recipe.id}>
                <Link to={'/recipe/'+ recipe.id}>
                    <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="" />
                    <Gradiant />
                    </Card>
                </Link>
             
              </SplideSlide>
          );
      })}
      </Splide>
  </Wrapper>
)
};

const Wrapper = styled.div`
    margin: 4rem 0rem;
    h3{
      padding-bottom: 2rem;
  }
`;
const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    position : relative;
    overflow: hidden;
    cursor: pointer;

    img{
        position : absolute;
        left:0;
        height: 100%;
        width: 100%;
        object-fit : cover;
        border-radius: 2rem;
    }
    p{
        position : absolute;
        bottom: 0%;
        width:100%;
        color: white;
        z-index: 2;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:1rem;
        font-weight:600;
        margin-bottom: 2rem
    }
`;

const Gradiant = styled.div`
    z-index: 1;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    position : absolute;
    width: 100%;
    height: 100%;
`;

export default Veg