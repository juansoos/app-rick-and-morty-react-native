export enum Colors {
  background = '#FFFFFF',
  primary50 = '#FAFAFA',
  primary300 = '#E0E0E0',
  primary600 = '#757575',
  primary800 = '#424242',
}

export enum Fonts {
  light = 'Lato-Light',
  regular = 'Lato-Regular',
  bold = 'Lato-Bold',
}

export const getTypography = (
  value: 'body' | 'title' | 'headline' | 'display' | 'caption',
) => {
  const sizeValue: {[key: string]: {fontSize: number; lineHeight: number}} = {
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontSize: 18,
      lineHeight: 28,
    },
    headline: {
      fontSize: 24,
      lineHeight: 32,
    },
    display: {
      fontSize: 36,
      lineHeight: 44,
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
    },
  };
  return sizeValue[value];
};
