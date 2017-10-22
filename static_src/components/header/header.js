import React from 'react';
import classNames from 'classnames';

import { header } from 'skin';
import LoginStore from '../../stores/login_store.js';
import HeaderLink from './header_link';
import Action from '../action.jsx';

const Header = () => {
  const loginLink = LoginStore.isLoggedIn() ? (
    <HeaderLink>
      <Action href="/logout" label="Log out" type="outline">
        Log out
      </Action>
    </HeaderLink>
  ) : (
    <HeaderLink>
      <Action href="/handshake" label="Login" type="outline">
        Login
      </Action>
    </HeaderLink>
  );

  return (
    <header class="header header--full-width">
          <div class="header__container">
            <div class="header__brand">
                <a href="https://www.cloud.service.gov.uk">
                  <span class="govuk-logo">
                    <img class="govuk-logo__printable-crown" src="/images/gov.uk_logotype_crown_invert_trans.png" height="32" width="36">
                    GOV.UK
                  </span>
                <span class="header__title">
                  Platform as a Service
                    <span class="phase-banner">Beta</span>
                </span>
                </a>
            </div>

              <div data-module="navigation">
                <button type="button" class="header__navigation-toggle js-nav-toggle" aria-controls="navigation" aria-label="Show or hide top level navigation" aria-expanded="true">Menu</button>

                <nav id="navigation" class="header__navigation js-nav" aria-label="Top Level Navigation" aria-hidden="false">
                  <ul>
                      <li>
                        <a href="https://www.cloud.service.gov.uk">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cloud.service.gov.uk/features.html">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cloud.service.gov.uk/roadmap.html">
                          Roadmap
                        </a>
                      </li>
                      <li>
                        <a href="https://docs.cloud.service.gov.uk/">
                          Documentation
                        </a>
                      </li>
                      <li class="active">
                        <a href="/">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cloud.service.gov.uk/support.html">
                          Support
                        </a>
                      </li>
                  </ul>
                </nav>
              </div>
          </div>
        </header>
  );
};

export default Header;
