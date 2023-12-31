import { Link } from "react-router-dom"

export const CharacterCard = ({id, name, status, species, image, location, episode}) => {
  
  return (
    <div className="card">
      <img
        src={image}
        alt="logo"
        className="card__img"
      />
      <div className="card__info">
        <div className="card__wrap">
          <Link to={`/character/${id}`}>
            <p className="card__name">{name}</p>
          </Link>
          <span className="card__status">{status} - {species}</span>
        </div>
        <div className="card__wrap">
          <span className="card__descr">Last known location:</span>
          <p className="card__title">{location}</p>
        </div>
        <div className="card__wrap">
          <span className="card__descr">First seen in:</span>
          <p className="card__title">{episode}</p>
        </div>
      </div>
    </div>
  )
}
