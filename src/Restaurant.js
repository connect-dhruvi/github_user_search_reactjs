import './App.css';

function Header(props) {
  return (
    <div><header> <h1> {props.name}'s Kitchen </h1> </header>
      <p> started on {props.start}</p>
    </div>
  )
}

function Main(props) {
  return (
    <div> <h4> you have {props.items.length} items</h4>
      <ul>
        {props.items.map((d) => <li key ={d.id}>{d.title}</li>)}
      </ul>
    </div>
  )
}

const dishes =[
  "Dark Blend Coffee",
  "Cookie",
  "Muffin",
  "Donut"
]

const dishObj = dishes.map((d,i) => ({ id: i , title :  d}))
function Footer(props) {
  return (
    <footer> <h3> Copyright  &#169;  {props.year} </h3> </footer>
  )
}
function Restaurant() {
  return (
    <div className="App">
      <Header name="Cindy" start="16 Dec" />
      <Main items={dishObj} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default Restaurant;
