import { toast } from 'react-toastify'

export const toastOnError = (err: any): void => {
  //console.log("toastOnError", error)
  if (!err) {
    toast.error('An unknown error occurred')
  } else if (err.response) {
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // known error
    // if (error.response.error) {
    //   toast.error(error.response.error)
    // } else {
    // }
    if (typeof err.response.data === 'object') {
      //const {error, non_field_errors} = err.response.data;

      if ('error' in err.response.data) {
        toast.error(err.response.data['error'])
      } else if ('non_field_errors' in err.response.data) {
        const errorMessages = err.response.data['non_field_errors'].join('<br />')
        toast.error(errorMessages)
      } else if ('detail' in err.response.data) {
        toast.error(err.response.data['detail'])
      } else {
        console.log(err.response.data)
        toast.error(JSON.stringify(err.response.data))
      }
    }
  } else if (err.message) {
    toast.error(err.message)
  } else {
    toast.error(JSON.stringify(err))
  }
}
export const toastError = (msg?: string): void => {
  msg = msg ? msg : 'Something went wrong'
  toast.error(msg)
}
export const toastSuccess = (msg?: string): void => {
  msg = msg ? msg : 'Successful'
  toast.success(msg)
}
export const toastInfo = (msg: string): void => {
  toast.info(msg)
}
export const toastDev = (msg: string): void => {
  if (process.env.NODE_ENV === 'development') {
    toast.info(msg)
  }
  console.log('TOAST:DEV', msg)
}
