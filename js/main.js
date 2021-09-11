// DOM elemnts 
let elStep1 = document.querySelector('#title');
let elStep2 = document.querySelector('#description');
let elStep3 = document.querySelector('#data');
let elContentText = document.querySelector('.content-text');
let elBackBtn = document.querySelector('.back');
let elSubmitBtn = document.querySelector('.submit');

let contentValue = ["Choose title content", "Choose description content", "Are you happy now?", "Ok we're done. Thanks for sending us your data!"];

elStep1.addEventListener("change", function() {
  if (elStep2.checked === true) {
    this.checked = true;
    this.disabled = true;
    elStep2.checked = false;
    elStep2.disabled = false;
  };
  if (this.checked === true) {
    elStep3.checked = false;
    elStep3.disabled = true;
    elBackBtn.style.display = "none";
    elSubmitBtn.style.display = "inline-block";
    elSubmitBtn.textContent = "Submit title";
    elContentText.textContent = contentValue[0];
  };
});

elStep2.addEventListener("change", function() {
  if (elStep3.checked === true) {
      this.checked = true;
      elStep3.checked = false;
  };
  if (this.checked === true) {
      elStep3.disabled = false;
      this.disabled = true;
      elStep1.disabled = false;
      elBackBtn.style.display = "inline-block";
      elBackBtn.textContent = "Back";
      elSubmitBtn.style.display = "inline-block";
      elSubmitBtn.textContent = "Submit description";
      elContentText.textContent = contentValue[1];
  } else {
      elStep3.disabled = true;
      elStep3.checked = false;
      elContentText.textContent = contentValue[0];
  };
});

elStep3.addEventListener("change", function() {
  if (this.checked === true) {
      this.disabled = true;
      elStep2.disabled = false;
      elBackBtn.textContent = "No, go back";
      elSubmitBtn.textContent = "Yes, go ahead";
      elContentText.textContent = contentValue[2];
  } else {
      elContentText.textContent = contentValue[1];
  };
});

elSubmitBtn.addEventListener("click", function() {
  if (elStep2.checked !== true) {
      elStep2.checked = true;
      elStep2.disabled = true;
      elStep1.disabled = false;
      elStep3.disabled = false;
      elBackBtn.style.display = "inline-block";
      elBackBtn.textContent = "Back";
      this.textContent = "Submit description";
      elContentText.textContent = contentValue[1];
  } else if (elStep1.checked === true && elStep2.checked === true && elStep3.checked === true) {
      elBackBtn.style.display = "none";
      elSubmitBtn.style.display = "none";
      elContentText.textContent = contentValue[3];
  } else {
      elStep3.checked = true;
      elStep3.disabled = true;
      elStep2.disabled = false;
      elBackBtn.textContent = "No, go back";
      this.textContent = "Yes, go ahead";
      elContentText.textContent = contentValue[2];
  };
});

elBackBtn.addEventListener("click", function() {
  if (elStep2.checked === true && elStep3.checked !== true) {
      elStep2.checked = false;
      elStep2.disabled = false;
      elStep1.disabled = true;
      elStep3.disabled = true;
      elBackBtn.style.display = "none";
      elSubmitBtn.textContent = "Submit title";
      elContentText.textContent = contentValue[0];
  } else if (elStep3.checked == true) {
      elStep3.checked = false;
      elStep3.disabled = false;
      elStep2.disabled = true;
      elBackBtn.style.display = "inline-block";
      elBackBtn.textContent = "Back";
      elSubmitBtn.textContent = "Submit description";
      elContentText.textContent = contentValue[1];
  };
});
