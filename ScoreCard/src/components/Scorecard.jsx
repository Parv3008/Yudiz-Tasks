import React from 'react'
import '../styles/main.scss'
import data from '../data/data.json'

export const Scorecard = () => {

    const {match_result, teams, player_of_the_match } = data
  return     (
    <div>
        <div className="header">
            <div className="result">
                <span>RESULT</span>
                <h4>{match_result.winner} Won by {match_result.win_by}</h4>
            </div>
            <div className="player">
                <p>Player of the Match: {player_of_the_match}</p>
            </div>
        </div>
        <div className="teams">
            <div className="team1">
                <div className="img">
                    <img src={teams[0].img} alt="" />
                </div>
                <div className="team-name">
                    <h4>{teams[0].abbreviation} {teams[0].win === "Y" && "🏆"}</h4>
                </div>
                <div className="score">
                    <span>{teams[0].score}</span>
                </div>
                <div className="over">
                    <span>({teams[0].overs} ov)</span>
                </div>
            </div>
            <div className="team2">
                <div className="img">
                    <img src={teams[1].img} alt="" />
                </div>
                <div className="team-name">
                    <h4>{teams[1].abbreviation} {teams[1].win === "Y" && "🏆"}</h4>
                </div>
                <div className="score">
                    <span>{teams[1].score}</span>
                </div>
                <div className="over">
                    <span>({teams[1].overs} ov)</span>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Scorecard
