import { useState } from "react";

const Valores = () => {
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [resultado, setResultado] = useState(0);

    const soma = (n1, n2) => {
        return n1 + n2;
    };

    const handleClick = () => {
        const total = soma(Number(valor1), Number(valor2));
        setResultado(total);
    };

    return (
        <div>
            <div className="campo">
                <label>
                    <span>Digite um valor:</span>
                    <input 
                    type="text" 
                    value={valor1}
                    onChange={(e) => setValor1(e.target.value)}
                    />
                </label>
            </div>

            <div className="campo">
                <label>
                    <span>Digite um valor:</span>
                    <input type="text" 
                    value={valor2}
                    onChange={(e) => setValor2(e.target.value)}
                    />
                </label>
            </div>



            <button onClick={handleClick}>
                Clique aqui para somar
            </button>

            <h1>A soma desses 2 valores é {resultado}</h1>
        </div>
    );
};

export default Valores;
