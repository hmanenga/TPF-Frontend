import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LightThemeColors} from '../../config/colors';
import {STANDARD_FLEX} from '../../config/constants';

export function Load({size='small'}:{size:string}) {
  return (
    <ActivityIndicator
      color={LightThemeColors.primary}
      animating={true}
      style={{
        flex: STANDARD_FLEX,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}
