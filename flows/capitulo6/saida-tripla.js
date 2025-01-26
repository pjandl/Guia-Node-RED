// saida-tripla.js
// Código JavaScript para nó função do fluxo
// "Dashboard_1_flow.json" e "Dashboard_2_flow.json"

// Na mensagem
// -----------
msg.timestamp = msg.payload;
msg.payload = (10 + Math.random() * 20);
let topic = Math.ceil(Math.random() * 2);
msg.topic = "temp" + topic.toString();
if (topic == 1) {
    return [msg, null, RED.util.cloneMessage(msg)];
} else {
    return [null, msg, RED.util.cloneMessage(msg)];
}
