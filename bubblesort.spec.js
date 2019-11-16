
describe('Bubble Sort', function(){
  beforeEach(function() {
    swapCounter = 0;
  });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts through an arrray', function(){
    expect( bubbleSort([2,1,3,4]) ).toEqual( [1,2,3,4] )
  })
  it('counts the number of sorts', function(){
    bubbleSort([2,1,3]);
    expect(swapCounter).toEqual(1);
  })
});
