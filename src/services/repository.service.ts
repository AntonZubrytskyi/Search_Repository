import {axiosService, Response} from "./axios.service";
import {IQueryParams} from "../interfaces/queryParams.interface";
import {IRepositoryResp} from "../interfaces";
import {urls} from "../constants/urls";


const repositoryService = {
    getAll: (params: Partial<IQueryParams>, url: string = urls.searchRepositories): Response<IRepositoryResp> => axiosService.get(
        url,
        {params: {...params}}
    )
};

export {
    repositoryService
}
