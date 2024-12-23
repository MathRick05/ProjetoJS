import {defineField, defineType} from 'sanity'

export const avaliacoes = defineType({
    name: 'avaliacoes',
    title: 'Avaliações',
    type: 'document',
    fields: [
        defineField({
            name: 'nome',
            type: 'string',
            title: 'Nome',
            description: 'Nome',
        }),
        defineField({
            name: 'comentario',
            type: 'text',
            title: 'Comentário',
            description: 'Comentário',
        }),
        defineField({
            name: 'nota',
            type: 'number',
            title: 'Nota',
            description: 'Nota',
        }),
    ],


});

export default avaliacoes;