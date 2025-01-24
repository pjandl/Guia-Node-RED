#import network
from random import random
import socket
import time

# Configurações da rede Wi-Fi
# SSID = 'DecoWiFi'
# PASSWORD = 'ag0r4v4i@Jandl'

# Conectar à rede Wi-Fi
#station = network.WLAN(network.STA_IF)
#station.active(True)
#station.connect(SSID, PASSWORD)

#while not station.isconnected():
#    time.sleep(1)

#print('Conectado à rede Wi-Fi')
#print('Endereço IP:', station.ifconfig()[0])

# Configurações do servidor TCP
TCP_IP = 'localhost'
TCP_PORT = 6468

# Configurar o socket TCP
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((TCP_IP, TCP_PORT))
print(F"Conectado à {TCP_IP}:{TCP_PORT}\n{sock}")
print("Use ctrl+c para interromper a transmissão")
try:
    cont = 0
    while True:
        # Dados a serem enviados
        data = 'Olá Node-RED!'
        cont += 1
        valor = random()*10
        msg = data + "," + str(cont) + ',' + str(valor)
        # Enviar dados
        sock.send(msg.encode('utf-8'))
        print(F"#{cont} {data} {valor}", end="\r")
        # Aguardar um pouco antes de enviar novamente
        time.sleep(10)
except KeyboardInterrupt:
    print("\nPrograma finalizado")
finally:
    sock.close()
