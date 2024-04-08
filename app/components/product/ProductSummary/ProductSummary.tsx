import { ProductSummaryProps } from "@/app/lib/types/products"

export const ProductSummary = ({...ProductSummaryProps}: ProductSummaryProps) => {

    const { productFeatures, packageIncludes } = ProductSummaryProps

    return (
        <section>
            <div>
                <div>
                    <h2>FEATURES</h2>
                    <p>{productFeatures}</p>
                </div>
                <div dangerouslySetInnerHTML={{__html: packageIncludes.html!}}>
                </div>
            </div>
        </section>
    )
}