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
                continue
            }
        }
        // remove these...
        if (count != targetCount) {
            alert('why is there not more stuff done?')
        } else {
            alert('great success')
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

//LIST LOGICS
var myNodelist = document.getElementsByTagName("LI");
var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// let itemIsClicked = false;
// let textArea = document.querySelector('textarea');
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     if (!itemIsClicked) {
//         var div = this.parentElement;
//         textArea.style.display = "block";
//         itemIsClicked = true;
//         console.log(this.parentElement)
//     } else {
//         textArea.style.display = "none";
//         itemIsClicked = false;
//     }
//   }
// }

// Add a "checked" symbol when clicking on a list item
var lists = document.querySelectorAll('ul');
console.log(lists)
lists.forEach((list) => {
    list.addEventListener('click', function(ev) {
        console.log('clicked')
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
})


// Create a new list item when clicking on the "Add" button
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