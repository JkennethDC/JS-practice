const textInput = document.getElementById('text-input'); 
const checkBtn = document.getElementById('check-btn');

const result = document.getElementById('result'); function isPalindrome(str) { 
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    return cleanedStr === cleanedStr.split('').reverse().join(''); 
    } 

checkBtn.addEventListener('click', () => { 
    if (!textInput.value.trim()) { 
         alert('Please input a value'); return; 
    } 

const text = textInput.value.trim(); 
const isTextPalindrome = isPalindrome(text); 

if (isTextPalindrome) { 
    result.textContent = `${text} is a palindrome`; 
} else { result.textContent = `${text} is not a palindrome`; 
    } 
});