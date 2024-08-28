const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#HEIGHT').value);
    const weight = parseInt(document.querySelector('#WEIGHT').value);
    const result = document.querySelector('#result')
    if(height === '' || height < 1 || isNaN(height)) {
        result.innerHTML = "PLEASE GIVE A VALID HEIGHT"
    }
    if(weight === '' || weight < 1 || isNaN(weight)) {
        result.innerHTML = "PLEASE GIVE A VALID weight"
    } else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        //result.innerHTML = `<span>${BMI}</span>`;
        if(BMI < 18.6) {
            result.innerHTML = `you are underweight, according to your height: ${height} and weight: ${weight}, bmi is: ${BMI}`
        }
        if(BMI >= 18.6 && BMI <= 24.9) {
            result.innerHTML = `you are perfect weight, according to your height: ${height} and weight: ${weight}, bmi is: ${BMI}`
        }
        if(BMI > 24.9) {
            result.innerHTML = `you are overWeight, according to your height: ${height} and weight: ${weight}, bmi is: ${BMI}`
        }
    }

})