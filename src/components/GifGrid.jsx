import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {
                //isLoading && <h2>Cargando...</h2> si isLoading es true ejecuta lo que hay despues de && sino no ejecuta nada
                isLoading ? <h2>Cargando...</h2> : null
            }
            
            <div className="card-grid">
                {
                    images.map((elem) => (
                        <GifItem 
                            key={elem.id} 
                            {...elem} //De esta forma puedes enviar todo lo que tiene elem como props al componente
                            // title={elem.title} 
                            // url={elem.url} 
                        />
                    ))
                }
            </div>
        </>
  )
}
