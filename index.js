let quotesArray = [
  'It is said of all companies, Little Bird Toys make the best wooden toys! — New York Times',
  'The siblings have their own sense of magic when it comes to their products. — The Atlantic',
  'This little bird is flying high with their quality! — Washington Post',
  'Simply put, these people are legends in the making, ready to make their mark on our world! — Associated Press',
  'Nothing needs to be battery powered to be considered good. — USA Today',
  'If you want the best classic toy for your children, then Little Bird is the company for you. — Wall Street Journal',
  'I suppose that we can expect this company to be part of our lives for generations to come. — U.S. News'
  ];
  
  let randomNumber = Math.floor(Math.random()*quotesArray.length);
  
  document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '”' + ' — ' + quotesArray[randomNumber].split(' — ')[1];
  
  //console.log(quotesArray[randomNumber].split(' — ')[0]);