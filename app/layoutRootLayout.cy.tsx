import React from 'react'

import RootLayout from './layout'

describe('<RootLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // eslint-disable-next-line react/no-children-prop
    cy.mount(<RootLayout children={<div></div>} />)
  })
})
