import argparse
from random import randint
from time import sleep

# Listas com nomes, sobrenomes e cidades
nomes = ['Maria', 'Ana', 'Joao', 'Jose', 'Antonio',
         'Francisco', 'Carlos', 'Helena', 'Pedro',
         'Laura', 'Thais', 'Julia', 'Luisa', 'Daniel']
sobrenomes = ['Silva', 'Santos', 'Souza', 'Costa', 'Gomes',
              'Oliveira', 'Rodrigues', 'Ferreira', 'Brito',
              'Almeida', 'Pereira', 'Lima', 'Gama', 'Campos']
cidades = ['Campinas', 'Itatiba', 'Jundiai', 'Itu', 'Cajamar',
           'Valinhos', 'Louveira', 'Vinhedo', 'Amparo',
           'Sorocaba', 'Atibaia', 'Pedreira']

if __name__ == '__main__':
    # Define descrição e argumentos do programa
    proc = argparse.ArgumentParser(description="Programa gerador de \
                            dados CSV para fluxo 'Pessoas_flow.json', \
                            Cap.4, Guia do Node-RED.")
    proc.add_argument("arquivo",
                      help="Nome do arquivo CSV de saída")
    proc.add_argument("--registros",
                      type=int, help="Número de registros de dados gerados")
    proc.add_argument("--tempo",
                      type=int, help="Tempo em segundos da repetição")

    args = proc.parse_args()
            
    try:
        cont = 0
        while True:
            if args.registros == None:
                registros = randint(1, 6)
            else:
                registros = args.registros
            with open(args.arquivo, 'wt') as arquivo:
                cont += 1
                print(F'#{cont:06d} (+{registros})')
                for r in range(registros):
                    nom = nomes[randint(0, len(nomes)-1)]
                    sob = sobrenomes[randint(0, len(sobrenomes)-1)]
                    cod = randint(1000,9999)
                    cid = cidades[randint(0, len(cidades)-1)]
                    arquivo.write(F'  {nom} {sob},{cod},{cid}')
                    if r < registros - 1:
                        arquivo.write('\n')
                    print(F'  {nom} {sob},{cod},{cid}')
            if args.tempo == None:
                break
            else:
                sleep(args.tempo)
    except KeyboardInterrupt:
        print("Programa finalizado")