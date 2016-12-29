
import React from 'react';

import style from 'cloudgov-style/css/cloudgov-style.css';
import createStyler from '../util/create_styler';

import AppQuicklook from './app_quicklook.jsx';
import EntityIcon from './entity_icon.jsx';
import Loading from './loading.jsx';
import PanelRow from './panel_row.jsx';

const propTypes = {
  space: React.PropTypes.object.isRequired,
  orgGuid: React.PropTypes.string.isRequired,
  loading: React.PropTypes.bool,
  showAppDetail: React.PropTypes.bool
};

const defaultProps = {
  loading: false,
  showAppDetail: false
};

export default class SpaceQuicklook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styler = createStyler(style);
  }

  spaceHref() {
    const props = this.props;
    return `/#/org/${props.orgGuid}/spaces/${props.space.guid}`;
  }

  render() {
    const space = this.props.space;
    let loading = <Loading text="Loading spaces" loadingDelayMS={ 1 } />;
    let content = <div>{ loading }</div>;

    if (!this.props.loading) {
      content = (
        <PanelRow>
          <h3>
            <EntityIcon entity="space" iconSize="medium" />
            <a href={ this.spaceHref() }>{ space.name }</a>
          </h3>
          { space.apps && space.apps.map((app) =>
             <AppQuicklook
               key={ app.guid }
               app={ app }
               orgGuid={ this.props.orgGuid }
               spaceGuid={ space.guid }
               spaceName={ space.name }
               extraInfo={ this.props.showAppDetail ?
                 ['state', 'memory', 'diskQuota'] : ['state'] }
             />
          )}
        </PanelRow>
      );
    }

    return content;
  }
}

SpaceQuicklook.propTypes = propTypes;
SpaceQuicklook.defaultProps = defaultProps;