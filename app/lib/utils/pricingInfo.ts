type ProductType = 'earphones' | 'headphones' | 'speakers'
type ProductName = keyof typeof productPricing[ProductType]

type PricingInfo = {
    [key: string]: {
        [key: string]: number
    }
}

const productPricing: PricingInfo = {
    'earphones': {
        'YX1_Wireless_Earphones': 599,
    },
    'headphones': {
        'XX59_Headphones': 899,
        'XX99_Mark_I_Headphones': 1750,
        'XX99_Mark_II_Headphones': 2999,
    },
    'speakers': {
        'ZX7_Speaker': 3500,
        'ZX9_Speaker': 4500,
    }
} as const


export const getPricing = (productType: ProductType, productName: ProductName) => {
    return productPricing[productType][productName]
}

/**
 * Return the formatted pricing of a product to a USD currency string
 *
 * @param value - The product name to get the formatted price of
 *
 * @returns The formatted price of the product in USD as a string
 */
export const getformattedPricing = (value: string) => {
    if (!value) return undefined

    // Split the product name to get its type
    const productType = value.split('_').pop()?.toLowerCase() as ProductType // Use type assertion to ensure that the type is ProductType
    const priceValue = productPricing[productType][value]

    // Format the price to a USD currency string
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // Ensure that there is no decimal places
        minimumFractionDigits: 0,
    }).format(Number(priceValue)) as string
}
