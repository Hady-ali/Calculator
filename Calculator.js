// تعريف دالة لإضافة قيمة إلى عنصر العرض
function addToDisplay(value) {
    // الحصول على عنصر العرض من DOM باستخدام معرفه 'display'
    let display = document.getElementById('display');
    
    // إضافة القيمة الممررة (value) إلى نهاية القيمة الحالية في عنصر العرض
    display.value += value;
  }
  

function calculate() {
    let display = document.getElementById('display'); // يُحضر العنصر الذي يحمل id="display" من الصفحة HTML ويخزنه في متغير display
    try {
      display.value = eval(display.value); // يقوم بتقييم النص الموجود في عنصر العرض (display) باستخدام دالة eval() ويحفظ النتيجة في نفس عنصر العرض
    } catch (error) {
      display.value = 'Error'; // إذا حدث أي خطأ أثناء تقييم النص، يتم ضبط قيمة عنصر العرض على 'Error'
    }
  }
  
// دالة لمسح قيمة عنصر العرض
function clearDisplay() {
    // الحصول على عنصر العرض من DOM باستخدام معرفه 'display'
    let display = document.getElementById('display');
    
    // جعل قيمة عنصر العرض فارغة
    display.value = '';
  }
  