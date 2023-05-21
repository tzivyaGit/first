export const getAllUsers = async () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    fetch('https://jsonplaceholder.typicode.com/users',requestOptions)
    // במקרה של הצלחה- הצלחתי לגשת לשרת, הצלחתי להחזיר נתונים
        .then((res) => {res.json() })
        // הצלחתי להמיר את הנתונים
        .then((data)=>{
            console.log(data);
            return data
        })
        // במקרה של כישלון- תפיסת השגיאה
        //err-אובייקט המכיל פרטים על השגיאה
        //חשוב מאוד לתפוס אותו, כדי לזהות את מקור השגיאה
        .catch((err)=>{
            console.log(err);
        })
}