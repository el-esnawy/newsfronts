import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllArticles = createAsyncThunk(
  "articles/getAllArtices",
  async (arg) => {
    const { page, pageSize } = arg;

    if (arg.searchterm) {
      const response = await axios.get(`/api/v1/search/${arg.searchterm}`);

      return { ...response.data, responseURL: response.request.responseURL };
    } else if (arg.category === "headlines") {
      const response = await axios.get("/api/v1/headlines", {
        params: {
          pageNumber: page || 1,
          pageSize: pageSize || 20,
        },
      });

      return { ...response.data, responseURL: response.request.responseURL };
    } else if (arg.category || arg.source) {
      const response = await axios.get(
        `/api/v1/${Object.keys(arg)[0]}/${Object.values(arg)[0]}`,
        {
          params: {
            pageNumber: page || 1,
            pageSize: pageSize || 20,
          },
        },
      );

      return { ...response.data, responseURL: response.request.responseURL };
    } else {
      const response = await axios.get("/api/v1/headlines", {
        params: {
          pageNumber: page || 1,
          pageSize: pageSize || 20,
        },
      });

      return { ...response.data, responseURL: response.request.responseURL };
    }
  },
);
