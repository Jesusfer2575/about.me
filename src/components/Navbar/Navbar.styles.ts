import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: theme.palette.secondary.dark,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: 11,
      },
    },
    icon: {
      '& > svg': {
        margin: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
          marginRight: theme.spacing(0),
        },
      },
    },
    iconButton: {
      margin: '0',
    },
  })
);
