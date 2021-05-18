import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
//Iconos
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PeopleAltnIcon from '@material-ui/icons/PeopleAlt';
import BusinessCeterIcon from '@material-ui/icons/BusinessCenter';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import CodeIcon from '@material-ui/icons/Code';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';

import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './style.css';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 210,
        //backgroundColor: '#78909c',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        //backgroundColor: 'grey',
    },
    drawerPaper: {
        width: drawerWidth,
        //backgroundColor: 'grey',

    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: '1px',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        marginLeft: '1px',
    },
    list: {
        height: 350,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        align: 'center',
    },
    color: {
        color: 'Gray',
        textDecoration: 'none',
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const [selectedIndex, setSelectedIndex] = React.useState(1);

   const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
   };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Aplication
                   </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <List component="nav">
                    <ListItem>
                        <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" className={classes.large} />
                    </ListItem>
                </List>
                <div className="bd-callout bd-callout-info">
                    
                </div>

                <Divider />
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Navegación
                       </ListSubheader>
                    }
                    className={classes.root}
                >
                    
                        <ListItem button 
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon >
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <RouterLink to="/" className={classes.color}>
                            <ListItemText primary="Home"></ListItemText>
                            </RouterLink>
                        </ListItem>
                    

                    <RouterLink to="/users" className={classes.color}>
                        <ListItem button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon>
                                <PeopleAltnIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Usuarios" > </ListItemText>
                        </ListItem>
                    </RouterLink>

                    <RouterLink to="/docs" className={classes.color}>
                        <ListItem button onClick={handleClick}
                        
                        >
                            <ListItemIcon>
                                <FolderOpenIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Documentos" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </RouterLink>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <RouterLink to="" className={classes.color}>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}
                                selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <ListItemIcon>
                                        <DescriptionIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="File" />
                                </ListItem>
                            </List>
                        </RouterLink>
                    </Collapse>

                    <RouterLink to="/cliens" className={classes.color}>
                        <ListItem button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemIcon>
                                <BusinessCeterIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Clientes" > </ListItemText>
                        </ListItem>
                    </RouterLink>

                </List>
                <Divider />
                <List className={classes.list} />
                <Divider />

                <List >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CodeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Sidebar-footer" secondary="made with Mtl. UI" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocationCityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="City" secondary="Mexico city" />
                    </ListItem>
                </List>
            </Drawer>
            
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div class="tab-content"/>
            </main>
        </div>

    );
}