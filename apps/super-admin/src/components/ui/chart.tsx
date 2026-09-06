import * as React from "react"
import { ResponsiveContainer, Tooltip } from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig=Record<string,{label:string;color:string}>
const ChartContext=React.createContext<ChartConfig>({})
export function ChartContainer({config,className,children}:{config:ChartConfig,className?:string,children:React.ReactElement}){
  return <ChartContext.Provider value={config}><div className={cn("min-h-[260px] w-full",className)} style={Object.fromEntries(Object.entries(config).map(([key,value])=>[`--color-${key}`,value.color])) as React.CSSProperties}><ResponsiveContainer width="100%" height="100%">{children}</ResponsiveContainer></div></ChartContext.Provider>
}
export const ChartTooltip=Tooltip
type ChartTooltipContentProps={active?:boolean;payload?:ReadonlyArray<{dataKey?:string|number;name?:string|number;value?:number|string;color?:string}>;label?:string|number}
export function ChartTooltipContent({active,payload,label}:ChartTooltipContentProps){
  const config=React.useContext(ChartContext); if(!active||!payload?.length)return null
  return <div className="min-w-40 rounded-xl border border-slate-200 bg-white/95 p-3 text-xs shadow-xl backdrop-blur"><p className="mb-2 font-medium text-slate-500">{label}</p>{payload.map((entry)=><div className="flex items-center justify-between gap-6 py-1" key={String(entry.dataKey)}><span className="flex items-center gap-2 text-slate-600"><i className="h-2 w-2 rounded-full" style={{background:String(entry.color)}}/>{config[String(entry.dataKey)]?.label||entry.name}</span><strong className="font-mono text-slate-950">{Number(entry.value).toLocaleString()}</strong></div>)}</div>
}
