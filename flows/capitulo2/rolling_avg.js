// rolling_avg.js
// Código JavaScript para nó função do subfluxos
// "rolling avg" 

// No início
//----------
context.set("nextPos", 0);
context.set("values", [null,null,null,null,null]);
context.set("maximum", null);

// Na mensagem
// -----------
let values = context.get("values");
let nextPos = context.get("nextPos");
let max = context.get("maximum");

// determina valor máximo
if (max == null) max = msg.payload;
else if (max < msg.payload) max = msg.payload;
context.set("maximum", max);
// define msg para 2a saída
let msg2 = RED.util.cloneMessage(msg);
msg2.maximum = max;

// determina média móvel simples dos 5 últimos valores
values[nextPos] = msg.payload;
context.set("nextPos", (nextPos + 1) % 5);
context.set("values", values);
let sum = 0;
let q = 0;
for(let p = 0; p < 5; p++) {
    if (values[p] != null) {
        sum += values[p];
        q++;
    }
}
// completa msg para 1a saída
msg.average = sum / q;

return [msg, msg2];
