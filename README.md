# Relatório Técnico - Guilherme Abrunheiro

## 1. Visão Geral da Solução

Este projeto consiste em uma aplicação de lista de tarefas (Todo List) desenvolvida com Angular. O objetivo principal foi corrigir erros que impediam a execução da aplicação, resolver bugs existentes e implementar melhorias funcionais e visuais, como adição de tarefas com tecla Enter, suporte a múltiplas tarefas com delimitador, exportação em PDF e integração com SweetAlert2.

---

## 2. Como Executar a Aplicação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Acesse a pasta do projeto
cd seu-repo

# Instale as dependências
npm install

# Rode a aplicação
npm start
```
## 3. Correção dos Erros Iniciais (npm start)
Erros encontrados ao rodar npm start:

Erro de template: uso incorreto de (input)="onInputChange(($event.target as HTMLInputElement).value)" no HTML.

Solução: Corrigido para (input)="onInputChange(($event.target as HTMLInputElement).value)" e garantido o uso de ngModel com two-way binding adequado.

TS2339: value não existia em EventTarget.

### 4 Bugs Corrigidos

1. **Tarefa sendo adicionada duas vezes:**
   - **Causa:** Evento `taskCreated` estava duplicado no `app-todo.component.html`.
   - **Solução:** Removido evento duplicado no HTML, mantendo apenas um listener.

2. **Salvar só funciona uma vez sem atualizar a página:**
   - **Causa:** Após salvar, o `newTaskTitle` não estava sendo corretamente resetado no componente pai.
   - **Solução:** Implementado `@Output() newTaskTitleChange` no componente filho para manter o binding com o pai.

3. **Texto do botão “Limpar Todas as Tarefas” em inglês:**
   - **Solução:** Corrigido texto para “Limpar Todas as Tarefas”.

4. **Botões “Exibir/Ocultar Tarefas Concluídas” com comportamento invertido:**
   - **Causa:** Lógica `showCompletedTasks` estava invertida.
   - **Solução:** Corrigida a inversão nos textos e condições do botão.

5. **“Limpar Tarefas Concluídas” não pede confirmação:**
   - **Solução:** Adicionado `Swal.fire()` com confirmação antes de executar a ação.

6. **Botão “Limpar Tarefas Concluídas” remove tarefas não concluídas:**
   - **Causa:** Lógica do `todoService.clearCompletedTasks()` estava incorreta.
   - **Solução:** Corrigido método para filtrar e remover apenas tarefas com `completed === true`.

7. **Botão “Editar” não funcional:**
   - **Causa:** Faltava lógica para preencher o input com a tarefa em edição.
   - **Solução:** Implementado `startEdit(todo)` e atualização condicional no `addTodo()`.

8. **Botão “Editar” desalinhado:**
   - **Solução:** Ajustado CSS para alinhamento ao lado do botão “Remover”.

9. **Botão “Remover” sem cor vermelha:**
   - **Solução:** Adicionado estilo CSS `color: red` e `btn-danger` para destaque visual.

10. **Sem rolagem quando há muitas tarefas:**
    - **Solução:** Adicionado `overflow-y: auto` com altura fixa no container de tarefas.

11. **Salvar tarefa em branco ou com espaços:**
    - **Causa:** Falta de validação no campo.
    - **Solução:** Implementada verificação `if (title.trim())` antes de salvar.

---

### 5 Melhorias Implementadas

1. **Ordenar de A a Z:**
   - **Solução:** Criado botão “Ordenar de A a Z” que chama função `sortTodos()` ordenando `todos` com `localeCompare`.

2. **Salvar com tecla Enter:**
   - **Solução:** Adicionado `(keydown.enter)="addTask()"` no campo de input.

3. **Adicionar múltiplas tarefas com pipe (`|`):**
   - **Solução:** No método `addTodo()`, tarefas são separadas por `title.split('|')` e adicionadas individualmente.

4. **Filtro de palavras obscenas:**
   - **Biblioteca:** [`bad-words`](https://github.com/web-mech/badwords)
   - **Solução:** Usado `filter.isProfane(title)` para bloquear títulos ofensivos. Mensagem com `Swal.fire()`.

5. **Exportar tarefas para PDF:**
   - **Biblioteca:** [`jsPDF`](https://github.com/parallax/jsPDF)
   - **Solução:** Criado botão que gera e exporta as tarefas visíveis como PDF com `doc.text(...)`.

6. **Substituição de `alert()` e `confirm()` por SweetAlert:**
   - **Biblioteca:** [`SweetAlert2`](https://sweetalert2.github.io/)
   - **Solução:** Substituído `confirm()` e `alert()` por chamadas `Swal.fire()` em todas as interações.

6. Relatório de Débito Técnico
Falta de testes automatizados: Não foi possível adicionar testes unitários ou e2e por limite de tempo.

Responsividade mobile: A interface ainda não está 100% adaptada para telas pequenas.

7. Relatório de Melhorias Futuras
Adicionar autenticação com usuário/senha.

Permitir categorias/tags para cada tarefa.

Adicionar drag and drop para reordenar tarefas.

Suporte a data de vencimento e notificação por email.

Filtros por prioridade ou etiquetas.

8. Decisões e Considerações
Decidi priorizar usabilidade e clareza nas mensagens ao invés de complexidade técnica.

Utilizei bibliotecas amplamente utilizadas e com bom suporte (SweetAlert2, jsPDF, bad-words).

Evitei frameworks pesados de UI (como Material) para manter leveza no projeto. 

Gostaria de deixar claro também que acabei tendo problemas no meu computador pessoal e alguns commits foram perdidos, porém tudo foi feito de acordo com oque foi pedido, foi um pazer fazer essa prova e um grande obrigado pela oportunidade.





Solução: Ajuste de tipo com cast para HTMLInputElement.
