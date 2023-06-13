let quotesArray = [
  'It is said of all companies, Little Bird Toys make the best wooden toys! — New York Times',
  'The siblings have their own sense of magic when it comes to their products. — The Atlantic',
  'This little bird is flying high with their quality! — Washington Post',
  'Simply put, these people are legends in the making, ready to make their mark on our world! — Associated Press',
  'Nothing needs to be battery powered to be considered good. — USA Today',
  'If you want the best classic toy for your children, then Little Bird is the company for you. — Wall Street Journal',
  'I suppose that we can expect this company to be part of our lives for generations to come. — U.S. News',
  'One day we all may look back on today and know that we witnessed the birth of one of the greatest toy companies ever concieved — New York Post',
  'You can not mess with classic perfection, and this company proves just that! — The Boston Globe'
  ];
  
  let randomNumber = Math.floor(Math.random()*quotesArray.length);
  
  document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '”' + ' — ' + quotesArray[randomNumber].split(' — ')[1];
  
  console.log(quotesArray[randomNumber].split(' — ')[0]);



/*this makes it so that when you open the page, only the life of the designer tab is open and the rest are automatically closed*/
document.getElementById("planeContent").style.display = "none";
document.getElementById("carContent").style.display = "none";
document.getElementById("trainTab").className =
  "mcgovernPanelTab highlight";
/*this function hides the pannels*/
function hidePanels() {
  document.getElementById("planeContent").style.display = "none";
  document.getElementById("carContent").style.display = "none";
  document.getElementById("trainContent").style.display = "none";
  document.getElementById("boatContent").style.display = "none";
  document.getElementById("blocksContent").style.display = "none";

  document.getElementById("planeTab").className = "mcgovernPanelTab";
  document.getElementById("trainTab").className = "mcgovernPanelTab";
  document.getElementById("carTab").className = "mcgovernPanelTab";
  document.getElementById("boatTab").className = "mcgovernPanelTab";
  document.getElementById("blocksTab").className = "mcgovernPanelTab";
}
/*this function opens the tab with the work of the designer*/
function showPlane() {
  hidePanels();
  document.getElementById("planeContent").style.display = "block";
  document.getElementById("planeTab").className =
    "mcgovernPanelTab highlight";
}
/*this function opens the tab about the life of the designer*/
function showTrain() {
  hidePanels();
  document.getElementById("trainContent").style.display = "block";
  document.getElementById("trainTab").className =
    "mcgovernPanelTab highlight";
}
/*this function opens the tab about the style of the designer*/
function showCar() {
  hidePanels();
  document.getElementById("carContent").style.display = "block";
  document.getElementById("carTab").className =
    "mcgovernPanelTab highlight";
}

function showBoat() {
  hidePanels();
  document.getElementById("boatContent").style.display = "block";
  document.getElementById("boatTab").className =
    "mcgovernPanelTab highlight";
}

function showBlocks() {
  hidePanels();
  document.getElementById("blocksContent").style.display = "block";
  document.getElementById("blocksTab").className =
    "mcgovernPanelTab highlight";
}
