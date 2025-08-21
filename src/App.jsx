import Header from "./components/Header";
import "./index.css"
import { useState, useEffect, createContext } from 'react'
import { getRandomPricedBooks } from "./components/fetch";
import { Link } from "react-router-dom";


const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRandomPricedBooks().then(newData => {
      const validData = newData.filter(item => {
        return item.thumbnail && item.thumbnail.startsWith("http");
      });
      setData(validData);
    });
  }, []);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
  
    console.log(
      data.filter(item => !item.thumbnail || !item.thumbnail.startsWith("http")),
    )
  }, [data]);
  

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

const App = () => {

  return (
    <>
      <Header link={'shop'} page={'🏪 Shop'} />
      <div className="mainPage">
        <div className="skew"></div>
        <div className="mainContainer">
          <div>wecolme to</div>
          <div>logo</div>
          <Link to='shop'>
            <button>Shop now!</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export { App, DataProvider, DataContext }
