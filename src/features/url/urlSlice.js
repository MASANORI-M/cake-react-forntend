import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:8765/';

export const fetchAsyncGet = createAsyncThunk('get/urls', async() => {
    const res = await axios.get(`${apiUrl}get/urls.json`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return res.data.urls;
});

export const fetchAsyncCreate = createAsyncThunk('post/urls', async (url) => {
    const res = await axios.post(`${apiUrl}add/urls.json`, url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.data.urls;
});

export const fetchAsyncUpdate = createAsyncThunk('put/urls', async (url) => {
    const res = await axios.put(`${apiUrl}put/urls/${url.id}/`, url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.data.urls;
});

export const fetchAsyncDelete = createAsyncThunk('delete/urls', async (id) => {
    await axios.delete(`${apiUrl}put/urls/${id}/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return id;
});

const initialState = {
    urls: [
        {
            id: 0,
            url_account: "",
            keyword_num: "",
            site_name: "",
            updated_at: "",
            created_at: "",
            deleted: false,
        }
    ],
    editedUrl: {
        id: 0,
        url_account: "",
        keyword_num: "",
        site_name: "",
        updated_at: "",
        created_at: "",
        deleted: false,
    },
    selectedUrl: {
        id: 0,
        url_account: "",
        keyword_num: "",
        site_name: "",
        updated_at: "",
        created_at: "",
        deleted: false,
    }
}

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        editUrl(state, action) {
            state.editedUrl = action.payload;
        },
        selectUrl(state, action) {
            state.selectedUrl = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
            return {
                ...state,
                urls: action.payload,
            };
        });
        builder.addCase(fetchAsyncCreate.fulfilled, (state, action) => {
            return {
                ...state,
                urls: [action.payload, ...state.urls],
            };
        });
        builder.addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
            return {
                ...state,
                urls: state.urls.map((t) =>
                    t.id === action.payload.id ? action.payload : t
                ),
                selectedUrl: action.payload,
            }
        });
        builder.addCase(fetchAsyncDelete.fulfilled, (state, action) => {
            return {
                ...state,
                urls: state.urls.filter((t) => t.id !== action.payload),
                selectedUrl: {
                    id: 0,
                    url_account: "",
                    keyword_num: "",
                    site_name: "",
                    updated_at: "",
                    created_at: "",
                    deleted: true,
                },
            };
        });
    }
});

export const { editedUrl, selectUrl } = urlSlice.actions;
export const selectSelectedUrl = (state) => state.url.selectedUrl;
export const selectEditedUrl = (state) => state.url.editedUrl;
export const selectUrls = (state) => state.url.urls;

export default urlSlice.reducer;