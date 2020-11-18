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
      list: () => '/data/product.json',
    },
  },
  coupon: {
    request: {
      list: () => '/data/coupon.json',
    },
  },
}

export default config
