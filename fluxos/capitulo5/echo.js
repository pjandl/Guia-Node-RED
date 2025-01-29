// echo.js
// Código JavaScript para nó função do fluxo
// "TCP_Cli_Serv_flow.json"

// Na mensagem
// -----------
msg.payload = (msg.payload + " ").repeat(2) + msg.payload;
return msg;
