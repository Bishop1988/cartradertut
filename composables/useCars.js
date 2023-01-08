import cars from "@/data/cars"
import makes from "@/data/makes"
import listings from "@/data/listings"

export const useCars = () => {
    return {
        cars,
        makes,
        listings
    }
}