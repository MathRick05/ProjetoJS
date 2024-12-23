import {defineField, defineType} from 'sanity'

export const eventos = defineType({
    name: 'eventos',
    title: 'Eventos',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        type: 'string',
        }),
        defineField({
        name: 'description',
        type: 'text',
        }),
        defineField({
        name: 'date',
        type: 'datetime',
        }),
        defineField({
        name: 'location',
        type: 'string',
        }),
        defineField({
        name: 'image',
        type: 'image',
        }),
    ],
});

export default eventos;