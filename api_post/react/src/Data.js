import React, {useEffect, useState} from "react";
import axios from "axios";



const Data = () => {

    const [posts, setPosts] = useState ([]);

    const show1=()=>
    {
   
        axios.get("http://127.0.0.1:8000/api/data")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });
    
    }


    return(
        <div>
             <button onClick={show1}>Click to Show API data</button>
             <table>
                <tr>    
                    <th>Name</th>
                    <th>Password</th>
                    <th>Address</th>
                </tr>
                {posts.map(post=>(
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.password}</td>
                        <td>{post.address}</td>
                    </tr>
                ))}
            </table>    
           
        </div>
    );

}
export default Data;