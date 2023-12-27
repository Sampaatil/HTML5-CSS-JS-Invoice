
function addItem1() {
  var companyInput = document.getElementById('Company').value;
  var customInput = document.getElementById('Customer').value;
  var emailInput = document.getElementById('Email').value;
  var phoneInput = document.getElementById('Phone').value;
  var invoiceInput = document.getElementById('invoiceNumber').value;
  var dateInput = document.getElementById('Date').value;

  console.log(companyInput);
  console.log(customInput);
  console.log(emailInput);
  console.log(phoneInput);
  console.log(invoiceInput);
  console.log(dateInput);

  document.getElementById('companyName').innerHTML = companyInput;
  document.getElementById('billTo').innerHTML = "Bill to: " + customInput;
  document.getElementById('phoneNum').innerHTML = "Phone No. " + phoneInput;
  document.getElementById('email').innerHTML = "Email: " + emailInput;
  document.getElementById('invoiceNo').innerHTML = "Invoice No.: " + invoiceInput;
  document.getElementById('date').innerHTML = "Date: " + dateInput;
}


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
  ;
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
  cell6.innerHTML = "₹"+ quantity * price;

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
  // amountInput.value = 1;
  

}
function calculateTotal() {
    var table = document.getElementById('itemTable');
    let total = 0;
    for(let i = 1; i<table.rows.length; i++){
        total+=Number(table.rows[i].cells[5].innerText.replace('₹',''));
    }
    document.getElementById('totalAmount').innerHTML= '₹'+ total; 
    document.getElementById('subTotal').innerHTML= '₹'+ total; 
    document.getElementById('tax').innerHTML= '₹'+ total*(0.18);
    let overallAmount = total + total*(0.18);
    
    let amountInWord = inWords(overallAmount).toUpperCase();
    document.getElementById('result').innerHTML= amountInWord;
    document.getElementById('oTotal').innerHTML = '₹' +overallAmount;
    document.getElementById('bal').innerHTML = '₹' +overallAmount;

  // Set the total text
  
}


function printDiv() {
  
  calculateTotal();

  window.print();

}

function inWords (num) {
  var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if ((num = num.toString()).length > 9) return 'The Number is too big';
  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return; var str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
  return str;

}

function showContent(tabName) {
  
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
