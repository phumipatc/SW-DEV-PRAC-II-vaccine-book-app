'use client'
import { removeBooking } from '@/redux/features/bookSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'


export default function myBooking() {
	const bookingItems = useAppSelector(state => state.bookSlice.bookItems)
	const dispatch = useDispatch<AppDispatch>()
	return (
		<main className='w-[100%] flex flex-col items-center space-y-4 mt-[12vh]'>
			{
			bookingItems.length === 0?
				<div className='text-2xl'>No Vaccine bookings</div>
			:
				bookingItems.map((bookingItem)=>(
					<div className='bg-slate-200 rounded w-[90%] px-2 py-2' key={bookingItem.id}>
						<div className='text-xl'>{bookingItem.location}</div>
						<div className='text-sm'>Name: {bookingItem.name}</div>
						<div className='text-sm'>Surname: {bookingItem.surname}</div>
						<div className='text-sm'>ID: {bookingItem.id}</div>
						<div className='text-sm'>Date: {bookingItem.date}</div>
						<button
							className='bg-red-500 rounded px-2 py-1 text-white'
							onClick={()=>{dispatch(removeBooking(bookingItem))}}
						>Cancel Booking</button>
					</div>
				))
			}
		</main>
	)
}