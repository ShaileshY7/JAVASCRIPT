const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault(e);

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==''|| height<0 || isNaN(height)){
        results.innerHTML=`Please enter valid height ${height}`;
    }else if(weight==''|| weight<0 || isNaN(weight)){
        results.innerHTML=`Please enter valid weight ${weight}`;
    }else{
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         results.innerHTML = `<span> ${bmi} </span>`;
         if(bmi<18){
            results.innerHTML += `<span>Underweight</span>`;
         }
         else if(bmi>=18&&bmi<=24){
            results.innerHTML += `<span>Normal weight</span>`;
         }
         else if(bmi>24){
            results.innerHTML += `<span>Overweight</span>`;
         }
    }
});