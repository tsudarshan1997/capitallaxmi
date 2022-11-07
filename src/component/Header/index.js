import React from 'react'
import Logo from "../Assets/logo/logo.png"
import{ Grid,Box} from "@mui/material"
import { NavLink } from 'react-router-dom'
import './style.css'
import {
    Download,
    Person2,
    Search,
    ImageOutlined
} from '@mui/icons-material'

import Star from "../Assets/image/star.gif"
export default function index() {
  return (
  <Box>
    <Grid container lg={12}>
        <Grid item container lg={2.5} >
            <Grid item  lg={12} style={{
                marginLeft:"6rem",
                marginTop:".6rem"
            }}>
                <img src={Logo} alt={Logo} width="100%"/>
            </Grid>
        </Grid>
        <Grid item container lg={9}
        style={{
            marginTop:".3rem",
            
        }}>
            <Grid item lg={1.5}style={{
                marginLeft:"12rem"
            }}>
                <img src={Star} alt={Star} width="20%"/> 
            <NavLink to="/"
            style={{
                backgroundColor:"#BED126",
                color:"white",
                padding:".2rem .3rem .2rem 1rem",
                fontSize:".7rem",
                borderRadius:".2rem",
                
            }}className="ab"
        >
              
              Online Demat
            </NavLink >
            </Grid>
            <Grid item lg={.9}style={{
             }}>
                <ImageOutlined/>
            <NavLink to="/"
            style={{
                backgroundColor:"#0A8043",
                color:"white",
                padding:".2rem .3rem .2rem 1rem",
                fontSize:".7rem",
                borderRadius:".2rem",

            }}className="ab">
                NAV
            </NavLink>
            </Grid>
            <Grid item lg={1.5}>
                <Download/>
            <NavLink to="/"
            style={{
                backgroundColor:"#0A8043",
                color:"white",
                padding:".2rem .3rem .2rem 1rem",
                fontSize:".7rem",
                borderRadius:".2rem",
                
            }}className="ab">
                Downloads
            </NavLink>
            </Grid>
            <Grid item lg={1.5}style={{
             }}>
                <Person2/>
            <NavLink to="/"
            style={{
                backgroundColor:"#0A8043",
                color:"white",
                padding:".2rem .3rem .2rem 1rem",
                fontSize:".7rem",
                borderRadius:".2rem",

            }}className="ab">
                Demat Login
            </NavLink>
            </Grid>
            <Grid item lg={1.5}style={{
             }}>
                <Person2/>
            <NavLink to="/"
            style={{
                backgroundColor:"#0A8043",
                color:"white",
                padding:".2rem .3rem .2rem 1rem",
                fontSize:".7rem",
                borderRadius:".2rem",

            }}className="ab">
                Meroshare
            </NavLink >
            </Grid>
            <Grid item lg={1.5}style={{
             }}>
                <Search/>
            <NavLink to="/"
            style={{
                backgroundColor:"#0A8043",
                color:"white",
                padding:".2rem .3rem .2rem 1rem",
                fontSize:".7rem",
                borderRadius:".2rem",

            }}className="ab">
                Query AMC
            </NavLink >
            </Grid>
        </Grid>
    </Grid>
   </Box>
)
}
        
        