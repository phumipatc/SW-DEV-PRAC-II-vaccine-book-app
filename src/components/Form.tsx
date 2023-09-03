'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function Form() {
	return (
		<div className='bg-slate-100 rounded-lg space-y-2 w-fit px-10 py-5 flex flex-col justify-center'>
			<div className="text-md text-left text-gray-600">
				Name
			</div>
			<input type="text" className="bg-white w-[400px] h-[2em] rounded-md px-2 py-1 shadow-sm" placeholder="Name"/>
			<div className="text-md text-left text-gray-600">
				ID number
			</div>
			<input type="text" className="bg-white w-[400px] h-[2em] rounded-md px-2 py-1 shadow-sm" placeholder="ID number"/>
			<div className="text-md text-left text-gray-600">
				Date
			</div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker className="bg-white w-[400px]"/>
			</LocalizationProvider>
			<div className="text-md text-left text-gray-600">
				Location
			</div>
			<Select variant="standard" name="location" id="location" className="h-[2em] w-[400px]">
				<MenuItem value="KCMH">Chulalongkorn Hospital</MenuItem>
				<MenuItem value="RH">Rajavithi Hospital</MenuItem>
				<MenuItem value="TUH">Thammasat Uninversity Hospital</MenuItem>
			</Select>
		</div>
	)
}