# Curso Alura React: desenvolvendo uma biblioteca de componentes

## Aula 01 - Preparando o terreno

### Aula 01 - Apresentação - Vídeo 01

Nesta aula introdutória do curso sobre como criar uma biblioteca de componentes utilizando React, o instrutor faz um disclaimer para aqueles que ainda não conhecem o React ou não sabem como utilizar TypeScript no React. Ele recomenda que os alunos façam uma formação na Alura sobre React com TypeScript para terem uma base sólida antes de prosseguir com o curso. O foco do curso será criar uma biblioteca de componentes customizada para um projeto chamado AluraBooks, que é um e-commerce de livros. O instrutor explica que o projeto já possui um layout específico e uma identidade visual pronta, então a biblioteca de componentes será desenvolvida do zero para prover os componentes visuais necessários. Serão desenvolvidos alguns componentes juntos durante o curso, enquanto outros serão propostos como desafios para os alunos. O instrutor menciona que será utilizado o Figma, uma ferramenta de design, para disponibilizar o projeto e os componentes para os alunos, além do Storybook, uma ferramenta para criar e documentar a coleção de componentes.

### Aula 01 - O primeiro componente - Vídeo 02

Nesta aula, o instrutor começa explicando como configurar o ambiente de desenvolvimento para o projeto "Alura Books" utilizando o Storybook. Ele cria um componente simples chamado "AbBotao" que retorna um botão HTML com o texto "Clique aqui". Em seguida, ele cria uma história para o componente no Storybook, que será utilizada para documentá-lo. O instrutor mostra como o Storybook exibe a documentação e permite visualizar o código do componente. No próximo vídeo, será abordado como adicionar estilos aos componentes.

### Aula 01 - Estilos com Styled - Vídeo 03

Nesta aula, o instrutor ensina como adicionar estilo a um botão utilizando a biblioteca Styled Components. Ele explica que é possível estilizar componentes utilizando CSS diretamente no código JavaScript. O instrutor mostra como instalar o Styled Components com o Yarn e como adicionar os tipos para projetos TypeScript. Em seguida, ele cria um botão estilizado, definindo propriedades como cor de fundo, padding, borda e cor da fonte. Também é mostrado como utilizar o recurso de hover para alterar o estilo do botão quando o mouse está sobre ele. O instrutor menciona que o Styled Components será utilizado ao longo do curso e sugere um curso na Alura para quem deseja se aprofundar na biblioteca. Por fim, ele menciona que o próximo passo será testar o componente localmente antes de publicá-lo.

### Aula 01 - Para saber mais: Styled Components

Durante o curso nós vamos utilizar a biblioteca [styled components](https://styled-components.com/docs). Como não é o foco do curso, nós não vamos falar sobre os conceitos e técnicas relacionadas a ela.

Porém, se você é tão curiosa ou curioso quanto eu, e quiser saber mais sobre isso, vou deixar aqui especialmente pra ti dois contúdos:

Esse [artigo do Dev Soutinho](alura.com.br/artigos/react-componentes-com-styled-components), se você quiser só dar uma olhada mais rápida e prática.

Esse [curso da Elaine Mattos](https://cursos.alura.com.br/course/react-styled-components), se você quiser mesmo dar um mergulho mais fundo e aprender várias coisas bacanas que conseguimos fazer com essa biblioteca.

### Aula 01 - Testando localmente - Vídeo 04

Nesta aula, o instrutor ensina como testar um componente localmente. Ele explica o processo passo a passo, desde parar o comando yarn storybook até executar o comando yarn start para iniciar o projeto. O instrutor mostra como verificar a versão do parcel no arquivo "package.json" e como instalar as dependências. Ele também destaca a importância de verificar se o componente está funcionando corretamente. No final, ele conclui que é possível testar localmente a biblioteca de componentes em um projeto React.

### Aula 01 - O que aprendemos nessa aula, você aprendeu como`:`

- Criar um projeto base com o TSDX, React e Storybook;
- Escrever uma story para apresentar o componente criado no Storybook;
- Construir a biblioteca localmente, para testar o código desenvolvido;
- Importar o componente criado no ambiente de teste local.

## Aula 02 - Do VSCode para o Mundo

### Aula 02 - Repositório no Github - Vídeo 01

Nesta aula, o instrutor ensina como criar um novo repositório no GitHub e versionar um projeto utilizando comandos do Git. Ele explica passo a passo como criar um repositório no GitHub, tanto pela interface web quanto localmente. O instrutor também mostra como adicionar arquivos ao repositório, fazer commits e fazer o push das alterações para o repositório remoto. Ele destaca a importância de versionar o projeto para acompanhar sua evolução e facilitar a colaboração com outros desenvolvedores.

### Aula 02 - Conectando-se ao NPM - Vídeo 02

Nesta aula, o instrutor aborda a necessidade de se conectar ao NPM para consumir pacotes e criar uma biblioteca de componentes. Ele menciona as ferramentas utilizadas, como TSDX, Storybook, Styled Components e React. É necessário criar uma conta gratuita no npmjs.com e fazer o login no terminal usando o comando npm login. O instrutor destaca a importância da combinação do GitHub e NPM para publicar o pacote. Os pré-requisitos de entrar no GitHub e criar uma conta no NPM já foram cumpridos. O próximo vídeo tratará do processo de publicação do pacote.

### Aula 02 - Repositório - Vídeo 03

Agora que já temos todos os pré-requisitos alinhados, o projeto está no GitHub, a conta do NPM está linkada e logada no meu terminal, podemos partir para a parte de publicar o pacote.

> npm publish --access=public

Vamos criar um projeto totalmente novo, e vamos instalar esse pacote e ver se conseguimos usar no nosso componente de botão. Vou voltar para a pasta raiz, vou deixar o nome do app que o terminal está sugerindo.

> npx create-react-app alurabooks-consumer --template typescript

E agora, vamos fazer a instalação do nosso pacote que é o “crdubdc-alurabooks” no nosso projeto. Vou no terminal, e vou pedir para fazer um:

> npm install crdubdc-alurabooks

Nesta aula, o instrutor discute o processo de publicação de um pacote no NPM e como utilizá-lo em um projeto React. Ele mostra o comando npm publish --access=public para publicar o pacote e explica que o acesso é público. Em seguida, ele cria um projeto React do zero e instala a biblioteca criada anteriormente. Ele destaca que qualquer pessoa que trabalhe com React pode instalar o design system do AluraBooks e utilizar os componentes localmente. O instrutor menciona que, por enquanto, só existe o componente do botão, mas que serão construídos outros componentes no decorrer do curso. Ele desafia os alunos a criarem o próximo componente, um componente de card, e menciona que há um gabarito disponível para auxiliar. Por fim, ele menciona que ainda há muito a ser feito, como conceituar a parte de versionamento e melhorar o processo de publicação de versões.

### Aula 02 - Para saber mais: atalhos do VSCode

Conheça alguns dos atalhos do Visual Studio Code.

Se liga [neste artigo](https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes) que fala justamente sobre isso!

### Aula 02 - O que aprendemos nessa aula`:`

- Subir um projeto para o GitHub;
- Conectar-se ao NPM;
- Configurar o package.json corretamente, para que o pacote seja publicado com sucesso.

## Aula 03 - Testando a Biblioteca

### Aula 03 - Evoluindo o botão - Vídeo 01

Nesta aula, o instrutor aborda a evolução do componente "AbBotao". Ele explica que o componente estava "hard coded" no código e não recebia nenhum argumento. Para resolver isso, o instrutor mostra como criar uma interface chamada "AbBotaoProps" que define as propriedades que o botão pode receber, como texto, tipo e função de clique. Em seguida, ele utiliza o Styled Components para estilizar o botão com base nas propriedades recebidas. Também é mostrado como implementar o efeito de hover no botão. Ao final, o instrutor mostra o resultado no Storybook, onde o botão agora recebe as propriedades definidas na interface e exibe corretamente o texto, tipo e função de clique. Essa evolução do componente é importante para torná-lo mais flexível e reutilizável em diferentes contextos.

### Aula 03 - Stories também evoluem - Vídeo 02

Nesta aula, o instrutor discute a evolução do componente "AbBotao" e a importância de mostrá-lo no Storybook. Ele mostra como criar histórias para o componente, alterar suas propriedades e fazer o bind delas no Storybook. O instrutor também mostra o resultado no navegador, onde é possível ver a documentação gerada pelo Storybook e testar as opções de botões. No próximo vídeo, será mostrado como fazer o upload do código para o GitHub e publicar a biblioteca no NPM.

### Aula 03 - Entendendo o versionamento - Vídeo 03

Para atualizar o package no NPM, primeiro mudamos a versão no package.json("version": "0.2.0") e depois executamos o comando.
> npm publish --access=public

Depois atualizamos o repositório no GitHub.

Nesta aula, o instrutor discute o processo de publicação de um pacote no NPM e no GitHub. Ele explica como abrir o terminal no VSCode, entra no diretório do projeto e utiliza o comando npm publish --access=public para publicar o pacote no NPM. Porém, ele recebe um erro 403, indicando que não pode publicar em cima de uma versão já existente. O instrutor explica o conceito de versionamento semântico e decide incrementar o segundo dígito da versão para 0.2.0. Ele atualiza o arquivo package.json com a nova versão e executa novamente o comando npm publish, desta vez com sucesso. Em seguida, ele mostra como fazer o push do código para o GitHub. Na próxima aula, será criado um novo componente.

### Aula 03 - Diferentes tipos de dependências

Dentro do package.json do nosso projeto, existem algumas listas de dependências. Entre elas nós temos a lista de devDependencies e peerDependencies.

As devDependencies são utilizadas para indicar pacotes necessários para executar seu projeto em um ambiente de desenvolvimento. Já as peerDependencies são dependências em pares (precisam estar declaradas na lista de dependencies do projeto que utilizará esse pacote).

Exatamente isso! As dependências de dev só existem em tempo de desenvolvimento e nos ajudam em diversas tarefas, como por exemplo: testar, compilar, depurar, etc. Já as peerDependencies existem justamente para evitar que uma mesma dependência seja instalada mais de uma vez. O nosso pacote, por exemplo, possui o React como peerDependencie.

### Aula 03 - Para saber mais: NPM (versionamento semântico)

Durante a aula nós aprendemos sobre o versionamento semântico:

Dado um número de versão MAJOR.MINOR.PATCH, incremente a:

- Versão Maior (MAJOR): quando fizer mudanças incompatíveis na API,
- Versão Menor (MINOR): quando adicionar funcionalidades mantendo compatibilidade, e
- Versão de Correção (PATCH): quando corrigir falhas mantendo compatibilidade.

Esse versionamento também é conhecido como [SEMVER](https://semver.org/lang/pt-BR/).

### Aula 03 - O que aprendemos essa aula`:`

- Evoluir um componente existente;
- Atualizar uma story para contemplar suas variantes;
- Criar um componente de input de texto;
- Atualizar a versão do pacote NPM manualmente.

## Aula 04 - Evoluindo a Biblioteca

### Aula 04 - Componentes mais complexos - Vídeo 01

Nesta aula, o instrutor introduziu um novo componente chamado "Formato de livro" que faz parte do contexto do "alurabooks". Esse componente tem a função de receber opções do usuário e permitir a seleção de uma delas. O código inicial do componente consiste em uma seção com um cabeçalho contendo a palavra "ebook", uma div com um texto em negrito representando o preço do livro e um rodapé com os formatos disponíveis (.pdf, .epub, .mob). O próximo passo é estilizar o componente para deixá-lo mais parecido com o design do Figma.

### Aula 04 - Adicionando estilo - Vídeo 02

Nesta aula, o instrutor ensina como adicionar estilo a uma estrutura base de um componente utilizando o Styled Components. Ele utiliza o VSCode para escrever o código e mostra como estilizar a seção, utilizando referências do Figma. Ele também utiliza o CSS flexbox para centralizar os elementos e trabalha no espaçamento entre eles. O instrutor altera a fonte, estiliza o header, strong e footer, e trata o caso de quando a opção está selecionada, aplicando estilos diferentes. Por fim, ele adiciona o cursor: pointer para indicar que a opção é clicável.

### Aula 04 - Definindo a interface - Vídeo 03

Nesta aula, o instrutor adiciona vida e comportamento para o AbGrupoOpcoes através da criação de interfaces e da implementação de um método para renderizar as opções. Ele também demonstra como utilizar o Storybook para testar e visualizar o componente em tempo real.

### Aula 04 - Controlando o estado - Vídeo 04

Nesta aula, o instrutor ensina como implementar a funcionalidade de seleção de opção em um componente React. Ele utiliza o hook useState para armazenar a opção selecionada em uma constante chamada "selecao". Em seguida, ele cria uma função chamada "aoSelecionar" que atualiza o valor da seleção quando uma opção é selecionada. O instrutor também explica como corrigir um problema onde ambas as opções eram selecionadas ao clicar em uma delas, alterando os ids das opções. Além disso, ele menciona duas melhorias que podem ser feitas no componente: permitir um valor padrão para a seleção e adicionar um evento onChange para notificar quando a opção selecionada for alterada. O instrutor finaliza mencionando que o processo de publicação do componente no NPM e no GitHub será abordado em aulas futuras.

### Aula 04 - Para saber mais: Storybook

O Storybook é uma ferramenta de código aberto que nos permite criar componentes de interface do usuário. Ele simplifica o desenvolvimento, o teste e a documentação desses componentes.

Se você quiser mergulhar ainda mais fundo nessa ferramenta, dá uma olhada [nesse curso](https://cursos.alura.com.br/course/nextjs-documentando-front-end-storybook) do Dev Soutinho que fala justamente sobre isso.

### Aula 04 - O que aprendemos nessa aula`:`

- Organizar a criação de novos componentes;
- Criar interfaces para as APIs dos componentes;
- Utilizar as exportações recomendadas pelo StoryBook para gerar documentação de forma automática.

## Aula 05 - Automatizando Tarefas

### Aula 05 - Configurando o AUTO - Vídeo 01

Nesta aula, o instrutor aborda a automatização do processo de publicação de pacotes no NPM utilizando o GitHub Actions. Ele introduz o pacote "Auto" e mostra como adicioná-lo ao projeto. Em seguida, cria um script de publicação e configura um arquivo YAML para definir as ações a serem executadas pelo GitHub. O instrutor destaca a importância de configurar as variáveis de ambiente, como o token do GitHub e do NPM. Ele também mostra como configurar o token do NPM no GitHub. Por fim, ele faz um commit e um push para o repositório e verifica se o pacote foi publicado corretamente no NPM.

### Aula 05 - Criando a Action do Github - Vídeo 02
