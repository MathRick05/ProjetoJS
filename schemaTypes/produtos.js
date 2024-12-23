import {defineField, defineType} from 'sanity'

export const produtos = defineType({
    name: 'produtos',
    text: 'descrição',
    imagem: 'imagem',
    type: 'document',
    fields: [
        defineField({
            name: 'nome',
            type: 'string',
            title: 'Nome do Produto',
            description: 'Nome do Produto',
        }),
        defineField({
            name: 'descricao',
            type: 'text',
            title: 'Descrição do Produto',
            description: 'Descrição do Produto',
        }),
        defineField({
            name: 'imagem',
            type: 'image',
            title: 'Imagem do Produto',
            description: 'Imagem do Produto',
        }),
        defineField({
            name: 'leite',
            type: 'string',
            title: 'Leite',
        }),
        defineField({
            name: 'classificacao',
            type: 'string',
            title: 'Classificação',
        }),
        defineField({
            name: 'origem',
            type: 'string',
            title: 'Origem',
        }),
        defineField({
            name: 'produtor',
            type: 'string',
            title: 'Produtor',
        }),
        defineField({
            name: 'tecnologia',
            type: 'string',
            title: 'Tecnologia',
        }),

    ],

});

export default produtos;