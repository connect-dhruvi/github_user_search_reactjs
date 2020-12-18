import {React} from 'react';
function Guest(){
    return <h1>Welcome Guest Users</h1>;
}function Users(){
    return <h1>Welcome Registered Users</h1>;
}

const [,,data]=['headphones','laptop','Mobile'];
console.log(data);
function App({authorize}){
    return(
<div>
{ authorize ? <Users/> : <Guest/>} 
<h1>second page</h1>
</div>
    )
}
export default App;
