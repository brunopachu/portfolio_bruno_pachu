Feature('people');

Scenario('Teste validar request people',  ({ I }) => {

    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()

});

Scenario('Teste validar request people 4',  ({ I }) => {

    I.sendGetRequest('/people/4')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsJson({
        name: 'Darth Vader'
    })
    I.seeResponseContainsKeys(['name','mass'])

});
