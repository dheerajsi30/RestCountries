let card = document.querySelector('.main-box');
const filter= document.querySelector('.filter')
const search1 = document.querySelector('.search input')
const mode =document.querySelector('.mode')

let alldata
fetch('https://restcountries.com/v3.1/all')
.then((data) => data.json())
.then((data) =>{
    alldata=data
    myfunction(data)})

filter.addEventListener('change',(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res)=> res.json())
    .then(myfunction)
})


function myfunction(data){
    
    card.innerHTML=''
    data.forEach(element => {
        let cardbox = document.createElement('a')
        cardbox.href = `./country.html?name=${element.name.common}`
        cardbox.classList.add('card-box')
        let image = document.createElement('img')
        image.src=`${element.flags.svg}`
        image.classList.add('con-img')  
        cardbox.append(image)
        card.appendChild(cardbox)

        let cardtext = document.createElement('div')
        cardtext.classList.add('card-text')
        cardtext.innerHTML =`<h3>${element.name.common}</h3> 
                    <p>Population :<span>&nbsp;&nbsp;${element.population.toLocaleString('en-IN')}</span></p>
                    <p>Region :<span>&nbsp;&nbsp;${element.region}</span></p>
                    <p>Capital :<span>&nbsp;&nbsp;${element.capital}</span></p>
                </div>`      
        cardbox.appendChild(cardtext)
        
    });
}

    search1.addEventListener('input' ,(e)=>{
        console.log(e.target.value)
        const searchValue=alldata.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        myfunction(searchValue)
        console.log(searchValue)

    })

    mode.addEventListener('click',()=>{
        if(document.body.classList.toggle('dark')){
            mode.innerHTML="Light"
        }
        else{
            mode.innerHTML="dark"
        }
       

    })
   
    



