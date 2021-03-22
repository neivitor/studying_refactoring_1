# studying_refactoring_1
Exemplos extraídos do Livro Refatoração do Martin Fowler
## Fowler, Martin. Refatoração. Novatec Editora. Edição do Kindle.

Refatoração Feitas:
1- Extrair o bloco do Switch para uma função (Extract Function - Pg. 28),
2- Altera o nome da variável de retorno, thisAmount, para result. (dar mais clareza à função extraída. - Pg 28)
3 - Altera o nome da variável passado por parametro na função forAmount, de perf para aPerformance. (Incluir no parametro o nome do tipo - Pg 29)
4 - Retirar a variável play de forAmount (Substituir variável temporária por consulta (Replace Temp with Query - P. 30 ).
5 - Removendo variavel play, Internalizar variável - (Inline Variable - P. 31)
6 - Mudar declaração de função (Change Function Declaration p. 31) em amountFor para remover o parâmetro play.
7 - Aplica o Internalizar Variável (Inline Variable) no amountFor;
8 - Removendo variável Format por uma função declarada.
9 - Aplicar o Mudar declaração de função (Change Function Declaration - p. 38) na função format.
10 - Dividir o Laço (Split Loop) - para separar a acumulução do volumeCredits
11 - Deslocar instruções (Slide Statements p.39) - para mover a declaração da variável para perto do laço.
12 - Extrair função (Extract Function) - ao cálculo geral da variável
13 - Internalizar Variável (Inline Variable)
