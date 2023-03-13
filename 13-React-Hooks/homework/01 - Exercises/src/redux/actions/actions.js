//export const FORM_DATA = "FORM_DATA"    //a type


const enviarForm = (formulario)=>{
    return {
        type: "FORM_DATA",
        payload : formulario
    }
}
export {enviarForm}