import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '50vh',
      [theme.breakpoints.up('lg')]: {
        paddingTop: 50,
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(27),
      height: theme.spacing(27),
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
    },
    section1: {
      margin: theme.spacing(3, 2),
      [theme.breakpoints.up('lg')]: {
        marginLeft: 300,
        marginRight: 300,
      },
    },
    section2: {
      margin: theme.spacing(3),
      [theme.breakpoints.up('lg')]: {
        marginLeft: 300,
        marginRight: 300,
      },
    },
    section3: {
      margin: theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        marginLeft: 300,
        marginRight: 300,
      },
    },
  })
);

export const DividerHr = styled.hr`
  width: 50%;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`;
