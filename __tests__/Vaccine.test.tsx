import HospitalCatalog from "@/components/hospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
	"success": true,
	"count": 3,
	"pagination": {},
	"data": [
		{
		"_id": "652a821f53952d78e38cea3e",
		"name": "Chulalongkorn Hospital",
		"address": "1873 Rama IV Rd",
		"district": "Pathum Wan",
		"province": "Bangkok",
		"postalcode": "10330",
		"tel": "026494000",
		"picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
		"__v": 0,
		"id": "652a821f53952d78e38cea3e"
		},
		{
		"_id": "652a826553952d78e38cea41",
		"name": "Rajavithi Hospital",
		"address": "2 Phaya Thai Rd, Thung Phaya Thai",
		"district": "Ratchathewi",
		"province": "Bangkok",
		"postalcode": "10400",
		"tel": "022062900",
		"picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
		"__v": 0,
		"id": "652a826553952d78e38cea41"
		},
		{
		"_id": "652a82a553952d78e38cea44",
		"name": "Thammasat University Hospital",
		"address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
		"district": "Khlong Luang",
		"province": "Pathum Thani",
		"postalcode": "12120",
		"tel": "029269999",
		"picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
		"__v": 0,
		"id": "652a82a553952d78e38cea44"
		}
	]
}

describe('HospitalCatalog', () => {
	it('should have correct number of hospital images', async () => {
		const hospitalCatalog = await HospitalCatalog({hospitalRawJson: mockResult})
		render(hospitalCatalog)
		await waitFor(
			() => {
				const hospitalImages = screen.getAllByRole('img')
				expect(hospitalImages.length).toBe(3)
			}
		)
	})
})