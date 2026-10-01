const fs = require("fs");
const path = require("path");

const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8")
);

const outputDir = path.join(process.cwd(), "docs");
const outputFile = path.join(outputDir, "BUILD.md");

fs.mkdirSync(outputDir, { recursive: true });

const content = `# Documentação da construção

## Projeto

- Nome: ${packageJson.name}
- Versão: ${packageJson.version}
- Node.js: ${packageJson.engines?.node ?? "definido no workflow"}
- Gerenciador: npm

## Processo de construção

O GitHub Actions executa automaticamente:

1. Obtém o código do repositório com Git.
2. Configura o Node.js.
3. Usa o cache das dependências do npm.
4. Instala as dependências com \`npm ci\`.
5. Executa os testes automatizados.
6. Gera a aplicação de produção com \`npm run build\`.
7. Publica os resultados como artefatos da execução.

## Artefatos

- \`build/\`: versão de produção da aplicação.
- \`coverage/\`: relatório de cobertura dos testes.
- \`docs/BUILD.md\`: documentação gerada durante a construção.
`;

fs.writeFileSync(outputFile, content, "utf8");
console.log(`Documentation generated at ${outputFile}`);
