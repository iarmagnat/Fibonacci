//coucou

// I used flats inan attempt to increase accuracy... That didn't work...
// I can't explain it but from the 80th element and up, we only get an estimate... which is why I left the scientific
// notation that strts at the 104th element and didn't use the full notation ( .toLocaleString('fr') ).
secondToLast = 0.0;
last = 1.0;
count = 0;

function fibo(){
    temp = last;
    last += secondToLast;
    secondToLast = temp;
    return last;
}

function getColor(index){
    grayValue = Math.floor(index * 255 / 100);
    color = 'rgb(' + grayValue + ',' + grayValue + ',' + grayValue + ')';
    grayValue = (grayValue + 127) % 255;
    bgColor = 'rgb(' + grayValue + ',' + grayValue + ',' + grayValue + ')';
    return [color, bgColor];
}

function update(){
    amount = document.getElementById("amount").value;
    if (amount > 0){
        for (var i = 0; i < amount; i++) {
        addToMain(fibo());
    }
}

applyStyles();
}

function addToMain(value){
    span = document.createElement('span')
    span.innerHTML = value;
    span.setAttribute('id', 'n' + count);
    span.setAttribute('class', 'number');
    document.getElementById("main").appendChild(span);
    count += 1;
    old = document.getElementById("n" + (count - 101));

    if (old){
        console.log('coucou');
        old.parentNode.removeChild(old); //awkward way to do it, if not totaly stupid, but the only one I found.
    }
}

function reset(){
    document.getElementById("main").innerHTML = '';
    secondToLast = 0.0;
    last = 1.0;
    count = 0;
    addToMain(secondToLast);
    addToMain(last);
    for (var i = 0; i < 98; i++) {
        addToMain(fibo());
    }
    applyStyles();
}

function  applyStyles(){
    for(var i = 0; i < 100; i++) {
        element = document.getElementById("n" + (count - 100 + i));
        colors = getColor(i)
        element.style.color = colors[0];
        element.style.backgroundColor = colors[1];
    }
}

addToMain(secondToLast);
addToMain(last);

for (var i = 0; i < 98; i++) {
    addToMain(fibo());
}
applyStyles();