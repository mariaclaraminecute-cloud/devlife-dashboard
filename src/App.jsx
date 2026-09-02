import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import "./App.css";

const tarefas = [
{ id: 1, titulo: "Estudar React", categoria: "SENAI", prioridade: "alta" },
{ id: 2, titulo: "Projeto final", categoria: "SENAI", prioridade: "alta" },
{ id: 3, titulo: "Viagem Larissa", categoria: "SENAI", prioridade: "alta" },
];

function App() {
const [count, setCount] = useState(0);

return ( <div className="min-h-screen bg-slate-100"> <Header />
  <main className="max-w-4xl mx-auto px-6 py-10">
    <h2 className="text-xl font-bold text-slate-700 mb-5">
      Minhas Tarefinhas ({tarefas.length})
    </h2>

    <section>
      {tarefas.map((tarefa) => (
        <TaskCard
          key={tarefa.id}
          titulo={tarefa.titulo}
          categoria={tarefa.categoria}
          prioridade={tarefa.prioridade}
        />
      ))}
    </section>

    <button
      className="new-task-btn"
      onClick={() => setCount(count + 1)}
    >
      New Task: {count}
    </button>
  </main>
</div>


);
}

export default App;
