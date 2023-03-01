import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {repositoryService} from "../../services";
import {IQueryParams} from "../../interfaces";
import {IRepository, IRepositoryResp} from "../../interfaces";


interface IState {
    repositories: IRepository[],
    formErrors: any,
    status: string,
    totalCount: number,
    page: number
}

const initialState: IState = {
    repositories: [],
    totalCount: 0,
    page: 1,
    formErrors: {},
    status: '',
};
const getAllRepositories = createAsyncThunk<IRepositoryResp, { params: Partial<IQueryParams> }>(
    'repositorySlice/searchAll',
    async ({params}, {rejectWithValue}) => {
        try {
            const {data} = await repositoryService.getAll(params);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);
const repositorySlice = createSlice({
    name: 'repositorySlice',
    initialState,
    reducers: {
        storePageNumber(state, action) {
            state.page = action.payload;
        },
        nextPage(state) {
            state.page += 1
        },
        previousPage(state) {
            state.page -= 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllRepositories.fulfilled, (state, action) => {
                const data = action.payload as any;
                state.repositories = data.items;
                state.totalCount = data.total_count;
            })
            .addCase(getAllRepositories.rejected, (state, action) => {
                const errors = action.payload as any;
                console.log(errors);
            })
    }
});

const {reducer: repositoryReducer, actions: {storePageNumber, nextPage, previousPage}} = repositorySlice;

const repositoryActions = {
    getAllRepositories,
    storePageNumber,
    nextPage,
    previousPage
}

export {
    repositoryActions,
    repositoryReducer
};
