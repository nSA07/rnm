import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../../features/character/characterSlice'
import { charactersAll } from '../../queries/CharacterQuerys'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CharacterCard } from '../Character/CharacterCard'
import { Fab } from '../Fab/Fab';


export const Layout = ({data}) => {
    const dispatch = useDispatch()
    const character = useSelector((state) => state.character.character)
    const [page, setPage] = useState(1)
    useEffect(()=>{
        if(!data) {
          dispatch(getCharacter({
            query: charactersAll,
            variables: {page: page}
          }))
        } else {
            dispatch(getCharacter({
                query: charactersAll,
                variables: {
                    page: page, 
                    filter: {
                        name: data.nameCharacter, 
                        status: data.statusCharacter, 
                        species: data.speciesCharacter, 
                        type: data.typeCharacter, 
                        gender: data.genderCharacter
                    }
                }
            }))
        }
      }, [page, data])

  return (
    <>
        <div className='main__list'>
            {character.characters?.results.map((item) => (
                <CharacterCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    image={item.image}
                    location={item.location.name}
                    episode={item.episode[0].name}
                />
            ))}
        </div>
        <Stack spacing={2}>
            <Pagination
                onChange={(_, num)=>setPage(num)}
                count={character.characters?.info.pages} 
                color="primary" 
                shape="rounded"
            />
        </Stack>
        <Fab uniqueParams={true} fileUpload={character} />
    </>
  )
}
