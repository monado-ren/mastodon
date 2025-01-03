import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { injectIntl, FormattedMessage } from 'react-intl';
import SettingToggle from '../../notifications/components/setting_toggle';

export default @injectIntl
class ColumnSettings extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    columnId: PropTypes.string,
  };

  render () {
    const { settings, onChange } = this.props;

    return (
      <div>
        <div className='column-settings__row'>
          <SettingToggle settings={settings} settingPath={['other', 'onlyMedia']} onChange={onChange} label={<FormattedMessage id='community.column_settings.media_only' defaultMessage='Media only' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle settings={settings} settingPath={['shows', 'bots']} onChange={onChange} label={<FormattedMessage id='community.column_settings.show_bot_statuses' defaultMessage='Show toots from bots' />} />
        </div>
      </div>
    );
  }

}
