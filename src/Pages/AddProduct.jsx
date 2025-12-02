import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
// import { useAuth } from "../context/useAuth";

function AddProduct() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await addDoc(collection(db, "products"), {
      Nome: nome,
      Descrição: descricao,
      Preço: Number(preco),
    });

    alert("Produto criado com sucesso!");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Criar Produto</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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

        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}

export default AddProduct;
