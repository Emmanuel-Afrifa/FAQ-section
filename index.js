let entity = document.getElementsByClassName('entity')

for (let i=0; i<entity.length;i++){
    entity[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}