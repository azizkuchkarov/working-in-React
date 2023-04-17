import "./App.css";

const User = ({ firstName, lastName, link }) => {
  return (
    <div>
      <h1>
        Mening ismim {firstName} sharifim {lastName}
      </h1>
      <a href={link}>Youtube Kanalim</a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <User firstName="Aziz" lastName="Shuxratovich" link="www.youtube.com" />
      <User firstName="Laziz" lastName="Aslonovich" link="www.youtube.com" />
    </div>
  );
}

export default App;
