import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { DiscordStatus } from '@lib/types/index'

const discord_id = process.env.DISCORD_ID
const youtube_api = process.env.YOUTUBE_API

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(youtube_api)

    const response = await axios
        .get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails%2C%20status%2C%20id&maxResults=10&playlistId=PLN8AHML34obuWGhlzCszGKG2_9gScbn0Z&key=AIzaSyCE2SJHUPG0kh5Z5ZjavK8KiKpuyzvLHJQ`
        )
        .then((res) => res)

    return res.status(200).json(response.data)
    // console.log(response)

    // if (response.status === 204 || response.status > 400) {
    //     return res.status(200).json({ status: 'offline' })
    // }

    return res.status(200).json({ messsage: 'success' })
}
