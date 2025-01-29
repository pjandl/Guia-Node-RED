// recepcao-buffer.js
// Código JavaScript para nó função do fluxo
// "Recepção TCP"

// Na mensagem
// -----------
var buffer = Buffer.from(msg.payload).toString();
var data = buffer.split(',');
msg.payload = data[0];
msg.cont = parseInt(data[1]);
msg.valor = parseFloat(data[2]);
return msg;
