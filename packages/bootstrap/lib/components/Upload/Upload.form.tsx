import React from 'react'
import { Form } from 'react-bootstrap'
import { FaFileAlt, FaTrash, FaUpload } from 'react-icons/fa'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import './Dropzone.scss'
import SubmitButton from '../Button/SubmitButton'

export interface UploadFormProps {
  onSubmit?: (files: File[]) => any
  onChange?: (files: File[]) => any
  multiple?: boolean
  //allowedExts?: Array<string>; // @todo Limit file extension
  allowedMime?: Array<string>
  previewEnabled?: boolean
  submitEnabled?: boolean
  submitLabel?: string
  dropzoneOptions?: DropzoneOptions
}

/**
 * @param onSubmit Callback for form submission
 * @param onChange  Callback for file input change
 * @param multiple Allow multiple files
 * @param allowedMime Allowed mime type
 * @param showPreview
 * @param dropzoneOptions Dropzone component props
 * @returns {React.JSX.Element}
 * @constructor
 */
export function UploadForm({
  onSubmit,
  onChange,
  multiple,
  allowedMime,
  previewEnabled,
  submitEnabled,
  submitLabel,
  dropzoneOptions,
}: UploadFormProps) {
  const [files, setFiles] = React.useState<File[]>([])
  const [isSubmitting, setSubmitting] = React.useState(false)

  //const accept = allowedMime ? allowedMime.join(",") : "*"

  const accept: any = {}
  if (allowedMime) {
    allowedMime.forEach((entry) => {
      accept[entry] = []
    })
  }

  multiple = multiple !== undefined ? multiple : false
  previewEnabled = previewEnabled !== undefined ? previewEnabled : false
  submitEnabled = submitEnabled !== undefined ? submitEnabled : true
  submitLabel = submitLabel || 'Upload'

  // const handleInputChange = (e) => {
  //     const files = [...e.target.files] // convert FileList to Array
  //     console.log("UploadForm:handleInputChange", files)
  //     setFiles(files)
  //
  //     if (typeof onChange === "function") {
  //         onChange(files)
  //     }
  // }

  const handleDropzoneDrop = (acceptedFiles: File[]) => {
    console.log('UploadForm:handleDropzoneDrop', acceptedFiles)
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    )
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLElement>) => {
    console.log('UploadForm:Submit', files)
    e.preventDefault()
    if (onSubmit) {
      console.log('UploadForm:Submit:X')
      setSubmitting(true)
      onSubmit(files)
        //.then(() => toast.info('Upload successful!!'))
        .finally(() => {
          setSubmitting(false)
          setFiles([])
        })
    } else {
      console.log('UploadForm:No submit handler defined.')
    }
  }

  const handleDropzoneChange = (files: File[]) => {
    console.log('UploadForm:handleDropzoneChange', files)
    setFiles(files)

    if (typeof onChange === 'function') {
      onChange(files)
    }
  }

  const handleRemoveFile = (file: File) => {
    const newFiles = files.filter((f) => file.name !== f.name)
    setFiles(newFiles)
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    multiple: multiple,
    accept: accept,
    onDrop: handleDropzoneDrop,
    ...dropzoneOptions,
  })

  // React.useEffect(() => {
  //   if (typeof onChange === 'function') {
  //     onChange(files)
  //   }
  //
  //   return () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview))
  //   }
  // })

  const renderPreview = (files: File[]) => {
    return files.map((file) => (
      <div className='thumb' key={file.name}>
        <div className='thumb-inner'>
          {file.name.endsWith('.png') ||
          file.name.endsWith('.svg') ||
          file.name.endsWith('.jpeg') ||
          file.name.endsWith('.jpg') ? (
            // <img alt='Preview' src={file.preview} className='thumb-img' />
            <FaFileAlt className={'text-muted'} size={100} />
          ) : (
            <FaFileAlt className={'text-muted'} size={100} />
          )}
        </div>
        <div className={'text-muted'} onClick={() => handleRemoveFile(file)}>
          <FaTrash /> Remove
        </div>
        <div>{file.name}</div>
        <div>{file.type}</div>
        <div>{Math.round(file.size / 1024)} kB</div>
      </div>
    ))
  }

  return (
    <div className='Upload-form'>
      <Form method='POST' onSubmit={handleFormSubmit}>
        {submitEnabled && (
          <div className={'my-2'}>
            <div className='Dropzone-wrapper Dropzone-wrapper-preview'>
              <div className='Dropzone-container'>
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <p style={{ fontSize: '1.3em' }}>
                    {!isDragActive && 'Click here or drop a file to upload'}
                    {isDragActive && !isDragReject && 'Drop here'}
                    {isDragReject && 'File type not accepted'}
                  </p>
                </div>
              </div>
              {previewEnabled && (
                <aside className='Dropzone-preview my-3'>
                  <div className='thumbs-container'>{renderPreview(files)}</div>
                </aside>
              )}
            </div>
            <SubmitButton
              type='submit'
              isSubmitting={isSubmitting}
              submittingLabel={'Uploading ...'}
            >
              <FaUpload size={14} /> {submitLabel}
            </SubmitButton>
          </div>
        )}
      </Form>
    </div>
  )
}

export default UploadForm
