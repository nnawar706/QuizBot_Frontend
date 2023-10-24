import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "http://localhost:8000/"

export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.authToken
            headers.set("Content-Type", "application/json");
            if (token) headers.set("Authorization", `Bearer ${token}`)
            return headers
        },
    }),
    endpoints: (builder) => ({
        getQuizzes: builder.query({
            query: (id) => ({
                url: "api/v1/quizzes/all/"+id,
                method: "GET",
            }),
            providesTags: ['Quizzes']
        }),

        // getRoomDetails: builder.query({
        //     query: (id) => ({
        //         url: "api/v1/rooms/"+id,
        //         method: "GET",
        //     })
        // }),

        addNewQuiz: builder.mutation({
            query: (room_id, { title, occurring_date, from_time, to_time, total_marks }) => ({
                url: "api/v1/quizzes/"+room_id,
                method: "POST",
                body: { title, occurring_date, from_time, to_time, total_marks }
            }),
            invalidatesTags: ['Quizzes']
        }),

        // sendInvitation: builder.mutation({
        //     query: ({ emails, id }) => ({
        //         url: "api/v1/rooms/send_invitation/"+id,
        //         method: "POST",
        //         body: { emails }
        //     })
        // }),

        // joinRoom: builder.mutation({
        //     query: ({ secret }) => ({
        //         url: "api/v1/rooms/join_room",
        //         method: "POST",
        //         body: { secret }
        //     }),
        //     invalidatesTags: ['Rooms']
        // })
    }),
});

export const { 
    useGetQuizzesQuery, 
    // useGetRoomDetailsQuery,
    useAddNewQuizMutation, 
    // useJoinRoomMutation,
    // useSendInvitationMutation
} = quizApi