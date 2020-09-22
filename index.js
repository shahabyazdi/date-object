class DateObject {
    #year
    #month
    #day
    #hour
    #minute
    #second
    #millisecond
    #format
    #local = DateObject.locals.EN
    #calendar = DateObject.calendars.GREGORIAN
    #leaps = []
    #types = {
        YYYY: /\d{4}/,
        YY: /\d\d/,
        MMMM: /[A-z]+/, //month name
        MMM: /[A-z]+/, //month shortName
        MM: /\d\d/,
        M: /\d/,
        WW: /\d\d/, //week of year
        W: /\d/,     //week of year
        DDDD: /\d{1,3}/,
        DDD: /\d{1,3}/,
        DD: /\d\d/,
        D: /\d/,
        dddd: /[A-z]+/, //weekDay name
        ddd: /[A-z]+/, //weekDay shortName
        HH: /\d\d/,
        H: /\d/,
        hh: /\d\d/,
        h: /\d/,
        mm: /\d\d/,
        m: /\d/,
        ss: /\d\d/,
        s: /\d/,
        SSS: /\d{3}/,
        SS: /\d\d/,
        S: /\d/,
        a: /[a-z]{2,9}/,
        A: /[a-z]{2,9}/
    }

    #reverse = {
        "YYYY": string => this.#year = this.#toNumber(string),
        "YY": string => {
            switch (this.#calendar) {
                case DateObject.calendars.PERSIAN:
                    string = "13" + string
                    break
                case DateObject.calendars.ARABIC:
                    string = "14" + string
                    break
                default:
                    string = "20" + string
            }

            this.#year = this.#toNumber(string)
        },
        "MMMM": string => this.#month = this.months.findIndex(month => string.toLowerCase() === month.name.toLowerCase()),
        "MMM": string => this.#month = this.months.findIndex(month => string.toLowerCase() === month.shortName.toLowerCase()),
        "MM": string => this.#month = this.#toNumber(string) - 1,
        "M": string => this.#month = this.#toNumber(string) - 1,
        "DD": string => this.#day = this.#toNumber(string),
        "D": string => this.#day = this.#toNumber(string),
        "HH": string => this.#hour = this.#toNumber(string),
        "H": string => this.#hour = this.#toNumber(string),
        "hh": string => {
            let hour = this.#toNumber(string)

            this.#hour = hour > 12 ? hour - 12 : hour
        },
        "h": string => {
            let hour = this.#toNumber(string)

            this.#hour = hour > 12 ? hour - 12 : hour
        },
        "mm": string => this.#minute = this.#toNumber(string),
        "m": string => this.#minute = this.#toNumber(string),
        "ss": string => this.#second = this.#toNumber(string),
        "s": string => this.#second = this.#toNumber(string),
        "SSS": string => this.millisecond = this.#toNumber(string),
        "SS": string => this.millisecond = this.#toNumber(string),
        "S": string => this.millisecond = this.#toNumber(string),
    }

    static calendars = {
        GREGORIAN: "GREGORIAN",
        PERSIAN: "PERSIAN",
        ARABIC: "ARABIC"
    }

    static locals = {
        EN: "EN",
        FA: "FA",
        AR: "AR"
    }

    #months = {
        [DateObject.calendars.GREGORIAN]: [
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "January", shortName: "Jan" },
                    [DateObject.locals.FA]: { name: "ژانویه", shortName: "ژان" },
                    [DateObject.locals.AR]: { name: "يناير", shortName: "ينا" }
                }
            },
            {
                length: undefined,
                locals: {
                    [DateObject.locals.EN]: { name: "February", shortName: "Feb" },
                    [DateObject.locals.FA]: { name: "فوریه", shortName: "فور" },
                    [DateObject.locals.AR]: { name: "فبراير", shortName: "فبر" }
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "March", shortName: "Mar" },
                    [DateObject.locals.FA]: { name: "مارس", shortName: "ما" },
                    [DateObject.locals.AR]: { name: "مارس", shortName: "ما" }
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "April", shortName: "Apr" },
                    [DateObject.locals.FA]: { name: "آوریل", shortName: "آور" },
                    [DateObject.locals.AR]: { name: "إبريل", shortName: "إبر" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "May", shortName: "May" },
                    [DateObject.locals.FA]: { name: "مه", shortName: "مه" },
                    [DateObject.locals.AR]: { name: "مايو", shortName: "ما" },
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "June", shortName: "June" },
                    [DateObject.locals.FA]: { name: "ژوئن", shortName: "ژو" },
                    [DateObject.locals.AR]: { name: "يونيو", shortName: "يو" }
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "July", shortName: "July" },
                    [DateObject.locals.FA]: { name: "ژوئیه", shortName: "ژوئیه" },
                    [DateObject.locals.AR]: { name: "يوليو", shortName: "يوليو" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "August", shortName: "Aug" },
                    [DateObject.locals.FA]: { name: "اوت", shortName: "اوت" },
                    [DateObject.locals.AR]: { name: "أغسطس", shortName: "أغس" }
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "September", shortName: "Sept" },
                    [DateObject.locals.FA]: { name: "سپتامبر", shortName: "سپ" },
                    [DateObject.locals.AR]: { name: "سبتمبر", shortName: "سب" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "October", shortName: "Oct" },
                    [DateObject.locals.FA]: { name: "اکتبر", shortName: "اک" },
                    [DateObject.locals.AR]: { name: "أكتوبر", shortName: "اک" },
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "November", shortName: "Nov" },
                    [DateObject.locals.FA]: { name: "نوامبر", shortName: "نو" },
                    [DateObject.locals.AR]: { name: "نوفمبر", shortName: "نو" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "December", shortName: "Dec" },
                    [DateObject.locals.FA]: { name: "دسامبر", shortName: "دس" },
                    [DateObject.locals.AR]: { name: "ديسمبر", shortName: "دس" },
                }
            }
        ],
        [DateObject.calendars.PERSIAN]: [
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Farvardin", shortName: "Far" },
                    [DateObject.locals.FA]: { name: "فروردین", shortName: "فر" },
                    [DateObject.locals.AR]: { name: "فروردین", shortName: "فر" }
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Ordibehesht", shortName: "Ord" },
                    [DateObject.locals.FA]: { name: "اردیبهشت", shortName: "ار" },
                    [DateObject.locals.AR]: { name: "اردیبهشت", shortName: "ار" }
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Khordad", shortName: "Khor" },
                    [DateObject.locals.FA]: { name: "خرداد", shortName: "خرد" },
                    [DateObject.locals.AR]: { name: "خرداد", shortName: "خرد" }
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Tir", shortName: "Tir" },
                    [DateObject.locals.FA]: { name: "تیر", shortName: "تیر" },
                    [DateObject.locals.AR]: { name: "تیر", shortName: "تیر" },
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Mordad", shortName: "Mor" },
                    [DateObject.locals.FA]: { name: "مرداد", shortName: "مر" },
                    [DateObject.locals.AR]: { name: "مرداد", shortName: "مر" },
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Shahrivar", shortName: "Sha" },
                    [DateObject.locals.FA]: { name: "شهریور", shortName: "شه" },
                    [DateObject.locals.AR]: { name: "شهریور", shortName: "شه" }
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Mehr", shortName: "Mehr" },
                    [DateObject.locals.FA]: { name: "مهر", shortName: "مه" },
                    [DateObject.locals.AR]: { name: "مهر", shortName: "مه" }
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Aban", shortName: "Aban" },
                    [DateObject.locals.FA]: { name: "آبان", shortName: "آبا" },
                    [DateObject.locals.AR]: { name: "آبان", shortName: "آبا" }
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Azar", shortName: "Azar" },
                    [DateObject.locals.FA]: { name: "آذر", shortName: "آذ" },
                    [DateObject.locals.AR]: { name: "آذر", shortName: "آذ" }
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Dey", shortName: "Dey" },
                    [DateObject.locals.FA]: { name: "دی", shortName: "دی" },
                    [DateObject.locals.AR]: { name: "دی", shortName: "دی" }
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Bahman", shortName: "Bah" },
                    [DateObject.locals.FA]: { name: "بهمن", shortName: "بهم" },
                    [DateObject.locals.AR]: { name: "بهمن", shortName: "بهم" }
                },
            },
            {
                length: undefined,
                locals: {
                    [DateObject.locals.EN]: { name: "Esfand", shortName: "Esf" },
                    [DateObject.locals.FA]: { name: "اسفند", shortName: "اسف" },
                    [DateObject.locals.AR]: { name: "اسفند", shortName: "اسف" }
                },
            }
        ],
        [DateObject.calendars.ARABIC]: [
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "محرم", shortName: "محرم" },
                    [DateObject.locals.EN]: { name: "Muharram", shortName: "Mu" },
                    [DateObject.locals.FA]: { name: "محرم", shortName: "محرم" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "صفر", shortName: "صفر" },
                    [DateObject.locals.EN]: { name: "Safar", shortName: "Sa" },
                    [DateObject.locals.FA]: { name: "صفر", shortName: "صفر" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "ربیع الاول", shortName: "ربیع الاول" },
                    [DateObject.locals.EN]: { name: "Rabi`al-Awwal", shortName: "RI" },
                    [DateObject.locals.FA]: { name: "ربیع الاول", shortName: "ربیع الاول" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "ربیع الثانی", shortName: "ربیع الثانی" },
                    [DateObject.locals.EN]: { name: "Rabi`ath-Thani", shortName: "RII" },
                    [DateObject.locals.FA]: { name: "ربیع الثانی", shortName: "ربیع الثانی" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "جمادی الاول", shortName: "جمادی الاول" },
                    [DateObject.locals.EN]: { name: "Jumada l-Ula", shortName: "JI" },
                    [DateObject.locals.FA]: { name: "جمادی الاول", shortName: "جمادی الاول" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "جمادی الثانی", shortName: "جمادی الثانی" },
                    [DateObject.locals.EN]: { name: "Jumada t-Tania", shortName: "JII" },
                    [DateObject.locals.FA]: { name: "جمادی الثانی", shortName: "جمادی الثانی" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "رجب", shortName: "رجب" },
                    [DateObject.locals.EN]: { name: "Rajab", shortName: "Ra" },
                    [DateObject.locals.FA]: { name: "رجب", shortName: "رجب" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "شعبان", shortName: "شعبان" },
                    [DateObject.locals.EN]: { name: "Sha`ban", shortName: "Sh" },
                    [DateObject.locals.FA]: { name: "شعبان", shortName: "شعبان" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "رمضان", shortName: "رمضان" },
                    [DateObject.locals.EN]: { name: "Ramadan", shortName: "Ra" },
                    [DateObject.locals.FA]: { name: "رمضان", shortName: "رمضان" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "شوال", shortName: "شوال" },
                    [DateObject.locals.EN]: { name: "Shawwal", shortName: "Sh" },
                    [DateObject.locals.FA]: { name: "شوال", shortName: "شوال" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "ذیقعده ", shortName: "ذیقعده" },
                    [DateObject.locals.EN]: { name: "Dhu l-Qa`da ", shortName: "DhQ" },
                    [DateObject.locals.FA]: { name: "ذیقعده ", shortName: "ذیقعده" },
                }
            },
            {
                length: undefined, locals: {
                    [DateObject.locals.AR]: { name: "ذیحجه", shortName: "ذیحجه" },
                    [DateObject.locals.EN]: { name: "Dhu l-Hijja", shortName: "DhH" },
                    [DateObject.locals.FA]: { name: "ذیحجه", shortName: "ذیحجه" },
                }
            }
        ]
    }

    #weeks = {
        [DateObject.calendars.GREGORIAN]: [
            {
                index: 0,
                locals: {
                    [DateObject.locals.EN]: { name: "Sunday", shortName: "Sun" },
                    [DateObject.locals.FA]: { name: "یکشنبه", shortName: "یک" },
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "اح" },
                }
            },
            {
                index: 1,
                locals: {
                    [DateObject.locals.EN]: { name: "Monday", shortName: "Mon" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                }
            },
            {
                index: 2,
                locals: {
                    [DateObject.locals.EN]: { name: "Tuesday", shortName: "Tue" },
                    [DateObject.locals.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثل" },
                }
            },
            {
                index: 3,
                locals: {
                    [DateObject.locals.EN]: { name: "Wednesday", shortName: "Wed" },
                    [DateObject.locals.FA]: { name: "چهارشنبه", shortName: "چهار" },
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ار" },
                }
            },
            {
                index: 4,
                locals: {
                    [DateObject.locals.EN]: { name: "Thursday", shortName: "Thu" },
                    [DateObject.locals.FA]: { name: "پنجشنبه", shortName: "پنج" },
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                }
            },
            {
                index: 5,
                locals: {
                    [DateObject.locals.EN]: { name: "Friday", shortName: "Fri" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" },
                }
            },
            {
                index: 6,
                locals: {
                    [DateObject.locals.EN]: { name: "Saturday", shortName: "Sat" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سب" },
                }
            }
        ],
        [DateObject.calendars.PERSIAN]: [
            {
                index: 1,
                locals: {
                    [DateObject.locals.EN]: { name: "YekShanbeh", shortName: "Ye" },
                    [DateObject.locals.FA]: { name: "یکشنبه", shortName: "یک" },
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "اح" },
                }
            },
            {
                index: 2,
                locals: {
                    [DateObject.locals.EN]: { name: "Doshanbeh", shortName: "Do" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                }
            },
            {
                index: 3,
                locals: {
                    [DateObject.locals.EN]: { name: "Seshanbeh", shortName: "Se" },
                    [DateObject.locals.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثل" },
                }
            },
            {
                index: 4,
                locals: {
                    [DateObject.locals.EN]: { name: "Chaharshanbeh", shortName: "Ch" },
                    [DateObject.locals.FA]: { name: "چهارشنبه", shortName: "چهار" },
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ار" },
                }
            },
            {
                index: 5,
                locals: {
                    [DateObject.locals.EN]: { name: "Panjshanbeh", shortName: "Pa" },
                    [DateObject.locals.FA]: { name: "پنجشنبه", shortName: "پنج" },
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                }
            },
            {
                index: 6,
                locals: {
                    [DateObject.locals.EN]: { name: "Jom'eh", shortName: "Jo" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" }
                }
            },
            {
                index: 0,
                locals: {
                    [DateObject.locals.EN]: { name: "Shanbeh", shortName: "Sh" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سب" }
                }
            }
        ],
        [DateObject.calendars.ARABIC]: [
            {
                index: 1, locals: {
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "اح" },
                    [DateObject.locals.EN]: { name: "al-'ahad", shortName: "Aha" },
                    [DateObject.locals.FA]: { name: "يکشنبه", shortName: "یک" },
                }
            },
            {
                index: 2, locals: {
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locals.EN]: { name: "al-'ithnayn", shortName: "Ith" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                }
            },
            {
                index: 3, locals: {
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثل" },
                    [DateObject.locals.EN]: { name: "ath-thalatha", shortName: "Tha" },
                    [DateObject.locals.FA]: { name: "سه شنبه	", shortName: "سه" },
                }
            },
            {
                index: 4, locals: {
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ار" },
                    [DateObject.locals.EN]: { name: "al-'arb`a'", shortName: "Arb" },
                    [DateObject.locals.FA]: { name: "چهار شنبه", shortName: "چهار" },
                }
            },
            {
                index: 5, locals: {
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locals.EN]: { name: "al-khamis", shortName: "Kha" },
                    [DateObject.locals.FA]: { name: "پنج شنبه	", shortName: "پنج" },
                }
            },
            {
                index: 6, locals: {
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locals.EN]: { name: "al-jum`a", shortName: "Jum" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                }
            },
            {
                index: 0, locals: {
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سب" },
                    [DateObject.locals.EN]: { name: "as-sabt", shortName: "Sab" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                }
            },
        ]
    }

    #digits = {
        [DateObject.locals.EN]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        [DateObject.locals.FA]: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        [DateObject.locals.AR]: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
    }

    #meridiems = {
        [DateObject.locals.EN]: [{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }],
        [DateObject.locals.FA]: [{ name: "قبل از ظهر", shortName: "ق.ظ" }, { name: "بعد از ظهر", shortName: "ب.ظ" }],
        [DateObject.locals.AR]: [{ name: "قبل الظهر", shortName: "ق.ظ" }, { name: "بعد الظهر", shortName: "ب.ظ" }]
    }

    #epoch = {
        [DateObject.calendars.GREGORIAN]: 1721424,
        [DateObject.calendars.PERSIAN]: 1948319,
        [DateObject.calendars.ARABIC]: 1948438,
    }

    #yearLength = { [DateObject.calendars.GREGORIAN]: 365, [DateObject.calendars.PERSIAN]: 365, [DateObject.calendars.ARABIC]: 354 }

    constructor(object = { date: new Date() }) {
        if (object instanceof Date || object instanceof DateObject || typeof object === "string") object = { date: object }
        if (typeof object === "number") object = { date: new Date(object * 1000) }

        let { calendar, local, format, date, year, month, day, hour, minute, second, millisecond } = object
        let mustGetLeaps = true

        if (calendar) calendar = DateObject.calendars[calendar.toUpperCase()] || DateObject.calendars.GREGORIAN
        if (local) local = DateObject.locals[local.toUpperCase()] || DateObject.locals.EN
        if (calendar && !date && !year && !month && !day && !hour && !minute && !second && !millisecond) date = new Date()

        this.#format = format

        if (typeof date === "string") {
            if (calendar) this.#calendar = calendar

            this.parse(date)
        }

        if (typeof date === "number") date = new Date(date * 1000)

        const setDate = () => {
            if (month === 0) month = 1

            this.#year = this.#toNumber(year)
            this.#month = this.#toNumber(month - 1)
            this.#day = this.#toNumber(day)
            this.#hour = this.#toNumber(hour) || 0
            this.#minute = this.#toNumber(minute) || 0
            this.#second = this.#toNumber(second) || 0
            this.#millisecond = this.#toNumber(millisecond) || 0
            this.#calendar = calendar || DateObject.calendars.GREGORIAN
            this.#local = local || DateObject.locals.EN
        }

        if (date instanceof DateObject) {
            this.#year = date.year
            this.#month = date.month.index
            this.#day = date.day
            this.#hour = date.hour || 0
            this.#minute = date.minute || 0
            this.#second = date.second || 0
            this.#millisecond = date.millisecond || 0
            this.#local = local || date.local.toUpperCase()
            this.#format = format || date._format
            this.#leaps = date.leaps
            this.#calendar = date.calendar.toUpperCase()

            if (calendar) this.convert(calendar)

            mustGetLeaps = false
        }

        if (date instanceof Date) {
            year = date.getFullYear()
            month = date.getMonth() + 1
            day = date.getDate()
            hour = date.getHours()
            minute = date.getMinutes()
            second = date.getSeconds()
            millisecond = date.getMilliseconds()

            if (calendar !== DateObject.calendars.GREGORIAN) {
                let dateObject = new DateObject({ year, month, day, hour, minute, second }).convert(calendar)

                year = dateObject.year
                month = dateObject.month.number
                day = dateObject.day
                hour = dateObject.hour
                minute = dateObject.minute
                second = dateObject.second
                millisecond = dateObject.millisecond
            }

            setDate()
        }

        if (!date) setDate()
        if (this.#year === 0) this.#year = -1

        if (mustGetLeaps) {
            this.#getLeaps()
            this.#fix()
        }
    }

    parse(string) {
        if (!string) return this

        let format = this.#format

        if (this.#local !== DateObject.locals.en) {
            let digits = this.#digits[this.#local]

            for (let digit of digits) {
                string = string.replace(new RegExp(digit, "g"), digits.indexOf(digit))
            }
        }

        if (!format) {
            const regex = /(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/
            let [, year, month, day, hour, minute, second, millisecond, a] = string.match(regex)

            if (month) {
                if (/\d+/.test(month)) {
                    month = this.#toNumber(month) - 1
                } else {
                    month = this.months.findIndex($month => new RegExp(month, "i").test($month.name))
                }
            }

            this.#year = this.#toNumber(year)
            this.#month = this.#toNumber(month)
            this.#day = this.#toNumber(day)
            this.#hour = this.#toNumber(hour)
            this.#minute = this.#toNumber(minute)
            this.#second = this.#toNumber(second)
            this.#millisecond = this.#toNumber(millisecond)

            if (a && a === "pm" && this.#hour < 12) {
                this.#hour = this.#hour + 12
            }
        } else {
            const formatArray = format.split(/[^\w\u0600-\u06FF]/)
            const stringArray = string.split(/[^\w\u0600-\u06FF]/)

            for (let i = 0; i < formatArray.length; i++) {
                let reverse = this.#reverse[formatArray[i]]

                if (reverse && stringArray[i]) reverse(stringArray[i])
            }
        }

        if (string.includes(this.#meridiems[this.#local][1].shortName) && this.#hour < 12) {
            this.#hour = this.#hour + 12
        }

        if (string.includes(this.#meridiems[this.#local][1].name) && this.#hour < 12) {
            this.#hour = this.#hour + 12
        }

        this.#fix()

        return this
    }

    #fix = () => {
        const setMonth = () => {
            let mustGetLeaps = false

            while (this.#month < 1) {
                this.#month += 12
                this.#year -= 1

                if (this.#year === 0) this.#year = -1

                mustGetLeaps = true
            }

            while (this.#month > 11) {
                this.#month -= 12
                this.#year += 1

                if (this.#year === 0) this.#year = 1

                mustGetLeaps = true
            }

            if (mustGetLeaps) this.#getLeaps()
        }

        if (!this.isValid) return

        while (this.#millisecond >= 1000) {
            this.#millisecond -= 1000
            this.#second += 1
        }

        while (this.#millisecond < 0) {
            this.#millisecond += 1000
            this.#second -= 1
        }

        while (this.#second >= 60) {
            this.#second -= 60
            this.#minute += 1
        }

        while (this.#second < 0) {
            this.#second += 60
            this.#minute -= 1
        }

        while (this.#minute >= 60) {
            this.#minute -= 60
            this.#hour += 1
        }

        while (this.#minute < 0) {
            this.#minute += 60
            this.#hour -= 1
        }

        while (this.#hour >= 24) {
            this.#hour -= 24
            this.#day += 1
        }

        while (this.#hour < 0) {
            this.#hour += 24
            this.#day -= 1
        }

        while (true) {
            if (this.#month < 1 || this.#month > 11) setMonth()

            while (this.#day < 1) {
                this.#month -= 1

                setMonth()

                this.#day = this.month.length + this.#day
            }

            if (this.#day <= this.month.length) break

            this.#day -= this.month.length
            this.#month++
        }

        if (!this.#hour) this.#hour = 0
        if (!this.#minute) this.#minute = 0
        if (!this.#second) this.#second = 0
        if (!this.#millisecond) this.#millisecond = 0
    }

    #getLeaps = () => {
        if (this.#year === 0) return

        let year = this.#year > 0 ? 1 : -1
        let condition = () => this.#year > 0 ? year <= this.#year : this.#year <= year
        let increase = () => this.#year > 0 ? year++ : year--

        this.#leaps = []

        switch (this.#calendar) {
            case DateObject.calendars.PERSIAN:
                let delta = 0.242362
                let offset = this.#year > 0 ? 0.2684 : 0.7316
                let correct = { 5: 4, 38: 37, 199: 198, 232: 231, 265: 264, 298: 297, 557: 558, 590: 591, 623: 624, 982: 983, 1015: 1016, 1048: 1049, 1081: 1082, 1114: 1115, 1242: 1243, 1374: 1375, 1407: 1408, 1440: 1441, 1506: 1507, 1539: 1540, 1572: 1573, 1605: 1606, 1931: 1932, 1964: 1965, 2063: 2064, 2096: 2097, 2687: 2686, 2720: 2719, 2753: 2752, 2819: 2818, 2852: 2851, 2885: 2884, 3017: 3016, 3112: 3111, 3145: 3144, 3178: 3177, 3211: 3210, 3244: 3243, 3277: 3276, 3310: 3309, 3343: 3342, 3376: 3375, 3409: 3408, 3442: 3441, 3508: 3507, 3541: 3540, 3574: 3573, 3603: 3602, 3607: 3606, 3636: 3635, 3669: 3668, 3702: 3701, 3706: 3705, 3735: 3734, 3768: 3767, 3801: 3800, 3834: 3833, 3867: 3866, 3900: 3899, 3933: 3932, 3966: 3965, 3999: 3998, 4065: 4064, 4094: 4093, 4098: 4097, 4127: 4126, 4131: 4130, 4160: 4159, 4193: 4192, 4226: 4225, 4259: 4258, 4292: 4291, 4325: 4324, 4358: 4357, 4391: 4390, 4585: 4584, 4618: 4617, 4651: 4650, 4750: 4749, 4943: 4944, 4976: 4977, 5009: 5010, 5170: 5171, 5203: 5204, 5236: 5237, 5265: 5266, 5269: 5270, 5298: 5299, 5302: 5303, 5331: 5332, 5335: 5336, 5364: 5365, 5368: 5369, 5393: 5394, 5397: 5398, 5401: 5402, 5426: 5427, 5430: 5431, 5434: 5435, 5459: 5460, 5463: 5464, 5467: 5468, 5492: 5493, 5496: 5497, 5500: 5501, 5521: 5522, 5525: 5526, 5529: 5530, 5554: 5555, 5558: 5559, 5562: 5563, 5587: 5588, 5591: 5592, 5595: 5596, 5616: 5617, 5620: 5621, 5624: 5625, 5628: 5629, 5649: 5650, 5653: 5654, 5657: 5658, 5661: 5662, 5682: 5683, 5686: 5687, 5690: 5691, 5694: 5695, 5715: 5716, 5719: 5720, 5723: 5724, 5727: 5728, 5744: 5745, 5748: 5749, 5752: 5753, 5756: 5757, 5760: 5761, 5777: 5778, 5781: 5782, 5785: 5786, 5789: 5790, 5793: 5794, 5810: 5811, 5814: 5815, 5818: 5819, 5822: 5823, 5826: 5827, 5839: 5840, 5843: 5844, 5847: 5848, 5851: 5852, 5855: 5856, 5859: 5860, 5872: 5873, 5876: 5877, 5880: 5881, 5884: 5885, 5888: 5889, 5892: 5893, 5901: 5902, 5905: 5906, 5909: 5910, 5913: 5914, 5917: 5918, 5921: 5922, 5925: 5926, 5934: 5935, 5938: 5939, 5942: 5943, 5946: 5947, 5950: 5951, 5954: 5955, 5958: 5959, 5967: 5968, 5971: 5972, 5975: 5976, 5979: 5980, 5983: 5984, 5987: 5988, 5991: 5992, 5996: 5997, 6000: 6001, 6004: 6005, 6008: 6009, 6012: 6013, 6016: 6017, 6020: 6021, 6029: 6030, 6033: 6034, 6037: 6038, 6041: 6042, 6045: 6046, 6049: 6050, 6053: 6054, 6058: 6059, 6062: 6063, 6066: 6067, 6070: 6071, 6074: 6075, 6078: 6079, 6082: 6083, 6086: 6087, 6091: 6092, 6095: 6096, 6099: 6100, 6103: 6104, 6107: 6108, 6111: 6112, 6115: 6116, 6119: 6120, 6124: 6125, 6128: 6129, 6132: 6133, 6136: 6137, 6140: 6141, 6144: 6145, 6148: 6149, 6152: 6154, 6157: 6158, 6161: 6162, 6165: 6166, 6169: 6170, 6173: 6174, 6177: 6178, 6181: 6182, 6185: 6187, 6190: 6191, 6194: 6195, 6198: 6199, 6202: 6203, 6206: 6207, 6210: 6211, 6214: 6215, 6218: 6220, 6223: 6224, 6227: 6228, 6231: 6232, 6235: 6236, 6239: 6240, 6243: 6244, 6247: 6249, 6251: 6253, 6256: 6257, 6260: 6261, 6264: 6265, 6268: 6269, 6272: 6273, 6276: 6277, 6280: 6282, 6284: 6286, 6289: 6290, 6293: 6294, 6297: 6298, 6301: 6302, 6305: 6306, 6309: 6310, 6313: 6315, 6317: 6319, 6322: 6323, 6326: 6327, 6330: 6331, 6334: 6335, 6338: 6339, 6342: 6344, 6346: 6348, 6350: 6352, 6355: 6356, 6359: 6360, 6363: 6364, 6367: 6368, 6371: 6372, 6375: 6377, 6379: 6381, 6383: 6385, 6388: 6389, 6392: 6393, 6396: 6397, 6400: 6401, 6404: 6406, 6408: 6410, 6412: 6414, 6416: 6418, 6421: 6422, 6425: 6426, 6429: 6430, 6433: 6434, 6437: 6439, 6441: 6443, 6445: 6447, 6449: 6451, 6454: 6455, 6458: 6459, 6462: 6463, 6466: 6468, 6470: 6472, 6474: 6476, 6478: 6480, 6482: 6484, 6487: 6488, 6491: 6492, 6495: 6496 }

                while (condition()) {
                    offset = offset + (this.#year > 0 ? delta : (-1 * delta))

                    if (offset > 1) offset -= 1
                    if (offset < 0) offset += 1

                    if (offset >= 0.257800926 && offset <= 0.5) {
                        let $correct = correct[year] || year < -1 ? year + 1 : year

                        if (this.#year > 0 && $correct <= this.#year) this.#leaps.push($correct)
                        if (this.#year < 0) this.#leaps.push($correct)
                    }

                    increase()
                }

                break
            case DateObject.calendars.ARABIC:
                while (condition()) {
                    if ([2, 5, 7, 10, 13, 15, 18, 21, 24, 26, 29].includes(year % 30)) this.#leaps.push(year)

                    increase()
                }

                break
            default:
                while (condition()) {
                    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) this.#leaps.push(year)

                    increase()
                }
        }
    }

    convert(calendar = DateObject.calendars.GREGORIAN) {
        calendar = DateObject.calendars[calendar.toUpperCase()]

        if (!calendar) throw new Error("calendar not found")
        if (calendar === this.#calendar) return this

        let days = this.toJulianDay() - this.#epoch[calendar]

        let target = new DateObject({
            calendar,
            year: this.#guessYear(days, calendar),
            month: 1,
            day: 1
        })

        target.day += days - target.dayOfBeginning

        this.#year = target.year
        this.#month = target.month.index
        this.#day = target.day
        this.#leaps = target.leaps
        this.#calendar = calendar

        return this
    }

    #guessYear = (days, calendar) => {
        let year = undefined

        switch (calendar) {
            case DateObject.calendars.PERSIAN:
                year = ~~((days + 0.5) / 365.241) + 1
                break
            case DateObject.calendars.ARABIC:
                year = ~~((days - 0.5) / 354.366) + 1
                break
            default:
                year = ~~(days / 365.24) + 1
        }

        return year
    }

    format(format) {
        if (!this.isValid) return ""
        if (format && typeof format !== "string") return
        if (!format) format = this.#format || "YYYY/MM/DD"

        let index = 1
        let object = {}

        for (let key in this.#types) {
            while (format.includes(key)) {
                let id = `~~r00${index}~`

                format = format.replace(key, id)
                object[id] = this.getProperty(key)
                index++
            }
        }

        for (let key in object) {
            format = format.replace(key, object[key])
        }

        if (this.#local !== DateObject.locals.en) {
            let digits = this.#digits[this.#local]

            format = format.replace(/[0-9]/g, w => digits[w])
        }

        return format
    }

    getProperty(key) {
        const pad = number => number < 10 ? "0" + number : number

        switch (key) {
            case "YYYY": return this.year
            case "YY": return this.year.toString().substring(2, 4)
            case "MMMM": return this.month.name
            case "MMM": return this.month.shortName
            case "MM": return pad(this.month.number)
            case "M": return this.month.number
            case "WW": return pad(this.weekOfYear)
            case "W": return this.weekOfYear
            case "DDDD": return this.dayOfYear
            case "DDD": return this.dayOfYear
            case "DD": return pad(this.day)
            case "D": return this.day
            case "HH": return pad(this.hour)
            case "H": return this.hour
            case "dddd": return this.weekDay.name
            case "ddd": return this.weekDay.shortName
            case "hh": return pad(this.hour > 12 ? this.hour - 12 : this.hour || 12)
            case "h": return this.hour > 12 ? this.hour - 12 : this.hour || 12
            case "mm": return pad(this.minute)
            case "m": return this.minute
            case "ss": return pad(this.second)
            case "s": return this.second
            case "SSS": return this.#millisecond
            case "SS": return this.#millisecond.toString().substring(0, 2)
            case "S": return this.#millisecond.toString().substring(0, 1)
            case "a": return this.hour >= 12 ? this.#meridiems[this.#local][1].shortName : this.#meridiems[this.#local][0].shortName
            case "A": return this.hour >= 12 ? this.#meridiems[this.#local][1].name : this.#meridiems[this.#local][0].name
            default: return ""
        }
    }

    setYear(number) {
        this.year = number

        return this
    }

    setMonth(number) {
        this.month = number

        return this
    }

    setDay(number) {
        this.day = number

        return this
    }

    setHour(number) {
        this.hour = number

        return this
    }

    setMinute(number) {
        this.minute = number

        return this
    }

    setSecond(number) {
        this.second = number

        return this
    }

    setMillisecond(number) {
        this.millisecond = number

        return this
    }

    setFormat(format) {
        this.#format = format

        return this
    }

    setLocal(local) {
        this.local = local

        return this
    }

    setCalendar(calendar) {
        this.calendar = calendar

        return this
    }

    toFirstOfYear() {
        this.month = 1
        this.day = 1

        return this
    }

    toLastOfYear() {
        if (this.day >= 29) this.day = 29

        this.month = 12
        this.toLastOfMonth()
        return this
    }

    toFirstOfMonth() {
        this.#day = 1
        return this
    }

    toLastOfMonth() {
        this.#day = 0
        this.#month += 1
        this.#fix()
        return this
    }

    toFirstOfWeek() {
        this.day -= this.weekDay.index

        return this
    }

    toLastOfWeek() {
        this.day += 6 - this.weekDay.index

        return this
    }

    toFirstWeekOfYear() {
        this.toFirstOfYear()

        if (this.weekDay.index === 0) return this

        return this.toLastOfWeek().setDay(this.day + 1)
    }

    toLastWeekOfYear() {
        return this.toLastOfYear().toFirstOfWeek()
    }

    toString() {
        return this.format()
    }

    toDate() {
        let date = new DateObject(this)

        if (this.#calendar !== DateObject.calendars.GREGORIAN) date.convert(DateObject.calendars.GREGORIAN)

        return new Date(date.#year, date.#month, date.#day, date.#hour, date.#minute, date.#second, date.#millisecond)
    }

    toUnix() {
        return this.unix
    }

    toJulianDay() {
        return this.dayOfBeginning + this.#epoch[this.#calendar]
    }

    toObject() {
        return {
            year: this.#year,
            month: this.month,
            day: this.#day,
            weekDay: this.weekDay,
            hour: this.#hour,
            minute: this.#minute,
            second: this.#second,
            millisecond: this.#millisecond,
            weekOfYear: this.weekOfYear,
            dayOfYear: this.dayOfYear,
            daysLeft: this.daysLeft,
            calendar: this.#calendar.toLowerCase(),
            local: this.#local.toLowerCase()
        }
    }

    valueOf() {
        return this.dayOfBeginning
    }

    get dayOfBeginning() {
        let days = (this.#year > 0 ? (this.#year - 1) : this.#year) * this.#yearLength[this.#calendar]
        let leapsLength = this.isLeap ? (this.leaps.length - 1) : this.leaps.length

        if (this.#year > 0) days += leapsLength
        if (this.#year < 0) days -= leapsLength

        days += this.dayOfYear

        return days
    }

    get dayOfYear() {
        let days = this.#day
        let months = this.months

        for (let i = 0; i < months.length; i++) {
            if (i >= this.#month) break

            days += months[i].length
        }

        return days
    }

    get weekOfYear() {
        return ~~(this.dayOfYear / 7) + 1
    }

    get daysLeft() {
        let yearLength = this.#yearLength[this.#calendar]
        let days = this.isLeap ? yearLength + 1 : yearLength

        return days - this.dayOfYear
    }

    get year() {
        return this.#year
    }

    get month() {
        let month = this.months[this.#month]

        if (!month) return {}

        month.index = this.#month
        month.number = month.index + 1

        month.toString = function () {
            return this.number
        }

        return month
    }

    get day() {
        return this.#day
    }

    get weekDay() {
        let index = (this.toJulianDay() + 2) % 7
        let weekDay = this.#weeks[this.#calendar][index]

        if (!weekDay) return {}

        weekDay = {
            index: weekDay.index,
            number: weekDay.index + 1,
            toString: function () { return this.number },
            ...weekDay.locals[this.#local]
        }

        return weekDay
    }

    get hour() {
        return this.#hour
    }

    get minute() {
        return this.#minute
    }

    get second() {
        return this.#second
    }

    get millisecond() {
        return this.#millisecond
    }

    get months() {
        let months = this.#months[this.#calendar]

        switch (this.#calendar) {
            case DateObject.calendars.GREGORIAN:
                months[1].length = this.isLeap ? 29 : 28
                break
            default:
                months[11].length = this.isLeap ? 30 : 29
        }

        months = months.map(month => {
            return {
                length: month.length,
                ...month.locals[this.#local]
            }
        })

        return months
    }

    get weeks() {
        let weeks = this.#weeks[this.#calendar]

        weeks.sort((a, b) => a.index - b.index)
        weeks = weeks.map(week => { return { index: week.index, number: week.index + 1, ...week.locals[this.#local] } })

        return weeks
    }

    get leaps() {
        return this.#leaps
    }

    get calendar() {
        return this.#calendar.toLowerCase()
    }

    get local() {
        return this.#local.toLowerCase()
    }

    get meridiems() {
        return this.#meridiems[this.#local]
    }

    get digits() {
        return this.#digits[this.#local]
    }

    get _format() {
        return this.#format
    }

    get isLeap() {
        return this.#leaps.includes(this.#year)
    }

    get isValid() {
        return !Number.isNaN(Number(this.#year + this.#month + this.#day))
    }

    get unix() {
        return Math.round(this.toDate().getTime() / 1000)
    }

    set year(value) {
        value = this.#toNumber(value)
        this.#year = value
        this.#getLeaps()
        this.#fix()
    }

    set month(value) {
        value = this.#toNumber(value)
        this.#month = value - 1
        this.#fix()
    }

    set day(value) {
        value = this.#toNumber(value)
        this.#day = value
        this.#fix()
    }

    set hour(value) {
        value = this.#toNumber(value)
        this.#hour = value
        this.#fix()
    }

    set minute(value) {
        value = this.#toNumber(value)
        this.#minute = value
        this.#fix()
    }

    set second(value) {
        value = this.#toNumber(value)
        this.#second = value
        this.#fix()
    }

    set millisecond(value) {
        value = this.#toNumber(value)
        this.#millisecond = value
        this.#fix()
    }

    set calendar(calendar) {
        this.convert(calendar)
    }

    set local(local) {
        local = local.toUpperCase()

        if (!DateObject.locals[local]) local = DateObject.locals.EN

        this.#local = local
    }

    set _format(format) {
        if (typeof format !== "string") return

        this.#format = format
    }

    #toNumber = value => {
        if (!Number.isNaN(Number(value))) return parseInt(value)
    }
}

module.exports = DateObject