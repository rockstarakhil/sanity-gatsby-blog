export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8818e5ab244dcf36bf3a5e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1mdx74pc',
                  apiId: '5534e53c-a469-4496-bba7-f52a3e42a0d2'
                },
                {
                  buildHookId: '5f8818e55f820be59d75f188',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wig3sbnb',
                  apiId: 'e28b5d7b-95e5-4d78-b6d3-a944638e4a8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rockstarakhil/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wig3sbnb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
