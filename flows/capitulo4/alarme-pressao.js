// alarme-pressao.js
// Código JavaScript para nó função do fluxo
// "Sinalização"

// No início 
// -----------
context.set("total", 0);
context.set("cont", 0);


// Na mensagem
// -----------
let cont = context.get("cont") + 1;
context.set("cont", cont);
let total = context.get("total") + msg.payload;
context.set("total", total);
if (msg.payload > 68) {
    msg.error = { "message": "Pressão Alta: "
        + msg.payload.toFixed(4) + ' psi' };
    node.error(msg.error.message, msg.error);
} else if (msg.payload < 52) {
    msg.error = { "message": "Pressão Baixa: "
        + msg.payload.toFixed(4) + ' psi' };
    node.error(msg.error.message, msg.error);
}
msg.media = total / cont;
return msg;
