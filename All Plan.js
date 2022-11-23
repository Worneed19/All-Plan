const todayShowTime = document.querySelector('.t-timer');

   setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);


  //hfashfhaiiwefiwafwaef

  function getOption() {
      
      
    text = document.querySelector('#act').value;

    
    selectElement = document.querySelector('#select1');

    selectElement2 = document.querySelector('#select2');

    selectElement3 = document.querySelector('#select3');

    output = selectElement.value + ':' + selectElement2.value + selectElement3.value;

    document.querySelector('.output').textContent = output + ' ' + text;
}

    document.getElementById("btn").addEventListener("click", getOption);

    function getOption1() {
      
      
      text = document.querySelector('#act1').value;
  
      
      selectElement4 = document.querySelector('#select4');
  
      selectElement5 = document.querySelector('#select5');
  
      selectElement6 = document.querySelector('#select6');
  
      output = selectElement4.value + ':' + selectElement5.value + selectElement6.value;
  
      document.querySelector('.output1').textContent = output + ' ' + text;
  }
  
      document.getElementById("btn1").addEventListener("click", getOption1);


      function getOption2() {
      
      
        text = document.querySelector('#act2').value;
    
        
        selectElement7 = document.querySelector('#select7');
    
        selectElement8 = document.querySelector('#select8');
    
        selectElement9 = document.querySelector('#select9');
    
        output = selectElement7.value + ':' + selectElement8.value + selectElement9.value;
    
        document.querySelector('.output2').textContent = output + ' ' + text;
    }
    
        document.getElementById("btn2").addEventListener("click", getOption2);


        function getOption3() {
      
      
          text = document.querySelector('#act3').value;
      
          
          selectElement10 = document.querySelector('#select10');
      
          selectElement11 = document.querySelector('#select11');
      
          selectElement12 = document.querySelector('#select12');
      
          output = selectElement10.value + ':' + selectElement11.value + selectElement12.value;
      
          document.querySelector('.output3').textContent = output + ' ' + text;
      }
      
          document.getElementById("btn3").addEventListener("click", getOption3);

          
          
          function getOption4() {
      
      
            text = document.querySelector('#act4').value;
        
            
            selectElement13 = document.querySelector('#select13');
        
            selectElement14 = document.querySelector('#select14');
        
            selectElement15 = document.querySelector('#select15');
        
            output = selectElement13.value + ':' + selectElement14.value + selectElement15.value;
        
            document.querySelector('.output4').textContent = output + ' ' + text;
        }
        
            document.getElementById("btn4").addEventListener("click", getOption4);


            function getOption5() {
      
      
              text = document.querySelector('#act5').value;
          
              
              selectElement16 = document.querySelector('#select16');
          
              selectElement17 = document.querySelector('#select17');
          
              selectElement18 = document.querySelector('#select18');
          
              output = selectElement16.value + ':' + selectElement17.value + selectElement18.value;
          
              document.querySelector('.output5').textContent = output + ' ' + text;
          }
          
              document.getElementById("btn5").addEventListener("click", getOption5);



              function getOption6() {
      
      
                text = document.querySelector('#act6').value;
            
                
                selectElement19 = document.querySelector('#select19');
            
                selectElement20 = document.querySelector('#select20');
            
                selectElement21 = document.querySelector('#select21');
            
                output = selectElement19.value + ':' + selectElement20.value + selectElement21.value;
            
                document.querySelector('.output6').textContent = output + ' ' + text;
            }
            
                document.getElementById("btn6").addEventListener("click", getOption6);
        
            function remove() {
              const element = document.getElementsById("output");
              element.remove();
            }

            function remove1() {
              const element = document.getElementsById("output1");
              element.remove();
            }

            function remove2() {
              const element = document.getElementsById("output2");
              element.remove();
            }

            function remove3() {
              const element = document.getElementsById("output3");
              element.remove();
            }

            function remove4() {
              const element = document.getElementsById("output4");
              element.remove();
            }

            function remove5() {
              const element = document.getElementsById("output5");
              element.remove();
            }

            function remove6() {
              const element = document.getElementsById("output6");
              element.remove();
            }

            /*function dark() {

              document.getElementById("body").style.backgroundColor = "#545658";
              document.getElementById("footer").style.backgroundColor = "#6F7481";
              
          }
          function light() {
          
              document.getElementById("body").style.backgroundColor = "#EEECE3";
              document.getElementById("footer").style.backgroundColor = "#E48821";
          } */

const toggleBtn = document.getElementById("dark-mode");
const theme = document.getElementById("body");
const footer = document.getElementById("footer");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});