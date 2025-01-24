import socket
import time

# Configurações do servidor TCP
TCP_IP = 'localhost'  # Endereço do servidor
TCP_PORT = 6648       # Porta do servidor

# Configura socket TCP
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((TCP_IP, TCP_PORT))
print(f"Conectado à {TCP_IP}:{TCP_PORT}\n{sock}")
print("Use ctrl+c para interromper a recepção")
try:
    while True:
        # Recebe dados
        data = sock.recv(1024)
        if not data:
            print("\nAguardando dados...")
            time.sleep(15) # Aguarda antes de receber novamente
        else:
            # Decodifica e processa dados recebidos
            msg = data.decode('utf-8')
            print(f"Recebido: {msg}", end="\r")
except KeyboardInterrupt:
    print("\nCliente finalizado")
finally:
    sock.close()
