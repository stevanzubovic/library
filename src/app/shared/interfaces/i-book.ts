export interface IBook {
    id: number
    title: string
    image: {
        url: string
        alt: string
    },
    description: string
    dateLastRented: any
    available: boolean
    basePrice: number
    discountPercent: number
    discountId: number
    author: string
    imageUrl:string
    imageAlt:string
    discountName:string
   
}
