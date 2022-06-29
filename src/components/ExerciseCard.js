import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack direction="row">
            <Button sx={{ ml: '21px', color: '#FFFFFF', background: '#ffa9a9', fontSize: '18px', borderRadius: '20px', textTransform:'capitalize', padding: '8px 12px'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#FFFFFF', background: '#fcc757', fontSize: '18px', borderRadius: '20px', textTransform:'capitalize', padding: '8px 12px'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography
            color="#000000"
            fontWeight="bold"            
            textTransform="capitalize"
            textAlign="center"
            fontSize="20px"
            mt="25px"
            
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard