/* This program/function will generate a random, non-existant video game quote that you might see in a loading screen! Uh... maybe?
 It gnerates 3 pieces of data and generates a random loading screen quote to fit the data into, then returns it. */
 let quoteMaker = () => {
     //These next 4 lines are the arrays/lists of all potential words to be used in the finalized quote.
    firstWordArray = ['Bananas', 'Metal Ingots', 'Wood Planks', 'Fecal Matter', 'Rocks', 'Apple Pie', 'Kidneys', 'Toenails', 'Guitars', 'Rats', 'a basketball', 'a Baseball Bat'];
    secondWordArray = ['Car Keys', 'Chicken Corden Bleu', 'Horseshoes', 'Nails', 'Gravel', 'Pimple Skin', 'Ingrown Hairs', 'Mushrooms', 'Magical Mozerella Sticks', 'Dirt', 'Waffles', 'a Beatroot', 'a Hydralisk', 'a Sack of Gems'];
    thirdWordArray = ['A 1999 Honda Civic LX', 'The Sword of Tides', 'Absolutely Nothing', 'A Suspicious Pile of Dirt', 'A Wooden Chest', 'A Disgusting Face Mask', 'A Simple Tire Iron', 'A Laughably Small Meal', 'The Cloak of the Ignoramus', 'Fertilizer', 'Bread Crumbs', 'a Forklift Certification', 'Manmade Horrors Beyond Our Comprehension', 'the Void', 'a Jar of Worms', 'a Cardboard Box', 'a Rancid Turd'];
    fourthWordArray = ['The Vileman Derelict', 'Ohio', 'an LDS Church', 'Brazil', 'A New York Alleyway', 'a Warzone', 'the Void', 'the Torture Dimension', 'a Sky Fortress']
     //These next 4 lines are used to grab a random number 0-9, and will be used to pick words for the quote.
     firstWord = firstWordArray[Math.floor(Math.random() * firstWordArray.length)];
     secondWord = secondWordArray[Math.floor(Math.random() * secondWordArray.length)];
     thirdWord = thirdWordArray[Math.floor(Math.random() * thirdWordArray.length)];
     fourthWord = fourthWordArray[Math.floor(Math.random() * fourthWordArray.length)];
     //Picks a random word from all the lists
     pickAWordArray = [firstWord, secondWord, thirdWord];
     pickAWord = pickAWordArray[Math.floor(Math.random() * pickAWordArray.length)];
     //Picks a random word from all the lists
     //These next 2 lines are used for the main quote body: A list of the potential quote bodies, and the random quote body picker.
     quoteBodyArray = [`Did you know that ${firstWord} along with ${secondWord} can be used to craft ${thirdWord}? We didn't!`, `You can dismantle ${thirdWord} to get ${firstWord} and ${secondWord}! It's strange, but Works!`, `${thirdWord} is one of the most powerful items in the game! Couldn't tell you why though!`, `${firstWord}, an extremely valuable item, can be traded for lots of money!`, `${secondWord}, a basically useless item, is probably best thrown into the nearest trash bin!`, `According to the ancient texts, ${thirdWord} grants magical properties to ${secondWord}`, `Did you know ingesting ${pickAWord} will transport you to ${fourthWord}? Makes no damn sense.`, `Wandering around in ${fourthWord} grants a higher chance to find ${pickAWord}.`];
     quoteBody = quoteBodyArray[Math.floor(Math.random() * quoteBodyArray.length)];
     return console.log(quoteBody);
 }
 quoteMaker();
