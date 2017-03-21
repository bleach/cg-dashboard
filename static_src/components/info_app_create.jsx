
import React from 'react';

import style from 'cloudgov-style/css/cloudgov-style.css';
import { config } from 'skin';

import createStyler from '../util/create_styler';

const propTypes = {
  org: React.PropTypes.object,
  space: React.PropTypes.object,
  brief: React.PropTypes.bool
};

const defaultProps = {
  brief: false
};


export default class InfoAppCreate extends React.Component {
  constructor(props) {
    super(props);
    this.styler = createStyler(style);
  }

  render() {
    const org = this.props.org || {};
    const space = this.props.space || {};
    let content;

    if (this.props.brief) {
      const cliLink = config.docs.cli ?
        <a href={ config.docs.cli }>command line interface (CLI)</a> :
        <span>Command line interface (CLI)</span>;
      const deployingApps = config.docs.deploying_apps &&
        <a href={ config.docs.deploying_apps}>Read more about adding apps</a>;

      content = (
      <div>
        <p>
          Add a new app to this space in the { cliLink }
        </p>
        <pre>
          <code>$ cf target -o { org.name || '<org>' } -s { space.name || '<space>' }</code><br />
          <code>$ cf push my-app</code>
        </pre>
        { deployingApps }
      </div>
      );
    } else {
      content = (
      <div>
        <p>
          Learn how to <a href={ config.docs.deploying_apps }>deploy a new app</a>.
        </p>

        <h5 className={ this.styler('info-header') }>
          Set up the Cloud Foundry CLI
        </h5>
        <p>
          Download and install the <a href={ config.docs.cli }>Cloud
          Foundry command line interface</a>.
        </p>
        <pre>
          $ cf --version
        </pre>
        <p>Make sure to login if you haven't already.</p>
        <pre>
          <code>$ cf login -a { config.platform.api_host } --sso</code>
        </pre>

        <h5 className={ this.styler('info-header') }>
          Push your app
        </h5>
        <p>
          From your application directory:
        </p>
        <pre>
          <code>$ cf target -o { org.name || '<org>' } -s { space.name || '<space>' }</code><br />
          <code>$ cf push my-app</code>
        </pre>
      </div>
      );
    }

    return (
      <div className={ this.styler('info', 'info-app_create') }>
        { content }
      </div>
    );
  }
}

InfoAppCreate.propTypes = propTypes;
InfoAppCreate.defaultProps = defaultProps;
