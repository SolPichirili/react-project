import './Index.css';
import index from '../../images/index.jpg';
import AboutUs from '../AboutUs/AboutUs';

const Index = () => {

    return (
        <>
            <div className="row">
                <img src={index} alt="chica-leyendo-comic-ilustrada" className="indexImg img-fluid" />
            </div>
            <AboutUs />
        </>
    )
}

export default Index;