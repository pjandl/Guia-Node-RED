// min-med-max.js
// Código JavaScript para nó função do fluxo
// "Min_Med_Max"

// No início 
// -----------
context.set("cont", 0);
context.set("min", null);
context.set("max", null);
context.set("total", 0);


// Na mensagem
// -----------
let min = context.get("min");
if (min == null || msg.payload < min) {
    min = msg.payload;
    context.set("min", min);
}
msg.min = min;
let max = context.get("max");
if (max == null || msg.payload > max) {
    max = msg.payload;
    context.set("max", max);
}
msg.max = max;
let cont = context.get("cont") + 1;
context.set("cont", cont);
let total = context.get("total") + msg.payload;
context.set("total", total);
msg.media = total / cont;
return msg;