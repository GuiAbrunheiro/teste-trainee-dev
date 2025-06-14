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
## 3. Correção dos Erros Iniciais (npm start)
Erros encontrados ao rodar npm start:

Erro de template: uso incorreto de (input)="onInputChange(($event.target as HTMLInputElement).value)" no HTML.

Solução: Corrigido para (input)="onInputChange(($event.target as HTMLInputElement).value)" e garantido o uso de ngModel com two-way binding adequado.

TS2339: value não existia em EventTarget.

Solução: Ajuste de tipo com cast para HTMLInputElement.
