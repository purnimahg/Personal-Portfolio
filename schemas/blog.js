export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'metadesc',
        type: 'string',
        title: 'Meta description'
        
      },
      {
        name: 'author',
        type: 'object',
        fields: [
          {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
          }
        ]
      },
      {
        title: 'Blog Image',
        name: 'blogimage',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      },
      { /*From documentation example of datetime*/
        title: 'Created On',
        name: 'createdOt',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15, /* you can change any feature   */
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block' //Block is a schema type that helps create a block out of the flow of webpage
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      },
      {
        title: 'In-Content URL',
        name: 'incontentUrl',
        type: 'url'
      },
      {
        title: 'Contact',
        name: 'contact',
        type: 'string',
        options: {
            title: 'Email',
            name: 'enter email id',
            type: 'text'
          }
      },
      {
        title: 'Title Slug',
        name: 'titleslug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }
    ]
  }