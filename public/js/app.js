console.log('cleine side javascript is working')

fetch('http://localhost:3000/weather?address=boston').then((response)=>{

    response.json().then((data)=>{
        console.log(data)
    })

})