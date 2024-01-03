
function addcontent() {
  var companyInput = document.getElementById('Company').value;
  var customInput = document.getElementById('Customer').value;
  var customerEmailInput = document.getElementById('customer-Email').value;
  var emailInput = document.getElementById('Email').value;
  var customerPhoneInput = document.getElementById('cusPhone').value;
  var phoneInput = document.getElementById('Phone').value;
  var invoiceInput = document.getElementById('invoiceNumber').value;
  var dateInput = document.getElementById('Date').value;

  document.getElementById('companyName').innerHTML = companyInput;
  document.getElementById("signatureSpace1").innerHTML = "For " + companyInput;

  document.getElementById('billTo').innerHTML = "Bill to: " + customInput;
  document.getElementById('customer-phone').innerHTML = "Phone No. " + customerPhoneInput;
  document.getElementById('phoneNum').innerHTML = "Phone No. " + phoneInput;
  document.getElementById('email').innerHTML ="Email: " + emailInput;
  document.getElementById('customer-email').innerHTML = customerEmailInput;
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
  itemNameInput.value = '';
  // quantityInput.value = 1;
  quantityInput.value = 1;
  priceInput.value = 1;
  // amountInput.value = 1;
  

}
function calculateTotal() {
  var table = document.getElementById('itemTable');
  let total = 0;

  // Loop through table rows, starting from index 1 (skipping header)
  for (let i = 1; i < table.rows.length -1; i++) {
    // Use parseFloat for more reliable parsing of numeric values
    total += parseFloat(table.rows[i].cells[5].innerText.replace('₹', '')) || 0;
  }

  // Display total, subTotal, and tax amounts
  document.getElementById('totalAmount').innerHTML = '₹' + total;
  document.getElementById('subTotal').innerHTML = '₹' + total;
  
  // Calculate and display tax amount (assuming tax is 18%)
  var taxAmount = total * 0.18;
  document.getElementById('tax').innerHTML = '₹' + taxAmount.toFixed(2);

  // Calculate overall amount
  let overallAmount = total + taxAmount;

  // Display overall amount and convert to words using the inWords function
  document.getElementById('oTotal').innerHTML = '₹' + overallAmount.toFixed(2);
  document.getElementById('result').innerHTML = inWords(overallAmount).toUpperCase();

  // Set 'bal' to overall amount (assuming 'bal' stands for balance)
  document.getElementById('bal').innerHTML = '₹' + overallAmount.toFixed(2);
}

var isClickInProgress = false;

function printDiv() {
  
  if(isClickInProgress){
    return;
  }
  isClickInProgress = true;
  calculateTotal();

  window.print();
  isClickInProgress = false;

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

  // // Remove the 'active' class from all tabs
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Show the selected content div
  var selectedContent = document.getElementById(tabName + 'Content');
  if (selectedContent) {
    selectedContent.style.display = 'flex';
    selectedContent.style.justifyContent = "space-around";
    selectedContent.style.flexWrap = "wrap";
    selectedContent.style.margin = "20px 0 12px 0";

    // Add the 'active' class to the clicked tab
    var clickedTab = document.querySelector('.tab.' + tabName);
    if (clickedTab) {
      clickedTab.classList.add('active');
    }
  }
}
  