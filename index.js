let quotesArray = [
  'NAPS is by far the most significant cultural force of the decade. — New York Times',
  'These days sleeping at your desk is not just acceptable, it’s encouraged. — The Atlantic',
  'NAPS has changed the way people think about sleep, on a grand scale. — Washington Post',
  'Happiness increased 200% since NAPS began promoting siestas. — National Science Review',
  'NAPS has ushered in a new era of sleep. — USA Today',
  'Not surprisingly, more siestas means more productivity. — Wall Street Journal',
  'NAPS is doing the hard work of helping people get the rest they need. — U.S. News'
  ];
  
  let randomNumber = Math.floor(Math.random()*quotesArray.length);
  
  document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '”' + ' — ' + quotesArray[randomNumber].split(' — ')[1];
  
  //console.log(quotesArray[randomNumber].split(' — ')[0]);