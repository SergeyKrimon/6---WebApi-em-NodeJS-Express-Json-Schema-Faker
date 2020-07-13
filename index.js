const {resolve, extend} = require('json-schema-faker');
extend('faker', () => require('faker/locale/pt_BR'));
const fs = require('fs');

const schema = {
    type: "object",
  required: ["users"],
  properties: {
    users: {
      type: "array",
      minItems: 1,
      items: { "$ref": "#/definitions/users" }
    }
},
    definitions: {
    users: {
      type: "object",
      required: [ "name", "email"],
    properties: {
        name: {
            type: "string",
            faker: "name.findName"
        },
        email: {
            type: "string",
            faker: "internet.email"
        }
      }
    }
  }
};


    resolve(schema).then(sample => {
        console.log('Writing to usersFaker.json')
        fs.writeFile(`${__dirname}/data/usersFaker.json`, JSON.stringify(sample,null,'\t'), function(err) {
          if(err) {
            console.error(err);
          } else {
            console.log("done");
          }
        });
      });