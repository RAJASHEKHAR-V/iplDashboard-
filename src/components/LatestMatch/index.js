import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-team-card">
      <div className="compete-team-card">
        <div className="compete-team-status-card">
          <h1 className="compete-team-heading">{competingTeam}</h1>
          <p className="compete-team-date">{date}</p>
          <p className="compete-team-venue">{venue}</p>
          <p className="team-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="compete-team-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="latest-team-innings-details-card">
        <h1 className="first-inning-heading">First Innings</h1>
        <p className="first-innings-para">{firstInnings}</p>
        <h1 className="second-innings-heading">Second Innings</h1>
        <p className="second-innings-para">{secondInnings}</p>
        <h1 className="man-of-the-match-heading">Man Of The Match</h1>
        <p className="man-of-the-match-para">{manOfTheMatch}</p>
        <h1 className="umpires-heading">Umpires</h1>
        <p className="umpires-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
