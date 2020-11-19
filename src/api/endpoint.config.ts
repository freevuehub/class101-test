interface IConfig {
  products: {
    request: {
      list(): string
    }
  }
  coupon: {
    request: {
      list(): string
    }
  }
}

const config: IConfig = {
  products: {
    request: {
      list: (): string => '/data/product.json',
    },
  },
  coupon: {
    request: {
      list: (): string => '/data/coupon.json',
    },
  },
}

export default config
