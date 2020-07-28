import React, { useState,useEffect } from 'react';
import ServerCard from '../serverCard/serverCard';
import DataContext from '../../DataContext';

const ServerList = (props) => {
const [servers,SetServers] = useState([])
const [error,setError] = useState(false) 

console.log(servers);
useEffect(() => {
(async ()=>{
    try{
    const res = await fetch('/api/servers');
    const {success,data} = await res.json()
    if(success){
        setError(false)
        SetServers(data);
    }else{
        setError(true)
    }
    } catch(e) {
        setError(true)
    }
})()
}, [])

          return (
              <DataContext.Provider value={{servers,SetServers}} >
                            <div className="server-list">
                   <h2>ServerList</h2>
                   {servers.map(server=> <ServerCard key={server.id} {...server}/>)}
                   {error && <div>Error</div>}
                   </div> 
              </DataContext.Provider>
    
               )
    };

export default ServerList;
