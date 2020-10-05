const demo = require('./demo');

let inputValue = {
    hired: {
      be: {
        to: {
          deserve: 'I'
        }
      }
    }
  };

  let outputValue = {
    I: {
      deserve: {
        to: {
           be: 'hired'
        }
      }
    }
  };


let resultStr = JSON.stringify(demo.convertObj(inputValue));
test('123',()=>{
    expect(resultStr).toBe(JSON.stringify(outputValue));
});