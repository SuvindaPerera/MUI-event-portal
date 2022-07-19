
import { AppBar, Box, Toolbar,styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { Container, display } from '@mui/system';




const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor:"#222831"
})

const SearchBar = styled("div")(({theme}) => ({
  backgroundColor:"white",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  padding: "0 10px",
  display: "flex",
}))

const Icons = styled(Box)(({theme}) => ({
 display: "none",
 gap: "20px",
 alignItems: "center",
 [theme.breakpoints.up("sm")]:{
  display: "flex",
 }
}))

const UserIconResponsive = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))


const Navbar = () => {

  

  return (
    <AppBar position="sticky" >
      <StyledToolbar>
        <Typography variant="h6">Event Portal</Typography>
        {/* <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        /> */}
        {/* <SearchBar>
          <InputBase placeholder="Search..."></InputBase>
        </SearchBar> */}

          <Box>
              <Button color= "primary">
                <Typography>Home</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>Events</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>Services</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>About Us</Typography>
              </Button>
              <BlueButton/>
          </Box>
      </StyledToolbar>
        

    </AppBar>
  )
}

export default Navbar
