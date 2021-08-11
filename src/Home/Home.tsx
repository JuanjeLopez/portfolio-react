import './Home.styles.css'

const Home = () => {

    return(
    <div className='quepasa'>            
        <h2>
            ¿Qué está pasando?
        </h2>
        <p>
            Que estás viendo una página web hecha con React, donde hay dos
            partes principales: esta que ves, explicativa, y otra que emula
            una tienda online.
        </p>
        <p>
            ¿Por qué hacer una tienda? Por tres razones principales:
        </p>
        <p className='list'>    
            · Los productos, descripciones y precios se están cogiendo de una API REST.
        </p>
        <p className='list'>
            · Se han reutilizado componentes, una de las mayores ventajas de REACT.
        </p>
        <p className='list'>
            · Las tiendas online son de las aplicaciones más demandadas en la actualidad.
        </p>
        <p>
            Por todas estas razones me decanté por iniciar este proyecto (realizado en base a un tutorial de FreeCodeCamp).
            Porque me ha permitido desarrollar las técnicas comerciales más usadas, además de ahondar en la comprensión
            de este potente framework que, seamos sinceros, se está comiendo el mercado. 
        </p>
        <p className='last'>
            ¿Qué mejor manera de mostrar soltura y conocimientos que con un proyecto "real"?
        </p>  
    </div>           
    )
}

export default Home;