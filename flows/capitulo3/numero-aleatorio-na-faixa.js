// numero-aleatorio-na-faixa.js
// Código JavaScript para nó função do fluxo
// "Sensor"

// No início 
context.set('temp_min', 32);
context.set('temp_max', 113);

// Na mensagem
// -----------
var min = context.get('temp_min');
var max = context.get('temp_max');
msg.temp = min + Math.random() * (max - min);
return msg;
