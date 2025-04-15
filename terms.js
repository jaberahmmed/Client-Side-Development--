document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality needed for the Terms of Service page
    // For example, you might want to add a print button or other interactive elements
    
    // Example: Add a print button functionality
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Terms';
    printButton.className = 'print-button';
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    // Insert the print button at the top of the page
    const header = document.querySelector('h1');
    if (header) {
        header.insertAdjacentElement('afterend', printButton);
    }
    
    // Add styling for the print button via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        .print-button {
            display: block;
            margin: 0 auto 20px;
            padding: 10px 20px;
            background-color: #e74c3c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        .print-button:hover {
            background-color: #c0392b;
        }
        
        @media print {
            .print-button {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});