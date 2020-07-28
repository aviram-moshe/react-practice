import React from 'react';
import Button from '../Button/Button';

const ServerCard = (props) => {
    const {name, id, ip, server_date, company, status} = props
    console.log(status);
    return (
        <div className="server-card">
            <ul>
                <li> <strong> Name: </strong> {name} </li>
                <li> <strong> IP: </strong>{ip} </li>
                <li> <strong> Company: </strong>{company} </li>
                <li> <strong> Date: </strong>{server_date} </li>
                <li> <strong> Status: </strong> {status === 0 ? "On" : "Off"}  </li>
                <li><Button id={id} status={status} /></li>
                </ul>
        </div>
    )
};

export default ServerCard;