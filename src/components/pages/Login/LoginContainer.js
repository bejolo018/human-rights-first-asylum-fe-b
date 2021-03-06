import React, { useEffect } from 'react';
import { StyledLogin } from './LoginContainer-styling';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import hrf_logo from '../../../assets/hrf_logo.jpg';
import hrf_centered_logo from '../../../assets/hrf_centered_logo.jpg';

import { config } from '../../../utils/oktaConfig';

const LoginContainer = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        //  there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: hrf_logo,
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'Login',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
  }, []);

  return (
    <StyledLogin>
      <div class="background-image" aria-label="cosmetic background image" />
      <div id="sign-in-widget" aria-label="login form" />
    </StyledLogin>
  );
};

export default LoginContainer;
