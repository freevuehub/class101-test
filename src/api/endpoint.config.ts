interface IConfig {
  products: {
    request: {
      list(): string
    }
  }
}

const config: IConfig = {
  products: {
    request: {
      list: () => `/data/product.json`,
    },
  },
}

export default config
