let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <br>
      <img src="./images/fig1.png" style="width:15%">
      <br>
      <br>
      <p style="text-align:left">
         A man weighing ${wt} kgf descends to the ground from an aeroplane with the help of a parachute against the resistance of air. <br>
         The velocity with which the parachute comes down is ${u} m/s. <br>
         Find the diameter of the parachute. Take C<sub>D</sub> = ${C_D_a2} and density of air &rho; = ${rho_a2} kg/m<sup>3</sup>
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Drag force (F<sub>D</sub>)
      </p>

      <div id="act2-F-D-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ F_D = \\text{weight of man} \× g =   $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-F-D-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_F_D();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    wt = random1(75, 91);
    u = random1(18, 23);
    F_D_a2 = wt * 9.81;
    A_a2 = (F_D_a2 * 2) / (C_D_a2 * rho_a2 * Math.pow(u, 2));
    D = Math.sqrt((4 * A_a2) / Math.PI);
    console.log('wt', wt);
    console.log('u', u);
    console.log('F_D_a2', F_D_a2);
    console.log('A_a2', A_a2);
    console.log('D', D);
}
function a2_verify_F_D() {
    let inp = (document.getElementById('act2-F-D-inp'));
    console.log(F_D_a2);
    if (!verify_values(parseFloat(inp.value), F_D_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-F-D-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_D = \\text{weight of man} \× g =  ${parseFloat(F_D_a2.toFixed(2))} \\ N $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p>
         $$
            F_D = C_DA \× \\frac{\ρU^2}{2}
         $$
      </p>
      <div id="act2-A-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A = \\frac{F_D}{C_D} \× \\frac{1}{\\rho} \× \\frac{2}{U^2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-A-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_A();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_A() {
    let inp = (document.getElementById('act2-A-inp'));
    console.log(A_a2);
    if (!verify_values(parseFloat(inp.value), A_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = \\frac{F_D}{C_D} \× \\frac{1}{\\rho} \× \\frac{2}{U^2} =  ${parseFloat(A_a2.toFixed(3))} \\ m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p>
         $$
            A = \\frac{\π}{4} D^2
         $$
      </p>
      <div id="act2-D-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$D = \\sqrt{\\frac{4A}{\\pi}} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-D-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_D();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_D() {
    let inp = (document.getElementById('act2-D-inp'));
    console.log(D);
    if (!verify_values(parseFloat(inp.value), D)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-D-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$D = \\sqrt{\\frac{4A}{\\pi}} =  ${parseFloat(D.toFixed(2))} \\ m $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act2-btn1'>Next</button>
      
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map