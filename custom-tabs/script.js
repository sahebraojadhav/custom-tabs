//Lets continue tommorow 3:22

const tabContainer=document.querySelector('.container');
const tabButtons=document.querySelectorAll('.tab-button');
const tabContents=document.querySelectorAll('.content');


tabContainer.addEventListener('click',(event)=>{
    console.log(event.target.dataset);
    const currentId=event.target.dataset.id;

    if(currentId){
       // console.log(currentId);
        tabButtons.forEach(btn=>{
            btn.classList.remove('active');
        })
        event.target.classList.add('active');

        tabContents.forEach(content=>{
            content.classList.remove('active');
        })
        const currentElement=document.getElementById(currentId);
        console.log(currentElement);
        currentElement.classList.add('active');
    }

})