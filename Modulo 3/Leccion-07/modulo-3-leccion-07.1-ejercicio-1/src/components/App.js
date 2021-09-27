// Fichero src/components/App.js
import { useState } from "react";
import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputLegalTerms from "./InputLegalTerms";
import Button from "./Button";
const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            labelText=" Escribe un nombre:"
            inputName={name}
            inputId="name"
            inputPlaceHolder="María García"
            inputValue={name}
            handleChange={handleName}
          />

          {/* email */}
          <InputGroupText
            labelText=" Escribe un email:"
            inputName={email}
            inputId="email"
            inputPlaceHolder="mariagarcia@gmail.com"
            inputValue={email}
            handleChange={handleEmail}
          />

          {/* region */}
          <InputGroupSelect
            labelText="Indica tu región:"
            SelectName="region"
            SelectId="region"
            Selectvalue={region}
            SelectOption1="España peninsular"
            SelectOption2="Islas Canarias"
            SelectOption3="Islas Baleares"
            SelectOption4="Ceuta"
            SelectOption5="Melilla"
            handleChange={handleRegion}
          />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio
            labelText="Tarjeta de crédito"
            RadioName="paymentType"
            RadioId="creditCard"
            RadioValue="creditCard"
            RadioCheked={paymentType === "creditCard"}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Efectivo"
            RadioName="paymentType"
            RadioId="cash"
            RadioValue="cash"
            RadioCheked={paymentType === "cash"}
            handleChange={handlePaymentType}
          />
          <InputGroupRadio
            labelText=" Contra reembolso"
            RadioName="paymentType"
            RadioId="cashOnDelivery"
            RadioValue="cashOnDelivery"
            RadioCheked={paymentType === "cashOnDelivery"}
            handleChange={handlePaymentType}
          />
          {/* legal terms */}
          <InputLegalTerms
            labelText=" Debes aceptar nuestros términos legales para completar la compra:"
            Checkname="legalTerms"
            CheckChecked={legalTerms}
            handleChange={handleLegalTerms}
          />
        </div>
        <Preview
          paymentType={renderPaymentTypeText()}
          name={name}
          email={email}
          region={region}
          legal={legalTerms}
        />
        {/* send */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        {/* <Button
          ButtonClass="button"
          handleChange={isValidForm() === false}
          title="Enviar"
        /> */}

        {/* reset */}
        <Button
          ButtonClass="button reset"
          handleChange={handleResetButton}
          title="Limpiar el formulario"
        />
      </form>
    </div>
  );
};

export default App;
