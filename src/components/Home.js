import React, {useEffect, useState} from 'react';
import './Home.css';

const Home = () => {
    const [state, setState] = useState(null);
    useEffect(() =>{
        fetch('https://fierce-bayou-96412.herokuapp.com/asb-backend', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
        .then(resp =>resp.json())
        .then(
            response => {
                console.log(response.data)
                setState(response.data)
            }, 
            err => {
                console.log(err);
            }
        )
    },[])
  return(
    <div>
        <nav>
            <img src={require('../assets/images/FE.svg')} alt="" className="logo"/>
            <p>FE Engineer Test 1</p>
            <ul className="ul">
                <li className="li"><img src={require("../assets/images/Home.svg")} alt=""/>Home</li>
                <li className="li"><img src={require('../assets/images/Entries.svg')} alt=""/>Entries</li>
                <li className="li"><img src={require('../assets/images/Divisions.svg')} alt=""/>Divisions</li>
            </ul>
            <div className="nav-right">
                <input type="text" />
                <img src={require('../assets/images/Notification.png')} alt=""/>
                <img src={require('../assets/images/Profile.svg')} alt=""/>
            </div>
        </nav>
        <section className="metrics">
            <div className="metric">
                <div className="top">
                    <h2>31454</h2>
                    <i></i>
                </div>
                <p>Ongoing metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>2344</h2>
                    <i></i>
                </div>
                <p>Past metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>14224</h2>
                    <i></i>
                </div>
                <p>Missed metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>635</h2>
                    <i></i>
                </div>
                <p>Failed metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>11334</h2>
                    <i></i>
                </div>
                <p>Pending metric</p>
            </div>
        </section>
        <section className="summary">
            <div className="heading">
                <img src={require('../assets/images/Summary.svg')} alt=""/>
                <h4>Division Summary</h4>
            </div>
            <div className="body">
                <img src={require('../assets/images/Phone.svg')} alt="" />
                <p>0801 234 5678</p>
            </div>
            <div className="body">
                <img src={require('../assets/images/Mail.svg')} alt="" />
                <p>asbfefr@gmail.com</p>
            </div>
            <div className="body">
                <img src={require('../assets/images/Location.svg')} alt="" />
                <p>Mojidi, Lagos</p>
            </div>
            <div className="body">
                <img src={require('../assets/images/Journal.svg')} alt="" />
                <p>2 Journal entries</p>
            </div>
            <div className="body">
                <img src={require('../assets/images/Fingerprint.svg')} alt="" />
                <p>24 fingerprints enrolled</p>
            </div>
        </section>
        <section className="module">
            <div className="heading">
                <img src={require('../assets/images/Summary.svg')} alt=""/>
                <h4>Module History</h4>
            </div>
            <div className="body">
                <ul>
                    <li>Searched "Journal Entries" on Division module
                        <div className="info">
                            <p>22:10</p>
                            <p>15/09/2020</p>
                            <p>Web</p>
                        </div>
                    </li>
                    <li>Searched "Fingerprint record" on Division module
                        <div className="info">
                            <p>22:10</p> <p>15/09/2020</p> <p>Web</p>
                        </div>
                    </li>
                    <li>Searched "Journal Entries" on Division module
                        <div className="info">
                            <p>22:10</p>
                            <p>15/09/2020</p>
                            <p>Web</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Entries</th>
                    <th>Risk Profile</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {state && state.map( data =>(<tr>
                    <td></td>
                    <td></td>
                    <td>{data.NAME}</td>
                    <td>{data.LOCATION}</td>
                    <td>{data.STATUS}</td>
                    <td>{data.ENTRIES.Entry} <p className="sub">{data.ENTRIES.Entry_type}</p></td>
                    <td>{data.RISK_PROFILE}</td>
                    <td></td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default Home;