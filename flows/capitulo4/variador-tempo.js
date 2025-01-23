// variador-tempo.js
// Código JavaScript para nó função do fluxo
// "Lotes"

// No início 
// -----------
context.set("espera", 0);


// Na mensagem
// -----------
let espera = context.get("espera");
espera--; 
if (espera > 0) {
    context.set("espera", espera);
    return null;
}
espera = Math.ceil(Math.random() * 10);
context.set("espera", espera);
msg.payload = espera;
return msg;
