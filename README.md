# Du Cheff - Food & Drink :spaghetti:
[![Static Badge](https://img.shields.io/badge/Licence-MIT-orange)](https://github.com/HalisterFernando/app-de-receitas/blob/main/LICENSE)


Este projeto foi realizado no módulo de **Front-end** da [Trybe](https://www.betrybe.com/?utm_source=trybe.com.br), o código foi refatorado com a finalidade de estudar mais sobre custom hooks e gerenciamento de estado usando React, assim como também testes no front-end e desenvolvimento mobile first. 

Este projeto na época foi realizado em grupo utilizando metodologias ágeis durante o desenvolvimento, o grupo era composto por [Juliana Oliveira](https://github.com/jsfoliveira), [Alector Alexandre](https://github.com/AlectorAlexander), [Kelvin Lucas](https://github.com/klaolp), [Vinicius Alves](https://github.com/ViniiAlves)

Na época, contribui com a estilização do projeto, com os custom hooks para re-utilização da lógica em mais páginas e componentes, desenvolvi também as páginas de receitas em progresso e receitas favoritas.

## Descrição / Utilizando o app :mag_right:

Este é um app de receitas onde realizando o login com e-mail e senha, o usuário poderá escolher uma receita sendo de comida ou bebida.

Ao escolher uma receita e clicar em "Start Recipe", será redirecionado para uma página onde é possível acompanhar o progresso da receita marcando os ingredientes conforme forem sendo utilizados. 

Tendo marcado todos os ingredientes, poderá clicar em "Finish Recipe" e então a receita será listada na página de receitas feitas.

O usuário também pode favoritar uma receita e ter acesso a página de receitas favoritadas.

## Exemplo do layout mobile :iphone:

![Foods](https://github.com/HalisterFernando/app-de-receitas/blob/main/src/assets/foods-sm.png) ![Recipe](https://github.com/HalisterFernando/app-de-receitas/blob/main/src/assets/recipe-sm.png)

## Exemplo do layout web 🖥️

![Foods](https://github.com/HalisterFernando/app-de-receitas/blob/main/src/assets/foods-lg.png) ![Recipe](https://github.com/HalisterFernando/app-de-receitas/blob/main/src/assets/recipe-lg.png)

## Tecnologias utilizadas :computer:


### Front-end

* React (Vite)
* TailwindCSS
* Axios
* Date fns
* Vitest

## Próximos passos :hammer:

* Seguir implementando testes de integração com o Vitest e um teste e2e utilizando Cypress

## Instalando Dependências e Iniciando a Aplicação
### Você precisa ter node 18 para rodar direto na máquina :warning:

```bash
cd Classicar/npm install
npm start
```
## Rodando via Docker :whale:
### Subir o container :point_up:
```bash
npm run compose:up 
``` 
### Descendo o container :point_down:
```bash
npm run compose:up 
```






