import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchDataByGenre } from '../store';

const Selectgenre = ({genres}) => {
    const dispatch = useDispatch();

  return (
    <Container className='flex' onChange={e=>{
        dispatch(fetchDataByGenre({genre:e.target.value}));
    }}>
        {genres.map((genre)=>{
            return <option value={genre.id} key={genre.id}>{genre.name}</option>
        })}
    </Container>
  )
}

export default Selectgenre

const Container = styled.select`

`