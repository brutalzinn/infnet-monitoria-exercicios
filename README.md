# Exercícios Monitoria INFNET, 01 de novembro

#### Objetivos: Identificar dúvidas pertinentes e comentar sobre o desenvolvimento de software utilizando Typescript. Exemplificando o uso da orientação a objetos para um software mais consistente e abordando práticas para a solução de problemas utilizando princípios de SOLID.

# Antes de começar: 

1. Escreva o programa para cada exercício utilizando o formato de arquivo: numero_questao.resposta.{.js ou .ts}

2. Certifique de ter o NodeJs instalado.
   
3. Prepare seu ambiente para utilizar o Visual Code como editor de código.
   
4. Ao clonar esse repositório, não esqueça de executar o npm install para instalar as dependências.
   
5. Bons estudos!


# PARTE I - Testando conhecimentos básicos em javascript.

## Utilize javascript para resolver os exercícios abaixo:

1) Crie uma função que receba nome, idade e retorne um texto com nome e idade recebidos. Exemplo: "nome: Alfredo, idade: 23"
   
2) Escreva uma função que receba dois parâmetros e retorne a soma entre eles.
   
3) Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

4) Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

5) Dado um número inteiro, exiba seu sucessor.

6) Dado uma lista de números inteiros (1,2,3,4 e 5), calcule a soma entre eles.

7) Dado uma lista de textos ("ola", "mundo", "O dia", "tá", "lindo"), retorne um texto que represente a concatenação entre todos eles. Exemplo: "ola mundo O dia tá lindo".
   
8) Crie uma função que receba um texto como parâmetro e retorne O texto "Ola" concatenado com o parâmetro. Exemplo: "Ola"+ parâmetro.
   
9)  Crie uma função que retorne o dia da semana dado uma data qualquer.

10) Crie uma função que receba três números como parâmetros e calcule a média aritmética entre eles.
    
# Parte II - Exercícios com Typescript

## Utilize typescript para resolver os exercícios abaixo:

## Utilize o comando npx tsc para compilar seu script para javascript.

## Todos os exercícios devem utilizar tipos primitivos. Se puder, utilize também classes para representar entidades.

1) Crie uma função que receba nome, idade e retorne um texto com nome e idade recebidos. Exemplo: "nome: Alfredo, idade: 23"

2) Crie uma classe que represente uma pessoa e tenha as propriedades documento, nome e idade. 

3) Escreva uma função que receba uma pessoa como parâmetro e retorne a idade dela.
   
4) Escreva uma função que receba uma pessoa como parâmetro e retorne o nome dela.

5) Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

6) Crie uma classe que represente um quadrado e adicione um comportamento para que possa calcular área e o perímetro.
   
7) Dado uma lista de números inteiros (1,2,3,4 e 5), calcule a soma entre eles.

8)  Crie uma função que receba três números como parâmetros e calcule a média aritmética entre eles.
   
9)  Crie uma classe que represente um círculo e deve conter uma função para calcular seu perímetro e área. Lembre que: A área de uma círculo é dada por: A = π r² e o perímetro é dado por:  2 * π * r

### QUESTÃO BÔNUS

Dada a interface 

    interface IFormaGeométrica{
        obterArea()
        obterPerimetro()
    }

Utilize as classes que representam figuras geométricas criadas anteriormente e implemente elas utilizando a interface IFormaGeométrica.


  