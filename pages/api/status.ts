import axios from 'axios'

import type { NextApiRequest, NextApiResponse } from 'next'
import { DiscordStatus } from '@lib/types'

const discord_id = process.env.DISCORD_ID

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getStatus()

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false })
    }

    const status: DiscordStatus = {
        id: response.data,
        username: response.discord_user.username,
        avatar: response.discord_user.username,
        status: response.discord_status,
        activites: response.activites.name,
    }

    return res.status(200).json(status)
}

export const getStatus = async () => {
    const respond = await axios
        .get(`https://api.lanyard.rest/v1/users/${discord_id}`)
        .then((res) => {
            return res
        })
        .catch((e) => {
            return e
        })

    return respond.status(200).json(respond.data)
}
