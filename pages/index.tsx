import Head from 'next/head'

import { Meta, AppContainer, LoginView } from 'components'

export default function Login() {
  return (
    <>
      <Head>
        <title></title>
        <Meta />
      </Head>
      <AppContainer
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          padding: '56px 24px 16px 24px'
        }}
      >
        <LoginView />
      </AppContainer>
    </>
  )
}
