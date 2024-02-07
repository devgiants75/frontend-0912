import { Button, Card, CardContent, CardMedia, TextField, Typography, IconButton, Paper, Box } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import React, { useState } from 'react'

const images = [
  'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'
];

export default function Index() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };
  return (
    <>
      <hr />
      {/* 기본 버튼 */}
      <Button variant='contained'>
        Default
      </Button>
      {/* 색상 변경 버튼*/}
      <Button variant='contained' color='primary'>
        Default
      </Button>
      {/* 비활성화 버튼 */}
      <Button variant='contained' disabled>
        Disabled
      </Button>
      {/* 링크 버튼 */}
      <Button variant='contained' href='#text-buttons'>
        Link
      </Button>
      <hr />
      {/* 
        텍스트 필드
        : 사용자로부터 입력을 받기 위한 요소
       */}
      <TextField 
        label="Standard"
        variant='standard'
      />
      <TextField 
        label="Multiline"
        multiline
        rows={4}
        defaultValue='Default Value'
      />
      <TextField 
        label="Password"
        type='password'
      />

      {/* 카드: 정보를 보여주는 컨테이너 */}
      <Card variant='outlined'>
        <CardMedia 
          component='img'
          height='140'
          image=''
          alt='카드 이미지'
        />
        <CardContent>
          <Typography variant='h5' component='h2'>Card Title</Typography>
          <Typography variant='body2' component='p'>Card content</Typography>
        </CardContent>
      </Card>
      <>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <IconButton onClick={handleBack} disabled={activeStep === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          component="img"
          sx={{
            height: 255,
            maxWidth: 400,
            overflow: 'hidden',
            width: '100%',
          }}
          src={images[activeStep]}
          alt={`Image ${activeStep}`}
        />
        <IconButton
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Paper>
      </>
    </>
  )
}
