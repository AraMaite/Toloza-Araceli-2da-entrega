let user = {
  name: "",
  password: "",
  userid: "",
  usercuil: "",
  datebirth: "",
};

const formData = () => {
  event.preventDefault();
  let divconf = document.getElementById("confirmation");
  if (divconf.innerHTML.length > 0) {
    window.alert("Usted ya se ha registrado, reinicie la página para crear otra cuenta.");
  } else {
    user.name = window.prompt("Introduzca su nombre");
    user.password = window.prompt("Introduzca su contraseña");
    user.userid = window.prompt("Introduzca su DNI");
    user.usercuil = window.prompt("Introduzca su CUIL");
    user.datebirth = window.prompt("Introduzca su fecha de nacimiento");

    console.log(user);

    let confirmation = document.createElement("p");

    confirmation.innerHTML = `<b>Usuario registrado con:</b>
      <p><i>Nombre:</i>${user.name}</p>
      <p><i>Contraseña:</i>${user.password}</p>
      <p><i>DNI:</i>${user.userid}</p>
      <p><i>CUIL:</i>${user.usercuil}</p>
      <p><i>Fecha de nacimiento:</i>${user.datebirth}</p>`;

    divconf.append(confirmation);

    window.alert(`Usuario ingresado correctamente!`);
  }
};
