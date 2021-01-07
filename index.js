export default class DateObject {
    #year
    #month
    #day
    #hour
    #minute
    #second
    #millisecond
    #format
    #locale = DateObject.locales.EN
    #calendar = DateObject.calendars.GREGORIAN
    #isUTC = false
    #leaps = []
    #custom = {}
    #isoDate = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/
    #ignoreList = []

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
        ARABIC: "ARABIC",
        INDIAN: "INDIAN"
    }

    static locales = {
        EN: "EN",
        FA: "FA",
        AR: "AR",
        HI: "HI",
    }

    #months = {
        [DateObject.calendars.GREGORIAN]: [
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "January", shortName: "Jan" },
                    [DateObject.locales.FA]: { name: "ژانویه", shortName: "ژان" },
                    [DateObject.locales.AR]: { name: "يناير", shortName: "ينا" },
                    [DateObject.locales.HI]: { name: "जनवरी", shortName: "जन" },
                }
            },
            {
                length: undefined,
                locales: {
                    [DateObject.locales.EN]: { name: "February", shortName: "Feb" },
                    [DateObject.locales.FA]: { name: "فوریه", shortName: "فور" },
                    [DateObject.locales.AR]: { name: "فبراير", shortName: "فبر" },
                    [DateObject.locales.HI]: { name: "फ़रवरी", shortName: "फ़र" }
                }
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "March", shortName: "Mar" },
                    [DateObject.locales.FA]: { name: "مارس", shortName: "ما" },
                    [DateObject.locales.AR]: { name: "مارس", shortName: "ما" },
                    [DateObject.locales.HI]: { name: "मार्च", shortName: "मार्च" }
                }
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "April", shortName: "Apr" },
                    [DateObject.locales.FA]: { name: "آوریل", shortName: "آور" },
                    [DateObject.locales.AR]: { name: "إبريل", shortName: "إبر" },
                    [DateObject.locales.HI]: { name: "अप्रैल", shortName: "अप्रैल" }
                }
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "May", shortName: "May" },
                    [DateObject.locales.FA]: { name: "مه", shortName: "مه" },
                    [DateObject.locales.AR]: { name: "مايو", shortName: "ما" },
                    [DateObject.locales.HI]: { name: "मई", shortName: "मई" },
                }
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "June", shortName: "Jun" },
                    [DateObject.locales.FA]: { name: "ژوئن", shortName: "ژو" },
                    [DateObject.locales.AR]: { name: "يونيو", shortName: "يو" },
                    [DateObject.locales.HI]: { name: "जून", shortName: "जून" },
                }
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "July", shortName: "Jul" },
                    [DateObject.locales.FA]: { name: "ژوئیه", shortName: "ژوئیه" },
                    [DateObject.locales.AR]: { name: "يوليو", shortName: "يوليو" },
                    [DateObject.locales.HI]: { name: "जुलाई", shortName: "जुल" },
                }
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "August", shortName: "Aug" },
                    [DateObject.locales.FA]: { name: "اوت", shortName: "اوت" },
                    [DateObject.locales.AR]: { name: "أغسطس", shortName: "أغس" },
                    [DateObject.locales.HI]: { name: "अगस्त", shortName: "अग" }
                }
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "September", shortName: "Sep" },
                    [DateObject.locales.FA]: { name: "سپتامبر", shortName: "سپ" },
                    [DateObject.locales.AR]: { name: "سبتمبر", shortName: "سب" },
                    [DateObject.locales.HI]: { name: "सितंबर", shortName: "सित" },
                }
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "October", shortName: "Oct" },
                    [DateObject.locales.FA]: { name: "اکتبر", shortName: "اک" },
                    [DateObject.locales.AR]: { name: "أكتوبر", shortName: "اک" },
                    [DateObject.locales.HI]: { name: "अक्तूबर", shortName: "अक्तू" },
                }
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "November", shortName: "Nov" },
                    [DateObject.locales.FA]: { name: "نوامبر", shortName: "نو" },
                    [DateObject.locales.AR]: { name: "نوفمبر", shortName: "نو" },
                    [DateObject.locales.HI]: { name: "नवंबर", shortName: "नव" },
                }
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "December", shortName: "Dec" },
                    [DateObject.locales.FA]: { name: "دسامبر", shortName: "دس" },
                    [DateObject.locales.AR]: { name: "ديسمبر", shortName: "دس" },
                    [DateObject.locales.HI]: { name: "दिसंबर", shortName: "दिस" },
                }
            }
        ],
        [DateObject.calendars.PERSIAN]: [
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "Farvardin", shortName: "Far" },
                    [DateObject.locales.FA]: { name: "فروردین", shortName: "فر" },
                    [DateObject.locales.AR]: { name: "فروردین", shortName: "فر" },
                    [DateObject.locales.HI]: { name: "फर्वादिन", shortName: "फर्वादिन" },
                },
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "Ordibehesht", shortName: "Ord" },
                    [DateObject.locales.FA]: { name: "اردیبهشت", shortName: "ار" },
                    [DateObject.locales.AR]: { name: "اردیبهشت", shortName: "ار" },
                    [DateObject.locales.HI]: { name: "ओर्दिवेहेस्ट", shortName: "ओर्दिवेहेस्ट" },
                },
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "Khordad", shortName: "Kho" },
                    [DateObject.locales.FA]: { name: "خرداد", shortName: "خرد" },
                    [DateObject.locales.AR]: { name: "خرداد", shortName: "خرد" },
                    [DateObject.locales.HI]: { name: "खोरर्दाद", shortName: "खोरर्दाद" }
                },
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "Tir", shortName: "Tir" },
                    [DateObject.locales.FA]: { name: "تیر", shortName: "تیر" },
                    [DateObject.locales.AR]: { name: "تیر", shortName: "تیر" },
                    [DateObject.locales.HI]: { name: "टिर", shortName: "टिर" },
                },
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "Mordad", shortName: "Mor" },
                    [DateObject.locales.FA]: { name: "مرداد", shortName: "مر" },
                    [DateObject.locales.AR]: { name: "مرداد", shortName: "مر" },
                    [DateObject.locales.HI]: { name: "मोरदाद", shortName: "मोरदाद" },
                },
            },
            {
                length: 31,
                locales: {
                    [DateObject.locales.EN]: { name: "Shahrivar", shortName: "Sha" },
                    [DateObject.locales.FA]: { name: "شهریور", shortName: "شه" },
                    [DateObject.locales.AR]: { name: "شهریور", shortName: "شه" },
                    [DateObject.locales.HI]: { name: "शाहरीवर्", shortName: "शाहरीवर्" },
                },
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "Mehr", shortName: "Meh" },
                    [DateObject.locales.FA]: { name: "مهر", shortName: "مه" },
                    [DateObject.locales.AR]: { name: "مهر", shortName: "مه" },
                    [DateObject.locales.HI]: { name: "मेहर", shortName: "मेहर" },
                },
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "Aban", shortName: "Aba" },
                    [DateObject.locales.FA]: { name: "آبان", shortName: "آبا" },
                    [DateObject.locales.AR]: { name: "آبان", shortName: "آبا" },
                    [DateObject.locales.HI]: { name: "अवन", shortName: "अवन" },
                },
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "Azar", shortName: "Aza" },
                    [DateObject.locales.FA]: { name: "آذر", shortName: "آذ" },
                    [DateObject.locales.AR]: { name: "آذر", shortName: "آذ" },
                    [DateObject.locales.HI]: { name: "अज़र", shortName: "अज़र" },
                },
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "Dey", shortName: "Dey" },
                    [DateObject.locales.FA]: { name: "دی", shortName: "دی" },
                    [DateObject.locales.AR]: { name: "دی", shortName: "دی" },
                    [DateObject.locales.HI]: { name: "डे", shortName: "डे" },
                },
            },
            {
                length: 30,
                locales: {
                    [DateObject.locales.EN]: { name: "Bahman", shortName: "Bah" },
                    [DateObject.locales.FA]: { name: "بهمن", shortName: "بهم" },
                    [DateObject.locales.AR]: { name: "بهمن", shortName: "بهم" },
                    [DateObject.locales.HI]: { name: "बहमन", shortName: "बहमन" },
                },
            },
            {
                length: undefined,
                locales: {
                    [DateObject.locales.EN]: { name: "Esfand", shortName: "Esf" },
                    [DateObject.locales.FA]: { name: "اسفند", shortName: "اسف" },
                    [DateObject.locales.AR]: { name: "اسفند", shortName: "اسف" },
                    [DateObject.locales.HI]: { name: "ईस्फन्द्", shortName: "ईस्फन्द्" },
                },
            }
        ],
        [DateObject.calendars.ARABIC]: [
            {
                length: 30, locales: {
                    [DateObject.locales.AR]: { name: "محرم", shortName: "محرم" },
                    [DateObject.locales.EN]: { name: "Muharram", shortName: "Mu" },
                    [DateObject.locales.FA]: { name: "محرم", shortName: "محرم" },
                    [DateObject.locales.HI]: { name: "मुहर्रम", shortName: "मुहर्रम" },
                }
            },
            {
                length: 29, locales: {
                    [DateObject.locales.AR]: { name: "صفر", shortName: "صفر" },
                    [DateObject.locales.EN]: { name: "Safar", shortName: "Sa" },
                    [DateObject.locales.FA]: { name: "صفر", shortName: "صفر" },
                    [DateObject.locales.HI]: { name: "सफर", shortName: "सफर" },
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.AR]: { name: "ربیع الاول", shortName: "ربیع الاول" },
                    [DateObject.locales.EN]: { name: "Rabi`al-Awwal", shortName: "RI" },
                    [DateObject.locales.FA]: { name: "ربیع الاول", shortName: "ربیع الاول" },
                    [DateObject.locales.HI]: { name: "राबी प्रथम", shortName: "राबी प्रथम" },
                }
            },
            {
                length: 29, locales: {
                    [DateObject.locales.AR]: { name: "ربیع الثانی", shortName: "ربیع الثانی" },
                    [DateObject.locales.EN]: { name: "Rabi`ath-Thani", shortName: "RII" },
                    [DateObject.locales.FA]: { name: "ربیع الثانی", shortName: "ربیع الثانی" },
                    [DateObject.locales.HI]: { name: "राबी द्वितीय", shortName: "राबी द्वितीय" },
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.AR]: { name: "جمادی الاول", shortName: "جمادی الاول" },
                    [DateObject.locales.EN]: { name: "Jumada l-Ula", shortName: "JI" },
                    [DateObject.locales.FA]: { name: "جمادی الاول", shortName: "جمادی الاول" },
                    [DateObject.locales.HI]: { name: "जुम्डा प्रथम", shortName: "जुम्डा प्रथम" },
                }
            },
            {
                length: 29, locales: {
                    [DateObject.locales.AR]: { name: "جمادی الثانی", shortName: "جمادی الثانی" },
                    [DateObject.locales.EN]: { name: "Jumada t-Tania", shortName: "JII" },
                    [DateObject.locales.FA]: { name: "جمادی الثانی", shortName: "جمادی الثانی" },
                    [DateObject.locales.HI]: { name: "जुम्डा द्वितीय", shortName: "जुम्डा द्वितीय" },
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.AR]: { name: "رجب", shortName: "رجب" },
                    [DateObject.locales.EN]: { name: "Rajab", shortName: "Ra" },
                    [DateObject.locales.FA]: { name: "رجب", shortName: "رجب" },
                    [DateObject.locales.HI]: { name: "रजब", shortName: "रजब" },
                }
            },
            {
                length: 29, locales: {
                    [DateObject.locales.AR]: { name: "شعبان", shortName: "شعبان" },
                    [DateObject.locales.EN]: { name: "Sha`ban", shortName: "Sh" },
                    [DateObject.locales.FA]: { name: "شعبان", shortName: "شعبان" },
                    [DateObject.locales.HI]: { name: "शावन", shortName: "शावन" },
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.AR]: { name: "رمضان", shortName: "رمضان" },
                    [DateObject.locales.EN]: { name: "Ramadan", shortName: "Ra" },
                    [DateObject.locales.FA]: { name: "رمضان", shortName: "رمضان" },
                    [DateObject.locales.HI]: { name: "रमजान", shortName: "रमजान" },
                }
            },
            {
                length: 29, locales: {
                    [DateObject.locales.AR]: { name: "شوال", shortName: "شوال" },
                    [DateObject.locales.EN]: { name: "Shawwal", shortName: "Sh" },
                    [DateObject.locales.FA]: { name: "شوال", shortName: "شوال" },
                    [DateObject.locales.HI]: { name: "शव्व्ल", shortName: "शव्व्ल" },
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.AR]: { name: "ذیقعده ", shortName: "ذیقعده" },
                    [DateObject.locales.EN]: { name: "Dhu l-Qa`da ", shortName: "DhQ" },
                    [DateObject.locales.HI]: { name: "जिल-क्दाह ", shortName: "जिल-क्दाह" },
                }
            },
            {
                length: undefined, locales: {
                    [DateObject.locales.AR]: { name: "ذیحجه", shortName: "ذیحجه" },
                    [DateObject.locales.EN]: { name: "Dhu l-Hijja", shortName: "DhH" },
                    [DateObject.locales.FA]: { name: "ذیحجه", shortName: "ذیحجه" },
                    [DateObject.locales.HI]: { name: "जिल्-हिज्जाह", shortName: "जिल्-हिज्जाह" },
                }
            }
        ],
        [DateObject.calendars.INDIAN]: [
            {
                length: undefined, locales: {
                    [DateObject.locales.EN]: { name: "Chaitra", shortName: "Cha" },
                    [DateObject.locales.FA]: { name: "چیتره", shortName: "چیت" },
                    [DateObject.locales.AR]: { name: "شيترا", shortName: "شیت" },
                    [DateObject.locales.HI]: { name: "चैत्र", shortName: "चैत्र" }
                }
            },
            {
                length: 31, locales: {
                    [DateObject.locales.EN]: { name: "Vaishakh", shortName: "Vai" },
                    [DateObject.locales.FA]: { name: "ویشاکهه", shortName: "ویش" },
                    [DateObject.locales.AR]: { name: "فيشاخ", shortName: "فیش" },
                    [DateObject.locales.HI]: { name: "वैशाख", shortName: "वैशाख" }
                }
            },
            {
                length: 31, locales: {
                    [DateObject.locales.EN]: { name: "Jyaishtha", shortName: "Jya" },
                    [DateObject.locales.FA]: { name: "جییشته", shortName: "جیش" },
                    [DateObject.locales.AR]: { name: "جیشتا", shortName: "جیش" },
                    [DateObject.locales.HI]: { name: "ज्येष्ठ", shortName: "ज्येष्ठ" }
                }
            },
            {
                length: 31, locales: {
                    [DateObject.locales.EN]: { name: "Ashadha", shortName: "Ash" },
                    [DateObject.locales.FA]: { name: "آشادهه", shortName: "آشا" },
                    [DateObject.locales.AR]: { name: "أشاد", shortName: "أشا" },
                    [DateObject.locales.HI]: { name: "आषाढ़", shortName: "आषाढ़" }
                }
            },
            {
                length: 31, locales: {
                    [DateObject.locales.EN]: { name: "Shravana", shortName: "Shr" },
                    [DateObject.locales.FA]: { name: "شراونه", shortName: "شرا" },
                    [DateObject.locales.AR]: { name: "شرافان", shortName: "شرا" },
                    [DateObject.locales.HI]: { name: "श्रावण", shortName: "श्रावण" }
                }
            },
            {
                length: 31, locales: {
                    [DateObject.locales.EN]: { name: "Bhadrapad", shortName: "Bha" },
                    [DateObject.locales.FA]: { name: "بهادره", shortName: "بها" },
                    [DateObject.locales.AR]: { name: "بهادرابادا", shortName: "بها" },
                    [DateObject.locales.HI]: { name: "भाद्रपद", shortName: "भाद्रपद" }
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.EN]: { name: "Ashwin", shortName: "Ash" },
                    [DateObject.locales.FA]: { name: "آشوین", shortName: "آشو" },
                    [DateObject.locales.AR]: { name: "اشوين", shortName: "اشو" },
                    [DateObject.locales.HI]: { name: "आश्विन", shortName: "आश्विन" }
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.EN]: { name: "Kartik", shortName: "Kar" },
                    [DateObject.locales.FA]: { name: "کارتیکه", shortName: "کار" },
                    [DateObject.locales.AR]: { name: "كارتيك", shortName: "کار" },
                    [DateObject.locales.HI]: { name: "कार्तिक", shortName: "कार्तिक" }
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.EN]: { name: "Agrahayana", shortName: "Agr" },
                    [DateObject.locales.FA]: { name: "اگرهینه", shortName: "اگر" },
                    [DateObject.locales.AR]: { name: "أجراهيان", shortName: "اجر" },
                    [DateObject.locales.HI]: { name: "अग्रहायण", shortName: "अग्रहायण" }
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.EN]: { name: "Paush", shortName: "Pau" },
                    [DateObject.locales.FA]: { name: "پاوشه", shortName: "پاو" },
                    [DateObject.locales.AR]: { name: "بوش", shortName: "بوش" },
                    [DateObject.locales.HI]: { name: "पौष", shortName: "पौष" }
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.EN]: { name: "Magh", shortName: "Mag" },
                    [DateObject.locales.FA]: { name: "ماگهه", shortName: "ماگ" },
                    [DateObject.locales.AR]: { name: "ماک", shortName: "ماک" },
                    [DateObject.locales.HI]: { name: "माघ", shortName: "माघ" }
                }
            },
            {
                length: 30, locales: {
                    [DateObject.locales.EN]: { name: "Phalgun", shortName: "Pha" },
                    [DateObject.locales.FA]: { name: "پهالگونه", shortName: "پها" },
                    [DateObject.locales.AR]: { name: "فالغون", shortName: "فال" },
                    [DateObject.locales.HI]: { name: "फाल्गुन", shortName: "फाल्गुन" }
                }
            },
        ]
    }

    #weekDays = {
        [DateObject.calendars.GREGORIAN]: [
            {
                index: 0,
                locales: {
                    [DateObject.locales.EN]: { name: "Sunday", shortName: "Sun" },
                    [DateObject.locales.FA]: { name: "یکشنبه", shortName: "یک" },
                    [DateObject.locales.AR]: { name: "الأحد", shortName: "اح" },
                    [DateObject.locales.HI]: { name: "रविवार", shortName: "रवि" }
                }
            },
            {
                index: 1,
                locales: {
                    [DateObject.locales.EN]: { name: "Monday", shortName: "Mon" },
                    [DateObject.locales.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locales.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locales.HI]: { name: "सोमवार", shortName: "सोम" }
                }
            },
            {
                index: 2,
                locales: {
                    [DateObject.locales.EN]: { name: "Tuesday", shortName: "Tue" },
                    [DateObject.locales.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locales.AR]: { name: "الثلاثاء", shortName: "ثل" },
                    [DateObject.locales.HI]: { name: "मंगलवार", shortName: "मंगल" }
                }
            },
            {
                index: 3,
                locales: {
                    [DateObject.locales.EN]: { name: "Wednesday", shortName: "Wed" },
                    [DateObject.locales.FA]: { name: "چهارشنبه", shortName: "چهار" },
                    [DateObject.locales.AR]: { name: "الأربعاء", shortName: "ار" },
                    [DateObject.locales.HI]: { name: "बुधवार", shortName: "बुध" }
                }
            },
            {
                index: 4,
                locales: {
                    [DateObject.locales.EN]: { name: "Thursday", shortName: "Thu" },
                    [DateObject.locales.FA]: { name: "پنجشنبه", shortName: "پنج" },
                    [DateObject.locales.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locales.HI]: { name: "गुरुवार", shortName: "गुरु" }
                }
            },
            {
                index: 5,
                locales: {
                    [DateObject.locales.EN]: { name: "Friday", shortName: "Fri" },
                    [DateObject.locales.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locales.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locales.HI]: { name: "शुक्रवार", shortName: "शुक्र" }
                }
            },
            {
                index: 6,
                locales: {
                    [DateObject.locales.EN]: { name: "Saturday", shortName: "Sat" },
                    [DateObject.locales.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locales.AR]: { name: "السّبت", shortName: "سب" },
                    [DateObject.locales.HI]: { name: "शनिवार", shortName: "शनि" }
                }
            }
        ],
        [DateObject.calendars.PERSIAN]: [
            {
                index: 1,
                locales: {
                    [DateObject.locales.EN]: { name: "YekShanbeh", shortName: "Yek" },
                    [DateObject.locales.FA]: { name: "یکشنبه", shortName: "یک" },
                    [DateObject.locales.AR]: { name: "الأحد", shortName: "اح" },
                    [DateObject.locales.HI]: { name: "रविवार", shortName: "रवि" }


                }
            },
            {
                index: 2,
                locales: {
                    [DateObject.locales.EN]: { name: "Doshanbeh", shortName: "Do" },
                    [DateObject.locales.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locales.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locales.HI]: { name: "सोमवार", shortName: "सोम" }

                }
            },
            {
                index: 3,
                locales: {
                    [DateObject.locales.EN]: { name: "Seshanbeh", shortName: "Se" },
                    [DateObject.locales.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locales.AR]: { name: "الثلاثاء", shortName: "ثل" },
                    [DateObject.locales.HI]: { name: "मंगलवार", shortName: "मंगल" }

                }
            },
            {
                index: 4,
                locales: {
                    [DateObject.locales.EN]: { name: "Chaharshanbeh", shortName: "Cha" },
                    [DateObject.locales.FA]: { name: "چهارشنبه", shortName: "چهار" },
                    [DateObject.locales.AR]: { name: "الأربعاء", shortName: "ار" },
                    [DateObject.locales.HI]: { name: "बुधवार", shortName: "बुध" }

                }
            },
            {
                index: 5,
                locales: {
                    [DateObject.locales.EN]: { name: "Panjshanbeh", shortName: "Pan" },
                    [DateObject.locales.FA]: { name: "پنجشنبه", shortName: "پنج" },
                    [DateObject.locales.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locales.HI]: { name: "गुरुवार", shortName: "गुरु" }

                }
            },
            {
                index: 6,
                locales: {
                    [DateObject.locales.EN]: { name: "Jom'eh", shortName: "Jom" },
                    [DateObject.locales.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locales.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locales.HI]: { name: "शुक्रवार", shortName: "शुक्र" }

                }
            },
            {
                index: 0,
                locales: {
                    [DateObject.locales.EN]: { name: "Shanbeh", shortName: "Sha" },
                    [DateObject.locales.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locales.AR]: { name: "السّبت", shortName: "سب" },
                    [DateObject.locales.HI]: { name: "शनिवार", shortName: "शनि" }

                }
            }
        ],
        [DateObject.calendars.ARABIC]: [
            {
                index: 1, locales: {
                    [DateObject.locales.AR]: { name: "الأحد", shortName: "احد" },
                    [DateObject.locales.EN]: { name: "al-'ahad", shortName: "Aha" },
                    [DateObject.locales.FA]: { name: "يکشنبه", shortName: "یک" },
                    [DateObject.locales.HI]: { name: "रविवार", shortName: "रवि" }
                }
            },
            {
                index: 2, locales: {
                    [DateObject.locales.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locales.EN]: { name: "al-'ithnayn", shortName: "Ith" },
                    [DateObject.locales.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locales.HI]: { name: "सोमवार", shortName: "सोम" }
                }
            },
            {
                index: 3, locales: {
                    [DateObject.locales.AR]: { name: "الثلاثاء", shortName: "ثلا" },
                    [DateObject.locales.EN]: { name: "ath-thalatha", shortName: "Tha" },
                    [DateObject.locales.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locales.HI]: { name: "मंगलवार", shortName: "मंगल" }
                }
            },
            {
                index: 4, locales: {
                    [DateObject.locales.AR]: { name: "الأربعاء", shortName: "ارب" },
                    [DateObject.locales.EN]: { name: "al-'arb`a'", shortName: "Arb" },
                    [DateObject.locales.FA]: { name: "چهار شنبه", shortName: "چهار" },
                    [DateObject.locales.HI]: { name: "बुधवार", shortName: "बुध" }
                }
            },
            {
                index: 5, locales: {
                    [DateObject.locales.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locales.EN]: { name: "al-khamis", shortName: "Kha" },
                    [DateObject.locales.FA]: { name: "پنج شنبه	", shortName: "پنج" },
                    [DateObject.locales.HI]: { name: "गुरुवार", shortName: "गुरु" }
                }
            },
            {
                index: 6, locales: {
                    [DateObject.locales.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locales.EN]: { name: "al-jum`a", shortName: "Jum" },
                    [DateObject.locales.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locales.HI]: { name: "शुक्रवार", shortName: "शुक्र" }
                }
            },
            {
                index: 0, locales: {
                    [DateObject.locales.AR]: { name: "السّبت", shortName: "سبت" },
                    [DateObject.locales.EN]: { name: "as-sabt", shortName: "Sab" },
                    [DateObject.locales.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locales.HI]: { name: "शनिवार", shortName: "शनि" }
                }
            },
        ],
        [DateObject.calendars.INDIAN]: [
            {
                index: 0, locales: {
                    [DateObject.locales.EN]: { name: "Ravivara", shortName: "Rav" },
                    [DateObject.locales.FA]: { name: "يکشنبه", shortName: "یک" },
                    [DateObject.locales.AR]: { name: "الأحد", shortName: "احد" },
                    [DateObject.locales.HI]: { name: "रविवार", shortName: "रवि" }
                }
            },
            {
                index: 1, locales: {
                    [DateObject.locales.EN]: { name: "Somavara", shortName: "Som" },
                    [DateObject.locales.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locales.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locales.HI]: { name: "सोमवार", shortName: "सोम" }
                }
            },
            {
                index: 2, locales: {
                    [DateObject.locales.EN]: { name: "Mangalavara", shortName: "Man" },
                    [DateObject.locales.FA]: { name: "سه شنبه	", shortName: "سه" },
                    [DateObject.locales.AR]: { name: "الثلاثاء", shortName: "ثلا" },
                    [DateObject.locales.HI]: { name: "मंगलवार", shortName: "मंगल" }
                }
            },
            {
                index: 3, locales: {
                    [DateObject.locales.EN]: { name: "Budhavara", shortName: "Bud" },
                    [DateObject.locales.FA]: { name: "چهار شنبه", shortName: "چهار" },
                    [DateObject.locales.AR]: { name: "الأربعاء", shortName: "ارب" },
                    [DateObject.locales.HI]: { name: "बुधवार", shortName: "बुध" }
                }
            },
            {
                index: 4, locales: {
                    [DateObject.locales.EN]: { name: "Brihaspatvara", shortName: "Bri" },
                    [DateObject.locales.FA]: { name: "پنج شنبه	", shortName: "پنج" },
                    [DateObject.locales.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locales.HI]: { name: "गुरुवार", shortName: "गुरु" }
                }
            },
            {
                index: 5, locales: {
                    [DateObject.locales.EN]: { name: "Sukravara", shortName: "Suk" },
                    [DateObject.locales.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locales.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locales.HI]: { name: "शुक्रवार", shortName: "शुक्र" }
                }
            },
            {
                index: 6, locales: {
                    [DateObject.locales.EN]: { name: "Sanivara", shortName: "San" },
                    [DateObject.locales.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locales.AR]: { name: "السّبت", shortName: "سبت" },
                    [DateObject.locales.HI]: { name: "शनिवार", shortName: "शनि" }
                }
            }
        ]
    }

    #digits = {
        [DateObject.locales.EN]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        [DateObject.locales.FA]: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        [DateObject.locales.AR]: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        [DateObject.locales.HI]: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    }

    #meridiems = {
        [DateObject.locales.EN]: [{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }],
        [DateObject.locales.FA]: [{ name: "قبل از ظهر", shortName: "ق.ظ" }, { name: "بعد از ظهر", shortName: "ب.ظ" }],
        [DateObject.locales.AR]: [{ name: "قبل الظهر", shortName: "ق.ظ" }, { name: "بعد الظهر", shortName: "ب.ظ" }],
        [DateObject.locales.HI]: [{ name: "दोपहर से पहले", shortName: "पूर्वाह्न" }, { name: "मध्याह्न के बाद", shortName: "अपराह्न" }]
    }

    #epoch = {
        [DateObject.calendars.GREGORIAN]: 1721424,
        [DateObject.calendars.PERSIAN]: 1948319,
        [DateObject.calendars.ARABIC]: 1948438,
        [DateObject.calendars.INDIAN]: 1749628,
        "unix": 2440587
    }

    #yearLength = {
        [DateObject.calendars.GREGORIAN]: 365,
        [DateObject.calendars.PERSIAN]: 365,
        [DateObject.calendars.ARABIC]: 354,
        [DateObject.calendars.INDIAN]: 365
    }

    constructor(object) {
        let obj = object && object.constructor === Object ? { ...object } : object

        if (!obj || typeof obj === "boolean") obj = { date: new Date() } //Default parameter doesn't work in null
        if (obj instanceof Date || obj instanceof DateObject || typeof obj === "string" || typeof obj === "number") obj = { date: obj }

        if (obj.calendar) {
            obj.calendar = DateObject.calendars[obj.calendar.toUpperCase()] || DateObject.calendars.GREGORIAN
            this.#calendar = obj.calendar
        }

        let mustGetLeaps = true,
            validKeys = Object.keys(obj).filter(key => obj[key] || obj[key] === 0),
            mustSetNewDate = validKeys.length > 0 &&
                validKeys.length <= 4 &&
                validKeys.every(key => [
                    "calendar",
                    "locale",
                    "format",
                    "ignoreList"
                ].includes(key)) //e.g: new DateObject({ calendar: "gregorian" })

        if (mustSetNewDate) obj.date = new Date()

        this.#format = obj.format

        if (
            (obj.date instanceof DateObject) ||
            (obj.date instanceof Date) ||
            typeof obj.date === "number" ||
            typeof obj.date === "string"
        ) {
            this.setDate(obj.date)

            if (obj.calendar) this.convert(obj.calendar)

            mustGetLeaps = false
        }

        if (obj.locale) {
            obj.locale = DateObject.locales[obj.locale.toUpperCase()] || DateObject.locales.EN
            this.#locale = obj.locale
        }

        delete obj.calendar
        delete obj.locale
        delete obj.date
        delete obj.format

        for (let key in obj) this.set(key, obj[key])

        if (this.#year === 0 && this.#calendar !== DateObject.calendars.INDIAN) {
            /**
             * All supported calendars in this library (except Indian calendar) start at
             * year:1, month:1, day:1 (Indian date start at year:0, month:1, day:1)
             * so the year before year 1 is year -1
             * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
             */

            this.#year = -1
        }

        if (mustGetLeaps) {
            this.#getLeaps()
            this.#fix()
        }
    }

    parse(string) {
        if (!string) return this

        let format = this.#format

        if (this.#locale !== DateObject.locales.en) {
            let digits = this.#digits[this.#locale]

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
            const formatArray = format.split(/[^\w\u0600-\u06FF]/),
                stringArray = string.split(/[^\w\u0600-\u06FF]/)

            for (let i = 0; i < formatArray.length; i++) {
                let reverse = this.#reverse[formatArray[i]]

                if (reverse && stringArray[i]) reverse(stringArray[i])
            }
        }

        if (string.includes(this.#meridiems[this.#locale][1].shortName) && this.#hour < 12) {
            this.#hour = this.#hour + 12
        }

        if (string.includes(this.#meridiems[this.#locale][1].name) && this.#hour < 12) {
            this.#hour = this.#hour + 12
        }

        this.#getLeaps()
        this.#fix()

        return this
    }

    #fix = () => {
        const setMonth = () => {
            let mustGetLeaps = false

            while (this.#month < 0) {
                this.#month += 12
                this.#year -= 1

                if (this.#year === 0 && this.calendar !== DateObject.calendars.INDIAN) this.#year = -1

                mustGetLeaps = true
            }

            while (this.#month > 11) {
                this.#month -= 12
                this.#year += 1

                if (this.#year === 0 && this.calendar !== DateObject.calendars.INDIAN) this.#year = 1

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
            if (this.#month < 0 || this.#month > 11) setMonth()

            while (this.#day < 1) {
                this.#month -= 1

                setMonth()

                this.#day = this.month.length + this.#day
            }

            if ((this.#day <= this.month.length) || isNaN(this.#day)) break

            this.#day -= this.month.length
            this.#month++
        }

        if (!this.#hour) this.#hour = 0
        if (!this.#minute) this.#minute = 0
        if (!this.#second) this.#second = 0
        if (!this.#millisecond) this.#millisecond = 0
    }

    #getLeaps = () => {
        if (this.#year === 0 && this.#calendar !== DateObject.calendars.INDIAN) return

        let year = undefined

        if (this.#calendar !== DateObject.calendars.INDIAN) {
            year = this.#year > 0 ? 1 : -1
        } else {
            year = 0
        }

        let condition = () => this.#year > 0 ? year <= this.#year : this.#year <= year,
            increase = () => this.#year > 0 ? year++ : year--,
            isGregorianLeapYear = year => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)

        this.#leaps = []

        switch (this.#calendar) {
            case DateObject.calendars.PERSIAN:
                let delta = 0.242362,
                    offset = this.#year > 0 ? 0.2684 : 0.7316,
                    correct = { 5: 4, 38: 37, 199: 198, 232: 231, 265: 264, 298: 297, 557: 558, 590: 591, 623: 624, 982: 983, 1015: 1016, 1048: 1049, 1081: 1082, 1114: 1115, 1242: 1243, 1374: 1375, 1407: 1408, 1440: 1441, 1506: 1507, 1539: 1540, 1572: 1573, 1605: 1606, 1931: 1932, 1964: 1965, 2063: 2064, 2096: 2097, 2687: 2686, 2720: 2719, 2753: 2752, 2819: 2818, 2852: 2851, 2885: 2884, 3017: 3016, 3112: 3111, 3145: 3144, 3178: 3177, 3211: 3210, 3244: 3243, 3277: 3276, 3310: 3309, 3343: 3342, 3376: 3375, 3409: 3408, 3442: 3441, 3508: 3507, 3541: 3540, 3574: 3573, 3603: 3602, 3607: 3606, 3636: 3635, 3669: 3668, 3702: 3701, 3706: 3705, 3735: 3734, 3768: 3767, 3801: 3800, 3834: 3833, 3867: 3866, 3900: 3899, 3933: 3932, 3966: 3965, 3999: 3998, 4065: 4064, 4094: 4093, 4098: 4097, 4127: 4126, 4131: 4130, 4160: 4159, 4193: 4192, 4226: 4225, 4259: 4258, 4292: 4291, 4325: 4324, 4358: 4357, 4391: 4390, 4585: 4584, 4618: 4617, 4651: 4650, 4750: 4749, 4943: 4944, 4976: 4977, 5009: 5010, 5170: 5171, 5203: 5204, 5236: 5237, 5265: 5266, 5269: 5270, 5298: 5299, 5302: 5303, 5331: 5332, 5335: 5336, 5364: 5365, 5368: 5369, 5393: 5394, 5397: 5398, 5401: 5402, 5426: 5427, 5430: 5431, 5434: 5435, 5459: 5460, 5463: 5464, 5467: 5468, 5492: 5493, 5496: 5497, 5500: 5501, 5521: 5522, 5525: 5526, 5529: 5530, 5554: 5555, 5558: 5559, 5562: 5563, 5587: 5588, 5591: 5592, 5595: 5596, 5616: 5617, 5620: 5621, 5624: 5625, 5628: 5629, 5649: 5650, 5653: 5654, 5657: 5658, 5661: 5662, 5682: 5683, 5686: 5687, 5690: 5691, 5694: 5695, 5715: 5716, 5719: 5720, 5723: 5724, 5727: 5728, 5744: 5745, 5748: 5749, 5752: 5753, 5756: 5757, 5760: 5761, 5777: 5778, 5781: 5782, 5785: 5786, 5789: 5790, 5793: 5794, 5810: 5811, 5814: 5815, 5818: 5819, 5822: 5823, 5826: 5827, 5839: 5840, 5843: 5844, 5847: 5848, 5851: 5852, 5855: 5856, 5859: 5860, 5872: 5873, 5876: 5877, 5880: 5881, 5884: 5885, 5888: 5889, 5892: 5893, 5901: 5902, 5905: 5906, 5909: 5910, 5913: 5914, 5917: 5918, 5921: 5922, 5925: 5926, 5934: 5935, 5938: 5939, 5942: 5943, 5946: 5947, 5950: 5951, 5954: 5955, 5958: 5959, 5967: 5968, 5971: 5972, 5975: 5976, 5979: 5980, 5983: 5984, 5987: 5988, 5991: 5992, 5996: 5997, 6000: 6001, 6004: 6005, 6008: 6009, 6012: 6013, 6016: 6017, 6020: 6021, 6029: 6030, 6033: 6034, 6037: 6038, 6041: 6042, 6045: 6046, 6049: 6050, 6053: 6054, 6058: 6059, 6062: 6063, 6066: 6067, 6070: 6071, 6074: 6075, 6078: 6079, 6082: 6083, 6086: 6087, 6091: 6092, 6095: 6096, 6099: 6100, 6103: 6104, 6107: 6108, 6111: 6112, 6115: 6116, 6119: 6120, 6124: 6125, 6128: 6129, 6132: 6133, 6136: 6137, 6140: 6141, 6144: 6145, 6148: 6149, 6152: 6154, 6157: 6158, 6161: 6162, 6165: 6166, 6169: 6170, 6173: 6174, 6177: 6178, 6181: 6182, 6185: 6187, 6190: 6191, 6194: 6195, 6198: 6199, 6202: 6203, 6206: 6207, 6210: 6211, 6214: 6215, 6218: 6220, 6223: 6224, 6227: 6228, 6231: 6232, 6235: 6236, 6239: 6240, 6243: 6244, 6247: 6249, 6251: 6253, 6256: 6257, 6260: 6261, 6264: 6265, 6268: 6269, 6272: 6273, 6276: 6277, 6280: 6282, 6284: 6286, 6289: 6290, 6293: 6294, 6297: 6298, 6301: 6302, 6305: 6306, 6309: 6310, 6313: 6315, 6317: 6319, 6322: 6323, 6326: 6327, 6330: 6331, 6334: 6335, 6338: 6339, 6342: 6344, 6346: 6348, 6350: 6352, 6355: 6356, 6359: 6360, 6363: 6364, 6367: 6368, 6371: 6372, 6375: 6377, 6379: 6381, 6383: 6385, 6388: 6389, 6392: 6393, 6396: 6397, 6400: 6401, 6404: 6406, 6408: 6410, 6412: 6414, 6416: 6418, 6421: 6422, 6425: 6426, 6429: 6430, 6433: 6434, 6437: 6439, 6441: 6443, 6445: 6447, 6449: 6451, 6454: 6455, 6458: 6459, 6462: 6463, 6466: 6468, 6470: 6472, 6474: 6476, 6478: 6480, 6482: 6484, 6487: 6488, 6491: 6492, 6495: 6496 }

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
                /**
                 * @see https://en.wikipedia.org/wiki/Tabular_Islamic_calendar
                 */

                while (condition()) {
                    if ([2, 5, 7, 10, 13, 15, 18, 21, 24, 26, 29].includes(year % 30)) this.#leaps.push(year)

                    increase()
                }

                break
            case DateObject.calendars.INDIAN:
                /**
                * To determine leap years, add 78 to the Saka year - 
                * if the result is a leap year in the Gregorian calendar, 
                * then the Saka year is a leap year as well.
                * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
                */

                while (condition()) {
                    if (isGregorianLeapYear(year + 78)) this.#leaps.push(year)

                    increase()
                }

                break
            default:
                while (condition()) {
                    if (isGregorianLeapYear(year)) this.#leaps.push(year)

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
                year = ~~((days + 0.5) / 365.241)
                break
            case DateObject.calendars.ARABIC:
                year = ~~((days - 0.5) / 354.366)
                break
            default:
                year = ~~(days / 365.24)
        }

        return year + (this.#year > 0 ? 1 : -1)
    }

    format(format, ignoreList) {
        if (!this.isValid) return ""
        if (format && typeof format !== "string") return
        if (!format) format = this.#format || "YYYY/MM/DD"
        if (!Array.isArray(ignoreList)) ignoreList = []

        ignoreList = ignoreList.concat(this.#ignoreList)

        ignoreList = ignoreList.filter(item => {
            if (typeof item !== "string") {
                console.warn("type of all items in the ignore list must be string, found", typeof item)
                return false
            }

            return true
        }).map(string => string.replace(/[*/+\-()[\]{}\s$^]/g, w => "\\" + w))

        let regex = new RegExp(`${ignoreList.join("|")}${ignoreList.length > 0 ? "|" : ""}YYYY|YY|MMMM|MMM|MM|M|WW|W|DDDD|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|.`, "g"),
            array = format.match(regex) || [],
            result = ""

        for (let item of array) {
            result += ignoreList.includes(item) ? item : (this.getProperty(item) || item)
        }

        if (this.#locale !== DateObject.locales.en) {
            let digits = this.#custom.digits || this.#digits[this.#locale]

            result = result.replace(/[0-9]/g, w => digits[w])
        }

        return result
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
            case "dd": return pad(this.weekDay.number)
            case "d": return this.weekDay.number
            case "hh": return pad(this.hour > 12 ? this.hour - 12 : this.hour || 12)
            case "h": return this.hour > 12 ? this.hour - 12 : this.hour || 12
            case "mm": return pad(this.minute)
            case "m": return this.minute
            case "ss": return pad(this.second)
            case "s": return this.second
            case "SSS": return this.#millisecond < 10 ? `00${this.#millisecond}` : this.#millisecond < 100 ? `0${this.#millisecond}` : this.#millisecond
            case "SS": return this.#millisecond < 10 ? `00` : this.#millisecond < 100 ? ("0" + this.#millisecond).substring(2, 0) : this.#millisecond.toString().substring(0, 2)
            case "S": return this.#millisecond < 10 ? "0" : this.#millisecond < 100 ? "0" : this.#millisecond.toString().substring(0, 1)
            case "a": return this.hour >= 12 ? this.#meridiems[this.#locale][1].shortName : this.#meridiems[this.#locale][0].shortName
            case "A": return this.hour >= 12 ? this.#meridiems[this.#locale][1].name : this.#meridiems[this.#locale][0].name
            default: return ""
        }
    }

    setYear(number) {
        this.year = number

        return this
    }

    setMonths(value) {
        this.months = value

        return this
    }

    setMonth(number) {
        this.month = number

        return this
    }

    setWeekDays(value) {
        this.weekDays = value

        return this
    }

    setDigits(value) {
        this.digits = value

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

    setLocale(locale) {
        this.locale = locale

        return this
    }

    setLocal(locale) {
        return this.setLocale(locale)
    }

    setCalendar(calendar) {
        this.calendar = calendar

        return this
    }

    setDate(date) {
        if (typeof date === "string") {
            if (this.#isoDate.test(date)) {
                date = new Date(date)
            } else {
                return this.parse(date)
            }
        }

        if (typeof date === "number") date = new Date(date)

        if (date instanceof Date) {
            this.#calendar = DateObject.calendars.GREGORIAN
            this.#year = date.getFullYear()
            this.#month = date.getMonth()
            this.#day = date.getDate()
            this.#hour = date.getHours()
            this.#minute = date.getMinutes()
            this.#second = date.getSeconds()
            this.#millisecond = date.getMilliseconds()
            this.#isUTC = false

            this.#getLeaps()
            this.#fix()
        }

        if (date instanceof DateObject) {
            this.#year = date.year
            this.#month = date.month.index
            this.#day = date.day
            this.#hour = date.hour
            this.#minute = date.minute
            this.#second = date.second
            this.#millisecond = date.millisecond
            this.#locale = date.locale.toUpperCase()
            this.#format = date._format
            this.#leaps = date.leaps
            this.#calendar = date.calendar.toUpperCase()
            this.#isUTC = date.isUTC
        }

        return this
    }

    setIgnoreList(ignoreList) {
        this.ignoreList = ignoreList

        return this
    }

    set(key, value) {
        if (key === undefined || key === null) return this

        if (key.constructor === Object) {
            let object = { ...key }

            if (object.date) {
                this.setDate(object.date)
                delete object.date
            }

            if (object.calendar) {
                this.convert(object.calendar)
                delete object.calendar
            }

            if (object.locale) {
                this.setLocale(object.locale)
                delete object.locale
            }

            for (let key in object) this.set(key, object[key])

            return this
        }

        switch (key) {
            case "calendar": return this.convert(value)
            case "locale": return this.setLocale(value)
            case "format": return this.setFormat(value)
            case "year": return this.setYear(value)
            case "month": return this.setMonth(value)
            case "months": return this.setMonths(value)
            case "weekDays": return this.setWeekDays(value)
            case "day": return this.setDay(value)
            case "hour": return this.setHour(value)
            case "minute": return this.setMinute(value)
            case "second": return this.setSecond(value)
            case "millisecond": return this.setMillisecond(value)
            case "date": return this.setDate(value)
            case "ignoreList": return this.setIgnoreList(value)
            case "digits": return this.setDigits(value)
            default: return this
        }
    }

    add(duration, type) {
        duration = this.#toNumber(duration)

        if (!duration || !type) return this

        switch (type) {
            case "years":
            case "year":
            case "y":
                this.year += duration
                break
            case "months":
            case "month":
            case "M":
                this.month += duration
                break
            case "days":
            case "day":
            case "d":
                this.day += duration
                break
            case "hours":
            case "hour":
            case "h":
                this.hour += duration
                break
            case "minutes":
            case "minute":
            case "m":
                this.minute += duration
                break
            case "seconds":
            case "second":
            case "s":
                this.second += duration
                break
            case "milliseconds":
            case "millisecond":
            case "ms":
                this.millisecond += duration
                break
        }

        return this
    }

    subtract(duration, type) {
        return this.add(-duration, type)
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

    toUTC() {
        if (!this.#isUTC) {
            this.minute += new Date().getTimezoneOffset()
            this.#isUTC = true
        }

        return this
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
            locale: this.#locale.toLowerCase(),
            format: this.#format || "YYYY/MM/DD"
        }
    }

    toJSON() {
        return this.toObject()
    }

    valueOf() {
        let days = this.dayOfBeginning + this.#epoch[this.#calendar] - this.#epoch.unix,
            offset = this.#isUTC ? 0 : (new Date().getTimezoneOffset() * 60 * 1000)

        return (days * 24 * 60 * 60 * 1000) +
            (this.#hour * 60 * 60 * 1000) +
            (this.#minute * 60 * 1000) +
            (this.#second * 1000) +
            this.millisecond +
            offset
    }

    get dayOfBeginning() {
        if (!this.isValid) return

        let year = undefined

        if (this.#calendar !== DateObject.calendars.INDIAN) {
            year = this.#year > 0 ? (this.#year - 1) : this.#year
        } else {
            year = this.#year
        }

        let days = year * this.#yearLength[this.#calendar]
        let leapsLength = this.isLeap ? (this.leaps.length - 1) : this.leaps.length

        if (this.#year > 0) days += leapsLength
        if (this.#year < 0) days -= leapsLength

        days += this.dayOfYear

        return days
    }

    get dayOfYear() {
        if (!this.isValid) return

        let days = this.#day,
            months = this.months

        for (let i = 0; i < this.#month; i++) {
            days += months[i].length
        }

        return days
    }

    get weekOfYear() {
        if (!this.isValid) return

        return ~~(this.dayOfYear / 7) + 1
    }

    get daysLeft() {
        if (!this.isValid) return

        let yearLength = this.#yearLength[this.#calendar],
            days = this.isLeap ? yearLength + 1 : yearLength

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
            return this.number.toString()
        }

        month.valueOf = function () {
            return this.number
        }

        return month
    }

    get day() {
        return this.#day
    }

    get weekDay() {
        let index = (this.toJulianDay() + 2) % 7,
            weekDay = this.#weekDays[this.#calendar][index]

        if (!weekDay) return {}

        let names = this.#custom.weekDays ? this.#custom.weekDays[weekDay.index] : weekDay.locales[this.#locale]

        weekDay = {
            index: weekDay.index,
            number: weekDay.index + 1,
            toString: function () { return this.number.toString() },
            valueOf: function () { return this.number },
            ...names
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
            case DateObject.calendars.INDIAN:
                months[0].length = this.isLeap ? 31 : 30
                break
            default:
                months[11].length = this.isLeap ? 30 : 29
        }

        months = months.map((month, index) => {
            let $month = this.#custom.months ? this.#custom.months[index] : month.locales[this.#locale]

            return {
                length: month.length,
                ...$month
            }
        })

        return months
    }

    get weekDays() {
        let weekDays = this.#weekDays[this.#calendar]

        weekDays.sort((a, b) => a.index - b.index)
        weekDays = weekDays.map((week, index) => {
            let $week = this.#custom.weekDays ? this.#custom.weekDays[index] : week.locales[this.#locale]

            return {
                index: week.index,
                number: week.index + 1,
                ...$week
            }
        })

        return weekDays
    }

    get leaps() {
        return this.#leaps
    }

    get calendar() {
        return this.#calendar.toLowerCase()
    }

    get locale() {
        return this.#locale.toLowerCase()
    }

    get meridiems() {
        return this.#meridiems[this.#locale]
    }

    get digits() {
        return this.#custom.digits || this.#digits[this.#locale]
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

    get isUTC() {
        return this.#isUTC
    }

    get unix() {
        return (this.valueOf() - this.millisecond) / 1000
    }

    get ignoreList() {
        return this.#ignoreList
    }

    set year(value) {
        value = this.#toNumber(value)

        this.#year = value
        this.#getLeaps()
        this.#fix()
    }

    set months(value) {
        if (!value) return delete this.#custom.months

        let isValidValue = Array.isArray(value) && value.length === 12 && value.every(array => {
            return Array.isArray(array) && array.length === 2 && array.every(string => typeof string === "string")
        })

        if (!isValidValue) return console.warn("Invalid Months")

        this.#custom.months = value.map(array => { return { name: array[0], shortName: array[1] } })
    }

    set month(value) {
        if (value && value.constructor === Object && value.number) value = value.number

        value = this.#toNumber(value)

        this.#month = value - 1
        this.#fix()
    }

    set weekDays(value) {
        if (!value) return delete this.#custom.weekDays

        let isValidValue = Array.isArray(value) && value.length === 7 && value.every(array => {
            return Array.isArray(array) && array.length === 2 && array.every(string => typeof string === "string")
        })

        if (!isValidValue) return console.warn("Invalid weekDays")

        this.#custom.weekDays = value.map(array => { return { name: array[0], shortName: array[1] } })
    }

    set digits(value) {
        if (!value) return delete this.#custom.digits

        let isValidValue = Array.isArray(value) && value.length === 10

        if (!isValidValue) return console.warn("Invalid digits")

        this.#custom.digits = value
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

    set locale(locale) {
        locale = locale.toUpperCase()

        if (!DateObject.locales[locale]) locale = DateObject.locales.EN

        this.#locale = locale
    }

    set local(locale) {
        this.locale = locale
    }

    set _format(format) {
        if (typeof format !== "string") return

        this.#format = format
    }

    set ignoreList(ignoreList) {
        if (Array.isArray(ignoreList)) this.#ignoreList = ignoreList
    }

    #toNumber = value => {
        if (!isNaN(value)) return parseInt(value)
    }
}