import React, { useEffect, useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import clienteAxios from "../../api/clienteAxios";
import './pokemon.scss'

function Pokemon(props) {
  const [pokeData, setPokeData] = useState({});

  let idx = props.match.params.id;

  const obtenerPoke = async () => {
    const res = await clienteAxios.get(`/productos/${idx}`);
    setPokeData(res.data.producto);
    console.log(res.data);
  };

  useEffect(() => {
    obtenerPoke();
  }, []);


  let url = process.env.REACT_APP_BACKEND_IMAGE;

  return (
    <div className='pokemon' >
      <Jumbotron className='jumbo' >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="" className='logo_poke' />
        <h1>Hello, Poke world!</h1>
        <p>
        Pokemon es una franquicia de medios gestionada por The Pokemon Company, un consorcio japonés entre Nintendo, Game Freak y Creatures. Los derechos de autor de la franquicia son compartidos por las tres compañías, pero Nintendo es el único propietario de la marca comercial. La franquicia fue creada por Satoshi Tajiri en 1995, y se centra en criaturas ficticias llamadas "Pokemon", que los humanos, conocidos como Entrenadores Pokemon.
        </p>
        <p>
          <Button variant="info">Eliminar Pokemon</Button>
        </p>
      </Jumbotron>
      <div className=' photo_poke' >
        <h2 className='text-center text-uppercase' >{pokeData.name} </h2>
      <img src={`${url}${pokeData.path}`} alt="dd"  className='poke' />
      </div>
    </div>
  );
}

export default Pokemon;
