import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function HospitalCatalog({hospitalRawJson}: { hospitalRawJson: Object}) {
	const hospitalJson = await hospitalRawJson;
	return (
		<div>
			Explore {hospitalJson.count} hospitals in our catalog
			<div style={{margin:"20px", display:"flex",flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
				{
				hospitalJson.data.map((hospital:Object)=>(
					<Link href={`/hospital/${hospital.id}`} className="w-1/5">
						<ProductCard imgSrc={hospital.picture} header={hospital.name}/>
					</Link>
				))
				}
			</div>
		</div>
	)
}