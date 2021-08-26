<html>
<body>
	<p id='out'>Aqui será apresentado o resultado</p>
</body>
</html>

<script>
	var n, y, z, q;
    n = parseInt(prompt('Quantas canetas:'));
    y = parseInt(prompt('Troco (R$):'));
    z = parseInt(prompt('Pagou com que cédula?'));
    if (n>0 && y>=0 && z>y) {
    	q = (z-y)/n;
        //document.write('Caneta custa: R$ ' + q.toFixed(2));
        //alert('Caneta custa: R$ ' + q.toFixed(2));
        document.getElementById('out').innerHTML = 'Caneta custa: R$ ' + q.toFixed(2);
    } else 
    	//document.write('Erro');
        //alert('Erro');
        document.getElementById('out').innerHTML = 'Erro';
</script>

