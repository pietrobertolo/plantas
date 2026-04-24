import { useState } from 'react';

interface tarefa {
    id: string;
    texto: string;
}

export function useTarefa() {
    const [tarefas, setTarefas] = useState<tarefa[]>([]);
    const [novaTarefa, setNovaTarefa] = useState<string>('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '') return;
        setTarefas([...tarefas, { id: Date.now().toString(), texto: novaTarefa}]);
        setNovaTarefa('');
    };

    const removerTarefa = (id: string) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };
    return { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa };
}