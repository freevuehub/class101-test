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
      list: () => ``,
    },
  },
}

export default config
