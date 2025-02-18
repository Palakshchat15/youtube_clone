import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromApi } from '../utils/fetchFromApi'
import SideBar from './SideBar'
import Videos from './Videos'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
     fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
     .then((data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", height: '100vh'}}}>
      <Box sx={{ height: {xs: 'auto', md:"90vh"}, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 0},justifyContent:'center', alignItems:'center'} } >
      <SideBar 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
        Copyright 2024 PC Media
      </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4"
        fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
          {selectedCategory} <span style={{ color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
    
  )
}

export default Feed