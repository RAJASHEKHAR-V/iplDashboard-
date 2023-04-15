import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamObject} = props
  const {name, id, teamImageUrl} = teamObject

  return (
    <Link to={`/team-matches/${id}`} className="team-card-hyperlink">
      <li className="team-card-item">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
