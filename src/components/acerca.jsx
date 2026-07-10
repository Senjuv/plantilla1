import fondoG from '../img/fondoG.jpg';

function acercaD() {
    return (
        <>
        <section className='sections' id="acerca">
            <div className='information-con'>
                <div>
                    <h2 className='Tittle-mid'>Acerca de la marca:</h2>
                    <p className='information-p'>Informacion sobre la marca, que es lo que ofrece de forma sintetizada y amigable para el publico</p>
                </div>
                <div className='Cont-img'>
                    <img src={fondoG} alt="Imagen de tu producto estrella" className='img-i' />
                </div>
            </div>
        </section>
        </>
    )
}

export default acercaD;