export interface DataSet {
    data: any[]
    label: string
    fill: boolean
}

export interface Arctic {
Column1: number
area: number
dataType: string
extent: number
hemisphere: string
month: number
rank: number
year: number
}

export interface Co2{
    year: number
    month: number
    day: number
    cycle: number
    trend: number
}

export interface Methane {
    date: number
    average: number
    trend: number
    averageUnc: number
    trendUnc: number
}

export interface No2 {
    date: number
    average: number
    trend: number
    averageUnc: number
    trendUnc: number
}

export interface Temperature {
    time: number
    station: number
    land: number
}

