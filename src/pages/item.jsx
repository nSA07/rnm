import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../features/character/characterSlice'
import { getSingleCharacter } from '../queries/CharacterQuerys'

import { Fab } from '../components/Fab/Fab'

export const Item = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.character.character) 
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getCharacter({query: getSingleCharacter, variables: {id: id}}))
  }, [])
  
  return (
    <div className='item'>
      {!!data && (
        <>
          <img className='item__img' src={data.character?.image} alt="items-img" />
            <div className='item__info'>
              <div className="card__wrap">
                  <p className="card__name">{data.character?.name}</p>
                  <span className="card__status">{data.character?.status} - {data.character?.species}</span>
              </div>
              <div className="card__wrap">
                  <span className="card__descr">Last known location:</span>
                  <p className="card__title">{data.character?.location.name}</p>
              </div>
              <div className="card__wrap">
                  <span className="card__descr">Gender</span>
                  <p className="card__title">{data.character?.gender}</p>
              </div>
              <div className="card__wrap">
                  <span className="card__descr">Gender</span>
                  <p className="card__title">{data.character?.episode[0].name}</p>
              </div>
            </div>
        </>
      )}
      <Fab uniqueParams={false} />
    </div>
  )
}
