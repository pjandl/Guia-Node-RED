from datetime import datetime
import socket
import time

# Configuração do servidor
HOST = '0.0.0.0'  # Escuta em todas as interfaces de rede
PORT = 6864       # Porta do serviço

# Determina saudação com base na hora atual
def obter_saudacao():
    agora = datetime.now()
    hora = agora.hour
    minu = agora.minute
    if 5 <= hora < 12:
        saudacao = "Bom dia"
    elif 12 <= hora < 18:
        saudacao = "Boa tarde"
    else:
        saudacao = "Boa noite"
    return f"{hora:02d}:{minu:02d} {saudacao}"

# Cria socket
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as servidor:
    servidor.bind(('0.0.0.0', 6864))
    servidor.listen()
    print(f"Servidor ouvindo na porta 6864...")
    try:
        while True:
            conn, addr = servidor.accept()
            with conn:
                print(f"Conexão estabelecida com {addr}")
                saudacao = obter_saudacao()
                conn.sendall(saudacao.encode('utf-8'))
                print(f"Mensagem enviada: {saudacao}")
                time.sleep(60)
    except KeyboardInterrupt:
        print("\nPrograma finalizado")
