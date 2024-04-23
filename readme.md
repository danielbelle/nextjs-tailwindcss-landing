# Website Responsivo focado em UI/UX com Next.js, Tailwind CSS e TypeScript

O objetivo deste projeto é converter um modelo figma com foco UI/UX em um website totalmente responsivo para treinar Next.js, Tailwind CSS e principalmente aperfeiçoar os conhecimentos em TypeScript.

O projeto foi baseado no desenvolvimento do Youtuber [Jan Marshal](https://www.youtube.com/@janmarshalcoding), onde o modelo figma está anexado neste [link](https://www.figma.com/file/9Wpvgz4EqQRRVCYi0cMJ74/Untitled?type=design&node-id=0-1&mode=design&t=LERnY7oEDJTC3S54-0), bem como no [vídeo](https://www.youtube.com/watch?v=pQ7tm_7S_Us) postado pelo mesmo.

<img src="https://github.com/danielbelle/nextjs-tailwindcss-landing/blob/main/public/assets/github-photo.png" alt="Projeto" />


### Tecnologias Utilizadas

Neste projeto utilizei Next.js, React, Tailwind CSS, TypeScript, Radix-UI React Accordion e Figma.

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Figma](https://www.figma.com/)
* [Radix-UI React Accordion](https://www.radix-ui.com/primitives/docs/components/accordion)
* [React Icons](https://react-icons.github.io/react-icons/)

## Dependências e Versões Necessárias

* Next.js - Versão: 14.1.4
* React - Versão: 18+
* Tailwind CSS - Versão: 3.3.0
* TypeScript - Versão: 5+
* Radix-UI React Accordion - Versão: 1.1.2+
* React Icons - Versão: 5.0.1+

## Como rodar o projeto ✅ 

Primeiramente baixe o repositório deste GitHub e abra seu editor de código na pasta raiz.

Assim, no terminal rode o comando:

```
npm install
```

Depois, rode o seguinte comando:

```
npm run dev
```

Dessa forma, irá aparecer o link para o localhost:

```
http://localhost:3000
```

<img src="https://github.com/danielbelle/nextjs-tailwindcss-landing/blob/main/public/assets/github-install.png" alt="Projeto" />


Você também pode fazer deploy gratuito do projeto no site [Vercel](https://vercel.com/) seguindo este [tutorial](https://www.youtube.com/watch?v=e_92Fz99q18).


## 🧠 Habilidades, conhecimentos e experiências retidas

### Mobile First
O modo que o Jan resolvia o problema proposto foi muito interessante, já ouvi muito falar em mobile first, mas uma prática que ele me induziu foi a resolução primeiramente em mobile e posteriormente ajustar para dispositivos de maiores dimensões. Além de que utilizando o Tailwind CSS, pensar no mobile first aumenta consideravelmente a produtividade.

### Utilização do Next.js e TypeScript
Achei muito interessante o uso do Next.js principalmente por conta que fornece uma configuração inicial pronta para uso que abrange muitos dos requisitos comuns do desenvolvimento web moderno e o suporte nativo ao TypeScript, o que pode facilitar a adoção dessa linguagem de programação.

### Utilização da biblioteca Radix-UI React Accordion
Ficou muito legal a utilização desta biblioteca no elemento faq, pois ela apresenta diversos textos minimizados onde o desenvolvedor pode escolher se apresenta apenas um ou mais e assim possibilitando que o elemento não precise de uma página nova e específica, ou seja, ficando apenas single page application.


## ⚠️ Problemas enfrentados

Um problema muito bom que enfrentei foi a utilização do mobile first, só que isso foi um game change, porque uma vez que o mobile/responsivo está pronto, fica muito fácil para adaptar a página para dispositivos maiores.


### Links de navegação na página:
Tive dificuldade com a utilização da biblioteca React-Scroll na criação de links para navegação dentro da própria página. 
* Como solucionar: Melhor solução foi o uso da biblioteca interna do next/links.


## ⏭️ Próximos passos:

### Adicionar opção para o usuário criar conta e fazer login. 

### Adicionar página de compras e sacola para acompanhar itens de interesse.
