let a = 1;
let b = 4;
let c = 4;
let x1 = null;
let x2 = null;
let tipinfo = '请输入 A B C 三个参数';


let e_a = document.getElementById('a'); // id = 'a'
e_a.value = a;

let e_b = document.getElementById('b'); // id = 'b'
e_b.value = b;

let e_c = document.getElementById('c'); // id = 'c'
e_c.value = c;

let e_tipinfo = document.getElementById('tipinfo');
e_tipinfo.innerHTML = tipinfo;

// 获取元素对象
let e_clear = document.getElementById('btn_clear');

// 事件响应函数
function clear_click() {
    e_a.value = "";
    e_b.value = "";
    e_c.value = "";
    e_tipinfo.innerHTML = '请输入 A B C 三个参数';
}

// 完成元素的事件监听
e_clear.addEventListener('click', clear_click);
//-------------------------------------------------------------------

// 获取元素对象
let e_resolve = document.getElementById('btn_resolve');

// 事件响应函数
function resolve_click() {
    let aa = parseFloat(e_a.value);
    let bb = parseFloat(e_b.value);
    let cc = parseFloat(e_c.value);

    let delta = bb * bb - 4 * aa * cc;
    console.log('delta = ', delta);


    if (delta > 0) {
        const x1 = (-bb + Math.sqrt(delta)) / (2 * aa);
        const x2 = (-bb - Math.sqrt(delta)) / (2 * aa);
        tipinfo = `两个不相等实根:<br> x₁=${x1}     x₂=${x2}`;
    } else if (delta === 0) {
        const x = -bb / (2 * aa);
        tipinfo = `一个重根:<br> x=${x}`;
    } else {
        const real = -bb / (2 * aa);
        const imag = Math.sqrt(-delta) / (2 * aa);
        tipinfo = `一对共轭复根:<br> x=${real}±${imag}i`;
    }
    e_tipinfo.innerHTML = tipinfo;
}

// 完成元素的事件监听
e_resolve.addEventListener('click', resolve_click);

function test() {
    console.log('test');
}