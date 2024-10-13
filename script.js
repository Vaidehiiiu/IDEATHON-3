let totalAmount = 0;
let orderItems = [];
let itemOrders = {
    "Grilled Chicken": 0,
    "Margherita Pizza": 0,
    "Veggie Burger": 0,
    "Ice Cream Sundae": 0
};
// Function to handle table booking
function bookPersonalizedTable() {
    const tableNumber = document.getElementById('table-number').value;
    const bookingTime = document.getElementById('booking-time').value;

    if (bookingTime) {
        const notification = Table ${tableNumber} booked successfully for ${bookingTime}.;
        document.getElementById('table-booking-notification').innerText = notification;
        alert(notification);
    } else {
        alert("Please select a valid time slot.");
    }
}

// Event listener for table booking button
document.getElementById('book-table-btn').addEventListener('click', bookPersonalizedTable);

// Function to add items to the order
function addToOrder(itemName, price, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value, 10);

    // Ensure quantity is greater than zero
    if (quantity > 0) {
        const itemTotal = price * quantity;
        
        // Update total amount
        totalAmount += itemTotal;
        document.getElementById('total-amount').innerText = totalAmount;
        
        // Add item to order list
        orderItems.push({ itemName, price, quantity });
        itemOrders[itemName] += quantity; // Track item orders
        updateOrderSummary();
        updateMostPopularItem();  // Update analytics
        
        // Notify user
        alert(${quantity}x ${itemName} added to your order.);
    } else {
        alert("Please enter a valid quantity.");
    }
}

// Function to update the order summary on the page
function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = ''; // Clear the current list

    orderItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = ${item.quantity}x ${item.itemName} - ₹${item.price * item.quantity};
        orderSummary.appendChild(listItem);
    });
}

// Function to find and update the most popular item
function updateMostPopularItem() {
    let maxOrders = 0;
    let popularItem = "None";

    for (let item in itemOrders) {
        if (itemOrders[item] > maxOrders) {
            maxOrders = itemOrders[item];
            popularItem = item;
        }
    }

    document.getElementById('popular-item').innerText = popularItem;
}

// Function for UPI Payment
function initiateUPIPayment() {
    if (totalAmount > 0) {
        const upiId = prompt("Please enter your UPI ID to proceed with payment:");

        if (upiId) {
            // Simulate UPI payment initiation
            document.getElementById('upi-status').innerText = UPI Payment of ₹${totalAmount} initiated for UPI ID: ${upiId}. Please complete the payment using your UPI app.;
            alert(UPI payment of ₹${totalAmount} initiated for UPI ID: ${upiId}. Please complete the payment through your UPI app.);
        } else {
            alert('Payment canceled. Please provide a valid UPI ID.');
        }
    } else {
        alert('Your order is empty.');
    }
}

// Function to handle booking slot notification
function bookSlot() {
    document.getElementById('book-slot-notification').innerText = "Slot booked successfully!";
    alert("Slot booked successfully!");
}

// Function to handle virtual queue joining
function joinQueue() {
    document.getElementById('queue-notification').innerText = "You have joined the virtual queue.";
    alert("You have joined the virtual queue.");
}

// Event listeners for buttons
function addToOrder(itemName, price, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    const totalCost = price * quantity;
    alert(${quantity} x ${itemName} added to order. Total cost: ₹${totalCost});
    
    // Further logic for updating total order and payment
}


document.getElementById('pizza-btn').addEventListener('click', function() {
    addToOrder('Margherita Pizza', 400, 'pizza-qty');
});

document.getElementById('burger-btn').addEventListener('click', function() {
    addToOrder('Veggie Burger', 250, 'burger-qty');
});

document.getElementById('sundae-btn').addEventListener('click', function() {
    addToOrder('Ice Cream Sundae', 150, 'sundae-qty');
});

document.getElementById('upi-btn').addEventListener('click', initiateUPIPayment);
document.getElementById('book-slot-btn').addEventListener('click', bookSlot);
document.getElementById('virtual-queue-btn').addEventListener('click', joinQueue);