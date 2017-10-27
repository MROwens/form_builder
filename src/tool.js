exports.formBuilder = (formElements) => {

  //empty string to hold returned form
  let formOutput = '';

  //loop through object array
  formElements.forEach((element) => {

    //ensures element has type
    if(element.type){

      //switch statement to check input type
      switch(element.type.toLowerCase()){
        //check if form element contains class, id, etc.
        //then append to formOutput string
        case 'password':
        case 'text':
          formOutput += `<input type="${element.type}" `;
          formOutput += element.id ? `id="${element.id}" ` : '';
          formOutput += element.class ? `class="${element.class}" ` : '';
          formOutput += element.placeholder ? `placeholder="${element.placeholder}" ` : '';
          formOutput += element.required ? 'required' : '';
          formOutput += '/>';

          break;

        case 'label':
          formOutput += '<label ';
          formOutput += element.id ? `id="${element.id}" ` : '';
          formOutput += element.class ?  `class="${element.class} "` : '';
          formOutput += element.for ? `for="${element.for}" ` : '';
          formOutput += element.text ? `>${element.text}</label>` : '></label>';

          break;

        case 'select':
          formOutput += '<select ';
          formOutput += element.id ? `id="${element.id}" ` : '';
          formOutput += element.name ? `name="${element.name}" ` : '';
          formOutput += element.class ?  `class="${element.class}"> ` : '';
          //loop through element.option array if it exists
          //add options to select element
          if(element.option){
            for(let i = 0; i < element.option.length; i++){
              formOutput += `<option value="${element.option[i]}">${element.option[i]}</option>`
            }
          }else{
            formOutput += '</select>';
          }

          break;

        case 'submit':
          formOutput += `<input type="${element.type}" `;
          formOutput += element.id ? `id="${element.id}" ` : '';
          formOutput += element.name ? `name="${element.name}" ` : '';
          formOutput += element.class ? `class="${element.class}" ` : '';
          formOutput += element.value ? `value="${element.value}" ` : '';
          formOutput += element.action ? `action="${element.action}" ` : '';
          formOutput += '></input>';

          break;

        case 'radio':
          formOutput += `<input type="${element.type}" `;
          formOutput += element.name ? `name="${element.name} "` : '';
          formOutput += element.value ? `value="${element.value}" ` : '';
          formOutput += element.id ? `id="${element.id}" ` : '';
          formOutput += element.class ? `class="${element.class}" ` : '';
          formOutput += element.text ? `>${element.text}</input>` : '></input>';

          break;

        default:
          //error shown if element.type doesn not match case
          console.log(`Incorrect input type. Check object array input at ${element.type}.`);
      }

    }else{
      console.log('Missing element type. Check object array input.');
    }

  });
  //return formOutput
  return `<form method="post">${formOutput}</form>`;
}
