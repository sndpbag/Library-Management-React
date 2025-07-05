// store/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {  BorrowRecord, BorrowSummary, CreateBookData, BorrowBookData } from '../types';
import {  type Book, type BorrowBookData, type BorrowRecord, type BorrowSummary, type CreateBookData } from '../types/index';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://library-management-system-orcin-five.vercel.app/api',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Book', 'Borrow'],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => '/books',
      transformResponse: (response: any) => response.data,
      providesTags: ['Book'],
    }),
    getBook: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: any) => response.data,
      providesTags: ['Book'],
    }),
    createBook: builder.mutation<Book, CreateBookData>({
      query: (bookData) => ({
        url: '/books',
        method: 'POST',
        body: bookData,
      }),
      invalidatesTags: ['Book'],
    }),
    updateBook: builder.mutation<Book, { id: string; data: Partial<CreateBookData> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Book'],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),
    borrowBook: builder.mutation<BorrowRecord, BorrowBookData>({
      query: (borrowData) => ({
        url: '/borrow',
        method: 'POST',
        body: borrowData,
      }),
      invalidatesTags: ['Book', 'Borrow'],
    }),
    getBorrowRecords: builder.query<BorrowRecord[], void>({
      query: () => '/borrow/records',
      providesTags: ['Borrow'],
    }),
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrow',
      transformResponse: (response: any) => {
        if (response && response.data && Array.isArray(response.data)) {
          return response.data;
        }
        return [];
      },
      providesTags: ['Borrow'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowRecordsQuery,
  useGetBorrowSummaryQuery,
} = api;