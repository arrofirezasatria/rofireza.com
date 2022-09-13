import React from 'react'
import ContainerHero from '@layouts/ContainerHero'
import { Divider, Grid, TextField, Typography } from '@mui/material'
import TechCard from '@components/hero/TechCard'
import { TECHs, techCategory } from 'data/content/tech'

export default function Tech() {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const [value, setValue] = React.useState<string>('all')

    const filteredTech = TECHs.filter(
        (tech) =>
            tech.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            tech.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <ContainerHero>
            <Typography
                variant="h3"
                component={'h1'}
                sx={{ fontWeight: 600, mb: 2, fontFamily: 'rubik' }}
            >
                Tech.
            </Typography>
            <Typography variant="body1">
                This is a list of technologies that I have used and this is also
                a bookmark for my future technology projects.
            </Typography>
            <TextField
                fullWidth
                onChange={handleChange}
                size="small"
                label="Search"
                id="Search"
                sx={{ mt: 2 }}
            />
            {/* <Box
                sx={{ display: 'flex', mt: 2, justifyContent: 'space-around' }}
            >
                {techCategory.map((tech, index) => {
                    return (
                        <Button key={index} onClick={() => setValue(tech)}>
                            <Typography variant="subtitle2">{tech}</Typography>
                        </Button>
                    )
                })}
            </Box> */}
            <Divider sx={{ mt: 2, mb: '40px' }} />
            <React.Suspense fallback={null}>
                <Grid container spacing={2}>
                    {filteredTech.map((data, index) => {
                        return (
                            <Grid item md={6} key={index}>
                                <TechCard item={data} />
                            </Grid>
                        )
                    })}
                </Grid>
            </React.Suspense>
        </ContainerHero>
    )
}
