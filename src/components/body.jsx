import fondoG from '../img/fondo.jpeg';

function bodyMid() {
    return (
        <>
        <section className='sections' id="inicio">
            <div className='App-body'>
                <h1 className='Title-bod'>Naturally</h1>
                <div className='Cont-img'>
                    <img src={fondoG} alt="Imagen de tu producto estrella" className='img-e'/>
                </div>
            </div>
        </section>
        </>
    )
}

export default bodyMid;