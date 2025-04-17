import React from 'react'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import { Heading } from '../../Heading'

export const DevPanel = () => {
  return (
    <Container>
      <h1>Developer</h1>

      <Heading as='h3' label='FetchAPI error handling' />
      <div>
        <Button
          onClick={() => {
            const controller = new AbortController()
            setTimeout(() => controller.abort(), 500)

            fetch('http://hostdoesnotexists.local/', {
              signal: controller.signal,
            }).then(() => {
              const err = 'Network request succeeded (This should not happen!!)'
              console.log(err)
              throw new Error(err)
            })
          }}
        >
          fetch Aborted
        </Button>
      </div>

      <Heading as='h3' label='Axios error handling' />
      <div>
        <Button
          onClick={() => {
            axios
              .get('http://hostdoesnotexists.local/', {
                timeout: 500,
                timeoutErrorMessage: 'Axios Request Timeout',
              })
              .then(() => {
                const err = 'Network request succeeded (This should not happen!!)'
                console.log(err)
                throw new Error(err)
              })
          }}
        >
          axios Network Timeout
        </Button>

        <Button
          onClick={() => {
            const controller = new AbortController()
            setTimeout(() => controller.abort(new DOMException('Axios request aborted')), 500)
            axios
              .get('http://hostdoesnotexists.local/', {
                signal: controller.signal,
              })
              .then(() => {
                const err = 'Network request succeeded (This should not happen!!)'
                console.log(err)
                throw new Error(err)
              })
          }}
        >
          axios Aborted
        </Button>
      </div>

      <Heading as='h3' label='DOM Exception handling' />
      <div>
        <Button
          onClick={() => {
            throw new Error('Error: This is an error message')
          }}
        >
          Error
        </Button>

        <Button
          onClick={() => {
            throw new DOMException('DOMException: This is an error message', 'DOMExceptionName')
          }}
        >
          DOMException
        </Button>
      </div>

      <Heading as='h3' label='Promise Exception handling' />
      <div>
        <Button
          onClick={() => {
            Promise.reject('This is the Promise reject reason')
          }}
        >
          Promise.reject
        </Button>

        <Button
          onClick={() => {
            const abortController = new AbortController()
            const signal = abortController.signal

            new Promise((resolve, reject) => {
              const timer = setTimeout(resolve, 1000)

              signal.addEventListener('abort', () => {
                clearTimeout(timer)
                console.log('Promise aborted')
                reject('Promise aborted and rejected')
              })
            })
            setTimeout(() => abortController.abort(), 500)
          }}
        >
          Promise reject on abort
        </Button>

        <Button
          onClick={() => {
            const abortController = new AbortController()
            const signal = abortController.signal

            new Promise((resolve, reject) => {
              const timer = setTimeout(resolve, 1000)

              signal.addEventListener('abort', () => {
                clearTimeout(timer)
                console.log('Promise aborted')
                reject(
                  new DOMException('Promise aborted and rejected', 'PromiseRejectionDOMException'),
                )
              })
            }).then(() => {
              const err = 'Aborted promise succeeded (This should not happen!!)'
              console.log(err)
              throw new Error(err)
            })
            setTimeout(() => abortController.abort(), 500)
          }}
        >
          Promise reject on abort with Exception
        </Button>

        <Button
          onClick={() => {
            const abortController = new AbortController()
            const signal = abortController.signal

            new Promise((resolve, reject) => {
              const timer = setTimeout(resolve, 1000)

              signal.addEventListener('abort', () => {
                clearTimeout(timer)
                console.log('Promise aborted')
                reject('Promise aborted, rejected, catch locally')
              })
            })
              .then(() => console.log('PROMISE-ABORT: SUCCESS'))
              .catch((e) => console.log('PROMISE-ABORT: ERROR', e))
            setTimeout(() => abortController.abort(), 500)
          }}
        >
          Promise abort, reject and catch locally
        </Button>
      </div>
    </Container>
  )
}

export default DevPanel
