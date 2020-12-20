import React, { useEffect, useState } from 'react';
import { Card , Image , Icon } from 'semantic-ui-react';
import './App.css';

function App4() {

   // const [data, setData] = useState(null);
    const [login, setLogin] = useState('');
    const [avatar, setAvatar] = useState('');
    const [url, setUrl] = useState('');
    const [bio, setBio] = useState('');
    const [repos, setRepos] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [location, setLocation] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {

        fetch(`https://api.github.com/users/connect-dhruvi`)
            .then(res => res.json())
            .then(data =>{
                if (data) {
                    handleData(data);
                    console.log(data);
                }})
                
             
       
    },[])
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = () => {
      fetch(`https://api.github.com/users/${search}`)
            .then(res => res.json())
            .then(data =>{
                if (data) {
                    handleData(data);
                console.log(data);

                }})
             }
      
    const handleData = ({ login, avatar_url, bio, html_url, followers, following, public_repos, location }) => {
        setLogin(login);
        console.log(login);
        setAvatar(avatar_url);
        setUrl(html_url);
        setBio(bio);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setLocation(location);
    }

    return (
        <div>
           <center><div className="nav"><h1>Github User Search</h1></div>
           <div className="ui input focus ">
                <input type="text" onChange={handleChange} placeholder="Search By Username" />
            </div>
            <button className="ui primary button" onClick={handleSubmit}> Search </button></center> <br/>
            { login==null ? <h1> Not Found</h1> :
            <center>
                <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{login}</Card.Header>
                  <Card.Meta>
                  <span className='date'>{location}</span>
                  </Card.Meta>
                  <Card.Description>
                    {bio}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  
                  Followers {followers} <br/> Following : {following}
                  Github: <a> {url}</a>
                </Card.Content>
              </Card>
            </center> 
            }
        </div>
            
    )
}


export default App4;