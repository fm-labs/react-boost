export const arraySortByName =
  (key: string) =>
  (a: any, b: any): number => {
    const nameA = a[key].toUpperCase() // ignore upper and lowercase
    const nameB = b[key].toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  }

export const isArray = (a: any): boolean => {
  return Array.isArray(a)
}
