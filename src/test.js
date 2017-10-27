const tool = require('./tool.js');

const exampleInput = [
{
  type: 'label',
  for: 'email',
  text: 'Email',
  id: 'email',
  class: 'email',
},
{
  type: 'text',
  name: 'email',
  id: 'formPassword',
  class: 'formPassword',
  placeholder: 'Email',
  required: true
},
{
  type: 'password',
  name: 'password',
  id: 'formPassword',
  class: 'formPassword',
  placeholder: 'Pasword',
  required: true
},
{
  type: 'select',
  name: 'choose',
  id: 'select',
  class: 'select',
  option: ['option1', 'option2', 'option3']
},
{
  type: 'radio',
  name: 'choose',
  id: 'radio',
  class: 'radio',
  value: 'something',
  text: 'something'
},
{
  type: 'submit',
  name: 'formSubmit',
  id: 'formSubmit',
  action: 'form/action/url',
  class: 'formSubmit',
  value: 'Submit'
}
];

console.log(tool.formBuilder(exampleInput));
