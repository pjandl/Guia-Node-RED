// controle-log.js
// Código JavaScript para nó função dos fluxos
// "ControleLog" 

// No início
//----------
flow.set("count", 0);
flow.set("recs_by_file", 10);
flow.set("files_to_keep", 5);

// Na mensagem
// -----------
// Atualiza contagem
var count = flow.get("count");
flow.set("count", count + 1);
msg.count = count;
// Determina numeração do arquivo de log
var rbf = flow.get("recs_by_file");
var num = Math.floor(count / rbf)
        .toString()
        .padStart(2, "0");
msg.filename = "log\\record" + num + ".log";
// Determina numeração do arquivo de log para exclusão
var aux = rbf * flow.get("files_to_keep");
if (count - aux >= 0) {
        var del = Math.floor((msg.count - aux) / rbf)
                .toString()
                .padStart(2, "0");
        msg.del_filename = "log\\record" + del + ".log";
}
// Retorna mensagem com contagem e nomes dos arquivos
return msg;