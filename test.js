/*
let uniform_01;
uniform_01 = {
    "colorTexture":{value:new THREE.TextureLoader().load('a.jpg')}
};
const params = [
    ['fragmentshader_01',uniforms_01],
    ['fragmentshader_02',uniforms_02],
    ['fragmentshader_03',uniforms_03],
    ['fragmentshader_04',uniforms_04]
];
var geometry = new THREE.BoxBufferGeometry(2,2,2);
for(let i = 0;i<params.length;++i){
    const material = new THREE.ShaderMaterial(
        {//parameters for this material
            uniforms:params[i][1],//传入uniform,数据来自params[][1]
            vertexShader:document.getElementById('vertexshader').textContent,//JS函数getElementById
            fragmentShader:document.getElementById(params[i][0]).textContent
        }
    )
    const mesh = new THREE.Mesh(geometry,material);
    scene.add(mesh);
}
*/
/*
const params = [
    ['fragmentshader_01'],
    ['fragmentshader_02'],
    ['fragmentshader_03']
];
var gl = renderer.getContext();
var glVertexShader = new THREE.WebGLShader(gl.VERTEX_SHADER,document.getElementById(params[i][0]).textContent);
var glFragmentShader = new THREE.WebGLShader(gl.FRAGMENT_SHADER,document.getElementById(params[i][0]).textContent);
var program = gl.createProgram();
gl.attachShader(program,glVertexShader);
gl.attachShader(program,glFragmentShader);
gl.linkProgram(program);
const material = new THREE.ShaderMaterial();
*/
var canvas = document.getElementById("webglCanvas");
var gl = canvas.getContext("webgl2");
var uniform_01 = {
    texture:{
        value:new THREE.TextureLoader().load("container.jpg"),
        crossOrigin:null
    }
}
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.ShaderMaterial(
    {
        uniforms:uniform_01,
        vertexShader:document.getElementById('vertexshader').textContent,
        fragmentShader:document.getElementById('fragmentshader').textContent
    }
);
var cube = new THREE.Mesh(geometry,material);


var ambientlight = new THREE.AmbientLight(0xFFFFF);

var scene = new THREE.Scene();
scene.add(cube);
scene.add(ambientlight);

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/innerHeight,0.1,100);
//视野角度FOV,长宽比,近平面距离,远平面距离

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement ); 
//将renderer的dom元素加入HTML,为canvas元素

var clock = new THREE.Clock();
var sign = 1;
function animate_01(){
    requestAnimationFrame(animate_01);
    var elapsed = clock.getElapsedTime();
    renderer.render(scene,camera);
    camera.position.set(20 * Math.sin(elapsed),0,15);
    camera.lookAt(0,0,0);
}
function animate_02(){
    gl.clearColor(1,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    requestAnimationFrame(animate_02);
    var elapsed = clock.getElapsedTime();
    renderer.render(scene,camera);
    camera.position.set(5 * Math.sin(elapsed),0,15);
    camera.lookAt(0,0,0);
} 
animate_01();
/*
document.onkeydown=function(event){
    event=(event)? event:window.event;
    if(event.keyCode){
        if(event.keyCode==32){
            switch(sign){
                case 1:
                    animate_01();
                    sign = 2;
                    break;
                case 2:
                    animate_02();
                    sign = 1;
                    break;
            }
        }
        
    }
}

function createShader(gl,sourceCode,type){//type:gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
    var shader = gl.createShader(type);
    gl.shaderSource(shader,sourceCode);
    gl.compileShader(shader);
    if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){
        var info = gl.getShaderInfoLog(shader);
        throw "Could not compile WebGL program.\n\n" + info;
    }
    return shader;
}
*/
