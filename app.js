

var percents = [
    document.getElementById('5'),
    document.getElementById('10'),
    document.getElementById('15'),
    document.getElementById('25'),
    document.getElementById('50'),
    document.getElementById('custom')
]







var bill_input = document.getElementById('div_field')
var number_field = document.getElementById('person')
var person_field = document.getElementById('person_field')
var percent_class = document.getElementById('percent')
var person_error = document.getElementById('error')
var tip_amount = document.getElementById('tip_amount')
var total_amount = document.getElementById('total_amount')
var reset = document.getElementById('reset')

function appears(){

bill_input.addEventListener('click', function(){
    // for(var i = 0; i < number_field.length; i++){
    //     number_field[i].style['display'] = ' ';
    //     console.log('here')
    // }
    number_field.style.display = 'flex'
    number_field.style.animation='appear 1s forwards'
})




person_field.addEventListener('click', function(){
    percent_class.style.display = 'flex'
    percent_class.style.animation='appear 1s forwards'
})
}

appears()

json_data = {
    bill_input_value : 0,
    person_field_value : 0
}

function data_renew(){
    bill_input.addEventListener('input', function(){
        var input_value = parseInt(bill_input.value)
        json_data.bill_input_value = input_value
        console.log(json_data)
    })

    person_field.addEventListener('input', function(){
        var person_field_value = person_field.value
                
        if(person_field_value <= 0){
            error.style.display = 'flex' 
        } else {
            error.style.display = 'none' 
            var input_value_2 = parseInt(person_field.value)
            json_data.person_field_value = input_value_2
            console.log(json_data)
        }  
    })


    percents[0].addEventListener('click', function(){
        if(json_data.bill_input_value > 0 && json_data.person_field_value > 0){
            tip_amount.textContent = (json_data.bill_input_value * parseInt(percents[0].getAttribute('value_int')) / 100 / json_data.person_field_value ).toFixed(2)
            total_amount.textContent = (json_data.bill_input_value / json_data.person_field_value + (json_data.bill_input_value * parseInt(percents[0].getAttribute('value_int')) / 100 / json_data.person_field_value)).toFixed(2)
        } 
    })

    
    percents[1].addEventListener('click', function(){
        if(json_data.bill_input_value > 0 && json_data.person_field_value > 0){
            tip_amount.textContent = (json_data.bill_input_value * parseInt(percents[1].getAttribute('value_int')) / 100 / json_data.person_field_value ).toFixed(2)
            total_amount.textContent = (json_data.bill_input_value / json_data.person_field_value + (json_data.bill_input_value * parseInt(percents[1].getAttribute('value_int')) / 100 / json_data.person_field_value)).toFixed(2)
        }
    })
    
    percents[2].addEventListener('click', function(){
        if(json_data.bill_input_value > 0 && json_data.person_field_value > 0){
            tip_amount.textContent = (json_data.bill_input_value * parseInt(percents[2].getAttribute('value_int')) / 100 / json_data.person_field_value ).toFixed(2)
            total_amount.textContent = (json_data.bill_input_value / json_data.person_field_value + (json_data.bill_input_value * parseInt(percents[2].getAttribute('value_int')) / 100 / json_data.person_field_value)).toFixed(2)
        }
    })
    
    percents[3].addEventListener('click', function(){
        if(json_data.bill_input_value > 0 && json_data.person_field_value > 0){
            tip_amount.textContent = (json_data.bill_input_value * parseInt(percents[3].getAttribute('value_int')) / 100 / json_data.person_field_value ).toFixed(2)
            total_amount.textContent = (json_data.bill_input_value / json_data.person_field_value + (json_data.bill_input_value * parseInt(percents[3].getAttribute('value_int')) / 100 / json_data.person_field_value)).toFixed(2)
        }
    })
    
    percents[4].addEventListener('click', function(){
        if(json_data.bill_input_value > 0 && json_data.person_field_value > 0){
            tip_amount.textContent = (json_data.bill_input_value * parseInt(percents[4].getAttribute('value_int')) / 100 / json_data.person_field_value ).toFixed(2)
            total_amount.textContent = (json_data.bill_input_value / json_data.person_field_value + (json_data.bill_input_value * parseInt(percents[4].getAttribute('value_int')) / 100 / json_data.person_field_value)).toFixed(2)
        }
    })

    document.getElementById('custom').addEventListener('input', function(){
        if(json_data.bill_input_value > 0 && json_data.person_field_value > 0 && parseInt(document.getElementById('custom').value) > 0 ){
            tip_amount.textContent = (json_data.bill_input_value * parseInt(document.getElementById('custom').value) / 100 / json_data.person_field_value ).toFixed(2)
            total_amount.textContent = (json_data.bill_input_value / json_data.person_field_value + (json_data.bill_input_value * parseInt(document.getElementById('custom').value) / 100 / json_data.person_field_value)).toFixed(2)
        }
    })
    
    reset.addEventListener('click', function(){
        tip_amount.textContent = '$0.00';
        total_amount.textContent = '$0.00';
        json_data.bill_input_value = 0;
        json_data.person_field_value = 0;
        bill_input.value = ''
        person_field.value = '';
    })
    
}


data_renew()
















