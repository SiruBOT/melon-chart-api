declare module "@sirubot/melon-chart-api" {
    // Hard coded options default value, use typeof import('../defaults.js")["key"] (but default.js not exporting type)
    type MelonChartOptions = {
        startDateKey?: string | "startDay"
        endDateKey?: string | "endDay"
        rankMonthKey?: string | "rankMonth"
        isFirstDateKey?: string | "isFirstDate"
        isLastDateKey?: string | "isLastDate"
        movedKey?: string | "moved"
        indexKey?: string | "idx"
        url?: string | "http://www.melon.com/chart/day/index.htm?"
        cutLine?: number | 5
        xpath?: {
            songTitles?: string | ".wrap_song_info .rank01 span a"
            artistNames?: string | ".wrap_song_info .rank02 span"
            albumNames?: string | ".wrap_song_info .rank03 a"
            albumCovers?: string | ".image_typeAll  img"
            albumIds?: string | '.image_typeAll',
            dataSongNo?: string | "tbody tr"
        }
        messageFn?: () => void
        date?: Date
    }

    type MelonChartTrackInfo = {
        rank: number;
        title: string;
        artist: string;
        album: string;
        albumCover: string;
        songId: string;
    }

    type MelonChartDates = {
        start: string,
        end: string,
    }

    type MelonChart = {
        data: MelonChartTrackInfo[]
        dates: MelonChartDates
    }

    type MelonChartMethods = {
        realtime(): Promise<MelonChart>
        daily(): Promise<MelonChart>
        weekly(): Promise<MelonChart>
        monthly(): Promise<MelonChart>
    }

    function Melon(date: string, options: MelonChartOptions): MelonChartMethods
}