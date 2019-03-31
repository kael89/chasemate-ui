import { FormControlLabel, Switch } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const ThemeSwitch = ({ onChange }) => <FormControlLabel onChange={onChange} control={<Switch />} label="Dark Theme" />;

ThemeSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ThemeSwitch;
