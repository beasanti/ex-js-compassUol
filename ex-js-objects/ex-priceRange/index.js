// criar 3 matrizes de objetos, cada objeto chamado de faixa de preço, pensar nas props que esse objetos deve ter

const faixasDePreco = [
    {
        label: '$',
        tooltip: 'Econômico',
        min: 0,
        max: 50,
        descricao: 'Produtos acessíveis, ideal para quem quer economizar.',
        exemplo: ['Chinelo', 'Copo plástico', 'Camiseta básica']
    },
    {
        label: '$$',
        tooltip: 'Intermediário',
        min: 51,
        max: 150,
        descricao: 'Bom custo-benefício com qualidade média.',
        exemplo: ['Tênis casual', 'Fone de ouvido', 'Mochila escolar']
    },
    {
        label: '$$$',
        tooltip: 'Premium',
        min: 151,
        max: null,
        descricao: 'Produtos de alta qualidade e maior durabilidade.',
        exemplo: ['Notebook', 'Tênis de marca', 'Relógio importado']
    }
];

let restaurantes = [
    { averagePerPerson: 5}
]