document.querySelector('.get_jokes').addEventListener('click',getJokes);
function getJokes(e){
    console.log('Get jokes');
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status === 200){
            const response = this.responseText;
            
            const obj = JSON.parse(this.responseText);
            console.log(obj);

            let output = '';
            if(obj.type === 'success'){
            obj.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>`;
            });
            }else{
                output += '<li>Something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    
    xhr.send();
    e.preventDefault();
}