import { config } from '@keystone-6/core'

import { withAuth, session } from './keystone/auth'
import { extendGraphqlSchema } from './keystone/graphql'
import { server } from './keystone/server'
import { User } from './models'

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: `file:${process.cwd()}/keystone.db`,
      // WARNING: this is only needed for our monorepo examples, dont do this
      prismaClientPath: 'node_modules/.prisma/client',
    },
    lists: { User },
    session,
    server,
    extendGraphqlSchema,
  }),
)
