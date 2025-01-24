import socket
import random

# Endereço IP e porta do endpoint
UDP_IP = "127.0.0.1"
UDP_PORT = 7337

# Dados para enviar
texto = "Cliente UDP"
inteiro = random.randint(0, 100)
real = random.uniform(0, 100)

# Concatenação dos dados em uma string
mensagem = f"{texto},{inteiro},{real}"

# Criação do socket UDP
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Envio da mensagem
sock.sendto(mensagem.encode('utf-8'), (UDP_IP, UDP_PORT))
print(f"Enviado: {mensagem}")

sock.close()
