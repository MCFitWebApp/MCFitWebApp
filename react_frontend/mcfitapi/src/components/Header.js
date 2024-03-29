import { Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link } from "react-router-dom";
import img from "../static/img/Logo.png";
import SearchBar from './SearchBar';

export default function Header() {
  return (
      <AppBar style={{ background: 'black' }} position="static">
		<Toolbar>
			<Box sx={{ flexGrow: 1 }}><Link to ="/"><img align='left' style={{ width: 50, height: 50, marginTop: '10px', marginBottom: '10px' }} src={img} alt="" /></Link></Box>
			<Link to="/memberships" style={{color: 'white'}}><Button color="inherit">Memberships</Button></Link>
			<Link to="/aboutme" style={{color: 'white'}}><Button color="inherit">About Me</Button></Link>
			<Link to="/policy" style={{color: 'white'}}><Button color="inherit">Policy</Button></Link>
			<SearchBar/>
        </Toolbar>
      </AppBar>
  );
}