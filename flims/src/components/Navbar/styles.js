import { makeStyles } from "@mui/styles";
const drawerWidth = 240;
export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between', // Ensures even distribution
    marginLeft: '240px', // Adjust as needed

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      flexWrap: 'wrap', // Wrap items on small screens
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer:{
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink:0,
  },
  },
  drawerPaper:{
    width: drawerWidth,
  },
  linkButton:{
    '&:hover' : {
      color:'white !important',
      TextDecoration:'none',
    },
    },
}));