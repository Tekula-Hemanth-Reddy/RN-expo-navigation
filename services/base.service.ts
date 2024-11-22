import store from "../redux/store";
import { loading } from "../redux/actions";
import { AxiosRequestConfig, CancelTokenSource } from "axios";
import _axios from "axios";
import { ResponseJson } from "../models/models";
import axiosInstance from "./service.interceptor";
const axios = axiosInstance;
const qs = require('qs');

function setLoading(value: boolean, showLoading?: boolean) {
    showLoading == undefined || showLoading
        ? store.dispatch(loading(value))
        : null;
}

class BaseService {
    private cancelToken: CancelTokenSource;
    constructor() {
        this.cancelToken = _axios.CancelToken.source();
    }

    cancelAllRequests() {
        if (this.cancelToken) this.cancelToken.cancel();
    }

    get = <T>(
        url: string,
        requestBody: any,
        showLoading?: boolean,
        config?: AxiosRequestConfig
    ) => {
        setLoading(true, showLoading);

        return axios
            .get<ResponseJson<T>>(url, {
                params: requestBody,
                ...config,
                cancelToken: this.cancelToken.token,
                paramsSerializer: (params) => {
                    return qs.stringify(params, { encode: false });
                }
            })
            .then(function (response) {
                setLoading(false, showLoading);
                return response;
            })
            .catch(function (error) {
                setLoading(false, showLoading);
                if (!url.includes("/mobile/validateurl")) {
                    alert(url + "\n" + error);
                }
                return Promise.reject(error);
            });
    };

    post = <T>(
        url: string,
        requestBody: any,
        showLoading?: boolean,
        config?: AxiosRequestConfig
    ) => {
        setLoading(true, showLoading);
        return axios
            .post<ResponseJson<T>>(url, requestBody, {
                ...config,
                cancelToken: this.cancelToken.token,
            })
            .then(function (response) {
                setLoading(false, showLoading);
                return response;
            })
            .catch(function (error) {
                setLoading(false, showLoading);
                alert(url + "\n" + error);
                return Promise.reject(error);
            });
    };

    put = <T>(
        url: string,
        requestBody: any,
        showLoading?: boolean,
        config?: AxiosRequestConfig
    ) => {
        setLoading(true, showLoading);
        return axios
            .put<ResponseJson<T>>(url, requestBody, {
                ...config,
                cancelToken: this.cancelToken.token,
            })
            .then(function (response) {
                setLoading(false, showLoading);
                return response;
            })
            .catch(function (error) {
                setLoading(false, showLoading);
                alert(url + "\n" + error);
                return Promise.reject(error);
            });
    };

    delete = <T>(
        url: string,
        requestBody: any,
        showLoading?: boolean,
        config: AxiosRequestConfig = {}
    ) => {
        setLoading(true, showLoading);
        const { _id, ...body } = requestBody;
        config.data = { ...config?.data, ...body };
        return axios
            .delete<ResponseJson<T>>(url + (_id ? "/" + _id : ''), {
                ...config,
                cancelToken: this.cancelToken.token,
            })
            .then(function (response) {
                setLoading(false, showLoading);
                return response;
            })
            .catch(function (error) {
                setLoading(false, showLoading);
                alert(url + "\n" + error);
                return Promise.reject(error);
            });
    };
}
export default BaseService;
