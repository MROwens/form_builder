# form_builder
# Project Title

Node.js Dynamic form builder

## Getting Started

### Requires
```
Node
```
```
npm
```

### Installation
Clone this repo:
```
git@github.com:MROwens/form_builder.git
```
Install any dependancies:
```
npm install
```

###Test Output
From project root run:
```
node src/test.js
```


##Usage

Pass the formBuilder method an array of objects
```
const exampleArr = [{
  type: 'text',
  id: 'someId',
  class: 'someClass',
},
{
  type: 'select',
  id: 'someId',
  options: ['option1', 'option2']
}];
```
Output:
```
<input type="text" id="someId" class="someClass"/><select id="someId"><option value='option1'>option1</option><option value="option2">option2</option></select>
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
