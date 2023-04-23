import React from 'react'
import { cn } from "@/utils/helper";

export default function Card(props: any) {
    return (
        <section
            className={cn(
                `bg-lightBaseColor w-full rounded-xl mt-10 pl-4 pb-8`,
                props.className || ""
            )}
        >
            <div>Manoj</div>
        </section>
    )
}
