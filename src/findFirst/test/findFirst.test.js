import chai from 'chai';
import findFirst from '../findFirst.js';
import { objTree, objTreeSameProps } from '../../exemplaryObjects';

chai.expect();

const expect = chai.expect;

describe('testing findFirst()', () => {
  it('should find and return proper object', () => {
    expect(findFirst(objTree, 'children', {name5: 'name5'})).to.eql({ name5: 'name5', city5: 'city5' });
    expect(findFirst(objTree, 'children', {name5: 'name5', city5: 'city5'})).to.eql({ name5: 'name5', city5: 'city5' });
    expect(findFirst(
      objTree,
      'children',
      { children: [{ name8: 'name8' }] }
      )).to.eql(
      {
        name6: 'name6',
        city6: 'city6',
        children: [
          {
            name8: 'name8'
          }
        ]
      }
    );
  });
  it('should return false', () => {
    expect(findFirst(objTree, 'children', {name9: 'name5'})).to.equal(false);
    expect(findFirst(objTree, 'children', {name5: 'name5', city9: 'city5'})).to.equal(false);
    expect(findFirst(objTree, 'children', { children: [{ name8: 'name9' }] })).to.equal(false);
  });
  it('should return root object', () => {
    expect(findFirst(objTree, 'children', {name: 'foo'})).to.eql(objTree);
  });
  it('should find and return first matching object', () => {
    expect(findFirst(objTreeSameProps, 'children', {city2: 'city2'})).to.have.property('name2', 'foo2');
    expect(findFirst(objTreeSameProps, 'children', {name6: 'name6'})).to.have.property('city2', 'city2');
  });
});
