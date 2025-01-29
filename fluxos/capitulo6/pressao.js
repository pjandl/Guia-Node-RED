// pressao.js
// Código JavaScript para nó função do fluxo
// "Dashboard_3_flow.json"

// No início
// ---------
context.set("minima", 130);
context.set("maxima", 80);
context.set("acumulado", 0);
context.set("cont", 0);

// Na mensagem
// -----------
// Verifica se payload é array vazio para reiniciar variáveis
if (Array.isArray(msg.payload) && msg.payload.length === 0) {
    context.set("minima", 130);
    context.set("maxima", 80);
    context.set("acumulado", 0);
    context.set("cont", 0);
    return msg;
}
msg.timestamp = msg.payload;
msg.payload = (90 + Math.random() * 25);
// determina pressao mínima
msg.minima = context.get("minima")
if (msg.payload < msg.minima) {
    context.set("minima", msg.payload);
    msg.minima = msg.payload;
}
// determina pressao máxima
msg.maxima = context.get("maxima")
if (msg.payload > msg.maxima) {
    context.set("maxima", msg.payload);
    msg.maxima = msg.payload;
}
// calcula acumulado e média
let cont = context.get("cont") + 1;
context.set("cont", cont);
let acum = context.get("acumulado") + msg.payload;
context.set("acumulado", acum);
msg.media = acum / cont;
// seleciona tópico de publicação
let n = Math.ceil(Math.random() * 3);
msg.topic = "Pressão#" + n.toString();
return msg;
