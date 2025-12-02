import { useEffect, useState } from "react";
import { getProducts } from "../firebase/firestore";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      {products.length === 0 && <p>Carregando...</p>}

      {products.map(p => (
        <div key={p.id}>
          <h2>{p.Nome}</h2>
          <p>{p.Descrição}</p>
          <p>Preço: €{p.Preço}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;