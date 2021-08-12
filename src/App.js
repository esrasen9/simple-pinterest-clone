import './App.css';
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";
import {useState, useEffect} from "react";
const App = () => {

    const [pins,setPins] = useState([]);

    const getImages = (query) => {
        const url = "https://api.unsplash.com/search/photos";
        return unsplash.get(url,{
                params: { query }
        });
    }

    const onSearchSubmit = (query) => {
        getImages(query).then((res) => {
            const {results} = res.data;
            const newPins = [...results,...pins];
            setPins(newPins);
        });
    }

    const getStarterPins = () => {
        const allPinPromises = [];
        let allPinData = [];
        const queries = ["ocean","dog","cat","Tokyo","forest","mount","japanese","random"];
        queries.forEach((query)=>{
            allPinPromises.push(
                getImages(query).then((res)=>{
                    const {results} = res.data;
                    allPinData = allPinData.concat(results);
                    allPinData.sort((a,b)=>{
                        return 0.5 - Math.random();
                    } )
                })
            );
        });
        Promise.all(allPinPromises).then(()=>{
            setPins(allPinData);
        })
    }

    useEffect(() =>{
        getStarterPins();
    },[])

     return (
      <div className="app">
        <Header onSubmit={onSearchSubmit}/>
        <Mainboard pins={pins}/>
      </div>
    );
}

export default App;
