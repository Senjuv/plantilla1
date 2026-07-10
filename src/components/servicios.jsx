import fondoG from '../img/fondoG.jpg';
function service(){
    return(
        <>
        <section className="sections" id="Service">
            <h2 className='Tittle-mid'>Nuevos productos:</h2>
            <div className="information-con">
                <div>
                    <img src={fondoG} alt="Producto1" className='img-i' />
                </div>
                <div>
                    <img src={fondoG} alt="Producto2" className='img-i'/>
                </div>
                <div>
                    <img src={fondoG} alt="Producto3" className='img-i'/>
                </div>
                <div>
                    <img src={fondoG} alt="Producto3" className='img-i'/>
                </div>
            </div>
        </section>
        </>
    )
}

export default service;