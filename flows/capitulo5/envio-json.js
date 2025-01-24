// envio-json.js
// Código JavaScript para nó função do fluxo
// "Envio TCP"

// No início
// ---------
context.set("cont", 0);


// Na mensagem
// -----------
var cont = context.get("cont") + 1;
context.set("cont", cont);
var valor = Math.random() * 10;
msg.payload = {
    "topic": msg.topic,
    "timestamp": msg.payload,
    "cont": cont,
    "valor": valor
};
node.status({"fill":"blue", "shape":"dot", "text":String(cont)});
return msg;
