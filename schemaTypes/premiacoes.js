import {defineField, defineType} from 'sanity'

export const premiacoes = defineType({
    name: 'premiacoes',
    title: 'Premiações',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        type: 'string',
        }),
        defineField({
        name: 'image',
        type: 'image',
        }),
    ],
});

export default premiacoes;