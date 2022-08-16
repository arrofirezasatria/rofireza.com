import { Typography } from '@mui/material'
import { allPosts } from 'contentlayer/generated'
import { pick } from '@contentlayer/utils'
import React, { Suspense } from 'react'
import BlogCard from 'components/post/BlogCard'
import ContainerHero from 'components/ContainerHero'
import Footprint from 'components/Footprint'

export default function blog({ data_posts }) {
   return (
      <ContainerHero>
         {/* <Typography variant="h2" component={'h1'}>
            Blog
         </Typography>
         <Typography variant="body1">
            I have been Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias nostrum quaerat eligendi aperiam consequatur asperiores
            aliquam officiis est assumenda modi sit libero architecto, dolor
            quidem tempora eius minima quo unde?
         </Typography>
         <Suspense fallback={null}>
            {data_posts.map((post, index) => {
               return (
                  <div>
                     <BlogCard
                        key={index}
                        title={post.title}
                        url={post.url}
                        time_ago={post.time_ago}
                        summary={post.summary}
                        reading_time={post.reading_time.text}
                     />
                  </div>
               )
            })}
         </Suspense> */}
         <Footprint />
      </ContainerHero>
   )
}

export async function getStaticProps() {
   const data_posts = allPosts.map((post) =>
      pick(post, [
         'title',
         'date',
         'summary',
         'url',
         'reading_time',
         'time_ago',
         'image',
      ])
   )

   return {
      props: { data_posts },
   }
}
