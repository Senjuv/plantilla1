import fondoG from '../img/fondoG.jpg';
import { Link } from 'react-router-dom';

function service(){
    return(
        <>
        <section className="sections" id="Service">
            <h2 className='Tittle-mid'>Nuevos productos:</h2>
            <div className="information-con">
                <div>
                    <Link to="/product"><img src={fondoG} alt="Producto1" className='img-i' /></Link>
                </div>
                <div>
                    <Link to="/product"><img src={fondoG} alt="Producto1" className='img-i' /></Link>
                </div>
                <div>
                    <Link to="/product"><img src={fondoG} alt="Producto1" className='img-i' /></Link>
                </div>
                <div>
                    <Link to="/product"><img src={fondoG} alt="Producto1" className='img-i' /></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default service;