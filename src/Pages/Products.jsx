import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useAuth } from "../context/useAuth.js";
import "./pages.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const { user } = useAuth();

  // Buscar produtos em tempo real
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  async function handleCreateProduct(e) {
    e.preventDefault();

    await addDoc(collection(db, "products"), {
      nome,
      descricao,
      preco: Number(preco),
    });

    setShowModal(false);
    setNome("");
    setDescricao("");
    setPreco("");
  }

  return (
    <div className="products-page">
      <h1>Produtos</h1>

      {user?.role === "admin" && (
        <button className="btn-add-product" onClick={() => setShowModal(true)}>
          + Adicionar Produto
        </button>
      )}

      {/* LISTA DE PRODUTOS */}
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <p className="product-name">{p.Nome}</p>
            <p className="product-description">{p.Descrição}</p>
            <p className="product-price">{p.Preço}€</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Novo Produto</h2>

            <form onSubmit={handleCreateProduct} className="modal-form">
              <input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <input
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />

              <input
                placeholder="Preço"
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />

              <button type="submit" className="btn-create">
                Criar
              </button>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="btn-cancel"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
