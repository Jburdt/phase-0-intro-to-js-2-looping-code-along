// // t( 'returns an array of thank you messages for each name provided to the function', () => {
// //     expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.eq([
// //       "Thank you, Guadalupe, for the wonderful surprise gift!",
// //       "Thank you, Ollie, for the wonderful surprise gift!",
// //       "Thank you, Aki, for the wonderful surprise gift!",
// //     ]);
// //   } );
// // } );

const names = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(names) {
    const messages = []
    
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

return messages
}


// it( 'invokes console.log once for each number, counting down from the number provided to zero', () => {
//     countDown( 10 );
//     expect( spy.callCount, "Expected countDown(10) to invoke 11 console.logs" )
//       .to.eq( 11 );
//   } );



function countDown(start) {
    let i = start;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

