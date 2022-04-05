import React from 'react'

import ContainerHero from '../components/ContainerHero';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Guestbook({fallbackData}) {
    return (
        <ContainerHero>
            <Box>
                <Typography component='h1' variant='h4' sx={{ fontWeight: 'bold' }}>
                    GuestBook
                </Typography>
                <Typography>
                    Leave a comment below. It could be anything – appreciation,
                    information, wisdom, or even humor. Surprise me!
                </Typography>
                {fallbackData}
            </Box>
        </ContainerHero>
    )
}

export async function getStaticProps() {
    //tunggu
    const fallbackData = 'asdasd'


    return {
        props: {
          fallbackData
        },
        revalidate: 60
      };
}