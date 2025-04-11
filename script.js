function initSumCalculator() {
      const btn = document.getElementById('sum_btn');
      btn.addEventListener('click', function () {
        const num1 = Number(document.getElementById('n1').value);
        const num2 = Number(document.getElementById('n2').value);
        const sum = num1 + num2;

        document.getElementById('Sum').textContent = isNaN(sum) ? '' : sum;
      });
    }
    window.addEventListener('DOMContentLoaded', initSumCalculator);