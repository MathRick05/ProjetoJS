import {defineField, defineType} from 'sanity'

export const history = defineType({
  name: 'history',
  title: 'História',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      type: 'text',
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    }),
  ],
});

export default history;