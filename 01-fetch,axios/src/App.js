import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllUsers } from "./GetServer/ByFetch"
import { GetAllData } from "./GetServer/ByAxios"
import axios from 'axios';



function App() {
  //משתנה שיכיל את הנתונים שיחזרו מהשרת, ע"מ להציג אותם על המסך
  const [data, setData] = useState([])

  //מיד בעת טעינת הקומפוננטה יש צורך בנתונים
  // useEffect(async () => {
  //   //הפעלת הפונקציה הניגשת לשרת
  //   let myData = await GetAllData();
  //   debugger
  //   //הצבת הערך המוחזר במשתנה סטייט
  //   setData(myData)
  // }, [data])


  // //גישה לפונקציית fetch
  // useEffect(() => {
    //הגדרת פונקציה אסינכרונית
  //   async function fetchMyAPI() {
  //     let response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     response = await response.json()
  //     // let response = await getAllUsers();
  //     setData(response)
  //   }

  //הפעלת הפונקציה
  //   fetchMyAPI()
  // }, [])


   //גישה לפונקציית axios
   useEffect(() => {
    async function axiosMyAPI() {
      let response = await axios('https://jsonplaceholder.typicode.com/users')
      response = await response.data
      // let response = await getAllUsers();
      setData(response)
    }

    axiosMyAPI()
  }, [])

  return (
    <div className="App">
      {
        // בדיקה שאכן יש אובייקט, ויש לו אורך
        data !== undefined && data.length > 0
        && <>
          {
            // מעבר על המערך והדפסת הערכים
            data.map((d) => <>
              <h5>----{d.id}---</h5>
              <h5>----{d.name}---</h5>
              <hr/>
            </>)
          }
        </>
      }
    </div>
  );
}

export default App;
