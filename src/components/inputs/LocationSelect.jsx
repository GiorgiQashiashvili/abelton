import { countries } from "../data/countries"


function LocationSelect({ value, label }) {
    return (
            < select className="location" >
                {

                    countries.map((c) => {
                        return (
                            <option
                                key={c.value}
                                value={c.value}
                            >
                                {c.label}
                            </option>
                        )
                    })
                }
            </select >
    )

}

export default LocationSelect