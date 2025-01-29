// string-json.js
// Código JavaScript para nó função do fluxo
// "Recepção UDP"

// Na mensagem
// -----------
// decompõe payload em partes
let parte = msg.payload.toString('UTF-8').split(',');

// cria JSON com as partes
msg.payload = {
    topic: parte[0].trim(),
    val_i: parseInt(parte[1].trim()),
    val_f: parseFloat(parte[2].trim())
};

return msg;
