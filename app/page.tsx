import React from 'react'

import Button from '@mui/joy/Button'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemContent from '@mui/joy/ListItemContent'

import { context } from '@/keystone/context'

export default async function Home() {
  const users = await context.db.User.findMany()
  return (
    <main>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemContent>{`${user.id} - ${user.name} (${user.email})`}</ListItemContent>
          </ListItem>
        ))}
      </List>
      <Button>Hello world!</Button>
    </main>
  )
}
