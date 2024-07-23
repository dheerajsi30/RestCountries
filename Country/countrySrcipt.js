const countryName = new URLSearchParams(location.search).get('name')
const counterHead= document.querySelector('.countertitle')
const image= document.querySelector('.country-image')
const leftitem=document.querySelector('.left')
const righitem=document.querySelector('.right')
const currencies= document.querySelector('.currencies')
const languages=document.querySelector('.languages')
const toplable= document.querySelector('.top-label')
const backbuttona = document.querySelector('.back-btn')
const bordersbtn=document.querySelector('.borders')
const mode =document.querySelector('.mode')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then(([data])=>{
    
    counterHead.innerHTML=data.name.common
    image.src=data.flags.svg
    leftitem.innerHTML=` <h1 class="countertitle">${data.name.common}</h1>
                    <p><b>Native Name :</b><span>&nbsp;&nbsp;${data.name.common}</span></p>
                    <p><b>Population :</b><span>&nbsp;&nbsp;${data.population.toLocaleString('en-IN')}</span></p>
                    <p><b>Region :</b><span>&nbsp;&nbsp;${data.region}</span></p>
                    <p><b>Sub Region :</b><span>&nbsp;&nbsp;${data.subregion}</span></p>
                    <p><b>Capital :</b><span>&nbsp;&nbsp;${data.capital}</span></p>
     `
                    toplable.innerHTML=data.tld 
                    if(data.currencies){
                        console.log(currencies);
                        console.log(`${Object.values(data.currencies)[0].name}`)
                        currencies.innerHTML=`${Object.values(data.currencies)[0].name}`
                    }else{
                        currencies.innerHTML="hhello"
                    }

                    if(data.languages){
                        languages.innerHTML= `${Object.values((data.languages)).join(', ')}` 
                    }

                    if(data.borders){    
                        data.borders.forEach((e)=>{
                            fetch(`https://restcountries.com/v3.1/alpha/${e}`)
                            .then((bordersdata)=> bordersdata.json())
                            .then(([value])=>{
                                console.log(value.borders)
                              const datatab =document.createElement('a')
                              datatab.innerHTML=`${value.name.common}`
                              datatab.classList.add('borderitems')
                              datatab.href=`./country.html?name=${value.name.common}`
                              bordersbtn.appendChild(datatab)
                            })
                         })
                    }

                    
})

backbuttona.addEventListener('click',()=>{
    history.back()
})
mode.addEventListener('click',()=>{
    if(document.body.classList.toggle('dark')){
    }
    else{
        mode.innerHTML="dark"
    }
   

})