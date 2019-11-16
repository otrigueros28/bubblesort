describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
   expect(split([2,1,7,9,6,3])).toEqual([[1,2,7],[3,6,9] ])
  });
  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect( merge([1,2,7],[3,6,9]) ).toEqual([1,2,3,6,7,9])
    });
  });
  describe('merge Sort Function', function(){
    it('should take an unsorted array, and should use merge and split to sort them', function(){
      expect(mergeSort([9,2,8,6, 22,3])).toEqual([2,3,6,8,9,22])
    })
  })
});
