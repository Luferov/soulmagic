import type { Lists } from '.keystone/types'
import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, password, timestamp } from '@keystone-6/core/fields'

export const User: Lists.User = list({
  access: allowAll,
  fields: {
    email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    name: text({ validation: { isRequired: true } }),
    password: password(),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
})
