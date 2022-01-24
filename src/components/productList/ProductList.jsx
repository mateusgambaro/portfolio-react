import './ProductList.css';
import ProductCard from '../productCard/ProductCard';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
      <h1 className="pl-title">Projetos Finalizados</h1>
        <p className="pl-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <ProductCard key={item.id} img={item.img} link={item.link}/>
        ))}
        
      </div>
    </div>
  )
}

export default ProductList;