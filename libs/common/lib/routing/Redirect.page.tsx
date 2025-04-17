import React from 'react'

interface RedirectPageProps extends React.PropsWithChildren<any> {
  /**
   * @property redirect target url
   */
  url: string

  /**
   * @property redirect timeout in ms
   */
  timeout?: number
}

export const RedirectPage = ({ url, timeout, children }: RedirectPageProps) => {
  timeout = timeout || 2000
  React.useEffect(() => {
    setTimeout(() => {
      window.location.replace(url)
    }, timeout)
  }, [])

  return children ? (
    children
  ) : (
    <div className={'p-3'}>
      <p>You are going to be redirected shortly ...</p>
      <p>
        If the automatic redirect does not work, click{' '}
        <a href={url} rel={'noreferrer noopener'}>
          here
        </a>
      </p>
    </div>
  )
}

export default RedirectPage
