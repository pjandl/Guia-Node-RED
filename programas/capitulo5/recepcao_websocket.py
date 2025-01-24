import asyncio
import websockets

# endpoint do websocket
uri = "ws://localhost:1880/gnr/saida"

# função assíncrona
async def recebe_dados():
    async with websockets.connect(uri) as websocket:
        while True:
            mensagem = await websocket.recv()
            print(f"Mensagem recebida: {mensagem}")

asyncio.get_event_loop().run_until_complete(recebe_dados())
