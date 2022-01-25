import './ProductList.css';
import ProductCard from '../productCard/ProductCard';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
      <h1 className="pl-title">Projetos Finalizados</h1>
        <p className="pl-desc">
        Aqui está alguns dos projetos que pude desenvolver durante o curso de Desenvolvimento Web da <b>Trybe</b>, porém você pode encontrar muito mais no meu GitHub, lá estão todos os projetos e exercícios dessa jornada.
        </p>
        <br/>
        <p className='pl-desc'>É só clicar no ícone abaixo</p>
        <a href="https://github.com/mateusgambaro">
         <img alt="GitHub" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
         width="150" height="70"/> </a>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <ProductCard key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
      <h2>
          Algumas das tecnologias que estudo e uso para criar.
        </h2>
        <br/>
      <div className='pl-techs'>

        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mocha/mocha-plain.svg"/>
        <img className="tech-img" alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg"/>
      </div>
    </div>
  )
}

export default ProductList;