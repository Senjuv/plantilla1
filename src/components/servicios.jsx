import oso from '../img/osito.jpeg';
import lavanda2 from '../img/lavanda2.jpeg';
import verde from '../img/verde.jpeg';
import cuatro from '../img/cuatro.jpeg';
import { Link } from 'react-router-dom';

function service(){
    return(
        <>
        <section className="section-s" id="Service">
            <h2 className='Tittle-mid'>Productos destacados:</h2>
            <div className="information-con">
                <div>
                    <Link to="/product"><img src={oso} alt="Producto1" className='img-iP' /></Link>
                </div>
                <div>
                    <Link to="/product"><img src={lavanda2} alt="Producto1" className='img-iP' /></Link>
                </div>
                <div>
                    <Link to="/product"><img src={verde} alt="Producto1" className='img-iP' /></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default service;