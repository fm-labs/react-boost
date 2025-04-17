import React from 'react'
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa'
import './Iframe.scss'
import { Button } from 'react-bootstrap'

interface IframeProps {
  url: string
}

export const Iframe = ({ url }: IframeProps) => {
  const [showLink, setShowLink] = React.useState<boolean>(false)

  return (
    <>
      <div className='iframe-container'>
        <div className='iframe-bar'>
          <div className='d-flex justify-content-between'>
            <div>
              <Button
                size={'sm'}
                variant={'outline-secondary'}
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                <FaExternalLinkAlt />
                <span>Open in new window</span>
              </Button>
              <Button
                size={'sm'}
                variant={'outline-secondary'}
                onClick={() => setShowLink(!showLink)}
              >
                <FaLink />
                <span>Show link</span>
              </Button>
            </div>
          </div>
        </div>
        {showLink && <div className={'m-1'}>{url}</div>}
        <iframe src={url} className='iframe' title={url} />
      </div>
    </>
  )
}

export default Iframe
