import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import Relogio from "./components/relogio";
import "./App.css";

const tarefas = [
  { id: 1, titulo: "Estudar React", categoria: "SENAI", prioridade: "alta" },
  { id: 2, titulo: "Projeto final", categoria: "SENAI", prioridade: "alta" },
  { id: 3, titulo: "Viagem Larissa", categoria: "SENAI", prioridade: "alta" },
];

function App() {
  const [count, setCount] = useState(0);
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-700">
            Minhas Tarefinhas ({tarefas.length})
          </h2>

          <button
            type="button"
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition"
            onClick={() => setMostrarRelogio((ativo) => !ativo)}
          >
            {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
          </button>
        </div>

        {mostrarRelogio && (
          <div className="mb-6 flex justify-end">
            <Relogio />
          </div>
        )}

        <section className="space-y-4">
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
          type="button"
          className="new-task-btn mt-6"
          onClick={() => setCount((valor) => valor + 1)}
        >
          New Task: {count}
        </button>
      </main>
    </div>
  );
}

export default App;
