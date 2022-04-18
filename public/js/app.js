console.log('cleine side javascript is working')

fetch('/weather?address=boston').then((response)=>{

    response.json().then((data)=>{
        console.log(data)
    })

})