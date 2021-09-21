import './Home.styles.css'

const Home = () => {

    return(
    <div className='quepasa'>            
        <h2>
            ENTREVISTA TÉCNICA REACT
        </h2>
        <p>
            · Crear una aplicación web que funcione como una tienda.
            <br></br>
            <br></br>
            · Alimentar la tienda con datos de una API REST.
            <br></br>
            <br></br>
            · Hacer un icono de carrito que se actualice con el número de productos añadidos.
            <br></br>
            <br></br>
            · Mostrar en un sidebar desplegable el contenido del carrito.
            <br></br>
            <br></br>
            · Hacer botones de añadir o elminiar cantidades y mostrar el total del carrito.
        </p>
        <p className='last'>
            Este proyecto me ayudó a mejorar la implantación de los aspectos visuales vistosos, como el sidebar desplegable, además de gestionar la información de una API REST.
        </p>  
    </div>           
    )
}

export default Home;