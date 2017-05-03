# Demo for 2 way data binding 

## Install

```
npm install
```

## Run

```
npm start
```

## Usage

- Dom --> Data

Change the value of input in browser and see how data changes on console.

- Data --> Dom

On the console, get `data` and change it's value, DOM will change accordingly.

```js
data.value = 'hello world'
```

## Requirement

1. DOM <input> --> Data

  listener

  data.value = input.value

2. Data --> DOM <input>

  listener

  input.value = data.value

3. Data --> Multiple DOM <input> & <div id="text"></div>

4. Data --> TodoList

  div --> ul > li

  object --> array of object