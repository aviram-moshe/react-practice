import React, {useContext} from 'react';
import DataContext from '../../DataContext';

const Button = (props) => {
    const {id, status} = props
    // console.log(id,status);
    const {servers,SetServers} = useContext(DataContext);
    const updateStatus = async() => {
        try {
            const res = await fetch('/api/server/status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: status === 0 ? 1: 0,
                    ID: id
                })
            })
            const {success} = await res.json();
            if(success) {
                const updatedServers = servers.map(server=>{
                    if(server.status) {
                        return {...server, status:status === 0 ? 1: 0}
                    }
                    return server
                }) 
                SetServers(updatedServers)
            }else{alert("Failed to return")}
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <button onClick={updateStatus} type="checkbox" checked={status}>{status ? "On" : "Off"}</button >
    )
}

export default Button;