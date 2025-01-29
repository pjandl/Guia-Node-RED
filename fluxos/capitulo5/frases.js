// frases.js
// Código JavaScript para nó função do fluxo
// "HTTP"

// No início
//----------
let frases = {
    "0": "A picture is worth a thousand words",
    "1": "Better late than never",
    "2": "Break the ice",
    "3": "Actions speak louder than words",
    "4": "The early bird catches the worm",
    "5": "Every cloud has a silver lining",
    "6": "When in Rome, do as the Romans do",
    "7": "You can't have your cake and eat it too",
    "8": "Spill the beans",
    "9": "Hit the nail on the head"
};
context.set("frases", frases);

// Na mensagem
// -----------
let frase = context.get("frases");
msg.id = Math.floor(Math.random()*10)
msg.payload = frase[String(msg.id)];
return msg;
