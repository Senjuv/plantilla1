import p1 from '../img/lavanda.jpeg';

function acercaD() {
    return (
        <>
            <section className='sections' id="acerca">
                <div className='information-con'>
                    <div>
                        <h2 className='Tittle-mid'>Un poco de nostros:</h2>
                        <p className='information-p'><strong>Naturally</strong> <br /><br />
                        Ilumina tus espacios con elegancia y aromas que inspiran.
                        Creamos veladoras artesanales que combinan diseño, fragancias cuidadosamente seleccionadas y acabados elegantes para transformar cualquier ambiente en un lugar cálido,
                        relajante y lleno de personalidad.
                        <br />
                        <br />
                        Diseñadas para crear momentos inolvidables <br />
                        En Naturally creemos que una veladora es mucho más que una fuente de luz.
                        Es un elemento de decoración capaz de transmitir tranquilidad, bienestar y estilo.
                        <br /><br />
                        Cada pieza está diseñada para complementar cualquier espacio con una estética moderna y sofisticada,
                        mientras sus fragancias envuelven el ambiente con aromas agradables y duraderos.
                        <br /><br />
                        Nuestro compromiso es ofrecer productos que combinen calidad, elegancia y una experiencia sensorial única.
                        </p>
                    </div>
                    <div className='Cont-img'>
                        <img src={p1} alt="Imagen de tu producto estrella" className='img-i' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default acercaD;