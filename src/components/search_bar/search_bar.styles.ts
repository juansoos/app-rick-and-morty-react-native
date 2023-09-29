import {StyleSheet} from 'react-native';
import {Colors, getTypography} from '../../common/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Colors.primary50,
    borderRadius: 15,
    alignItems: 'center',
    alignContent: 'space-between',
  },
  input: {
    ...getTypography('caption'),
    color: Colors.primary800,
    fontSize: 20,
    marginLeft: 10,
    width: '85%',
  },
  iconSearch: {marginLeft: 1, color: Colors.primary800},
  iconClose: {color: Colors.primary800},
});
