import config from "../config"

const getUrlWithParamsConfig = (endpointConfig: keyof typeof config.client.endpoint
  ) => {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri
  }
  return url
  
}

export default getUrlWithParamsConfig