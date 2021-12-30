import React, { FC } from 'react';
import { Checkbox, createTheme, ThemeProvider } from '@deity/falcon-ui';
import CheckIcon from '@site/static/icons/check.svg';
import classNames from 'classnames';
import styles from './styles.module.scss';

type CheckboxType = React.ComponentProps<typeof Checkbox> & {
  label: string;
  labelVariant?: 'default' | 'small';
};

const theme = createTheme({
  colors: {
    primary: '#6057d3',
    primaryLight: '#6057d3',
    primaryDark: '#6057d3'
  },
  components: {
    checkbox: {
      css: {
        width: 20,
        height: 20,
        ':focus-within': {
          outline: 0
        },
        '& input:checked + .-inner-checkbox-frame': {
          borderColor: '#7972DA'
        },
        '& .-inner-checkbox-frame': {
          borderColor: '#383838',
          borderWidth: 1,
          borderRadius: 4
        }
      }
    }
  }
});

const CheckboxComponent: FC<CheckboxType> = ({
  icon = <CheckIcon />,
  invalid = false,
  label,
  labelVariant = 'default',
  ...props
}) => {
  const id = `checkbox-${label.replace(/\s/g, '-')}`;

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.checkbox}>
        <Checkbox id={id} icon={icon} invalid={invalid} borderRadius="medium" {...props} />
        <label htmlFor={id} className={classNames(styles.label, styles[labelVariant])}>
          {label}
        </label>
      </div>
    </ThemeProvider>
  );
};

export default CheckboxComponent;
