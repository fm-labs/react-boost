const logger =
  (debug: boolean = false) =>
  (...args: any[]) => {
    if (debug) {
      console.log(...args)
    }
  }

export const useLogger = (debug: boolean = false) => {
  return logger(debug)
}
