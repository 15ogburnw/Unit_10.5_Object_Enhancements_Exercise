it ('should return an object with correct firstName and lastName keys for createInstructor(firstName,lastName)', () =>{

    expect(createInstructor('Wade','Ogburn')).toEqual({firstName:'Wade', lastName:'Ogburn'});
});

it('should return an oject with a key that is equal to the favoriteNumber argument for computedPropertyNames(favoriteNumber)', () => {
    expect(computedPropertyNames(54)).toEqual({firstName: 'Colt', 54: 'That is my favorite!'});
})

it ('should return an oject containing a species key and a noise function for createAnimal(species,verb,noise)', () => {

    const animal = createAnimal('cat', 'meow', 'meooow');
    console.log(animal.species);
    expect(animal.species).toEqual('cat');
    expect(animal.meow()).toEqual('meooow');
})