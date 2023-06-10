import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import Step from "./Step";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState([]);


  useEffect(() => {
    console.log("Use effect");
  });

  useEffect(() => {
    console.log("Se ha actualizado el step");
  }, [step])

  // useEffect(async () => {
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const posts = await data.json();
  //     console.log(posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [])

  console.log("Form Componente");

  //step = 0 --> <DatosUsuario />
  //step = 1 --> <DatosPersonales />
  //step = 2 --> <DatosEntrega />
  //step = 3 --> <Complete />

  const updateStep = (step) => {
    console.log("actualizar paso", step);
    setStep(step);
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    console.log("new step", newStep);
    console.log(step);
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value);
    console.log(valid);
    console.log("position", position);
    console.log(currentStep);
    console.log(validator);

    stepsFlow[0].inputs[0].label = "Maiahahah";
    console.log(stepsFlow);
  };

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit
    },
    1: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit
    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && < Stepper step={step} />}

        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step} />

      </FormSpace>
    </Box>
  );
};

export default Form;
