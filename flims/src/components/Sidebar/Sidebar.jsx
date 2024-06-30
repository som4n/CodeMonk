import React , {useEffect} from 'react'
import { Divider,List, ListItem, ListItemText, ListSubheader,ListItemIcon,Box,CircularProgress } from '@mui/material';
import {Link} from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './style';
const Categories =[
  {label : 'Popular', value: 'popular' },
  {label: 'Top Rated', value:'toprated'},
  {label: 'Coming Up' , value: 'upcoming'},
];
const demoCategories = [
  {label : 'Comedy', value: 'comedy' },
  {label: 'Action', value:'action'},
  {label: 'Horror' , value: 'horror'},
  {label: 'Anime' , value: 'anime'},
];

const redLogo='https://fontmeme.com/permalink/240630/9216d64702eba222e934f99f98afb34f.png';
const blueLogo='https://fontmeme.com/permalink/240630/6cbb2cd5ed1df260cbbf7083342d9a6e.png';

const Sidebar = ({setmobileopen}) => {
    const classes = useStyles();
    const theme=useTheme();
  return (
    <>
        <Link to="/" className={classes.imageLink}>
          <img
            className={classes.image}
            src={theme.palette.mode ==='light' ? blueLogo: redLogo }
            alt='flims apps logo'
          />
          </Link>
          <Divider/>
          <List>
            <ListSubheader>Categories</ListSubheader>
            {Categories.map(({label, value}) =>(
              <Link key={value} className={classes.links} to="/">
                <ListItem onClick={() => {} } button >
                  {/*<ListItemIcon> 
                    <img src = {redLogo} className={classes.genreImage} height={30}/>
                  </ListItemIcon>*/}
                  <ListItemText primary= {label} />
                </ListItem>
              </Link>
            ))}    
          </List>
          <Divider />
          <List>
            <ListSubheader>Generes</ListSubheader>
            {demoCategories.map(({label, value}) =>(
              <Link key={value} className={classes.links} to="/">
                <ListItem onClick={() => {} } button >
                  {/*<ListItemIcon> 
                    <img src = {redLogo} className={classes.genreImage} height={30}/>
                  </ListItemIcon>*/}
                  <ListItemText primary= {label} />
                </ListItem>
              </Link>
            ))}
          </List>
    </>
  );
};

export default Sidebar;