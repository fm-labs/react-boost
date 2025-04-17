//import React from 'react'
import './Loading.scss'
import { FaCircleNotch } from 'react-icons/fa'

export function LoadingSpinner({
  className,
  size,
  ...props
}: {
  className?: string
  size?: number
}) {
  size = size || 50
  const clazzName = [className, 'spin'].join(' ')
  return (
    <div className='loading-spinner d-inline-block' {...props}>
      <FaCircleNotch size={size} className={clazzName} />
    </div>
  )
}

export function Loading() {
  return (
    <div className='text-center p-4'>
      <LoadingSpinner />
    </div>
  )
}

export function LoadingFullscreen({ label, ...spinnerProps }: { label?: string }) {
  return (
    <div className='loading-container center-screen'>
      <LoadingSpinner size={100} {...spinnerProps} />
      <div className='mt-2'>{label || 'Loading'}</div>
    </div>
  )
}

// export const useLoading = () => {
//     const {state} = useContext(Context);
//     const {loading} = state;
//     console.log("LOADING:PROVIDE-LOADING", loading)
//
//     const [isLoading, setIsLoading] = useState(!!loading);
//
//     return {
//         isLoading,
//         setIsLoading
//     }
// }

//export default LoadingFullscreen
