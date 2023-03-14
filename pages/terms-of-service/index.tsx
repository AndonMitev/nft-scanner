import Head from 'next/head'

import { AppContainer, Meta, TermsOfServiceView } from "components" 

const TermsOfService = () =>
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
        ><TermsOfServiceView /></AppContainer>
    </>
  ) 
 }

export default TermsOfService
