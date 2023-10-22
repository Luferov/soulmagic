import { TypeInfo } from '.keystone/types'
import './keystone/bootstrap'
import { config } from '@keystone-6/core'
import { DatabaseProvider, KeystoneConfig } from '@keystone-6/core/types'

import { withAuth, session } from './keystone/auth'
import { extendGraphqlSchema } from './keystone/graphql'
import { server } from './keystone/server'
import { storage } from './keystone/storage'
import { User } from './models'

export default withAuth(
  config({
    db: {
      provider: process.env.DB_PROVIDER as DatabaseProvider,
      url: process.env.DATABASE_URL as string,
      shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL as string,
      prismaClientPath: 'node_modules/.prisma/client',
      enableLogging: true,
      extendPrismaSchema: (schema: string) => schema,
    },
    lists: { User },
    session,
    server,
    storage,
    extendGraphqlSchema,
  }),
) as KeystoneConfig<TypeInfo>
