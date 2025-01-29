// random-insert.js
// Código JavaScript para nó função do fluxo
// "SQLite 2_flow.json"

// Na mensagem
// -----------
let chave = "";
for (let i = 0; i < 3; i++) {
    chave += String.fromCharCode(65 + Math.floor(26*Math.random()));
}
let valor = Math.random()*100;
msg.topic = "insert into chave_valor (chave, valor) values ('" + chave + "', " + valor +")";
return msg;