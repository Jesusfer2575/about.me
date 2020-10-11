import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    icon: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
    iconButton: {
      margin: '0',
    },
  })
);
