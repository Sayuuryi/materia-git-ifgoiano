# GitHub Actions - Sistema de Construção

Projeto usado para demonstrar um sistema de construção automatizado com GitHub Actions.

## O que a pipeline faz

A cada `push` ou `pull request`, o GitHub Actions:

1. Baixa a versão do código que está no GitHub.
2. Configura o Node.js 22.
3. Usa cache das dependências do npm.
4. Instala as dependências com `npm ci`.
5. Executa os testes automaticamente.
6. Gera a versão de produção com `npm run build`.
7. Gera a documentação da construção.
8. Publica o build, a cobertura dos testes e a documentação como artefatos.
9. Mostra um resumo da construção na execução do GitHub Actions.

## Comandos principais

```bash
npm ci
npm run test:ci
npm run build
npm run generate-docs
```

## Estrutura relacionada à construção

```text
.github/workflows/workflow.yaml
scripts/generate-docs.js
docs/BUILD.md
build/
coverage/
```

O `build/` é gerado durante a construção e contém a versão de produção da aplicação.
