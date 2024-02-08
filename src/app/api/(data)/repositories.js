export const repositories = [
  {
    name: 'Portifolio_2023',
    date: '12/2023',
    languages_list: ['ReactJs', 'SASS', 'NextJs'],
    html_url: '',
    github: 'https://github.com/tiagofmuniz/portfolio_v2023.git',
    description: 'Primeiro portfolio criado independentemente no início de meus estudos de next js.',
    use_instructions: [
      'Faça o clone deste repositório: "https://github.com/tiagofmuniz/portfolio-.git',
      'Instale o nodeJS (https://nodejs.org/en/)',
      'Abra o projeto em seu editor de texto preferido',
      'Instale as dependências necessárias com o comando "npm i" ou "yarn install" caso o utilize.',
      'Execute o projeto com o comando "npm run dev" e abra-o em "https://localhost:3000"',
    ],
    main_learning: [
      'Configuração do Ambiente Next.js',
      'Roteamento Dinâmico',
      'Páginas Estáticas e Dinâmicas',
      'Componentes Reutilizáveis',
      'Estilização com CSS-in-JS',
      'Integração com API EmailJs',
      'Otimização de Imagens',
      'Controle de Estado',
      'SEO (Search Engine Optimization)',
      'Responsividade',
      'Deploy',
      'Controle de Versão',
      'Melhores Práticas de Desenvolvimento',
    ],
    images: ['1-Home.png', '2-Sobre.png', '3-Projetos.png', '4-Contato.png'],
  },
  {
    name: 'passGenerator',
    date: '10/01/2024',
    languages_list: ['html', 'sass', 'typescript'],
    html_url: '',
    github: '',
    description:
      'Este projeto consiste em um gerador de senhas simples que permite aos usuários escolher o tamanho da senha desejada. A senha gerada é exibida na tela e pode ser copiada para a área de transferência.',
    use_instructions: [
      'Com o git instalado, crie uma pasta para o projeto, abra seu editor de código preferido na pasta e no terminal digite os comandos:\n git init \n Em seguida: git clone https://github.com/tiagofmuniz/passGenerator',
      'Abra o arquivo index.html em seu navegador.',
      'Use o controle deslizante para escolher o tamanho da senha desejada.',
      "Clique no botão 'Gerar senha' para gerar uma senha.",
      'A senha gerada será exibida na tela.',
      'Clique na senha para copiá-la para a área de transferência.',
    ],
    main_learning: [
      'Manipulação do DOM (Document Object Model) em JavaScript.',
      'Utilização de eventos para interação do usuário.',
      'Geração aleatória de senhas com base em um conjunto de caracteres e método random()',
    ],
    images: [],
  },
  {
    name: 'SmileSync',
    date: '10/01/2024',
    languages_list: ['html', 'sass', 'JavaScript'],
    github: 'https://github.com/tiagofmuniz/smileSync.git',
    html_url: 'https://github.com/tiagofmuniz/smileSync.git',
    description:
      'SmileSync é um sistema simples de gerenciamento de registros de pacientes para consultas odontológicas. Desenvolvido em JavaScript puro e SCSS, utiliza Local Storage para persistência de dados, permitindo operações básicas de CRUD (Criar, Ler, Atualizar, Deletar registros).',
    use_instructions: [
      'Com o git instalado, crie uma pasta para o projeto, abra seu editor de código preferido na pasta e no terminal digite os comandos:\n git init \n Em seguida: git clone https://github.com/tiagofmuniz/smileSync.git',
      'Abra o arquivo index.html em seu navegador.',
      'Utilize o formulário inicial para registrar uma conta.',
      'Acesse o sistema através da conta criada.',
      'Após acessar, utilize o formulário para adicionar novos registros de pacientes, agendar consultas e incluir observações.',
      'Os registros são armazenados localmente no navegador usando Local Storage.',
      'Senhas criadas devem ter pelo menos 8 caracteres.',
    ],
    main_learning: [
      'Desenvolvimento de formulários em HTML.',
      'Estilização de elementos usando SCSS.',
      'Organização de código JavaScript em módulos.',
      'Persistência de dados utilizando o Local Storage.',
      'Implementação de funcionalidades CRUD para registros de pacientes.',
      'Agendamento de consultas com data e horário.',
      'Inclusão de observações para cada paciente.',
    ],
    functionalities: [
      'Adição, visualização, edição e exclusão de registros de pacientes.',
      'Agendamento de consultas com data e horário.',
      'Inclusão de observações para cada paciente.',
      'O sistema não requer servidor backend, pois utiliza Local Storage. Os dados são mantidos no navegador localmente.',
    ],
    images: ['criar_conta', 'logar', 'crud', 'recuperar_senha'],
  },
  {
    name: 'weatherFinder',
    date: '10/01/2024',
    languages_list: ['html', 'sass', 'JavaScript'],
    github: '',
    html_url: 'https://github.com/tiagofmuniz/weatherFinder.git',
    description:
      'Este é um aplicativo simples de consulta do tempo que fornece informações sobre a temperatura, condição do céu e umidade para uma cidade específica. Utiliza a API do OpenWeatherMap para obter dados em tempo real.',
    use_instructions: [
      'Faça o clone deste repositório: https://github.com/tiagofmuniz/weatherFinder.git',
      'Abra o arquivo index.html em seu navegador.',
      'Digite o nome da cidade na caixa de entrada.',
      'Clique no botão de busca ou pressione Enter para obter a previsão do tempo para a cidade inserida.',
      'Certifique-se de ter uma chave válida da API do OpenWeatherMap e substitua a variável chave no arquivo index.js pela sua chave.',
      'Para isto:',
      'Crie uma conta no site https://openweathermap.org/',
      'Após confirmar o cadastro via email de confirmação, clique no seu perfil.',
      'Na opção "My API Keys", obtenha a chave da api "default", já configurada por padrão.',
    ],
    main_learning: [
      'Consumo de API para obter dados em tempo real.',
      'Manipulação do DOM (Document Object Model) em JavaScript para atualizar dinamicamente o conteúdo da página.',
      'Utilização de estilos e fontes externas para melhorar a apresentação visual.',
    ],
    functionalities: ['Consultar condição do clima em cidades específicas.'],
    images: [],
  },
  {
    name: 'portfolio',
    date: '10/01/2024',
    languages_list: ['React', 'Next.js', 'EmailJs API', 'Typescript', 'sass'],
    github: '',
    html_url: 'https://github.com/tiagofmuniz/portfolio-.git',
    description: 'Primeiro projeto feito em Next.js, servindo como um portfólio que vincula outros projetos front-end criados.',
    use_instructions: [
      'Com o git instalado, crie uma pasta para o projeto, abra seu editor de código preferido na pasta e no terminal digite os comandos:\n git init \n Em seguida: git clone https://github.com/tiagofmuniz/portfolio-.git',
      'Instale o Node.js (https://nodejs.org/en/)',
      'Abra o projeto em seu editor de texto preferido.',
      'Instale as dependências necessárias com o comando "npm i" ou "yarn install" caso o utilize.',
      'Execute o projeto com o comando "npm run dev" e abra-o em "https://localhost:3000"',
    ],
    main_learning: [
      'Configuração do Ambiente Next.js',
      'Roteamento Dinâmico',
      'Páginas Estáticas e Dinâmicas',
      'Componentes Reutilizáveis',
      'Estilização com CSS-in-JS',
      'Integração com API EmailJs',
      'Otimização de Imagens',
      'Controle de Estado',
      'SEO (Search Engine Optimization)',
      'Responsividade',
      'Deploy',
      'Controle de Versão',
      'Melhores Práticas de Desenvolvimento',
    ],
    images: [],
  },
];
