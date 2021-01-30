import React, {useEffect, useState} from 'react';
import FE from '../assets/images/FE.svg';
import home from '../assets/images/home.svg';
import Entries from '../assets/images/Entries.svg';
import Divisions from '../assets/images/Divisions.svg';
import Notification from '../assets/images/Notification.png';
import Summary from '../assets/images/Summary.svg';
import Phone from '../assets/images/Phone.svg';
import Mail from '../assets/images/Mail.svg';
import Module from '../assets/images/Module.svg';
import Location from '../assets/images/Location.svg';
import Journal from '../assets/images/Journal.svg';
import Fingerprint from '../assets/images/Fingerprint.svg';
import Customers from '../assets/images/Customers.svg';
import Union from '../assets/images/Union.svg';
import Vector from '../assets/images/Vector.png';
import Icon from '@mdi/react';
import { mdiInformationOutline } from '@mdi/js';
import { mdiCheckboxBlankOutline } from '@mdi/js';
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
            <img src={FE} alt="" className="logo"/>
            <p>FE Engineer Test 1</p>
            <ul className="ul">
                <div className="nav-li">
                <li className="li"><img src={home} alt="" className="nav-icon"/>Home</li>
                </div>
                <div className="nav-li">
                <li className="li"><img src={Entries} alt="" className="nav-icon"/>Entries</li>
                </div>
                <div className="nav-li">
                <li className="li"><img src={Divisions} alt="" className="nav-icon"/>Divisions</li>
                </div>
            </ul>
            <div className="nav-right">
                <input type="text" />
                <img src={Notification} alt="" className="nav-right-icon"/>
                <img src={Customers} alt="" className="nav-right-icon"/>
            </div>
        </nav>
        <section className="metrics">
            <div className="metric">
                <div className="top">
                    <h2>31454</h2>
                    <Icon path={mdiInformationOutline} size={1} color="grey"/>
                </div>
                <p>Ongoing metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>2344</h2>
                    <Icon path={mdiInformationOutline} size={1} color="grey"/>
                </div>
                <p>Past metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>14224</h2>
                    <Icon path={mdiInformationOutline} size={1} color="grey"/>
                </div>
                <p>Missed metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>635</h2>
                    <Icon path={mdiInformationOutline} size={1} color="grey"/>
                </div>
                <p>Failed metric</p>
            </div>
            <div className="metric">
                <div className="top">
                    <h2>11334</h2>
                    <Icon path={mdiInformationOutline} size={1} color="grey"/>
                </div>
                <p>Pending metric</p>
            </div>
        </section>
        <section className="summary">
            <div className="heading">
                <img src={Summary} alt="" className="icon"/>
                <h4>Division Summary</h4>
            </div>
            <div className="body">
                <img src={Phone} alt="" className="icon"/>
                <p>0801 234 5678</p>
            </div>
            <div className="body">
                <img src={Mail} alt="" className="icon"/>
                <p>asbfefr@gmail.com</p>
            </div>
            <div className="body">
                <img src={Location} alt="" className="icon"/>
                <p>Mojidi, Lagos</p>
            </div>
            <div className="body">
                <img src={Journal} alt="" className="icon"/>
                <p>2 Journal entries</p>
            </div>
            <div className="body">
                <img src={Fingerprint} alt="" className="icon"/>
                <p>24 fingerprints enrolled</p>
            </div>
        </section>
        <section className="module">
            <div className="heading">
                <img src={Module} alt="" className="icon"/>
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
                    <th><Icon path={mdiCheckboxBlankOutline} size={1}/></th>
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
                    <td><Icon path={mdiCheckboxBlankOutline} size={1}/></td>
                    <td><img src={Union} alt=""/></td>
                    <td>{data.NAME}</td>
                    <td>{data.LOCATION}</td>
                    <td>{data.STATUS}</td>
                    <td>{data.ENTRIES.Entry} <p className="sub">{data.ENTRIES.Entry_type}</p></td>
                    <td>{data.RISK_PROFILE}</td>
                    <td><img src={Vector} alt=""/></td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default Home;