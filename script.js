

function addItem() {
  var sr_noInput = document.getElementById('sr_no');
  var itemNameInput = document.getElementById('itemName');
  var quantityInput = document.getElementById('quantity');
  var priceInput = document.getElementById('price');
  // var amountInput = document.getElementById('amount');

  var SrNo = sr_noInput.value;
  var itemName = itemNameInput.value;
  var quantity = quantityInput.value;
  var price = priceInput.value;
  // var amount = amountInput.value;

  if (itemName.trim() === '') {
    alert('Please enter a valid item name.');
    return;
  }

  var table = document.getElementById('itemTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = SrNo;
  cell2.innerHTML = itemName;
  cell2.style.textAlign = "start";
  cell3.innerHTML = ""
  cell4.innerHTML = quantity;
  cell5.innerHTML = "₹" + price;
  cell6.innerHTML = "₹" + quantity * price;

  var currentValue = parseFloat(sr_noInput.value);
  if (!isNaN(currentValue)) {
    var result = currentValue + 1;
  }

  // Clear input fields
  sr_noInput.value = result;
  itemNameInput.value = 'Item';
  // quantityInput.value = 1;
  quantityInput.value = 1;
  priceInput.value = 1;
  amountInput.value = 1;
  // calculateTotal();
  // convertToWords();
  // console.log(calculateTotal);
}
// function calculateTotal() {
//   var total = 0;

//   var amountElements = document.querySelectorAll('#myTable tbody td:nth-child(6)');

//   amountElements.forEach(function (amountElement) {
//       var amountValue = parseFloat(amountElement.innerText);
//       if (!isNaN(amountValue)) {
//           total += amountValue;
//       }
//   });

//   document.getElementById('totalAmount').innerText = total;
// }


function printDiv() {
  window.print();
}

// function convertToWords() {
//   var numberInput = document.getElementById('amount');
//   var resultElement = document.getElementById('result');

//   // Define arrays for one-digit, two-digit, and tens multiples
//   var oneDigit = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//   var twoDigit = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
//   var teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

//   // Convert the number to an array of digits
//   var digits = numberInput.toString().split('').map(Number);

//   // Handle single-digit and two-digit numbers
//   if (digits.length === 1) {
//     resultElement.innerText = 'Result: ' + oneDigit[digits[0]];
//   } else if (digits.length === 2) {
//     if (digits[0] === 1) {
//       resultElement.innerText = 'Result: ' + teens[digits[1] - 1];
//     } else {
//       resultElement.innerText = 'Result: ' + twoDigit[digits[0]] + ' ' + (digits[1] !== 0 ? oneDigit[digits[1]] : '');
//     }
//   } else {
//     // Handle three-digit numbers
//     var hundreds = oneDigit[digits[0]] + ' Hundred';
//     var tens = (digits[1] === 1 ? teens[digits[2] - 1] : twoDigit[digits[1]]) + ' ' + (digits[2] !== 0 ? oneDigit[digits[2]] : '');

//     resultElement.innerHTML = 'Result: ' + (digits[0] !== 0 ? hundreds + ' ' : '') + (digits[1] !== 0 ? tens : '');
//   }
// }



function showContent(tabName, event) {
  if (event) {
    event.preventDefault();
  }
  // Hide all content divs
  var contentDivs = document.querySelectorAll('.user-details');
  contentDivs.forEach(function (div) {
    div.style.display = 'none';
  });

  // Remove the 'active' class from all tabs
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Show the selected content div
  var selectedContent = document.getElementById(tabName + 'Content');
  selectedContent.style.display = 'flex';
  selectedContent.style.justifyContent = "space-around";
  selectedContent.style.flexWrap = "wrap";
  selectedContent.style.margin = "20px 0 12px 0";

  // Add the 'active' class to the clicked tab
  var clickedTab = document.querySelector('.tab.' + tabName);
  clickedTab.classList.add('active');
}
