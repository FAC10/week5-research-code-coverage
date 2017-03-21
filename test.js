const test = require('tape');
const shot = require('shot');
const router = require('./router');

test('Initialise', (t) => {
  let num = 2
  t.equal(num, 2, 'Should return 2');
  t.end(); // Remember to call t.end() after every test call, to ensure tests run in order. You can also investigate t.plan() in the docs
});

// using tap-spec in the json file will decorate test output

test('Home route tests', (t) => {
  shot.inject(router, {method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.equal(res.payload, 'Hello', 'response should contain \'Hello\''); //payload is the response body.
    t.equal(res.headers['Content-Type'], 'text/html', 'response Content-Type should be text/html')
    t.end();
  })
});

test('Test unknown urls give 404 and give a message of unknown url', (t) => {
  shot.inject(router, {method: 'get', url: '/elephants'}, (res) => {

    t.equal(res.statusCode, 404, 'should respond with status code of 404');
    t.equal(res.payload, 'unknown url', 'response should contain unkown url');
    t.end();
  })
});

test('Blog route tests', (t) => {
  shot.inject(router, {method: 'get', url: '/blog' }, (res) => {
    const payloadParsed = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.equal(res.headers['Content-Type'], 'application/json', 'response Content-Type should be application/json');
    t.equal(payloadParsed[0].length, 3, 'Parsed payload length should be three');
    t.ok(payloadParsed[0].every((e) => {
      return typeof e === 'string';
    }));
    t.end();
  })


})

test('Blog POST route tests', (t) => {
  const JsonObj = JSON.stringify({'0':['string', 'string', 'string']});

  shot.inject(router, {method: 'post', url: '/blog', headers: {password: 'potato'}, payload: JsonObj}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');

    t.deepEqual(JSON.parse(res.payload), JSON.parse(JsonObj), 'should respond with JSON object');
    t.end();
  })
});
