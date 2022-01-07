export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d7a1c886f2ed5dabf68170',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ykry18zx',
                  apiId: 'bb46327f-764f-4097-97ff-61f716df80ed'
                },
                {
                  buildHookId: '61d7a1c8962b6362c59fc382',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-cqoxwg7s',
                  apiId: '11b29812-0a20-43b1-92fd-ad63bb15d33f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/w3bsite/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-cqoxwg7s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
