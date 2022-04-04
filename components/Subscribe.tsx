import React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'

export default function Subscribe() {
  return (
    <Stack sx={{ marginTop:8, padding: 2, border:'2px solid gray', borderRadius:'8px', backgroundColor:'lightblue'}}>
      <Typography variant='h6' sx={{fontWeight:'bold', marginBottom:'8px'}}>Subscribe to Newsletter</Typography>
      <Typography>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Typography>
      <TextField label='rofireza@apple.com' size="small" sx={{my:2}} >
      </TextField>
      <Typography variant='subtitle2' >
        1000 Subscriber
      </Typography>
    </Stack>
  );
}
