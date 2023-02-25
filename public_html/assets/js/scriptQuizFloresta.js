/* 
 PROJETO INTEGRADOR - 2° PERÍODO DE ENGENHARIA DE SOFTWARE
 
 ALUNOS:
 
 Gustavo Cardoso Ribeiro - 833588
 João Carneiro da Cunha - 834519
 Rômulo Alexandre Ziotti - 833903
 Weslley Fratini - 826652
 */

var questoes = ["<h2>Qual dos itens abaixo NÃO é realizado por florestas?</h2>",
    "<h2>O que NÃO deve ser feito para preservar as florestas?</h2>"
];
var alternativas_a = ["<p>Preservação do ecosistema</p>", "<p>Utilizar madeira reflorestada</p>"];
var alternativas_b = ["<p>Preservação da biodiversidade</p>", "<p>Despejar esgoto em rios</p>"];
var alternativas_c = ["<p>Contribuição com as chuvas</p>", "<p>Utilizar papel reciclado</p>"];
var alternativas_d = ["<p>Geração de oxigênio</p>", "<p>Evitar queimadas em matos</p>"];
var corretas = [3, 1, 0]; //alternativas expressadas no range de 0-3 para representar a-b-c-d e indicar quais sao corretas
var etapa_atual = 0;
var pontuacao = 0;

var campo = document.getElementById('questao');
var alternativa_a = document.getElementById("alternativa-a");
var alternativa_b = document.getElementById("alternativa-b");
var alternativa_c = document.getElementById("alternativa-c");
var alternativa_d = document.getElementById("alternativa-d");

var botao_a = document.getElementById("botao-a");
var botao_b = document.getElementById("botao-b");
var botao_c = document.getElementById("botao-c");
var botao_d = document.getElementById("botao-d");

function update_quiz(etapa) {
    if (etapa == questoes.length) { //finaliza o quiz
        campo.innerHTML = "<h2>Você acertou " + pontuacao.toString() + " questões do total de " + questoes.length.toString() + " questões.</h2>";
        alternativa_a.remove();
        alternativa_b.remove();
        alternativa_c.remove();
        alternativa_d.remove();
        botao_a.remove();
        botao_b.remove();
        botao_c.remove();
        botao_d.remove();
    } else {
        campo.innerHTML = questoes[etapa];
        alternativa_a.innerHTML = alternativas_a[etapa];
        alternativa_b.innerHTML = alternativas_b[etapa];
        alternativa_c.innerHTML = alternativas_c[etapa];
        alternativa_d.innerHTML = alternativas_d[etapa];
    }

}

function processar_escolha(escolha, etapa) {
    if (corretas[etapa] == escolha) {
        pontuacao++;
    }
    etapa_atual++;
    update_quiz(etapa_atual);
}

update_quiz(0);