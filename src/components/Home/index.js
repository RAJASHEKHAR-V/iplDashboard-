import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoaderStarted: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const newTeamList = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState(prevState => ({
      teamList: newTeamList,
      isLoaderStarted: !prevState.isLoaderStarted,
    }))
  }

  render() {
    const {teamList, isLoaderStarted} = this.state
    console.log(isLoaderStarted)

    return (
      <div className="bg-container">
        {isLoaderStarted ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-image"
                alt="ipl logo"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <ul className="ipl-team-card">
              {teamList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamObject={eachTeam} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
