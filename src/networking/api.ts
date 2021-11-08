import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';
const config: AxiosRequestConfig = {
  baseURL: 'https://reqres.in/',
  timeout: 50000,
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => Promise.resolve(config),
  (error: any) => Promise.reject(error),
);


axios.interceptors.response.use(
  (response: AxiosResponse) => Promise.resolve(response),
  (error: any) => Promise.reject(error),
);

export interface AxiosProps {
  type: any;
  url: any;
  params?: any;
  headers?: any;
}

/** function that returns an axios call */
export const requestApi = ({
  type,
  url,
  params,
  headers,
}: AxiosProps): Promise<AxiosResponse> => {
  return instance.request({
    method: type,
    url: url,
    data: params,
    headers: headers,
  });
};

export default instance;
