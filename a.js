// ==========================================
// EJERCICIO 1
// Error absoluto, relativo y propagación
// ==========================================

function ejercicio1() {

    let xa = parseFloat(document.getElementById("xa").value);
    let xv = parseFloat(document.getElementById("xv").value);

    // a) Error absoluto
    let Ea = Math.abs(xv - xa);

    // b) Error relativo porcentual
    let Er = (Ea / Math.abs(xv)) * 100;

    // c) Área
    let A = xv * xv;

    // Derivada de A = x²
    let derivadaA = 2 * xv;

    // Propagación del error
    let dA = Math.abs(derivadaA) * Ea;

    // d) Error relativo porcentual del área
    let ErA = (dA / A) * 100;

    document.getElementById("resultado1").innerHTML = `
        <strong>Resultados:</strong><br><br>

        Error absoluto:
        <strong>${Ea.toFixed(4)} cm</strong>
        <br>

        Error relativo porcentual:
        <strong>${Er.toFixed(4)} %</strong>
        <br>

        Área:
        <strong>${A.toFixed(4)} cm²</strong>
        <br>

        Error propagado del área:
        <strong>${dA.toFixed(4)} cm²</strong>
        <br>

        Error relativo porcentual del área:
        <strong>${ErA.toFixed(4)} %</strong>
    `;
}


// ==========================================
// EJERCICIO 2
// Series de Taylor
// ==========================================

function ejercicio2() {

    let x = parseFloat(document.getElementById("xTaylor").value);

    // Valor real de e^x
    let valorReal = Math.exp(x);

    // Taylor grado 1:
    // P1(x) = 1 + x
    let P1 = 1 + x;

    // Taylor grado 2:
    // P2(x) = 1 + x + x²/2
    let P2 = 1 + x + (x * x) / 2;

    // Error absoluto grado 1
    let error1 = Math.abs(valorReal - P1);

    // Error relativo grado 1
    let errorRel1 = (error1 / valorReal) * 100;

    // Error absoluto grado 2
    let error2 = Math.abs(valorReal - P2);

    // Error relativo grado 2
    let errorRel2 = (error2 / valorReal) * 100;

    // Cota de Lagrange
    // R2(x) <= e^x * x³ / 3!
    let cota = (Math.exp(x) * Math.pow(x, 3)) / 6;

    document.getElementById("resultado2").innerHTML = `
        <strong>Resultados:</strong><br><br>

        Valor real de e<sup>${x}</sup>:
        <strong>${valorReal.toFixed(7)}</strong>
        <br><br>

        Taylor grado 1:
        <strong>${P1.toFixed(7)}</strong>
        <br>

        Error absoluto P1:
        <strong>${error1.toFixed(7)}</strong>
        <br>

        Error relativo P1:
        <strong>${errorRel1.toFixed(4)} %</strong>
        <br><br>

        Taylor grado 2:
        <strong>${P2.toFixed(7)}</strong>
        <br>

        Error absoluto P2:
        <strong>${error2.toFixed(7)}</strong>
        <br>

        Error relativo P2:
        <strong>${errorRel2.toFixed(4)} %</strong>
        <br><br>

        Cota superior de Lagrange:
        <strong>${cota.toFixed(7)}</strong>
    `;
}


// ==========================================
// EJERCICIO 3
// Péndulo simple
// ==========================================

function ejercicio3() {

    let L = parseFloat(document.getElementById("L").value);
    let dL = parseFloat(document.getElementById("dL").value);

    let T = parseFloat(document.getElementById("T").value);
    let dT = parseFloat(document.getElementById("dT").value);

    // Fórmula:
    // g = 4π²L / T²

    let g = (4 * Math.pow(Math.PI, 2) * L) / Math.pow(T, 2);

    // Valor real
    let greal = 9.8;

    // Error absoluto
    let Ea = Math.abs(greal - g);

    // Error relativo porcentual
    let Er = (Ea / greal) * 100;


    // Derivada parcial respecto a L
    // ∂g/∂L = 4π²/T²

    let dg_dL =
        (4 * Math.pow(Math.PI, 2)) /
        Math.pow(T, 2);


    // Derivada parcial respecto a T
    // ∂g/∂T = -8π²L/T³

    let dg_dT =
        (-8 * Math.pow(Math.PI, 2) * L) /
        Math.pow(T, 3);


    // Propagación del error

    let dg =
        Math.abs(dg_dL) * dL +
        Math.abs(dg_dT) * dT;


    // Error relativo propagado

    let ErProp = (dg / Math.abs(g)) * 100;


    // Taylor de grado 1 alrededor de T = 2

    let T0 = 2;

    let g0 =
        (4 * Math.pow(Math.PI, 2) * L) /
        Math.pow(T0, 2);

    let derivadaT0 =
        (-8 * Math.pow(Math.PI, 2) * L) /
        Math.pow(T0, 3);

    let gTaylor =
        g0 + derivadaT0 * (T - T0);


    document.getElementById("resultado3").innerHTML = `
        <strong>Resultados:</strong><br><br>

        Valor experimental de g:
        <strong>${g.toFixed(6)} m/s²</strong>
        <br>

        Error absoluto:
        <strong>${Ea.toFixed(6)} m/s²</strong>
        <br>

        Error relativo porcentual:
        <strong>${Er.toFixed(4)} %</strong>
        <br><br>

        Derivada parcial respecto a L:
        <strong>${dg_dL.toFixed(6)}</strong>
        <br>

        Derivada parcial respecto a T:
        <strong>${dg_dT.toFixed(6)}</strong>
        <br><br>

        Error propagado:
        <strong>${dg.toFixed(6)} m/s²</strong>
        <br>

        Error relativo propagado:
        <strong>${ErProp.toFixed(4)} %</strong>
        <br><br>

        Aproximación de Taylor grado 1:
        <strong>${gTaylor.toFixed(6)} m/s²</strong>
    `;
}