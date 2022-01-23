import './About.css';
import working from '../../images/working.jpg';

const About = () => {
  return(
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={working} alt="" className="a-img" />
            </div>

        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-tech">
          <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/1ecf7375-9cc9-4b3d-ba9a-c1cdcab267b5-1637340507739.png" alt="" className="a-tech-img"/>
          <div className="a-tech-texts">
            <h4 className="a-tech-title">Desenvolvimento Web FullStack Trybe 2021</h4>
            <p className="a-tech-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
        <div className="a-tech">
          <img src="https://jorplast.com.br/wp-content/uploads/2020/08/facens-logo-quadrado.jpg" alt="" className="a-tech-img"/>
          <div className="a-tech-texts">
            <h4 className="a-tech-title">Bacharelado em Engenharia Civil 2019</h4>
            <p className="a-tech-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
        <div className="a-tech">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/4e/Karunya_Institute_of_Technology_and_Sciences_logo.svg" alt="" className="a-tech-img"/>
          <div className="a-tech-texts">
            <h4 className="a-tech-title">Certificado Karunya University | Coimbatore, Índia 2018</h4>
            <p className="a-tech-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;