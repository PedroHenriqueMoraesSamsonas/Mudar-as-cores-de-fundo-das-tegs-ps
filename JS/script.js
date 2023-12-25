const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');
let click = 0;
function muda() {
    const estiloQuadrado = getComputedStyle(document.body)
    const radius = estiloQuadrado.borderRadius;

    /*
    const estiloQuadrado1 = getComputedStyle(document.quadrado)
    const radius2 = estiloQuadrado.borderRadius;
    console.log(radius2, radius);
    */

    const estilosBody = getComputedStyle(document.body);
    const backCorBody = estilosBody.backgroundColor;
    console.log(backCorBody);
    click++;
    let count = 0;
    for (let p of ps) {
        count++;
        p.style.backgroundColor = backCorBody;
        p.style.color = '#FFFFFF';
        p.style.borderRadius = '10px';
        p.style.transition = '500ms';


        console.log(click)
        if (click >= 2) {
            p.style.backgroundColor = 'transparent';
            p.style.color = 'black';
            p.style.transition = '500ms';
            console.log(click);
            if (ps.length == count) {
                click = 0;
                console.log("o victor pegou na pika do munir")
            }
        }
    }
}
