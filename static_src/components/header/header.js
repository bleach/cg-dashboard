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
    <header className="header header--full-width">
          <div className="header__container">
            <div className="header__brand">
                <a href="https://www.cloud.service.gov.uk">
                  <span className="govuk-logo">
                    <img className="govuk-logo__printable-crown" src="https://www.cloud.service.gov.uk/images/gov.uk_logotype_crown_invert_trans.png" height="32" width="36">
                    GOV.UK
                  </span>
                <span className="header__title">
                  Platform as a Service
                    <span className="phase-banner">Beta</span>
                </span>
                </a>
            </div>

              <div data-module="navigation">
                <button type="button" className="header__navigation-toggle js-nav-toggle" aria-controls="navigation" aria-label="Show or hide top level navigation" aria-expanded="true">Menu</button>

                <nav id="navigation" className="header__navigation js-nav" aria-label="Top Level Navigation" aria-hidden="false">
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
                      <li className="active">
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
