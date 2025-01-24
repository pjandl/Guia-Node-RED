import socket

# Configurações do servidor TCP
TCP_IP = 'localhost'  # Endereço do servidor
TCP_PORT = 6468       # Porta do servidor

# Configura socket TCP
servidor = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
servidor.bind((TCP_IP, TCP_PORT))
servidor.listen(1)
print(F"Servidor iniciado em {TCP_IP}:{TCP_PORT}")
print("Use ctrl+c para interromper a recepção", end="\r")
try:
    while True:
        print("\nAguardando conexão...")
        conn, addr = servidor.accept()
        print(F"Conectado por {addr}")
        while True:
            # Recebe dados
            data = conn.recv(1024)
            if not data:
                break
            # Decodifica e processa dados recebidos
            msg = data.decode('utf-8')
            print(F"Recebido: {msg}", end="\r")
        conn.close()
except KeyboardInterrupt:
    print("\nServidor finalizado")
finally:
    servidor.close()
