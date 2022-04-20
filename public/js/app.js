console.log('cleine side javascript is working')

// fetch('/weather?address=boston').then((response)=>{

//     response.json().then((data)=>{

//         if (data.error) {
//             console.log(data.error)
//         } else {
//         console.log(data)
//         }
//     })

// })

const weatherForm=document.querySelector('form')
const search = document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

    
      weatherForm.addEventListener('submit', (e)=>{
          e.preventDefault()

          const location=search.value

          console.log(location)

          fetch('/weather?address='+location).then((response)=>{

            response.json().then((data)=>{
        
                if (data.error) {
                    console.log(data.error)
                    messageOne.textContent=data.error
                } else {
                    console.log(data)
                    //messageTwo.textContent=data.location+JSON.stringify(data.Data)
                    messageTwo.textContent=data.location +"." + "    Current is "+  data.foreCast

                }
            })
        
        })
        




      })