import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Componentes/NavBar";
import "./Cadastrar.css"

export default function Cadastrar() {
    const listaLocalStorege = JSON.parse(localStorage.getItem("Lista")) || [];
    const [produto, setProduto] = useState("");
    const [preco, setPreco] = useState("");
    const [lista, setLista] = useState(listaLocalStorege);
    const [id, setId] = useState(listaLocalStorege[listaLocalStorege.length - 1]?.id + 1 || 1);
  
    useEffect(() => {
      localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);
  
    const salvar = (e) => {
      e.preventDefault();
      setLista([...lista, { produto: produto, preco: preco, id: id }]);
      setId(id + 1);
    };
  
    const removeProduto = (id) => {
      const novaLista = lista.filter((prod) => prod.id !== id);
      setLista(novaLista);
    };
  
    return (
    <div>
        <NavBar/>
      <div className="container">
        <h1 style={{ color: "#007bff" }}>Lista de Produtos</h1>
        <form onSubmit={salvar}>
          <h2>
            Nome:{" "}
            <input value={produto} onChange={(e) => setProduto(e.target.value)} />
          </h2>
          <h2>
            Preço:{" "}
            <input
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </h2>
          <button style={{ backgroundColor: "#007bff", color: "#fff" }}>
            ADD
          </button>
        </form>
        {lista.map((prod) => (
          <div className="produtos" key={prod.id}>
            <p>
              Nome: {prod.produto}, Preço: {prod.preco}, Id: {prod.id}
            </p>
            <Link className="link" to={`/detalhe/${prod.id}`}><button className="button2">Ver</button></Link>
  
            <button
              onClick={() => removeProduto(prod.id)}
              style={{ backgroundColor: "#d9534f", color: "#fff" }}
            >
              Remover
            </button>
  
            
  
          </div>
        ))}
      </div>
      </div>
    );
  }