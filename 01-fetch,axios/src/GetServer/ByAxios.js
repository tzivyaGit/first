import axios from "axios"

export const GetAllData = async () => {
    let returnValue=""
    // פונקצייה זו כבר מבצעת המרה מ-JSON
    axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // data- מילה שמורה
            //האובייקט המוחזר מהשרת מכיל מידע רב על קריאת השרת שהבצעה
            //גישה  לנתונים עצמם תעשה ע"י data
            console.log(res.data);
            returnValue=res.data
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>{
            debugger
            return returnValue
        })
       
}