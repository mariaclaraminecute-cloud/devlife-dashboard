export function suportaBackgroundSync() {
return "serviceWorker" in navigator && "SyncManager" in window;
}

export async function agendarSincronizacao(tag = "sincronizar-tarefas") {
if (!suportaBackgroundSync()) return false;

const registro = await navigator.serviceWorker.ready;
await registro.sync.register(tag);

return true;
}