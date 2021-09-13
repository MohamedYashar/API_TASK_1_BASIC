

// select Button
document.getElementById("btn1").addEventListener("click", getData);

let output ='';

//  write function to display API DAT IN CONSOLE AND DOM

function getData()

{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(x => x.json())
    .then((data)=>{
         
         for (i=0; i<10; i++)
         {
            output = output 
            + 
            ` <div> 

            <img src="${data[i].thumbnailUrl}" alt="image">
            <p> ${data[i].title} </p>
            
            </div>`

        // TO PRINT DATA IN CONSOLE
            // console.log(data[i].title)
            // console.log(data[i].thumbnailUrl)
            
          document.getElementById("jinglee").innerHTML= output;
         }
        

    }).catch((err)=>{
        console.log(err,"unable to fetch data")
    })

}

    

// //Get UI variables.
// const itemList = document.querySelector('#itemList');
// let output = '';
// //Load Data Func
// document.querySelector('#getDataBtn').addEventListener('click', () => {

//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             for (let i = 0; i < 10; i++) {
//                 output = output + `<div>
//                 <img src="${data[i].thumbnailUrl}" alt="Image">
//                 <p>${data[i].title}</p>
//             </div>`
//             }

//             itemList.innerHTML = output;
//         })
//         .catch((err) => {
//             console.log(err.message);
//         })
// })

