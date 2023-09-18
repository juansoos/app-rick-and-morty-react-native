import {StyleSheet} from 'react-native';
import {getTypography, Colors} from '../../../../common/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  name: {
    ...getTypography('headline'),
    fontWeight: '600',
    color: Colors.primary800,
  },
  episode: {
    ...getTypography('body'),
    color: Colors.primary600,
  },
  air_date: {
    ...getTypography('body'),
    color: Colors.primary600,
  },
});
