# Desafio de Código: Gerenciador de Tarefas (Angular)

## 1. Visão Geral do Projeto

Bem-vindo(a) ao nosso desafio de código!

Este repositório contém o código-fonte de uma aplicação de gerenciamento de tarefas desenvolvida em Angular. O projeto foi iniciado por um fornecedor anterior, mas foi entregue incompleto, instável e com diversos bugs.

---

## 2. O Cenário

A empresa IMTS Group precisa de uma aplicação funcional para que seus colaboradores gerenciem suas tarefas. O projeto foi entregue com uma série de problemas que impedem até mesmo sua inicialização, além de falhas de funcionalidade e usabilidade identificadas por um analista de qualidade (QA).

---

## 3. Sua Missão

Sua missão é assumir este projeto e transformá-lo em uma aplicação robusta e funcional. Você deverá:
1.  **Diagnosticar e corrigir os erros** que atualmente impedem a aplicação de iniciar com o comando `npm start`.
2.  **Implementar todas as correções e melhorias** detalhadas na lista de requisitos técnicos abaixo.
3.  **Entregar o projeto final** seguindo as instruções de entrega.

---

## 4. Como Começar

Para configurar o ambiente, siga os passos:

1.  **Clone o repositório** para sua máquina local.
2.  **Instale as dependências** do projeto:
    ```bash
    npm install
    ```
3.  **Tente iniciar o servidor** de desenvolvimento:
    ```bash
    npm start
    ```

> **Atenção:** A aplicação não irá iniciar corretamente. Seu primeiro desafio é investigar e consertar os erros que impedem a execução bem-sucedida deste comando.

---

## 5. Requisitos Técnicos (Lista de Tarefas do QA)

A seguir estão os pontos exatos que você deve abordar.

### 5.1. Bugs a Corrigir

1.  Ao clicar no botão “Salvar”, a tarefa está sendo adicionada duas vezes.
2.  Só está sendo possível salvar uma tarefa a primeira vez que clica no botão “Salvar”, só é possível salvar uma nova tarefa após atualizar a página (F5)
3.  O texto do botão de limpar todas as tarefas não está em português.
4.  O botão “Exibir Tarefas Concluídas” está, na verdade, ocultando as tarefas concluídas.
5.  O botão “Ocultar Tarefas Concluídas” tem o comportamento invertido, exibindo as tarefas concluídas.
6.  Ao clicar em “Limpar Tarefas Concluídas”, a ação é executada sem pedir uma confirmação ao usuário.
7.  O botão “Limpar Tarefas Concluídas” está removendo as tarefas não concluídas em vez das concluídas.
8.  O botão “Editar” não está funcional. O comportamento esperado é: ao clicar, o campo “Título da Tarefa” deve ser preenchido com o texto da tarefa selecionada. Ao salvar, o item na lista deve ser atualizado e o campo de texto limpo.
9.  O botão “Editar” está desalinhado e deve ser posicionado ao lado do botão “Remover”.
10.  O botão “Remover” deve ter a cor vermelha para indicar uma ação destrutiva.
11. A lista de tarefas não apresenta uma barra de rolagem quando o número de itens ultrapassa a altura do painel, impedindo a visualização de todas as tarefas.
12. Salvar sem digitar um “Título da Tarefa” está adicionando um item em branco à lista.
13. Digitar apenas espaços no campo “Título da Tarefa” e salvar também está adicionando um item em branco.

### 5.2. Melhorias a Implementar

1.  Implementar um botão “Ordenar de A a Z” que, ao ser clicado, ordene alfabeticamente a lista de tarefas visíveis.
2.  Permitir que o usuário adicione uma tarefa pressionando a tecla `Enter` no campo de texto, além do clique no botão “Salvar”.
3.  Permitir a adição de múltiplas tarefas de uma só vez. O usuário deverá digitar os títulos separados pelo caractere `|` (pipe).
4.  Implementar um filtro de palavras obscenas. Caso o usuário tente cadastrar uma tarefa contendo um palavrão, exiba a mensagem: “Não é permitido cadastrar tarefas com palavras obscenas.” (Sugestão de biblioteca: `https://github.com/web-mech/badwords`).
5.  Adicionar a funcionalidade de exportar a lista de tarefas atual para um arquivo PDF. (Sugestão de biblioteca: `https://github.com/parallax/jsPDF`).
6.  Substituir todos os `alert`s e `confirm`s nativos do navegador por uma experiência mais moderna, utilizando a biblioteca SweetAlert. (Sugestão: `https://sweetalert2.github.io/`).

---

## 6. Instruções de Entrega

Ao finalizar todo o trabalho, você deve:

1.  **Fazer o commit de cada item separadamente**, conforme detalhado na seção "Boas Práticas" abaixo. O histórico de commits é uma parte crucial da avaliação. 

2.  **Substituir o conteúdo deste `README.md`** pelo seu relatório técnico final. O seu relatório deve conter as seguintes seções:

    * **Relatório Técnico - [Seu Nome]**
    * **1. Visão Geral da Solução:** Um breve resumo do que foi feito.
    * **2. Como Executar a Aplicação:** Instruções claras para clonar, instalar e rodar o projeto (`npm install`, `npm start`).
    * **3. Correção dos Erros Iniciais (`npm start`):** Descreva quais eram os erros que impediam a aplicação de rodar e como você os solucionou.
    * **4. Relatório de Correção de Bugs:** Para cada bug da lista, explique a causa raiz e a solução que você implementou.
    * **5. Relatório de Implementação de Melhorias:** Para cada melhoria, descreva sua abordagem técnica e quais bibliotecas foram utilizadas.
    * **6. Relatório de Débito Técnico:** Para cada ítem da lista de bugs e melhorias que você não conseguiu resolver ou implementar, descreva quais foram as dificuldades que você enfrentou na qual fizerem com que você não tenha conseguido entregar.
    * **7. Relatório de Melhorias:** Descreva quais melhorias (novas funcionalidades) você acha interessante que sejam implementadas para evoluir o sistema.
    * **8. Decisões e Considerações:** (Opcional) Espaço para comentar qualquer decisão de arquitetura ou desafio interessante que você encontrou.
    

---

## 7. Boas Práticas e Uso de Ferramentas

### Commits Atômicos
Cada bug corrigido e cada melhoria implementada deve ser um commit individual no repositório. Suas mensagens de commit devem ser claras e descritivas (ex: `fix: corrige a duplicação de tarefas ao salvar` ou `feat: implementa a exportação para PDF`). Isso é fundamental para avaliarmos seu processo de desenvolvimento.

### Uso de Inteligência Artificial
O uso de ferramentas de Inteligência Artificial (como ChatGPT, GitHub Copilot, etc.) é permitido como um recurso de apoio. No entanto, o mais importante é que você **entenda profundamente** o código e as soluções que está entregando. Esteja preparado(a) para explicar suas escolhas e defender a lógica implementada no relatório e na entrevista técnica, pois o conhecimento da solução é de sua total responsabilidade.

---

## 8. Critérios de Avaliação

Lembre-se que avaliaremos:
* **Funcionalidade:** Cumprimento de todos os requisitos.
* **Qualidade do Código:** Legibilidade, organização e boas práticas.
* **Lógica e Eficiência:** Robustez das suas soluções.
* **Comunicação:** Clareza do seu relatório técnico (`README.md`).
* **Controle de Versão:** Qualidade e granularidade das suas mensagens de commit.

---

## 9. Uma Palavra Final

Entendemos que desafios como este podem ser complexos. Se você não conseguir concluir 100% dos itens, não desanime! Entregue o máximo que conseguir e documente seu progresso.

Para nós, a jornada é tão importante quanto o destino. Não estamos buscando um profissional que saiba tudo, mas sim alguém com vontade de aprender, evoluir e que entenda que os erros são parte fundamental do crescimento.

**Boa sorte!**