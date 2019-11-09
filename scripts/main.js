const submitButtons = document.querySelectorAll('.submit');
submitButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let parent = e.target.parentElement;
        let list = parent.childNodes[3];
        let listItems = list.getElementsByTagName('li');
        let targetCount = listItems.length;
        let count=0;
        for (let i=0; i < listItems.length; i++) {
            if (listItems[i].classList.contains('checked')) {
                count+=1;
            } else {
                listItems[i].classList.add('error');
                listItems[i].addEventListener('click', (e) => {
                    e.target.classList.remove('error');
                })                
            }
        }
        if (count != targetCount) {
                errorMessageExists = true;
                let errorLabel = document.createElement('h3');
                errorLabel.innerHTML = 'Explain why you did not complete all of the listed tasks';
                errorLabel.classList.add('errorLabel');
                let errorTextArea = document.createElement('TEXTAREA');
                errorTextArea.classList.add('errorTextArea');
                parent.appendChild(errorLabel);
                parent.appendChild(errorTextArea);
        } else {
            alert('great success');
            errorMessageExists = false;
            let labels = document.querySelectorAll('.errorLabel');
            labels.forEach(label => {
                parent.removeChild(label);
            })
        }
    })
})

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
var myNodelist = document.getElementsByTagName("LI");
var i;

var lists = document.querySelectorAll('ul');
lists.forEach((list) => {
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
})

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}