import {React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {

    const param = useParams();
    const [recipe,setRecipe] = useState({});
    const [ingridients,setIngridients] = useState([]);
    const [active,setActive] = useState('instructions');

    const getRecipeById = async()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/${param.id}/information?apiKey=11472a649f094a28ad11d4eecfe85eac`);
        const data = await api.json();
        setRecipe(data);
        setIngridients(data.extendedIngredients);
        console.log(data);
    };

    useEffect(()=>{
        getRecipeById();
    },[param.id])


  return (
    <Wrapper>
        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt="" /> 
        </div>
        <Info>
            <button className={active === 'instructions' ? 'active' : ''} onClick={()=> setActive('instructions')}>Instructions</button>
            <button className={active === 'ingredients' ? 'active' : ''} onClick={()=> setActive('ingredients')}>Ingredients</button>
            <div>
                {active === 'instructions' && (
                     <p dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>
                )}

                {active === 'ingredients' && (
                    <ul>
                        {ingridients.map((Ingredient)=>{
                            return(
                                <li key={Ingredient.id}>{Ingredient.original}</li>
                            )
                        })}
                    </ul>
                )}
               
            </div>
        </Info>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : grid;
    grid-template-columns: repeat(2,1fr);
    width: 90%;
    margin: 0 auto;
    gap: 2rem;

    div h3{
        margin-bottom:2rem;
    }

    div img{
        border-radius: 20px;
    }
    
`;

const Info = styled.div`
   

    button{
        padding : 1rem;
        background: transparent;
        border: 1px solid black;
        color : black;
        font-weight: bold;
        transition: 300ms ease;
        cursor: pointer;
        margin-right: 2rem;
    }

    button:hover{
       color: white;
       background: black;
    }

    .active{
        color: white;
        background: black;
    }

    div{
        margin-top: 4rem;
    }
`;

export default Recipe