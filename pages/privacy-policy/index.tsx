import Head from 'next/head'

import { AppContainer, Meta, PrivacyPolicyView } from "components" 

const PrivacyPolicy = () =>
{
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
          paddingBottom: '72px',
          paddingTop: '72px',
          minHeight: '100vh'
        }}
        ><PrivacyPolicyView /></AppContainer>
    </>
  ) 
 }

export default PrivacyPolicy
