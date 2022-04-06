import { Container } from '@mui/material';
import React from 'react'
import ContainerHero from '../components/ContainerHero';
import Box from '@mui/material/Box'
import { fsync } from 'fs';

export default function Blog({posts}) {
  return (
    <ContainerHero>
      <Box>blog</Box>      
  {posts.map((data)=>{
    return(
      <div>
        {data.slug}
        {data.summary}
        {data.publishedAt}
        </div>
      
      )
  })}
    </ContainerHero>
    
  )
}

export function getStaticProps(){
  const posts = [
    {
      'slug':'blog 1',
      'title':'judul 1',
      'summary': 'Velit aliquip Lorem ut ut Lorem nisi sunt fugiat.',
      'publishedAt': 'yesterday'
    },
    {
      'slug':'blog 2',
      'title':'judul 2',
      'summary': 'Ipsum voluptate reprehenderit adipisicing nisi.',
      'publishedAt': 'Just Now'
    }
  ]


  return {
    props: {posts}
  }
}
