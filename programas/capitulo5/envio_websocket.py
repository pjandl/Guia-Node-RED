import asyncio
import websockets
import json

# endpoint do websocket
uri = "ws://localhost:1880/gnr/texto"

# função assíncrona
async def envia_mensagem(mensagem):
    async with websockets.connect(uri) as websocket:
        await websocket.send(mensagem)
        print(f"Mensagem enviada: {mensagem}")
 
# executa função assíncrona envia_mensagem
mensagem = "Olá do Python via WebSocket!"
asyncio.run(envia_mensagem(mensagem))
dicio = { "op": 114, "nome": "Fatec Jundiaí" }
mensagem = json.dumps(dicio).encode("UTF-8")
asyncio.run(envia_mensagem(mensagem))
