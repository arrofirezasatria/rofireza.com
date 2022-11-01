import React from 'react'
import ContainerHero from '@layouts/ContainerHero'
import axios from 'axios'

export default function playlist() {
    return <ContainerHero>asd</ContainerHero>
}

export async function getStaticProps() {
    const youtube_api = process.env.YOUTUBE_API

    const response = await axios
        .get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails%2C%20status%2C%20id&maxResults=10&playlistId=PLN8AHML34obuWGhlzCszGKG2_9gScbn0Z&key=${youtube_api}`
        )
        .then((res) => res)

    console.log(response.data)
    return {
        props: {},
        revalidate: 360,
    }
}
