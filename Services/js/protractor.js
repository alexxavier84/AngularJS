it('should test the service', function(){
   expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
   .toEqual('test');
});