import '../App.css'
import Navbar from '../components/navbar';
import BodyMid from '../components/body';
import AcercaD from '../components/acerca';
import Service from '../components/servicios';
import Footer  from '../components/footer';

function Home(){
    return(
        <div className="App">
        <Navbar/>
        <BodyMid/>
        <AcercaD/>
        <Service/>
        <Footer/>
        </div>
    )
}

export default Home;