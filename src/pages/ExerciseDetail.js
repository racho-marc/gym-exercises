import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    // const listOfEquipments = [
    //   'assisted', 'band', 'barbell', 'body weight', 'bosu ball', 'cable', 'dumbbell', 'elliptical machine', 'ez barbell', 'hammer', 'kettlebell', 'leverage machine', 
    //   'medicine ball', 'olympic barbell', 'resistance band', 'roller', 'rope', 'skierg machine', 'sled machine', 'smith machine', 'stability ball', 
    //   'stationary bike', 'stepmill machine', 'tire', 'trap bar', 'upper body ergometer', 'weighted', 'wheel roller'
    // ];

    const { id } = useParams();

    useEffect(() => {
      const fetchExercisesData = async () => {
        const exerciseDbUrl = `https://exercisedb.p.rapidapi.com/exercises`;
        const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;
      
        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`, exerciseOptions);
        const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        // const equipmentExercisesData2 = await fetchData(`${exerciseDbUrl}/equipment/${listOfEquipments[6]}`, exerciseOptions);
        
        console.log(exerciseDetailData);
        
        setExerciseDetail(exerciseDetailData);
        setExerciseVideos(exerciseVideosData.contents);
        setTargetMuscleExercises(targetMuscleExercisesData);
        setEquipmentExercises(equipmentExercisesData);
        };

      fetchExercisesData();
    }, [id]);
    
    

  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail