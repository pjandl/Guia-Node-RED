// extrai-json.js
// Código JavaScript para nó função do fluxo
// "Pedido TCP"

// Na mensagem
// -----------
// Convert buffer em string utf-8
msg.payload = msg.payload.toString('utf8');
// Localiza início do texto HTML
var index = msg.payload.indexOf("{");
// Extrai texto JSON da string
msg.payload = msg.payload.substring(index); 
return msg;
