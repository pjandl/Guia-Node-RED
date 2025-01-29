// timestamp-to-date.js
// Código JavaScript para nó função do fluxo
// "Datas_flow.json"

// Na mensagem
// -----------
// Obtém data a partir do timestamp
msg.date = new Date(msg.payload);
// Obtém data no formato local à partir da data
msg.localeDate = msg.date.toLocaleDateString();

return msg;
