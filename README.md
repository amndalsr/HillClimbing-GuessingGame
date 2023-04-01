## Jogo da Advinhação com Hill Climbing

Este código é de um jogo de adivinhação, onde o jogador tenta adivinhar um número aleatório entre 1 e 100, e tem um limite de palpites.
No contexto deste jogo, o algoritmo é utilizado para ajudar o jogador a adivinhar o número mais rapidamente, dando
dicas sobre se a tentativa atual está muito alta ou muito baixa em relação ao número correto.

### Hill Climbing

O algoritmo Hill Climbing (subida de encosta, em português) é uma técnica de otimização heurística que busca encontrar uma solução ótima em um 
espaço de busca, a partir de uma solução inicial.

O funcionamento básico do algoritmo consiste em realizar sucessivas iterações, em cada uma delas, o algoritmo avalia a qualidade da solução 
atual e busca por uma solução vizinha que tenha uma melhor qualidade em relação à atual. Esse processo de busca é realizado de forma iterativa 
até que uma solução considerada ótima seja encontrada ou até que o algoritmo atinja um critério de parada.

Uma das características mais importantes do algoritmo Hill Climbing é a sua simplicidade e eficiência computacional, uma vez que ele não requer 
muitas informações sobre o espaço de busca ou sobre o problema a ser resolvido. No entanto, ele pode ficar preso em ótimos locais que não são ótimos 
globais, o que é conhecido como o problema de ótimo local.
