import socket

# Endereço IP e porta do endpoint
UDP_IP = "127.0.0.1"
UDP_PORT = 7447

# Criação do socket UDP
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Ligação do socket ao endereço IP e porta
sock.bind((UDP_IP, UDP_PORT))

print(f"Cliente UDP ouvindo na porta {UDP_PORT}...")
while True:
    # Recebe a mensagem do cliente com buffer de 1024 bytes
    data, addr = sock.recvfrom(1024)
    print(f"Recebido de {addr}: {data.decode('utf-8')}")
