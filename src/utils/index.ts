export const priceString = (price: string | number): string => {
  const reg = /\B(?=(\d{3})+(?!\d))/

  return `${price}`.replace(reg, ',')
}
