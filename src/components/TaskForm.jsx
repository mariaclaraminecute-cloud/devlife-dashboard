import {useState} from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Estudos");
  const [prioridade, setPrioridade] = useState("media");

  function aoEnviar(evento){
    evento.preventDefault();
    if(titulo.trim() === "")return;
      onAdicionar({
        titulo,
        categoria,
        prioridade
      });
      setTitulo("");
  }
  return(
    <form
    onSubmit={onEnviar}
    className=""
    >
        <div className="bg-white rounded-xl shadow-md p-5 mb-8 items-end flex flex wrap gap-4">
            <label>
                Nova tarefa
                
                </label>
                <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="O que precisa ser feito?"
                className=""
                />
</div>
<div>
    <label className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
        Categoria
    </label>
    <select
    value={categoria}
    onChange={(e) => setCategoria(e.target.value)}
    className=""
    >
        <option value="Estudos">Estudos</option>
        <option value="Trabalho">Projeto</option>
        <option value="Pessoal">Saúde</option>
        <option value="Pessoal">Pessoal</option>
    </select>
</div>
<div>
    <label className="block text-sm font-medium text-slate-700">
        Prioridade
    </label>
    <select
    value={prioridade}
    onChange={(e) => setPrioridade(e.target.value)}
    className=""
    >
        <option value="alta">Alta</option>
        <option value="media">Média</option>
        <option value="baixa">Baixa</option>
    </select>
</div>
<button
type="submit"
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
> Adicionar
</button>
</form>
  );
}

export default TaskForm;