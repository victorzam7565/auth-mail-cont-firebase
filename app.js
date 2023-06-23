
function registrar() {
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  firebase.auth().createUserWithEmailAndPassword(email, contraseña)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
}



function ingreso() {
  let email2 = document.getElementById("email2").value;
  let contraseña2 = document.getElementById("contraseña2").value;
  firebase.auth().signInWithEmailAndPassword(email2, contraseña2)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      aparece(user); // llamamos a la función aparece
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
     // console.log(errorCode, errorMessage);
    });
}

function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo")
      aparece(user);
    } else {
      console.log("no existe usuario activo")
    }
  });
}




observador();


function aparece(user) {
  var contenido = document.getElementById("contenido");
  contenido.innerHTML = `
 
  <div class="my-form-container">
  <div>
    <p>Bienvenido</p>
    <div class="container2">
      <form class="my-form">
        <div class="form-row">
          <div class="form-group col-md-6">
    <label for="idElection">ID Elección</label>
    <input type="text" class="form-control form-control-sm" id="idElection" placeholder="Ingrese el ID de la elección" >
          </div>
          <div class="form-group col-md-6">
            <label for="year">Año</label>
            <input type="text" class="form-control form-control-sm" id="year" placeholder="Ingrese el año de la elección">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="voteCount">Cantidad de votos</label>
            <input type="text" class="form-control form-control-sm" id="voteCount" placeholder="Ingrese la cantidad de votos de la elección">
          </div>
          <div class="form-group col-md-6">
            <label for="politicalParty">Partido político</label>
            <input type="text" class="form-control form-control-sm" id="politicalParty" placeholder="Ingrese el partido político">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="countyCode">Código del condado</label>
            <input type="text" class="form-control form-control-sm" id="countyCode" placeholder="Ingrese el código del condado">
          </div>
          <div class="form-group col-md-6">
            <label for="countyName">Nombre del condado</label>
            <input type="text" class="form-control form-control-sm" id="countyName" placeholder="Ingrese el nombre del condado">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="countyPopulation">Población del condado</label>
            <input type="text" class="form-control form-control-sm" id="countyPopulation" placeholder="Ingrese la población del condado">
          </div>
          <div class="form-group col-md-6">
            <label for="countyArea">Área del condado</label>
            <input type="text" class="form-control form-control-sm" id="countyArea" placeholder="Ingrese el área del condado">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="coordinatorId">ID del coordinador</label>
            <input type="text" class="form-control form-control-sm" id="coordinatorId" placeholder="Ingrese el ID del coordinador">
          </div>
          <div class="form-group col-md-6">
            <label for="coordinatorName">Nombre del coordinador</label>
            <input type="text" class="form-control form-control-sm" id="coordinatorName" placeholder="Ingrese el nombre del coordinador">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="coordinatorDocument">Documento del coordinador</label>
            <input type="text" class="form-control form-control-sm" id="coordinatorDocument" placeholder="Ingrese el documento del coordinador">
          </div>
          <div class="form-group col-md-6">
            <label for="coordinatorEmail">Email del coordinador</label>
            <input type="email" class="form-control form-control-sm" id="coordinatorEmail" placeholder="Ingrese el email del coordinador">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="coordinatorPassword">Contraseña del coordinador</label>
            <input type="password" class="form-control form-control-sm" id="coordinatorPassword" placeholder="Ingrese la contraseña del coordinador">
          </div>
        </div>
        <button type="submit" class="btn btn-primary" onclick="enviarDatos()">Enviar</button>
        <button  class="btn btn-primary" onclick="cerrar()">cerrar</button>
 
  `;
}






function cerrar(){
    firebase.auth().signOut()
    .then(function(){
      console.log('Saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
}

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
    .then(() => {
      console.log("enviando correo...")
      // Email verification sent!
    }).catch(function (error) {
      console.log(error);
    });
}


function enviarDatos() {
  // Obtener los valores de cada campo de entrada
  const idElection = document.getElementById("idElection").value;
  const year = document.getElementById("year").value; 
  const voteCount = document.getElementById("voteCount").value; 
  const politicalParty = document.getElementById("politicalParty").value; 
  const countyCode = document.getElementById("countyCode").value;
  const countyPopulation = document.getElementById("countyPopulation").value;
  const countyName = document.getElementById("countyName").value;
  const countyArea = document.getElementById("countyArea").value;
  const coordinatorId = document.getElementById("coordinatorId").value;
  const coordinatorName = document.getElementById("coordinatorName").value;
  const coordinatorDocument = document.getElementById("coordinatorDocument").value;
  const coordinatorEmail = document.getElementById("coordinatorEmail").value;
  const coordinatorPassword = document.getElementById("coordinatorPassword").value;
  // Obtener el resto de los valores de los campos de entrada

  // Crear un objeto con los datos del formulario
  const datosFormulario = {
    idElection: idElection,
    year: year,
    voteCount: voteCount,
    politicalParty: politicalParty,
    countyCode: countyCode,
    countyName: countyName,
    countyPopulation: countyPopulation,
    countyArea: countyArea,
    coordinatorId: coordinatorId,
    coordinatorName: coordinatorName,
    coordinatorDocument: coordinatorDocument,
    coordinatorEmail: coordinatorEmail,
    coordinatorPassword: coordinatorPassword,    
    // Agregar el resto de los valores de los campos de entrada
  };

  // Enviar los datos del formulario a Firebase
  const db = firebase.firestore();
  const datosFormularioRef = db.collection("datosFormulario");

  datosFormularioRef.add(datosFormulario)
    .then(function(docRef) {
      console.log("Los datos del formulario se han enviado correctamente a Firebase");
      // Limpiar los valores de los campos de entrada después de enviar los datos
      document.getElementById("idElection").value = "";
      document.getElementById("year").value = "";
      document.getElementById("voteCount").value = "";
      document.getElementById("politicalParty").value = "";
      document.getElementById("countyCode").value = "";
      document.getElementById("countyName").value = "";
      document.getElementById("countyPopulation").value = "";
      document.getElementById("countyArea").value = "";
      document.getElementById("coordinatorId").value = "";
      document.getElementById("coordinatorName").value = "";
      document.getElementById("coordinatorDocument").value = "";
      document.getElementById("coordinatorEmail").value = "";
      document.getElementById("coordinatorPassword").value = "";
      // Limpiar el resto de los valores de los campos de entrada
    })
    .catch(function(error) {
      console.error("Error al enviar los datos del formulario a Firebase: ", error);
    });
}