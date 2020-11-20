export const priceString = (price: string | number): string => {
  const reg = /\B(?=(\d{3})+(?!\d))/g

  return `${price}`.replace(reg, ',')
}
