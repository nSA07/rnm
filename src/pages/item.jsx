import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCharacter } from '../features/character/characterSlice'

export const Item = () => {

  const dispatch = useDispatch()
  const character = useSelector((state) => state.character.character)
  
  const {id} = useParams()

  useEffect(()=>{
    dispatch(getSingleCharacter({
      query: 'character',
      id: id
    }))
  }, [])
  
  return (
    <div className='item'>
      {!!character && (
          <>
            <img className='item__img' src={character?.image} alt="items-img" />
              <div className='item__info'>
                <div className="card__wrap">
                    <p className="card__name">{character?.name}</p>
                    <span className="card__status">{character?.status} - {character?.species}</span>
                </div>
                <div className="card__wrap">
                    <span className="card__descr">Last known location:</span>
                    <p className="card__title">{character.location?.name}</p>
                </div>
                <div className="card__wrap">
                    <span className="card__descr">Gender</span>
                    <p className="card__title">{character?.gender}</p>
                </div>
              </div>
          </>
      )}
    </div>
  )
}
