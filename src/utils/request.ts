import URL from "url"
import getUrlWithParamsConfig from "./getUrlWithParamsConfig"
import config from "../config"

const req = async <T,>(endpoint: keyof typeof config.client.endpoint): Promise<T> => {
  const uri = URL.format(getUrlWithParamsConfig(endpoint))

  return await fetch(uri).then(res => res.json())

}

export default req