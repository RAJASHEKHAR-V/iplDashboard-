import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatch

  return (
    <li className="recent-match-item">
      <img
        src={competingTeamLogo}
        className="team-compete-logo"
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="team-compete-heading">{competingTeam}</h1>
      <p className="team-result-status">{result}</p>
      <h1 className="team-match-status">{matchStatus}</h1>
    </li>
  )
}

export default MatchCard
