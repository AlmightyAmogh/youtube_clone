import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>
      setChannelDetail(data?.items[0]))
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>
      setVideos(data?.items))
  }, [id])
  

// console.log(channelDetail?.snippet?.thumbnails?.high?.url)

  return (
    
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,9,121,1) 0%, rgba(255,0,56,1) 97%)'
      ,zIndex : 10 ,
      height:"300px"
      }}/>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"80px"}}} />
          <Videos videos={videos} />
       

      </Box>
    </Box>
  )
}

export default ChannelDetail