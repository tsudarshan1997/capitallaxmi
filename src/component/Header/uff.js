import React from "react"
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material"

// import {
//     HomeOutlined, 
//     // NotificationsNone, 
  
//     // NotificationsNone, 
  
//   NotificationsNone
import { 
  HomeOutlined,
  // NotificationsNone,
  // FavoriteBorder
} from "@mui/icons-material"
import Logo from "../../assets/logo/uff.png"
import MobileHeader from "./MobileHeader"
import Login from "./login"

import { NavLink } from "react-router-dom"
import Message from "./Message"
import Notification from "./notification"
import Favourites from "./favourites"


export default function Header() {

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: "block", lg: 'block' },
          backgroundColor: "#ffffff",
          padding: "1rem"
        }}
      >
        <Grid container>
          <Grid item
            lg={2}
            xs={2}
            md={2}
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <NavLink
              to="/"
              style={{
                backgroundColor: "transparent"
              }}
            >
              <img
                src={Logo}
                alt={logo}
                width="80px"
              />
            </NavLink>
          </Grid>
          <Grid
            item
            container
            lg={7}
            xs={7}
            md={7}
            style={{
              padding: "0rem 2rem 0.6rem 1rem",
              direction: "rtl"

            }}
          >
            <Grid item lg={1} xs={1} style={{ textAlign: "center", marginLeft: "1rem" }}>
              <Notification />
            </Grid>
            <Grid item lg={1} xs={1} style={{ textAlign: "center", marginLeft: "1rem" }}
              className="bg">
              <Favourites/>
            </Grid>
            <Grid item lg={1} xs={1} style={{ textAlign: "center", marginLeft: "1rem" }}
              className="bg">
              <Message/>
            </Grid>
            <Grid item lg={1} xs={1} style={{ textAlign: "center", marginLeft: "1rem" }}
              className="bg">
              <NavLink
                to="/"
                style={{
                  textDecorationLine: "none",
                  backgroundColor: "transparent"
                }}
              >
                <HomeOutlined style={{ color: "#a07676", fontSize: "1.3rem" }} />
                <Typography style={{ fontSize: ".56rem", fontWeight: "500", letterSpacing: "1px", color: "#a07676" }}>
                  Home
                </Typography>
              </NavLink>
            </Grid>
            <Grid item lg={6} xs={6}>
              <Box style={{ border: "2px solid #2b2d89", padding: "1rem", borderRadius: "1rem", marginTop: ".2rem" }}>

              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            lg={3}
            xs={3}
            md={3}
            style={{ paddingTop: ".5rem" }}

          >
            <Grid item lg={6} xs={6}>
                <Login/>
              {/* <Button
                variant="outlined"
                style={{
                  fontSize: ".6rem",
                  color: "black",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  textTransform: "capitalize"
                }}
              >
                login /signup
              </Button> */}
            </Grid>
            <Grid item lg={6} xs={6} className="bg">
              <NavLink to="/contactad"
                variant="contained"
                style={{
                  fontSize: "1.1rem",
                  color: "white",
                  backgroundColor: "#e00000",
                  fontWeight: "600",
                  // letterSpacing: "1px",
                  textTransform: "capitalize",
                  textDecoration:"none",
                  borderRadius:".5rem",
                  padding:".2rem 1rem .2rem 1rem",
                  marginLeft:"1rem"
                  // padding:".2rem 2rem .2rem 2rem"

                }}

              >
                Contact for ad
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Divider color="#d8c5c3" />
        <Grid container style={{ padding: ".6rem", marginLeft: "1rem" }}>
          <Grid item lg={2} xs={4} md={3}>
            <Box style={{
              width: "60%"
            }}
              className="bg">
              <NavLink
                to="/hostel"
                style={{
                  textDecorationLine: "none"
                }}
              >
                <Typography style={{ fontSize: ".9rem", color: "#2b2d89", fontWeight: "600", letterSpacing: "1px" }}>
                  Hostel
                </Typography>
              </NavLink>
            </Box>
          </Grid>
          <Grid item lg={2} xs={4} md={3}>
            <Box style={{
              width: "60%"
            }}
              className="bg">
              <NavLink
                to="/flat&room"
                style={{
                  textDecorationLine: "none"
                }}

              >
                <Typography style={{ fontSize: ".9rem", color: "#2b2d89", fontWeight: "600", letterSpacing: "1px" }}>
                  Flat/Rooms
                </Typography>
              </NavLink>
            </Box>
          </Grid>
          <Grid item lg={2} xs={4} md={3}>
            <Box style={{
              width: "60%"
            }}
              className="bg">
              <NavLink
                to="/mover&packer"
                style={{
                  textDecorationLine: "none"
                }}
              >
                <Typography style={{ fontSize: ".9rem", color: "#2b2d89", fontWeight: "600", letterSpacing: "1px" }}>
                  Packers/ Movers
                </Typography>
              </NavLink>
            </Box>
          </Grid>
          <Grid item lg={2} xs={4} md={3}>
            <Box style={{
              width: "60%"
            }}
              className="bg">
              <NavLink
                to="/furniture"
                style={{
                  textDecorationLine: "none"
                }}

              >
                <Typography style={{ fontSize: ".9rem", color: "#2b2d89", fontWeight: "600", letterSpacing: "1px" }}>
                  Furnitures
                </Typography>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
        <Divider color="#d8c5c3" />
      </Box>

      <Box
        sx={{
          display: { xs: 'block', md: "none", lg: 'none' },
        }}
      >
        <MobileHeader />
      </Box>
    </>

  )
}