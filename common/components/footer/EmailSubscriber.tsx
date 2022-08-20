import * as React from 'react'
import { Theme, styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormLabel from '@mui/material/FormLabel'

import InputBase from '@mui/material/InputBase'
import useSwr from 'swr'
import { blueDark } from 'modules/ThemeContext'

const Form = styled('form')({})

export default function EmailSubscriber() {
    const [form, setForm] = React.useState<{ email: string }>({ email: '' })
    const [succes, setSuccess] = React.useState<string>('sukses' || 'error')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const respond = await fetch('/api/newsletter', {
                method: 'POST',
                body: form.email,
            })
            console.log(respond)
            console.log(respond.body)
            console.log('adas')
        } catch (error) {}
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel
                htmlFor="email-subscribe"
                sx={{
                    typography: 'caption',
                    mb: 0.5,
                    color: 'text.secondary',
                    fontWeight: 500,
                }}
            >
                Enter your email:
            </FormLabel>
            <Box
                sx={{
                    display: 'flex',
                    borderRadius: 1,
                    overflow: 'hidden',
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: 360,
                }}
            >
                <InputBase
                    id="email-subscribe"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    inputProps={{ required: true }}
                    onChange={(event) => setForm({ email: event.target.value })}
                    sx={{
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                                ? blueDark[900]
                                : theme.palette.grey[100],
                        px: 1,
                        py: 0.5,
                        typography: 'body2',
                        flexGrow: 1,
                        minWidth: 200,
                        '&:focus': {
                            outline: (theme) =>
                                `2px solid ${
                                    theme.palette.mode === 'dark'
                                        ? theme.palette.primary[400]
                                        : theme.palette.primary[200]
                                }`,
                            outlineOffset: '2px',
                        },
                    }}
                />
                <Button
                    type="submit"
                    sx={{
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                                ? blueDark[600]
                                : theme.palette.grey[300],
                        py: 1,
                        px: 2,
                        color: 'text.primary',
                        borderRadius: '0px',
                        '&:hover': {
                            bgcolor: (theme) =>
                                theme.palette.mode === 'dark'
                                    ? blueDark[700]
                                    : theme.palette.grey[400],
                        },
                    }}
                >
                    Subscribe
                </Button>
            </Box>
        </Form>
    )
}
