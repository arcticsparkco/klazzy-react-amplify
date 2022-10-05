// Constants.js

const prod = {
 url: {
  API_URL: "http://klazzy-flask-dev.ap-southeast-1.elasticbeanstalk.com/api/v1/"
 }
};

const dev = {
 url: {
  API_URL: "http://0.0.0.0:5000/api/v1/"
 }
};



export const config = process.env.NODE_ENV === "development" ? dev : prod;

console.log(process.env.NODE_ENV)
console.log(config)