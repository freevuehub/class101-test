export const priceString = (price: string | number) => {
  const reg = /(\d)(?=(?:\d{3})+(?!\d))/

  return `${price}`.replace(reg, '$1,')
}