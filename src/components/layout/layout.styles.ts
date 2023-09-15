import {StyleSheet} from 'react-native';
import {Colors, Fonts, getTypography} from '../../common/theme';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  title: {
    fontFamily: Fonts.bold,
    ...getTypography('display'),
    color: Colors.primary800,
  },
});
