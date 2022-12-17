const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provider', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
    };

    expect(queryString(obj)).toEqual('name=Fabio&profession=developer');
  });
});
