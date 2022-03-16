import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

function Categories(props){

    const [productosCategoria, setProductosCategoria] = useState([]);

    const {categoriaID} = useParams;

   /* const getCategoria = async () => {
        let call = fetch(`https://localhost:4000/product/category/${categoriaID}`);
        call = await call;
        call = await call.text();
        setProductosCategoria(JSON.parse(call));
    }*/

    useEffect(()=>{
        //getCategoria();
    },[categoriaID]);

    return(
        <div>
            <h1>Categoria {categoriaID}</h1>
            {productosCategoria.map(e =>{
                return(
                    <Link  to={`/Detalle/${e.id}`} className="nav-link">
                        <p>{e.title}</p>
                    </Link>
                );
            })}
        </div>
    );
}

export default Categories;
