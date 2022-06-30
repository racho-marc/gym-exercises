import React, { useCallback, useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');    
    const [bodyParts, setBodyParts] = useState([]);
    
    const url = 'https://exercisedb.p.rapidapi.com/exercises';

    const triggerSearch = useCallback((searchedExercises) => {        
        setExercises(searchedExercises);
    }, [])


    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData(`${url}/bodyPartList`, exerciseOptions);
        
        setBodyParts(['all', ...bodyPartsData]);
        
      }

      fetchExercisesData();
    }, [])
    

    const handleSearch = async  () => {
        if(search) {
            const exerciseData = await fetchData(url, exerciseOptions);
            
            const searchedExercises = exerciseData.filter(
                (exercise) => 
                    exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            triggerSearch(searchedExercises);
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography 
            variant="h2"
            fontWeight="700"
            sx={{
                fontSize: { lg: '44px', xs: '30px'}
            }}
            mb="50px"
            textAlign="center"
        >
            Effective Exercises <br/> You Should Know
        </Typography>
        <Box
            position="relative"
            mb="72px"
            display="flex"
            alignItems="stretch"
            flexWrap="nowrap"
            width="100%"
            maxWidth="60rem"
            ml="auto"
            mr="auto"
            justifyContent="stretch"
        >
            <TextField 
                sx={{
                    input: { 
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    backgroundColor: '#FFFFFF',
                    borderRadius: '40px',
                    flex: '1 0 auto'
                    
                }}
                height="76px"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />
            <Button 
                className="search-btn"
                sx={{
                    bgcolor: '#FF2625',
                    color: '#FFFFFF',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px'},
                    fontSize: { lg: '20px', xs: '14px'}
                }}
                onClick={handleSearch}
            >
                Search
            </Button>
            
        </Box>
        <Box sx={{
                position: 'relative',
                width: '100%',
                p: '20px'
            }}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts="true"/>
        </Box>
    </Stack>
  )
}

export default SearchExercises