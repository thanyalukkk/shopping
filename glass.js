document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("orderButton");
    const orderModal = document.getElementById("orderModal");
    const closeModal = document.querySelector(".close-modal");
  
    orderButton.addEventListener("click", function() {
      orderModal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function() {
      orderModal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === orderModal) {
        orderModal.style.display = "none";
      }
    });
  
    // Form Validation
    const orderForm = document.getElementById("orderForm");
  
    orderForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Perform form validation here and show appropriate messages
      // Example validation:
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
  
      if (nameInput.value === "") {
        // Show error message for name field
      }
  
      if (emailInput.value === "") {
        // Show error message for email field
      }
  
      // Calculate total price and apply discount
      const totalPrice = calculateTotalPrice(); // Implement this function
  
      if (totalPrice > 1000) {
        applyDiscount(totalPrice); // Implement this function
      }
      
    });
  
    // Implement functions for calculating total price and applying discount
    function calculateTotalPrice() {
      // Calculate total price based on selected products
    }
  
    function applyDiscount(totalPrice) {
      // Apply discount to total price
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    $(".carousel").slick({
      autoplay: true,   // เล่นอัตโนมัติ
      dots: true,       // แสดงจุดควบคุม
      infinite: true,   // เลื่อนไปมาอย่างไม่สิ้นสุด
      speed: 500,       // ความเร็วในการเปลี่ยนภาพ (มิลลิวินาที)
      slidesToShow: 1,  // จำนวนรูปที่แสดงในแต่ละครั้ง
      slidesToScroll: 1 // จำนวนรูปที่เลื่อนในแต่ละครั้ง
    });
  });
  
  function minus1(icId) {
    var ic = document.getElementById(icId);
    var currentic = parseInt(ic.textContent);
    if (currentic > 0) {
      ic.textContent = currentic - 1;
    }
  }

function pluse1(icId) {
    var counter = parseInt(document.getElementById(icId).innerText);
    counter++;
    document.getElementById(icId).innerText = counter;
    updateTotalPrice();

    showAlert("เพิ่มลงตะกร้าสำเร็จ!");
}

function minus1(icId) {
    var counter = parseInt(document.getElementById(icId).innerText);
    if (counter > 0) {
      counter--;
      document.getElementById(icId).innerText = counter;
      updateTotalPrice();
    }
  
  }
  function updateTotalPrice() {
    var total = 0;
    var productPrices = [1099, 1899, 1799, 1299, 1599, 2999]; // ราคาสินค้าแต่ละรายการ
    var quantities = [
      parseInt(document.getElementById("icon-container1").innerText),
      parseInt(document.getElementById("icon-container2").innerText),
      parseInt(document.getElementById("icon-container3").innerText),
      parseInt(document.getElementById("icon-container4").innerText),
      parseInt(document.getElementById("icon-container5").innerText),
      parseInt(document.getElementById("icon-container6").innerText)
    ];
     
    for (var i = 0; i < productPrices.length; i++) {
        total += productPrices[i] * quantities[i];
      }
      if (total >= 1000) {
        total *= 0.9; // ลด 10%
        
    }
    var totalPriceElement = document.getElementById("totalPrice");
    var orderTotalPriceElement = document.getElementById("orderTotalPrice");
    totalPriceElement.textContent = total.toFixed(2) + "฿";
    orderTotalPriceElement.textContent = total.toFixed(2) + "฿";
  }

  function showAlert(message) {
    alert(message);
  }
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var postalCode = document.getElementById("postal-code").value;
    var paymentMethod = document.getElementById("payment-method").value;
  
    if (name === "" || email === "" || phone === "" || address === "" || postalCode === "") {
      showAlert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    } else {
      var orderTotalPrice = document.getElementById("orderTotalPrice").textContent;
      var message = "การสั่งซื้อสินค้าเสร็จสมบูรณ์!\nTotal : " + orderTotalPrice;
      showAlert(message);
    }
  }

  
  
  
  

  