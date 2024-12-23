import {defineField, defineType} from 'sanity'

export const parceiros = defineType({
    name: 'parceiros',
    title: 'Parceiros',
    type: 'document',
    fields: [
        defineField({
        name: 'nome',
        type: 'string',
        }),
        defineField({
        name: 'endereco',
        type: 'string',
        }),
        defineField({
        name: 'imagem',
        type: 'image',
        }),
    ],
});

export default parceiros;