import { TypeInfo } from '.keystone/types'
import { config } from '@keystone-6/core'
import { KeystoneConfig } from '@keystone-6/core/types'

import { withAuth, session } from './keystone/auth'
import { extendGraphqlSchema } from './keystone/graphql'
import { server } from './keystone/server'
import { User } from './models'

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: `file:${process.cwd()}/keystone.db`,
      prismaClientPath: 'node_modules/.prisma/client',
    },
    lists: { User },
    session,
    server,
    extendGraphqlSchema,
  }),
) as KeystoneConfig<TypeInfo>
