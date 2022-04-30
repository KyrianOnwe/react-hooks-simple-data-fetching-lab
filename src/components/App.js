// create your App component here
import { useState, useEffect } from "react"

function App(){
    const url = "https://dog.ceo/api/breeds/image/random"
    const [screenState, setScreenState] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setScreenState(data);
            setIsLoaded(true)
            //console.log(screenState.message)
          });
      }, []);

      if (!isLoaded) return <p>Loading...</p>;

      
      return <div>
          <img src={screenState.message} alt={"A Random Dog"} />
    

      </div>


}


export default App;
