import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      margin: theme.spacing(3, 2),
    },
    gridMinHeight: {
      minHeight: '50vh',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(27),
      height: theme.spacing(27),
    },
    section1: {
      margin: theme.spacing(3, 2),
    },
    section2: {
      margin: theme.spacing(2),
    },
    section3: {
      margin: theme.spacing(2),
      marginLeft: 500,
      marginRight: 500,
    },
  })
);

export const DividerHr = styled.hr`
  width: 50%;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`;
