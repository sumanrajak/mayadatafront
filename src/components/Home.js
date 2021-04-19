import React, { useEffect, useState } from 'react'
import del from "../images/del.png"
import serch from "../images/Vector (5).png"
import axios from "axios"


import "./home.css"
const Home = () => {
   
    // const [, setinputs] = useState("initialState")
    const [mname, setmname] = useState("")
    const [nooa, setnooa] = useState("")
    const [date, setdate] = useState("")
    const [end, setend] = useState("")
    const [start, setstart] = useState("")
    const [meets, setmeets] = useState([{
        "name": "SUMAN", "no_of_attendee": "2", "date": "2021-04-22", "end": "05:45", "start": "06:46","id":"14"
        }])
    const [search, setsearch] = useState("")
    const [strtdate, setstrtdate] = useState("")
    const [enddate, setenddate] = useState("")
    
    const no=[1,2]; 
    const handlSubmit=async(e)=>{
        e.preventDefault();
        setmeets((m) => {
            return  [...m,{
                name:mname,
                no_of_attendee:nooa,
                date:date,
                end:end,
                start:start
            }];
        })

        
        // console.log(value)
        var copy =[...meets,
        ]
        await axios.post("/sendmsg",{
            "name": mname, "no_of_attendee": nooa, "date": date, "end": end, "start": start
        })
        
        //console.log(meets)
        setmname('')
        
        //console.log(search)



    }
    
    
    const delte =async(id,idd)=>{
        //console.log(id)
        setmeets((meeto) => {
            return meeto.filter(( meet,index)=>{
                return index!==id;
            });
        })
        const res = await axios.delete(`/${idd}`);

    }
    useEffect(() => {
        const fetchdata= async ()=>{
            axios.get(`api/meets`).then((response)=>{
                setmeets(response.data)
                
                //console.log("fetched")

              }).catch(e=>{
                console.log("error")
              });
           
           
         
           
         };
    
     fetchdata();
          
           
      }, [])
    return (
        <div className="home">
            <h3>My Meetings</h3>
            
            
            <div className="search">
                <div className="searcg" style={{borderBottom:"2px solid #000000"}}><img src={serch} ></img> <input style={{borderBottom:"0px",height:"12px"}}  placeholder="Search" type="text" value={search} onChange={event=>setsearch(event.target.value)}></input></div>
                <div className="searcg"> <label>from : </label><input type="date" value={strtdate} onChange={event=>setstrtdate(event.target.value)}></input></div>
               
                <div className="searcg"> <label>to : </label><input type="date" value={enddate} onChange={event=>setenddate(event.target.value)}></input></div>
            </div>
            <div className="tablecrud">
                <div className="tablemain">

            <table>
                <thead>
                <tr  key="22332"className="">
                    <th>Sl. no.</th>
                    <th>Meeting name</th>
                    <th>No of People attending</th>
                    <th>Date</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Actions</th>

                </tr>
                
                </thead>
                <tbody>
                
                {
                   meets && meets.length>0 && meets.filter(meet=>{
                      if(search==""){
                          return meet
                      }else {
                          
                        return meet.name.toLowerCase().includes(search.toLowerCase())

                      }
                  }).filter(meet=>{
                    if(strtdate=="" && enddate==""){
                        return meet
                    }else if(strtdate=="" && enddate!=="") {
                        
                      return  meet

                    }
                    else if(strtdate!=="" && enddate=="") {
                        
                        return meet
  
                      }
                      
                      else{
                        return  new Date(meet.date) - new Date(strtdate) > -1 && new Date(meet.date) - new Date(enddate) < 1
                      }
                }).map((n,i)=>{
                        return  <tr key="23322">
                        <td key={i+n._id}>{i+1}</td>
                        <td key={n.name} >{n.name}</td>
                        <td key={n.no_of_attendee+n._id}>{n.no_of_attendee}</td>
                        <td key={n.date+n.start+n._id}>{n.date}</td>
                        <td key={n.start+n._id}>{n.start}</td>
                        <td key={n.end+n._id}>{n.end}</td>
                        <td key={n._id}><img src={del}  style={{cursor:"pointer"}} onClick={()=>{delte(i,n._id)}}></img></td>
                
                    </tr> 
                    
                    })
                }
                </tbody>
                </table>
                </div>
                <div className=" add">
                <form >
                <table>
               
                <tbody>
                <tr key="22234">
                    
                        {/* <td><input type="text" value={value.name} onChange={event=>setInput(event.target.value)}></input></td> */}
                        <td key="1"><input type="text" value={mname} onChange={event=>setmname(event.target.value)}></input></td>
                        <td key="22"><input type="text"value={nooa} onChange={event=>setnooa(event.target.value)} style={{width:"30px"}}></input></td>
                        <td key="31"><input type="date"  value={date}onChange={event=>setdate(event.target.value)}></input></td>
                        <td key="42"><input type="time"  value={start}onChange={event=>setstart(event.target.value)}></input></td>
                        <td key="623"><input type="time" value={end}onChange={event=>setend(event.target.value)}></input></td>
                        <td key="123"><button type='submit' value={nooa} onClick={handlSubmit}>add</button></td>
                        
                
                    </tr>
                    </tbody>
                
                   
                
                
</table>
</form>
</div>
            </div>
            

        </div>
    )
}

export default Home
