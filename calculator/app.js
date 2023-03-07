let input = document.getElementById('result');
            
                function addToInput(val) {
                    input.value += val;
                }
            
                function clearInput() {
                    input.value = '';
                }
            
                function calculate() {
                    try {
                        input.value = eval(input.value);
                    } catch (e) {
                        input.value = 'Error';
                    }
                }