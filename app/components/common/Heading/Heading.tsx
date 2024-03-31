import { Heading as HeadingProps } from "@/app/lib/types"

export const Heading = ({ heading }: HeadingProps) => {
    return (
        <section>
            <div>
                <h2>{heading}</h2>
            </div>
        </section>
    )
}