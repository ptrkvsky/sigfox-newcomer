// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newcomerTemplate = require.resolve('./src/templates/Newcomer.jsx')

  const result = await wrapper(
    graphql(`
      {
        prismic {
          allNewcos {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const newcomersList = result.data.prismic.allNewcos.edges

  // Create a page for every new comer
  newcomersList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/newcomer/${edge.node._meta.uid}`,
      component: newcomerTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node._meta.uid,
      },
    })
  })
}
