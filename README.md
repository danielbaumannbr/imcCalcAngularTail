# 📋 Documentação do Projeto: Calculadora de IMC

Este documento descreve a configuração do arquivo `package.json` do projeto **calculadoraimc**, uma aplicação Angular moderna para cálculo de Índice de Massa Corporal.

---

## 🚀 Informações Gerais
- **Nome:** `calculadoraimc`
- **Versão:** `0.0.0` (Alpha)
- **Gerenciador de Pacotes:** npm v11.6.2
- **Framework Base:** Angular v21+

---

## 🛠️ Scripts Disponíveis

Os scripts facilitam o fluxo de desenvolvimento e deploy. Execute-os usando `npm run <nome-do-script>`.

| Script | Descrição |
| :--- | :--- |
| `start` | Inicia o servidor local de desenvolvimento (`ng serve`). |
| `build` | Compila a aplicação para produção com o `base-href` configurado para o GitHub Pages. |
| `deploy` | Comando mestre que compila (`build`) e publica (`gh-pages`) o projeto online. |
| `watch` | Compila o projeto e fica ouvindo alterações em tempo real. |
| `test` | Executa os testes unitários da aplicação. |
| `json-server`| Inicia uma API Fake baseada no arquivo `db.json` na porta 3000. |

---

## 📦 Dependências Principais (Produção)

Esses pacotes são carregados pelo navegador do usuário final:

- **Angular Core (@angular/...)**: Suíte completa para criação de componentes, rotas e formulários reativos.
- **RxJS**: Biblioteca para lidar com operações assíncronas e fluxos de dados.
- **tslib**: Biblioteca de suporte para o TypeScript durante a compilação.

---

## 🧪 Dependências de Desenvolvimento

Ferramentas utilizadas apenas durante a construção do código:

### Design e Estilização
- **Tailwind CSS (v4)**: Framework CSS utilitário para estilização rápida e moderna.
- **PostCSS**: Ferramenta para transformar o CSS com plugins.

### Qualidade e Testes
- **Vitest**: Framework de testes unitários extremamente rápido.
- **JSDOM**: Simula um ambiente de navegador para os testes.
- **Prettier**: Garante que o código siga um padrão visual limpo.

### Utilitários
- **Angular CLI**: Interface de linha de comando para gerenciar o projeto Angular.
- **Angular CLI GH-Pages**: Facilita o deploy direto para os servidores do GitHub.

---

## ⚙️ Requisitos de Ambiente
Para rodar este projeto, certifique-se de ter instalado:
1. **Node.js** (Versão compatível com npm 11+)
2. **Angular CLI** globalmente (`npm install -g @angular/cli`)

---
Aqui está a documentação técnica do componente formatada em **Markdown**, pronta para ser utilizada em um arquivo `README.md` ou documentação de projeto.

---

# 📄 Documentação: Componente Calculadora de IMC

Este documento descreve a estrutura, o estilo e as diretrizes do componente de cálculo de Índice de Massa Corporal (IMC) desenvolvido em **Angular** com **Tailwind CSS**.

## 1. Visão Geral

A interface foi projetada seguindo os princípios de *Mobile First* e *Clean Design*, garantindo que a ferramenta seja intuitiva e visualmente agradável em qualquer dispositivo.

---

## 2. Estrutura de Layout (Containers)

| Classe Tailwind | Função Técnica |
| --- | --- |
| `min-h-screen` | Garante que o fundo cubra 100% da altura da janela. |
| `bg-gray-100` | Define uma cor de fundo neutra para destacar o card principal. |
| `flex items-center justify-center` | Aplica Flexbox para centralizar o conteúdo vertical e horizontalmente. |
| `bg-white` | Fundo branco do card para leitura clara dos dados. |
| `rounded-xl shadow-lg` | Bordas arredondadas extras e sombra profunda para efeito de elevação. |

---

## 3. Lógica e Data Binding (Angular)

O componente utiliza diretivas essenciais do framework Angular para manipulação de dados:

* **`[(ngModel)]`**: Implementa o *Two-Way Data Binding*. As propriedades `peso` e `altura` no TypeScript são sincronizadas em tempo real com os campos de entrada.
* **`(click)="calcularIMC()"`**: Associa o evento de clique do botão à função lógica que processa o cálculo:

$$IMC = \frac{\text{peso}}{\text{altura}^2}$$


* **`*ngIf="resultado"`**: Diretiva estrutural que condiciona a renderização do bloco de resposta. O feedback visual só é montado no DOM após o cálculo ser realizado.

---

## 4. Elementos de Interface

### A. Campos de Entrada (Inputs)

Os inputs possuem estados de foco aprimorados para melhor acessibilidade:

* **`focus:ring-2 focus:ring-blue-500`**: Cria um anel visual azul ao selecionar o campo.
* **`transition`**: Garante que a mudança de estado (foco/saída) seja suave.

### B. Botão de Ação

* **`bg-blue-600 hover:bg-blue-700`**: Define a cor primária e a variação de tom quando o usuário passa o mouse (feedback visual).
* **`duration-200`**: Controla a velocidade da transição de cores.

### C. Bloco de Resultado

* **`bg-blue-50 border-l-4 border-blue-500`**: Estilização de "Alerta Informativo" (Info Box), utilizando uma borda lateral espessa para guiar o olhar do usuário.
* **Pipe `number:'1.1-2'**`: Formata a saída numérica para exibir no máximo duas casas decimais, essencial para a precisão do IMC.

---

## 5. Exemplo de Uso de Cores (Paleta)

* **Primária:** Blue-600 (`#2563eb`) - Utilizada em botões e destaques de resultado.
* **Fundo:** Gray-100 (`#f3f4f6`) - Utilizada para descanso visual.
* **Texto:** Gray-800 (`#1f2937`) - Utilizada para garantir alto contraste e legibilidade.

---

> **Nota:** Para que esta interface funcione corretamente, certifique-se de que o **Tailwind CSS** está configurado no arquivo `tailwind.config.js` do seu projeto Angular e o `@tailwind utilities;` adicionado ao seu `styles.css`.

---

Aqui está a documentação técnica do seu código em formato **Markdown** (`.md`). Este guia explica tanto as importações modernas do Angular quanto a lógica de negócio aplicada.

---

# 📘 Documentação do Componente: Calculadora de IMC

Este componente representa a unidade lógica principal da aplicação, utilizando as funcionalidades mais recentes do **Angular (Standalone Components e Signals)** para calcular o Índice de Massa Corporal.

## 1. Importações e Módulos

O código utiliza quatro importações fundamentais do `@angular`:

* **`Component`**: Decorador que define que a classe é um componente Angular, mapeando seu HTML e CSS.
* **`signal`**: Uma nova forma de gerenciar o estado no Angular. Proporciona uma reatividade mais granular e eficiente.
* **`RouterOutlet`**: Permite que o componente atue como um container para as rotas da aplicação.
* **`FormsModule`**: Essencial para capturar os dados dos inputs. Ele habilita a diretiva `[(ngModel)]` para o *Two-Way Data Binding*.
* **`CommonModule`**: Fornece diretivas básicas de controle, como `*ngIf` (exibição condicional) e `*ngFor` (listagem), além de pipes de formatação.

---

## 2. Configuração do Decorador `@Component`

```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

```

* **`standalone: true`**: (Implícito no Angular moderno) Indica que o componente não depende de um `NgModule`.
* **`imports`**: Declara explicitamente quais ferramentas o componente usará em seu template HTML.

---

## 3. Atributos e Estado (Signals)

### O uso de `signal`

```typescript
protected readonly title = signal('calculadoraimc');

```

O `title` é definido como um **Signal**. Para ler seu valor no HTML, seria necessário chamá-lo como uma função: `{{ title() }}`. Isso permite que o Angular saiba exatamente quando e onde o valor mudou, otimizando a renderização.

### Propriedades de Dados

* **`peso` / `altura**`: Armazenam os valores numéricos inseridos pelo usuário.
* **`resultado`**: Armazena o valor calculado do IMC.
* **`classificacao`**: Uma string que descreve a categoria do peso baseada no resultado.

---

## 4. Lógica de Cálculo (`calcularIMC`)

A função segue a fórmula matemática padrão:


$$IMC = \frac{\text{peso}}{\text{altura}^2}$$

### Regras de Classificação

O método utiliza uma estrutura condicional (`if/else if`) baseada na tabela da Organização Mundial da Saúde (OMS):

| IMC | Classificação |
| --- | --- |
| Menor que 18.5 | Abaixo do peso |
| 18.5 a 24.9 | Peso normal |
| 25.0 a 29.9 | Sobrepeso |
| 30.0 a 34.9 | Obesidade grau 1 |
| 35.0 a 39.9 | Obesidade grau 2 |
| Maior que 40 | Obesidade grau 3 |

**Validação:** A função só executa o cálculo se a altura for maior que zero, evitando o erro matemático de divisão por zero.

---

## 5. Como usar no HTML

Para conectar este código ao seu template `app.html`, você deve usar:

1. **Inputs com Binding:**
`<input [(ngModel)]="peso">`
2. **Evento no Botão:**
`<button (click)="calcularIMC()">Calcular</button>`
3. **Exibição Condicional:**
`<div *ngIf="resultado > 0"> Seu IMC é: {{ resultado }} </div>`

---

