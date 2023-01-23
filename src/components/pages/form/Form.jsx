import { useFormik } from "formik"
import { Button, Grid, TextField } from "@mui/material"
import * as Yup from "yup"
import "./Form.css"

const Form = () => {

    //useFormik necesita al menos dos cosas => los valores iniciales que va a tener 
    //mi formulario, y la función que quiero ejecutar cuando el formulario se envíe 

    const {handleSubmit, handleChange, values, errors} = useFormik({

        initialValues:{
            nombre: "",
            email: "",
            contraseña: ""
        },

        validationSchema: Yup.object({
            nombre: Yup.string().required("Nombre requerido"),
            email: Yup.string().required("Email requerido"),
            contraseña: Yup.string().required("Contraseña requerido"),
        }),

        onSubmit: (data) => {
            console.log(data)
        }

    })

    const {nombre, email, contraseña} = values;
    const {nombre: nombreError, email: emailError, contraseña: contraseñaError} = errors;

  return (
    <div>
        <h2 className="title-form">Formulario de Registro</h2>
        <form action="" className="form-container" onSubmit={handleSubmit}>
            <Grid container alignItems="center" justifyContent="space-evenly" spacing="10" sx={{width:"100%"}}>
                <Grid item xs={12} md={7}>
                    <TextField type="text" 
                      label="Ingrese su nombre" 
                      variant="outlined" 
                      fullWidth 
                      name="nombre" //Siempre va la propiedad que quiero modificar así el onChange sabe que propiedad modificar
                      onChange={handleChange}
                      helperText={nombreError}
                      value={nombre}
                      error={nombreError}
                    />
                </Grid>
                <Grid item xs={12} md={7}>
                    <TextField 
                      type="email" 
                      label="Ingrese su email" 
                      variant="outlined" 
                      fullWidth 
                      name="email"
                      onChange={handleChange}
                      helperText={emailError}
                      value={email}
                      error={emailError}
                    />
                </Grid>
                <Grid item xs={12} md={7}>
                    <TextField 
                      type="password" 
                      label="Ingrese su contraseña" 
                      variant="outlined" 
                      fullWidth 
                      name="contraseña"
                      onChange={handleChange}
                      helperText={contraseñaError}
                      value={contraseña}
                      error={contraseñaError}
                    />
                </Grid>
            </Grid> 
            <Button type="submit" variant="contained">Enviar</Button>   
        </form>
    </div>
  )
}

export default Form