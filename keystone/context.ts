import * as PrismaModule from '.prisma/client'
import { getContext } from '@keystone-6/core/context'

import config from '@/keystone'

export const context = getContext(config, PrismaModule)
