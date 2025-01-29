// fatorial.js
// Código JavaScript para nó função do fluxo
// "Serviços"

// Na mensagem
// -----------
msg.statusCode = 400;
if (msg.req.query.n == null) {
    msg.payload = 'Não foi fornecido valor de n'
} else if (isNaN(msg.req.query.n)) {
    msg.payload = 'O valor de n não é numérico'
} else {
    if (parseInt(msg.req.query.n) < 0) {
        msg.payload = 'O valor de n é inválido'
    } else {
        let n = parseInt(msg.req.query.n);
        msg.statusCode = 200;
        msg.output = msg.req.query.n;
        if (n == 0) {
            msg.output = "1";
            msg.payload = 1;
        } else {
            let fat = n;
            for (n = n - 1; n > 0; n--) {
                fat *= n;
                msg.output += ' * ' + parseInt(n);
            }
            msg.payload = fat.toLocaleString('pt-BR');
        }
    }
}
if (msg.statusCode == 200) return [msg, null];
return [null, msg];