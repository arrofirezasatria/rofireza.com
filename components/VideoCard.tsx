import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import grey from '@mui/material/colors';
import PlayCircle from '@mui/icons-material/PlayCircle';

export default function VideoCard({
  href = 'a',
  length = 1,
  title = 'asd',
  index = 1,
}: {
  href: string;
  length: number;
  title: string;
  index: number;
}) {
  return (
    <Link href={href} underline="none">
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Box>{index}</Box>
        <Box sx={{ flexGrow: '1' }}>
          <Typography
            component="h4"
            variant="h6"
            sx={{
              color: '#9e9e9e',
              fontWeight: 'Bold',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography>1:20:13</Typography>
        <PlayCircle sx={{ color: 'black' }} />
      </Stack>
    </Link>
  );
}
