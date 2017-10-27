# Form Builder

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

### Test Output
From project root run:
```
node src/test.js
```


## Usage

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

## Style Guide
AirBnB style guide
Extends DWA style guide

Running ```npm install``` will give you the required dependancies

### Testing

Run command ```mocha``` in project root
