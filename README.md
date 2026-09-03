# Teste de Caixa Branca

Repositório desenvolvido para a realização de uma atividade prática da disciplina de Engenharia de Software III.

O trabalho foi desenvolvido em dupla por **Mylena Duarte** e **Kamila Rocha**.

## Sobre o projeto

O projeto utiliza a função `validateMedicationInput()`, responsável por validar os dados de entrada relacionados ao cadastro de uma medicação.

A atividade tem como objetivo analisar o fluxo de execução da função utilizando a técnica de teste de caixa branca.

## Análises realizadas

- Grafo de Fluxo de Controle (GFC);
- Complexidade ciclomática;
- Identificação de caminhos independentes;
- Elaboração de casos de teste;
- Análise da cobertura dos testes.

## Tecnologias

- TypeScript
- Vitest
- ESLint

## Execução dos testes

Para executar os testes:

```bash
npx vitest run
```

Para executar os testes e gerar o relatório de cobertura:
```bash
npx vitest run --coverage
```

Para calcular a complexidade ciclomática da função utilizando o ESLint:
```bash
npx eslint validateMedicationInput.ts