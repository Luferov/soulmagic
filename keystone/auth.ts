import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import { SessionStrategy, BaseKeystoneTypeInfo } from '@keystone-6/core/types'

const secret = process.env.SECRET_KEY || 'epopfewioowfi438h9r1h38jd8j3490jr934j'
const maxAge = 60 * 60 * 24 * 30

const session: SessionStrategy<BaseKeystoneTypeInfo['session'], BaseKeystoneTypeInfo> = statelessSessions({
  maxAge,
  secret,
})

export type Session = {
  data: {
    id: string
    username: string
    email: string
  }
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'username',
  secretField: 'password',
  sessionData: 'id username email',
})

export { withAuth, session }
