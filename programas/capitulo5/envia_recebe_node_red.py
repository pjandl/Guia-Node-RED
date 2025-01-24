import socket

# Configurações do servidor TCP
TCP_IP = 'localhost'  # Endereço do servidor
TCP_PORT = 6868       # Porta do servidor

# Configura socket TCP
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((TCP_IP, TCP_PORT))
print(f"Conectado à {TCP_IP}:{TCP_PORT}\n{sock}")

# Envia mensagem dada pelo usuário
msg = input("Digite uma mensagem, ENTER para enviar:\n")
sock.send(msg.encode('utf-8'))

# Recebe resposta e exibe no console
resposta = sock.recv(1024)
while not resposta:
    print(".", end="")
    resposta = sock.recv(1024)
print(f"Mensagem Recebida\n{resposta.decode('utf-8')}")

sock.close()
