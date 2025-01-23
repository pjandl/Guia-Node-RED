// totalizador.js
// Código JavaScript para nó função do fluxo
// "Multicanal"

// No início 
// -----------
context.set("total", 0);

// Na mensagem
// -----------
if (msg.reset == null) {
    var ult_total = context.get("total");
    var total = ult_total + msg.payload;
    context.set("total", total);
    msg.total = total;
} else {
    context.set("total", 0);
    msg.total = 0;
}
return msg;