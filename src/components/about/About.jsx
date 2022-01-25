import './About.css';
import working from '../../images/working.JPG';

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
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
          Só um pouquinho. :)
        </p>
        <p className="a-desc">
          Questionador, inquieto e curioso.  
        </p>
        <br/>
        <p className='a-desc'>
        Tenho 25 anos, sou desenvolvedor web Full Stack com experiência em Front-End e Back-End. Formado em Engenharia Civil com experiência em construções sustentáveis.
        </p>
        <p className='a-desc'>
        Já morei na <b>Índia </b>e andei de Tuk Tuk :D.
        </p>
        <p className='a-desc'>
        Apaixonado por música e arte.
        </p>
        <p className='a-desc'>
        Na próxima vida estudarei filosofia e lerei os livros de Nietzsche e Kant com facilidade.
        </p>
        <p className='a-desc'>
        Aprender diferentes assuntos sempre foi a minha maior paixão na vida.
        </p>
        <div className="a-tech">
          <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/1ecf7375-9cc9-4b3d-ba9a-c1cdcab267b5-1637340507739.png" alt="" className="a-tech-img"/>
          <div className="a-tech-texts">
            <h4 className="a-tech-title">Desenvolvimento Web FullStack Trybe 2021</h4>
            <p className="a-tech-desc">
              Conhecimentos adquiridos em JavaScript | React.js | HTML5 & CCS3 | Git & GitHub | MySQL | Docker | Node.js | Testes(Jest, RTL, Node.js(Mocha, Chai e Sinon))
            </p>
          </div>
        </div>
        <div className="a-tech">
          <img src="https://jorplast.com.br/wp-content/uploads/2020/08/facens-logo-quadrado.jpg" alt="" className="a-tech-img"/>
          <div className="a-tech-texts">
            <h4 className="a-tech-title">Bacharelado em Engenharia Civil 2019</h4>
            <p className="a-tech-desc">
            Durante os 3 anos desde a formação, realizei mais de 20 palestras e 5 cursos sobre construção sustentável em instituições de ensino, incluindo apresentação para o Fórum de Cidades Inteligentes em parceria com o CREA – SP.
            </p>
          </div>
        </div>
        <div className="a-tech">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/4e/Karunya_Institute_of_Technology_and_Sciences_logo.svg" alt="" className="a-tech-img"/>
          <div className="a-tech-texts">
            <h4 className="a-tech-title">Certificado Karunya University | Coimbatore, Índia 2018</h4>
            <p className="a-tech-desc">
            Certificado pelo Karunya Institute of Technology and Sciences, onde realizei pesquisas relacionadas à Engenharia Civil com foco em agricultura e sustentabilidade.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;