import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoaderStarted: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newMatchDetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState(prevState => ({
      matchDetails: newMatchDetails,
      isLoaderStarted: !prevState.isLoaderStarted,
    }))
  }

  render() {
    const {matchDetails, isLoaderStarted} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    const colorGradients = ['rcb', 'kkr', 'kxp', 'csk', 'rr', 'mi', 'sh', 'dc']
    const {match} = this.props
    const {params} = match
    const {id} = params
    const addMatchColorGradient = colorGradients.filter(
      eachColor => eachColor === id.toLowerCase(),
    )[0]

    return (
      <div className={`team-container ${addMatchColorGradient}`}>
        {isLoaderStarted ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" width={50} height={50} />
          </div>
        ) : (
          <div className="team-body">
            <img
              src={teamBannerUrl}
              className="latest-team-banner-image"
              alt="team banner"
            />
            <p className="latest-match-para">Latest Matches</p>
            <LatestMatch
              key={latestMatchDetails.id}
              latestMatch={latestMatchDetails}
            />
            <ul className="recent-match-card">
              {recentMatches.map(eachRecentMatch => (
                <MatchCard
                  key={eachRecentMatch.id}
                  recentMatch={eachRecentMatch}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
