import React from 'react'
import ContainerHero from 'components/ContainerHero'
import {
    Box,
    Button,
    ButtonGroup,
    Chip,
    Divider,
    FormControlLabel,
    Grid,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material'
import TechCard from 'components/hero/TechCard'

const TECHs = [
    {
        src: '',
        srcSet: '',
        name: 'Next-Sitemap',
        description: 'Sitemap generator for Next.js',
        category: ['SEO'],
        href: 'https://www.npmjs.com/package/next-sitemap',
    },
    {
        src: '/tech/contentlayer.jpg',
        srcSet: '/tech/contentlayer.jpg',
        name: 'Contentlayer',
        description: 'Content made easy for developers',
        category: ['Content'],
        href: 'https://www.contentlayer.dev/',
    },
    {
        src: '/tech/maizzle.png',
        srcSet: '/tech/maizzle.png',
        name: 'Maizzle',
        description: 'HTML emails with Tailwind CSS',
        category: ['Others'],
        href: 'https://maizzle.com/',
    },
    {
        src: '/tech/plaiceholder-logo.jpg',
        srcSet: '/tech/plaiceholder-logo.jpg',
        name: 'Plaiceholder',
        description: 'Beautiful blur image placeholders',
        category: ['SEO', 'Content'],
        href: 'https://plaiceholder.co/',
    },
]

const techCategory = ['SEO', 'Content', 'Front End', 'Back End', 'Others']

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
                Tech
            </Typography>
            <Typography variant="body1">
                I have been Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Molestias nostrum quaerat eligendi aperiam consequatur
                asperiores aliquam officiis est assumenda modi sit libero
                architecto, dolor quidem tempora eius minima quo unde?
            </Typography>

            <TextField
                fullWidth
                onChange={handleChange}
                size="small"
                label="Search"
                id="Search"
                sx={{ mt: 2 }}
            />

            <Box
                sx={{ display: 'flex', mt: 2, justifyContent: 'space-around' }}
            >
                {techCategory.map((tech) => {
                    return (
                        <Button onClick={() => setValue(tech)}>
                            <Typography variant="subtitle2">{tech}</Typography>
                        </Button>
                    )
                })}
            </Box>

            {/* <RadioGroup value={'SEO'} onChange={handleChange2}>
                {techCategory.map((tech) => {
                    return <Button>{tech}</Button>
                })}
            </RadioGroup> */}

            <Divider sx={{ my: 2 }} />

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
