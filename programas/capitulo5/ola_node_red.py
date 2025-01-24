from random import random
import socket
import time

# Configurações do servidor TCP
TCP_IP = 'localhost'  # Endereço do servidor
TCP_PORT = 6468       # Porta do servidor

# Configura socket TCP
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((TCP_IP, TCP_PORT))
print(f"Conectado à {TCP_IP}:{TCP_PORT}\n{sock}")
print("Use ctrl+c para interromper a transmissão")
try:
    cont = 0
    while True:
        # Dados a serem enviados
        data = 'Olá Node-RED!'
        cont += 1
        valor = random()*10
        msg = data + "," + str(cont) + ',' + str(valor)
        # Envia dados
        sock.send(msg.encode('utf-8'))
        print(f"#{cont} {data} {valor}", end="\r")
        time.sleep(10) # Aguarda antes de enviar novamente
except KeyboardInterrupt:
    print("\nPrograma finalizado")
finally:
    sock.close()
