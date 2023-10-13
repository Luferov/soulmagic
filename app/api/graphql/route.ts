import { createYoga } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse } from 'next'

import { context } from '@/keystone/context'

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  graphqlEndpoint: '/api/graphql',
  schema: context.graphql.schema,
  fetchAPI: { Request, Response },
  context: ({ req, res }) => context.withRequest(req, res),
  batching: {
    limit: 3,
  },
})

export { handleRequest as GET, handleRequest as POST }
