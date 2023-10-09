import { createYoga } from 'graphql-yoga'

import { context } from '@/keystone/context'

const { handleRequest } = createYoga({
  graphqlEndpoint: '/api/graphql',
  schema: context.graphql.schema,
  fetchAPI: { Request, Response },
})

export { handleRequest as GET, handleRequest as POST }
