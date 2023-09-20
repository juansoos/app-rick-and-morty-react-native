import {StyleSheet} from 'react-native';
import {Colors, getTypography} from '../../common/theme';

export const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  footerText: {
    ...getTypography('body'),
    color: Colors.primary600,
  },
});
