import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatch
  const isWinOrLose = matchStatus === 'Won' ? 'green-color' : 'red-color'

  return (
    <li className="recent-match-item">
      <img
        src={competingTeamLogo}
        className="team-compete-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-compete-heading">{competingTeam}</p>
      <p className="team-result-status">{result}</p>
      <p className={`team-match-status ${isWinOrLose}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
