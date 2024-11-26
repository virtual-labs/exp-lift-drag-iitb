let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Buoyancy and Floatation: Lift and Drag</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      <p style="text-align:left">
         A flat plate ${l} &times; ${w} moves at ${U_km_h}km/h in stationary air of density ${rho_a1}kg/m<sup>3</sup>.
         <br>
         If coefficient of drag and lift are ${C_D_a1} and ${C_L_a1} respectively. Determine
         <ol type="i" style="text-align:left;">
            <li>The lift force</li>
            <li>Drag Force</li>
            <li>The resultant force</li>
            <li>Directio of the resultant force</li>
            <li>The power required to keep the plate in motion</li>
         </ol>
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Area of plate
      </p>

      <div id="act1-A-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A = L × W =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-A-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_A();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    l = parseFloat(random(1, 1.5).toFixed(1));
    w = parseFloat(random(1, 1.5).toFixed(1));
    U_km_h = random1(40, 51);
    U_m_s = parseFloat(((U_km_h * 1000) / (60 * 60)).toFixed(2));
    A_a1 = l * w;
    F_L_a1 = (C_L_a1 * A_a1 * rho_a1 * Math.pow(U_m_s, 2)) / 2;
    F_D_a1 = (C_D_a1 * A_a1 * rho_a1 * Math.pow(U_m_s, 2)) / 2;
    F_R_a1 = Math.sqrt(Math.pow(F_D_a1, 2) + Math.pow(F_L_a1, 2));
    dir = Math.atan2(F_L_a1, F_D_a1) * (180 / Math.PI);
    P_a1 = F_D_a1 * U_m_s;
    console.log('l', l);
    console.log('w', w);
    console.log('U', U_km_h, U_m_s);
    console.log('A_a1', A_a1);
    console.log('F_L_a1', F_L_a1);
    console.log('F_D_a1', F_D_a1);
    console.log('F_R_a1', F_R_a1);
    console.log('dir', dir);
    console.log('P_a1', P_a1);
}
function a1_verify_A() {
    let inp = (document.getElementById('act1-A-inp'));
    console.log(A_a1);
    if (!verify_values(parseFloat(inp.value), A_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = L × W =  ${parseFloat(A_a1.toFixed(2))} \\ m^2 $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         (&#x2160;) Lift Force (F<sub>L</sub>)
      </p>
      <div id="act1-F-L-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$F_L = C_LA\× \\frac{\ρU^2}{2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-F-L-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_F_L();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_F_L() {
    let inp = (document.getElementById('act1-F-L-inp'));
    console.log(F_L_a1);
    if (!verify_values(parseFloat(inp.value), F_L_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-F-L-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_L = C_LA\× \\frac{\ρU^2}{2}=  ${parseFloat(F_L_a1.toFixed(2))} \\ N $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         (&#x2161;) Drag Force (F<sub>D</sub>)
      </p>
      <div id="act1-F-D-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$F_D = C_DA\× \\frac{\ρU^2}{2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-F-D-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_F_D();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_F_D() {
    let inp = (document.getElementById('act1-F-D-inp'));
    console.log(F_D_a1);
    if (!verify_values(parseFloat(inp.value), F_D_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-F-D-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_D = C_DA\× \\frac{\ρU^2}{2}=  ${parseFloat(F_D_a1.toFixed(2))} \\ N $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
         (&#x2162;) Resultant Force (F<sub>R</sub>)
      </p>
      <div id="act1-F-R-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$F_R = \\sqrt{F_D^2 + F_L^2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-F-R-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_F_R();' id='act1-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_F_R() {
    let inp = (document.getElementById('act1-F-R-inp'));
    console.log(F_R_a1);
    if (!verify_values(parseFloat(inp.value), F_R_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-F-R-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_R = \\sqrt{F_D^2 + F_L^2} =  ${parseFloat(F_R_a1.toFixed(2))} \\ N $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
         (&#x2163;) Direction of resultant 
      </p>
      <div id="act1-dir-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\θ = tan^{-1}\\left(\\frac{F_L}{F_D}\\right) = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-dir-inp' class='form-control fs-16px' /><span style="display:contents;"> &deg;</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_dir();' id='act1-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_dir() {
    let inp = (document.getElementById('act1-dir-inp'));
    console.log(dir);
    if (!verify_values(parseFloat(inp.value), dir)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-dir-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\θ = tan^{-1}\\left(\\frac{F_L}{F_D}\\right) =  ${parseFloat(dir.toFixed(2))}\°$$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
         (&#x2164;) Power require to keep plate in motion 
      </p>
      <div id="act1-P-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$P = F_D × U = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-P-inp' class='form-control fs-16px' /><span style="display:contents;"> W</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_P();' id='act1-vf-btn6'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_P() {
    let inp = (document.getElementById('act1-P-inp'));
    console.log(P_a1);
    if (!verify_values(parseFloat(inp.value), P_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-P-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$P = F_D × U  =  ${parseFloat(P_a1.toFixed(2))}\\ W$$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
         
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
      
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map