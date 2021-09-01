var x = 5.8
var intX = parseInt(x)
var fracX = x - intX
var temMin = false
console.log('int: ' + intX + ' fracX: ' + fracX.toFixed(2))
var horas = x*24
if (!Number.isInteger(horas)) {
	var fracHoras = horas - parseInt(horas)
	var minutos = fracHoras*60
	var temMin = true
}
if (temMin) console.log(parseInt(horas) + ' horas e ' + Math.round(minutos) + ' minutos')
else console.log(parseInt(horas) + ' horas')