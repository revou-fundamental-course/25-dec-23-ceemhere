const alas= document.getElementById('alas')
        const tinggi= document.getElementById('tinggi')
        const hitung= document.getElementById('hitung')
        const output= document.getElementById('output')
        hitung.addEventListener('click', function (){
        let a = alas.value 
        let t = tinggi.value 
        let l = 0.5*a*t 
        output.innerHTML = `Hasil Luas segitiga dari alas ${a} dan tinggi ${t} cm
        adalah ${l} cm2`
        })
        
        function reset(){
            alas.value =null;
            tinggi.value =null;
            output.value =null;
        }
