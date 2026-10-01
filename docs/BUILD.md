# Documentação da construção

## Projeto

- Nome: readme-editor
- Versão: 0.1.0
- Node.js: >=22 <23
- Gerenciador: npm

## Processo de construção

O GitHub Actions executa automaticamente:

1. Obtém o código do repositório com Git.
2. Configura o Node.js.
3. Usa o cache das dependências do npm.
4. Instala as dependências com `npm ci`.
5. Executa os testes automatizados.
6. Gera a aplicação de produção com `npm run build`.
7. Publica os resultados como artefatos da execução.

## Artefatos

- `build/`: versão de produção da aplicação.
- `coverage/`: relatório de cobertura dos testes.
- `docs/BUILD.md`: documentação gerada durante a construção.
