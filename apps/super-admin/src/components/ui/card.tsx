import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
export function Card({className,...props}:HTMLAttributes<HTMLDivElement>){return <div className={cn("rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,.05)]",className)} {...props}/>}
export function CardHeader({className,...props}:HTMLAttributes<HTMLDivElement>){return <div className={cn("flex items-start justify-between gap-4 p-6 pb-2",className)} {...props}/>}
export function CardTitle({className,...props}:HTMLAttributes<HTMLHeadingElement>){return <h3 className={cn("text-sm font-semibold tracking-tight text-slate-950",className)} {...props}/>}
export function CardContent({className,...props}:HTMLAttributes<HTMLDivElement>){return <div className={cn("p-6 pt-3",className)} {...props}/>}
