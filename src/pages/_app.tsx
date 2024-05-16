import { Amplify } from "aws-amplify";
import config from '../aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import { AppProps } from "next/app";

Amplify.configure(config);

function MyApp({ Component, pageProps}:AppProps) {
  return(
    <Authenticator>
      <Component {...pageProps} />
    </Authenticator>
  );
}

export default MyApp;