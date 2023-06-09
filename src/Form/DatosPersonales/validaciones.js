export const validarNombre = (nombre) => {
    console.log(nombre);
    const length = nombre.length
    return length > 1 && length < 30;
}

export const validarApellidos = (apellidos) => {
    console.log(apellidos);
    const length = apellidos.length
    return length > 1 && length < 50 ? true : false;
}

export const validarTelefono = (telefono) => {
    console.log(telefono);
    const length = telefono.length
    return length >= 8 && length <= 14 ? true : false;
}