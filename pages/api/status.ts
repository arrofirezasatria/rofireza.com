import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { DiscordStatus } from '@lib/types/index'

const discord_id = process.env.DISCORD_ID

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getStatus()

    // console.log(response)

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ status: 'offline' })
    }

    const res_data = response.data.data
    // console.log(res_data)

    const discord_stats: DiscordStatus = {
        id: res_data.discord_user.id,
        username: res_data.discord_user.username,
        avatar: res_data.discord_user.avatar,
        status: res_data.discord_status,
        activities:
            res_data.activities.length === 0 ? '' : res_data.activities[0].name,
    }

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    )

    // console.log(discord_stats)

    return res.status(200).json(discord_stats)
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

    return respond
}
