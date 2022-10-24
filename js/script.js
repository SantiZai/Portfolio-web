var rellax = new Rellax('.rellax');

gsap.from('.c-foto', {
  scrollTrigger: '.c-foto',
  duration: 2,
  x: 100,
});

gsap.from('.titulo-move', {
  scrollTrigger: '.titulo-move',
  duration: 2,
  opacity: 0,
  yPercent: -100,
});

gsap.from('.skill-move', {
  scrollTrigger: '.titulo-move',
  duration: 2,
  xPercent: 20,
  ease: 'bounce.out',
});

gsap.from('.hobbie-move', {
  scrollTrigger: '.titulo-move',
  duration: 2,
  xPercent: -20,
  ease: 'bounce.out',
});

function child_hover(child) {
  let parent = child.parentElement;
  if (!parent.classList.contains('hover_class_style'))
    parent.classList.add('icono-hover');
}

function child_exit(child) {
  let parent = child.parentElement;
  parent.classList.remove('icono-hover');
}

let childrens = document.querySelectorAll('.icono-hobbie-skill');
childrens.forEach((el) => {
  el.onmouseenter = () => child_hover(el);
  el.onmouseout = () => child_exit(el);
});

//validadores de los inputs
const mensajesDeError = {
  nombre: {
    valueMissing: 'El campo nombre no puede estar vacío.',
  },
  correo: {
    valueMissing: 'El campo email no puede estar vacío.',
    typeMismatch: 'El correo no es válido.',
  },
  asunto: {
    valueMissing: 'El campo asunto no puede estar vacío.',
    patternMismatch: 'El asunto debe tener entre 10 y 20 caracteres.',
  },
  mensaje: {
    valueMissing: 'El campo mensaje no puede estar vacío.',
    patternMismatch: 'El mensaje debe tener entre 20 y 50 caracteres.',
  },
};

const tiposDeErrores = ['valueMissing', 'typeMismatch', 'patternMismatch'];

function validar(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.classList.remove('input-invalido');
    input.parentElement.querySelector('.input-mensaje-error').innerHTML = '';
  } else {
    input.classList.add('input-invalido');
    input.parentElement.querySelector('.input-mensaje-error').style.visibility =
      'visible';
    input.parentElement.querySelector('.input-mensaje-error').innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = '';
  tiposDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('blur', (input) => {
    validar(input.target);
  });
});

const btnEnviar = document.getElementById('btn-enviar-form');
const form = document.getElementById('form');
function crearHref() {
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;
  return (
    'mailto:santiagozaidandev@gmail.com?subject=' + asunto + '&body=' + mensaje
  );
}

function set() {
  document.forms['form'].action = crearHref();
  console.log(document.forms['form'].action);
}

btnEnviar.onclick = set;
