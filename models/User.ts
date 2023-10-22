import type { Lists } from '.keystone/types'
import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, password, timestamp, checkbox, image } from '@keystone-6/core/fields'

export const User: Lists.User = list({
  access: allowAll,
  fields: {
    email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    username: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    password: password(),
    avatar: image({ storage: 's3Images' }),
    lastName: text({ validation: { isRequired: true } }),
    firstName: text({ validation: { isRequired: true } }),
    sirName: text({ validation: { isRequired: true } }),
    isAdmin: checkbox({
      defaultValue: false,
    }),
    isActive: checkbox({
      defaultValue: false,
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
})
