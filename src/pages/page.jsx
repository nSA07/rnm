import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../features/character/characterSlice'

import { CharacterCard } from '../components/Character/CharacterCard'

export const Page = () => {
  const dispatch = useDispatch()
  const character = useSelector((state) => state.character.character)

  const [page, setPage] = useState(1)

  useEffect(()=>{
    dispatch(getCharacter({
      query: 'character',
      page: page
    }))
  }, [page])
  
  return (
    <div className="main">
      <div className="main__filter">
        <Button
          variant="contained"
          sx={{
            padding: '16.5px 46px'
          }}
        >Filter</Button>
      </div>
      <div className='main__list'>
        {character.results?.map((item) => (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            image={item.image}
            location={item.location.name}
            episode={item.episode[0]}
          />
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          onChange={(_, num)=>setPage(num)}
          count={character.info?.pages} 
          color="primary" 
          shape="rounded"
        />
      </Stack>
    </div>
  )
}
