import fondoG from '../img/fondoG.jpg';

function bodyMid() {
    return (
        <>
        <section className='sections' id="inicio">
            <div className='App-body'>
                <h1 className='Title-bod'>TU MARCA</h1>
                <div className='Cont-img'>
                    <img src={fondoG} alt="Imagen de tu producto estrella" className='img-e'/>
                </div>
            </div>
        </section>
        </>
    )
}

export default bodyMid;