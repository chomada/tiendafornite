import Carousel from 'react-bootstrap/Carousel';
import Fortnite1 from '../assets/carousel/fortnite1.jpg';
import Fortnite2 from '../assets/carousel/fortnite2.jpg';
import Fortnite6 from '../assets/carousel/fortnite6.jpg';
import Fortnite4 from '../assets/carousel/fortnite4.jpg';
import Fortnite5 from '../assets/carousel/fortnite5.jpg';

const BannerCarousel = () => {
  return(
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fortnite6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tienda Fortnite</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fortnite2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Tienda Fortnite</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fortnite1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tienda Fortnite</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fortnite4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tienda Fortnite</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fortnite5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tienda Fortnite</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};


export default BannerCarousel;