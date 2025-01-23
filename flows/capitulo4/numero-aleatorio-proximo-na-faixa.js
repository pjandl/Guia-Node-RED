// numero-aleatorio-proximo-na-faixa.js
// Código JavaScript para nó função do fluxo
// "Temp_C_F"

// No início 
// -----------
context.set('temp_min', -5);
context.set('temp_max', 60);
context.set('temp_var', 5);
context.set('temp_last', null);

// Na mensagem
// -----------
var min = context.get('temp_min');
var max = context.get('temp_max');
var delta = context.get('temp_var');
var last = context.get('temp_last');
var temp = 0;
if (last == null) {
    temp = min + Math.random() * (max - min);
} else {
    do {
        temp = last - delta + Math.random() * delta * 2;
    } while (temp < min || temp > max);
}
context.set('temp_last', temp);
msg.payload = temp;
return msg;
