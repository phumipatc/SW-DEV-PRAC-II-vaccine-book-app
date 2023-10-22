import { createSlice } from '@reduxjs/toolkit';
import { BookingItem } from '../../../interfaces';
import { PayloadAction } from '@reduxjs/toolkit';

type BookState = {
	bookItems: BookingItem[]
}

const initialState: BookState = {
	bookItems: []
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		addBooking: (state, action:PayloadAction<BookingItem>) => {
			state.bookItems = [action.payload]
		},
		removeBooking: (state, action:PayloadAction<BookingItem>) => {
			const remainItems = state.bookItems.filter(obj => {
				return obj.id !== action.payload.id
			})
			state.bookItems = remainItems
		}
	}
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer