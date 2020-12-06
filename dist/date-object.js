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

    static locals = {
        EN: "EN",
        FA: "FA",
        AR: "AR",
        HI: "HI",
    }

    #months = {
        [DateObject.calendars.GREGORIAN]: [
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "January", shortName: "Jan" },
                    [DateObject.locals.FA]: { name: "ژانویه", shortName: "ژان" },
                    [DateObject.locals.AR]: { name: "يناير", shortName: "ينا" },
                    [DateObject.locals.HI]: { name: "जनवरी", shortName: "जन" },
                }
            },
            {
                length: undefined,
                locals: {
                    [DateObject.locals.EN]: { name: "February", shortName: "Feb" },
                    [DateObject.locals.FA]: { name: "فوریه", shortName: "فور" },
                    [DateObject.locals.AR]: { name: "فبراير", shortName: "فبر" },
                    [DateObject.locals.HI]: { name: "फ़रवरी", shortName: "फ़र" }
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "March", shortName: "Mar" },
                    [DateObject.locals.FA]: { name: "مارس", shortName: "ما" },
                    [DateObject.locals.AR]: { name: "مارس", shortName: "ما" },
                    [DateObject.locals.HI]: { name: "मार्च", shortName: "मार्च" }
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "April", shortName: "Apr" },
                    [DateObject.locals.FA]: { name: "آوریل", shortName: "آور" },
                    [DateObject.locals.AR]: { name: "إبريل", shortName: "إبر" },
                    [DateObject.locals.HI]: { name: "अप्रैल", shortName: "अप्रैल" }
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "May", shortName: "May" },
                    [DateObject.locals.FA]: { name: "مه", shortName: "مه" },
                    [DateObject.locals.AR]: { name: "مايو", shortName: "ما" },
                    [DateObject.locals.HI]: { name: "मई", shortName: "मई" },
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "June", shortName: "Jun" },
                    [DateObject.locals.FA]: { name: "ژوئن", shortName: "ژو" },
                    [DateObject.locals.AR]: { name: "يونيو", shortName: "يو" },
                    [DateObject.locals.HI]: { name: "जून", shortName: "जून" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "July", shortName: "Jul" },
                    [DateObject.locals.FA]: { name: "ژوئیه", shortName: "ژوئیه" },
                    [DateObject.locals.AR]: { name: "يوليو", shortName: "يوليو" },
                    [DateObject.locals.HI]: { name: "जुलाई", shortName: "जुल" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "August", shortName: "Aug" },
                    [DateObject.locals.FA]: { name: "اوت", shortName: "اوت" },
                    [DateObject.locals.AR]: { name: "أغسطس", shortName: "أغس" },
                    [DateObject.locals.HI]: { name: "अगस्त", shortName: "अग" }
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "September", shortName: "Sep" },
                    [DateObject.locals.FA]: { name: "سپتامبر", shortName: "سپ" },
                    [DateObject.locals.AR]: { name: "سبتمبر", shortName: "سب" },
                    [DateObject.locals.HI]: { name: "सितंबर", shortName: "सित" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "October", shortName: "Oct" },
                    [DateObject.locals.FA]: { name: "اکتبر", shortName: "اک" },
                    [DateObject.locals.AR]: { name: "أكتوبر", shortName: "اک" },
                    [DateObject.locals.HI]: { name: "अक्तूबर", shortName: "अक्तू" },
                }
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "November", shortName: "Nov" },
                    [DateObject.locals.FA]: { name: "نوامبر", shortName: "نو" },
                    [DateObject.locals.AR]: { name: "نوفمبر", shortName: "نو" },
                    [DateObject.locals.HI]: { name: "नवंबर", shortName: "नव" },
                }
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "December", shortName: "Dec" },
                    [DateObject.locals.FA]: { name: "دسامبر", shortName: "دس" },
                    [DateObject.locals.AR]: { name: "ديسمبر", shortName: "دس" },
                    [DateObject.locals.HI]: { name: "दिसंबर", shortName: "दिस" },
                }
            }
        ],
        [DateObject.calendars.PERSIAN]: [
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Farvardin", shortName: "Far" },
                    [DateObject.locals.FA]: { name: "فروردین", shortName: "فر" },
                    [DateObject.locals.AR]: { name: "فروردین", shortName: "فر" },
                    [DateObject.locals.HI]: { name: "फर्वादिन", shortName: "फर्वादिन" },
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Ordibehesht", shortName: "Ord" },
                    [DateObject.locals.FA]: { name: "اردیبهشت", shortName: "ار" },
                    [DateObject.locals.AR]: { name: "اردیبهشت", shortName: "ار" },
                    [DateObject.locals.HI]: { name: "ओर्दिवेहेस्ट", shortName: "ओर्दिवेहेस्ट" },
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Khordad", shortName: "Kho" },
                    [DateObject.locals.FA]: { name: "خرداد", shortName: "خرد" },
                    [DateObject.locals.AR]: { name: "خرداد", shortName: "خرد" },
                    [DateObject.locals.HI]: { name: "खोरर्दाद", shortName: "खोरर्दाद" }
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Tir", shortName: "Tir" },
                    [DateObject.locals.FA]: { name: "تیر", shortName: "تیر" },
                    [DateObject.locals.AR]: { name: "تیر", shortName: "تیر" },
                    [DateObject.locals.HI]: { name: "टिर", shortName: "टिर" },
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Mordad", shortName: "Mor" },
                    [DateObject.locals.FA]: { name: "مرداد", shortName: "مر" },
                    [DateObject.locals.AR]: { name: "مرداد", shortName: "مر" },
                    [DateObject.locals.HI]: { name: "मोरदाद", shortName: "मोरदाद" },
                },
            },
            {
                length: 31,
                locals: {
                    [DateObject.locals.EN]: { name: "Shahrivar", shortName: "Sha" },
                    [DateObject.locals.FA]: { name: "شهریور", shortName: "شه" },
                    [DateObject.locals.AR]: { name: "شهریور", shortName: "شه" },
                    [DateObject.locals.HI]: { name: "शाहरीवर्", shortName: "शाहरीवर्" },
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Mehr", shortName: "Meh" },
                    [DateObject.locals.FA]: { name: "مهر", shortName: "مه" },
                    [DateObject.locals.AR]: { name: "مهر", shortName: "مه" },
                    [DateObject.locals.HI]: { name: "मेहर", shortName: "मेहर" },
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Aban", shortName: "Aba" },
                    [DateObject.locals.FA]: { name: "آبان", shortName: "آبا" },
                    [DateObject.locals.AR]: { name: "آبان", shortName: "آبا" },
                    [DateObject.locals.HI]: { name: "अवन", shortName: "अवन" },
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Azar", shortName: "Aza" },
                    [DateObject.locals.FA]: { name: "آذر", shortName: "آذ" },
                    [DateObject.locals.AR]: { name: "آذر", shortName: "آذ" },
                    [DateObject.locals.HI]: { name: "अज़र", shortName: "अज़र" },
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Dey", shortName: "Dey" },
                    [DateObject.locals.FA]: { name: "دی", shortName: "دی" },
                    [DateObject.locals.AR]: { name: "دی", shortName: "دی" },
                    [DateObject.locals.HI]: { name: "डे", shortName: "डे" },
                },
            },
            {
                length: 30,
                locals: {
                    [DateObject.locals.EN]: { name: "Bahman", shortName: "Bah" },
                    [DateObject.locals.FA]: { name: "بهمن", shortName: "بهم" },
                    [DateObject.locals.AR]: { name: "بهمن", shortName: "بهم" },
                    [DateObject.locals.HI]: { name: "बहमन", shortName: "बहमन" },
                },
            },
            {
                length: undefined,
                locals: {
                    [DateObject.locals.EN]: { name: "Esfand", shortName: "Esf" },
                    [DateObject.locals.FA]: { name: "اسفند", shortName: "اسف" },
                    [DateObject.locals.AR]: { name: "اسفند", shortName: "اسف" },
                    [DateObject.locals.HI]: { name: "ईस्फन्द्", shortName: "ईस्फन्द्" },
                },
            }
        ],
        [DateObject.calendars.ARABIC]: [
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "محرم", shortName: "محرم" },
                    [DateObject.locals.EN]: { name: "Muharram", shortName: "Mu" },
                    [DateObject.locals.FA]: { name: "محرم", shortName: "محرم" },
                    [DateObject.locals.HI]: { name: "मुहर्रम", shortName: "मुहर्रम" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "صفر", shortName: "صفر" },
                    [DateObject.locals.EN]: { name: "Safar", shortName: "Sa" },
                    [DateObject.locals.FA]: { name: "صفر", shortName: "صفر" },
                    [DateObject.locals.HI]: { name: "सफर", shortName: "सफर" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "ربیع الاول", shortName: "ربیع الاول" },
                    [DateObject.locals.EN]: { name: "Rabi`al-Awwal", shortName: "RI" },
                    [DateObject.locals.FA]: { name: "ربیع الاول", shortName: "ربیع الاول" },
                    [DateObject.locals.HI]: { name: "राबी प्रथम", shortName: "राबी प्रथम" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "ربیع الثانی", shortName: "ربیع الثانی" },
                    [DateObject.locals.EN]: { name: "Rabi`ath-Thani", shortName: "RII" },
                    [DateObject.locals.FA]: { name: "ربیع الثانی", shortName: "ربیع الثانی" },
                    [DateObject.locals.HI]: { name: "राबी द्वितीय", shortName: "राबी द्वितीय" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "جمادی الاول", shortName: "جمادی الاول" },
                    [DateObject.locals.EN]: { name: "Jumada l-Ula", shortName: "JI" },
                    [DateObject.locals.FA]: { name: "جمادی الاول", shortName: "جمادی الاول" },
                    [DateObject.locals.HI]: { name: "जुम्डा प्रथम", shortName: "जुम्डा प्रथम" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "جمادی الثانی", shortName: "جمادی الثانی" },
                    [DateObject.locals.EN]: { name: "Jumada t-Tania", shortName: "JII" },
                    [DateObject.locals.FA]: { name: "جمادی الثانی", shortName: "جمادی الثانی" },
                    [DateObject.locals.HI]: { name: "जुम्डा द्वितीय", shortName: "जुम्डा द्वितीय" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "رجب", shortName: "رجب" },
                    [DateObject.locals.EN]: { name: "Rajab", shortName: "Ra" },
                    [DateObject.locals.FA]: { name: "رجب", shortName: "رجب" },
                    [DateObject.locals.HI]: { name: "रजब", shortName: "रजब" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "شعبان", shortName: "شعبان" },
                    [DateObject.locals.EN]: { name: "Sha`ban", shortName: "Sh" },
                    [DateObject.locals.FA]: { name: "شعبان", shortName: "شعبان" },
                    [DateObject.locals.HI]: { name: "शावन", shortName: "शावन" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "رمضان", shortName: "رمضان" },
                    [DateObject.locals.EN]: { name: "Ramadan", shortName: "Ra" },
                    [DateObject.locals.FA]: { name: "رمضان", shortName: "رمضان" },
                    [DateObject.locals.HI]: { name: "रमजान", shortName: "रमजान" },
                }
            },
            {
                length: 29, locals: {
                    [DateObject.locals.AR]: { name: "شوال", shortName: "شوال" },
                    [DateObject.locals.EN]: { name: "Shawwal", shortName: "Sh" },
                    [DateObject.locals.FA]: { name: "شوال", shortName: "شوال" },
                    [DateObject.locals.HI]: { name: "शव्व्ल", shortName: "शव्व्ल" },
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.AR]: { name: "ذیقعده ", shortName: "ذیقعده" },
                    [DateObject.locals.EN]: { name: "Dhu l-Qa`da ", shortName: "DhQ" },
                    [DateObject.locals.HI]: { name: "जिल-क्दाह ", shortName: "जिल-क्दाह" },
                }
            },
            {
                length: undefined, locals: {
                    [DateObject.locals.AR]: { name: "ذیحجه", shortName: "ذیحجه" },
                    [DateObject.locals.EN]: { name: "Dhu l-Hijja", shortName: "DhH" },
                    [DateObject.locals.FA]: { name: "ذیحجه", shortName: "ذیحجه" },
                    [DateObject.locals.HI]: { name: "जिल्-हिज्जाह", shortName: "जिल्-हिज्जाह" },
                }
            }
        ],
        [DateObject.calendars.INDIAN]: [
            {
                length: undefined, locals: {
                    [DateObject.locals.EN]: { name: "Chaitra", shortName: "Cha" },
                    [DateObject.locals.FA]: { name: "چیتره", shortName: "چیت" },
                    [DateObject.locals.AR]: { name: "شيترا", shortName: "شیت" },
                    [DateObject.locals.HI]: { name: "चैत्र", shortName: "चैत्र" }
                }
            },
            {
                length: 31, locals: {
                    [DateObject.locals.EN]: { name: "Vaishakh", shortName: "Vai" },
                    [DateObject.locals.FA]: { name: "ویشاکهه", shortName: "ویش" },
                    [DateObject.locals.AR]: { name: "فيشاخ", shortName: "فیش" },
                    [DateObject.locals.HI]: { name: "वैशाख", shortName: "वैशाख" }
                }
            },
            {
                length: 31, locals: {
                    [DateObject.locals.EN]: { name: "Jyaishtha", shortName: "Jya" },
                    [DateObject.locals.FA]: { name: "جییشته", shortName: "جیش" },
                    [DateObject.locals.AR]: { name: "جیشتا", shortName: "جیش" },
                    [DateObject.locals.HI]: { name: "ज्येष्ठ", shortName: "ज्येष्ठ" }
                }
            },
            {
                length: 31, locals: {
                    [DateObject.locals.EN]: { name: "Ashadha", shortName: "Ash" },
                    [DateObject.locals.FA]: { name: "آشادهه", shortName: "آشا" },
                    [DateObject.locals.AR]: { name: "أشاد", shortName: "أشا" },
                    [DateObject.locals.HI]: { name: "आषाढ़", shortName: "आषाढ़" }
                }
            },
            {
                length: 31, locals: {
                    [DateObject.locals.EN]: { name: "Shravana", shortName: "Shr" },
                    [DateObject.locals.FA]: { name: "شراونه", shortName: "شرا" },
                    [DateObject.locals.AR]: { name: "شرافان", shortName: "شرا" },
                    [DateObject.locals.HI]: { name: "श्रावण", shortName: "श्रावण" }
                }
            },
            {
                length: 31, locals: {
                    [DateObject.locals.EN]: { name: "Bhadrapad", shortName: "Bha" },
                    [DateObject.locals.FA]: { name: "بهادره", shortName: "بها" },
                    [DateObject.locals.AR]: { name: "بهادرابادا", shortName: "بها" },
                    [DateObject.locals.HI]: { name: "भाद्रपद", shortName: "भाद्रपद" }
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.EN]: { name: "Ashwin", shortName: "Ash" },
                    [DateObject.locals.FA]: { name: "آشوین", shortName: "آشو" },
                    [DateObject.locals.AR]: { name: "اشوين", shortName: "اشو" },
                    [DateObject.locals.HI]: { name: "आश्विन", shortName: "आश्विन" }
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.EN]: { name: "Kartik", shortName: "Kar" },
                    [DateObject.locals.FA]: { name: "کارتیکه", shortName: "کار" },
                    [DateObject.locals.AR]: { name: "كارتيك", shortName: "کار" },
                    [DateObject.locals.HI]: { name: "कार्तिक", shortName: "कार्तिक" }
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.EN]: { name: "Agrahayana", shortName: "Agr" },
                    [DateObject.locals.FA]: { name: "اگرهینه", shortName: "اگر" },
                    [DateObject.locals.AR]: { name: "أجراهيان", shortName: "اجر" },
                    [DateObject.locals.HI]: { name: "अग्रहायण", shortName: "अग्रहायण" }
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.EN]: { name: "Paush", shortName: "Pau" },
                    [DateObject.locals.FA]: { name: "پاوشه", shortName: "پاو" },
                    [DateObject.locals.AR]: { name: "بوش", shortName: "بوش" },
                    [DateObject.locals.HI]: { name: "पौष", shortName: "पौष" }
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.EN]: { name: "Magh", shortName: "Mag" },
                    [DateObject.locals.FA]: { name: "ماگهه", shortName: "ماگ" },
                    [DateObject.locals.AR]: { name: "ماک", shortName: "ماک" },
                    [DateObject.locals.HI]: { name: "माघ", shortName: "माघ" }
                }
            },
            {
                length: 30, locals: {
                    [DateObject.locals.EN]: { name: "Phalgun", shortName: "Pha" },
                    [DateObject.locals.FA]: { name: "پهالگونه", shortName: "پها" },
                    [DateObject.locals.AR]: { name: "فالغون", shortName: "فال" },
                    [DateObject.locals.HI]: { name: "फाल्गुन", shortName: "फाल्गुन" }
                }
            },
        ]
    }

    #weekDays = {
        [DateObject.calendars.GREGORIAN]: [
            {
                index: 0,
                locals: {
                    [DateObject.locals.EN]: { name: "Sunday", shortName: "Sun" },
                    [DateObject.locals.FA]: { name: "یکشنبه", shortName: "یک" },
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "اح" },
                    [DateObject.locals.HI]: { name: "रविवार", shortName: "रवि" }
                }
            },
            {
                index: 1,
                locals: {
                    [DateObject.locals.EN]: { name: "Monday", shortName: "Mon" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locals.HI]: { name: "सोमवार", shortName: "सोम" }
                }
            },
            {
                index: 2,
                locals: {
                    [DateObject.locals.EN]: { name: "Tuesday", shortName: "Tue" },
                    [DateObject.locals.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثل" },
                    [DateObject.locals.HI]: { name: "मंगलवार", shortName: "मंगल" }
                }
            },
            {
                index: 3,
                locals: {
                    [DateObject.locals.EN]: { name: "Wednesday", shortName: "Wed" },
                    [DateObject.locals.FA]: { name: "چهارشنبه", shortName: "چهار" },
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ار" },
                    [DateObject.locals.HI]: { name: "बुधवार", shortName: "बुध" }
                }
            },
            {
                index: 4,
                locals: {
                    [DateObject.locals.EN]: { name: "Thursday", shortName: "Thu" },
                    [DateObject.locals.FA]: { name: "پنجشنبه", shortName: "پنج" },
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locals.HI]: { name: "गुरुवार", shortName: "गुरु" }
                }
            },
            {
                index: 5,
                locals: {
                    [DateObject.locals.EN]: { name: "Friday", shortName: "Fri" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locals.HI]: { name: "शुक्रवार", shortName: "शुक्र" }
                }
            },
            {
                index: 6,
                locals: {
                    [DateObject.locals.EN]: { name: "Saturday", shortName: "Sat" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سب" },
                    [DateObject.locals.HI]: { name: "शनिवार", shortName: "शनि" }
                }
            }
        ],
        [DateObject.calendars.PERSIAN]: [
            {
                index: 1,
                locals: {
                    [DateObject.locals.EN]: { name: "YekShanbeh", shortName: "Yek" },
                    [DateObject.locals.FA]: { name: "یکشنبه", shortName: "یک" },
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "اح" },
                    [DateObject.locals.HI]: { name: "रविवार", shortName: "रवि" }


                }
            },
            {
                index: 2,
                locals: {
                    [DateObject.locals.EN]: { name: "Doshanbeh", shortName: "Do" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locals.HI]: { name: "सोमवार", shortName: "सोम" }

                }
            },
            {
                index: 3,
                locals: {
                    [DateObject.locals.EN]: { name: "Seshanbeh", shortName: "Se" },
                    [DateObject.locals.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثل" },
                    [DateObject.locals.HI]: { name: "मंगलवार", shortName: "मंगल" }

                }
            },
            {
                index: 4,
                locals: {
                    [DateObject.locals.EN]: { name: "Chaharshanbeh", shortName: "Cha" },
                    [DateObject.locals.FA]: { name: "چهارشنبه", shortName: "چهار" },
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ار" },
                    [DateObject.locals.HI]: { name: "बुधवार", shortName: "बुध" }

                }
            },
            {
                index: 5,
                locals: {
                    [DateObject.locals.EN]: { name: "Panjshanbeh", shortName: "Pan" },
                    [DateObject.locals.FA]: { name: "پنجشنبه", shortName: "پنج" },
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locals.HI]: { name: "गुरुवार", shortName: "गुरु" }

                }
            },
            {
                index: 6,
                locals: {
                    [DateObject.locals.EN]: { name: "Jom'eh", shortName: "Jom" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locals.HI]: { name: "शुक्रवार", shortName: "शुक्र" }

                }
            },
            {
                index: 0,
                locals: {
                    [DateObject.locals.EN]: { name: "Shanbeh", shortName: "Sha" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سب" },
                    [DateObject.locals.HI]: { name: "शनिवार", shortName: "शनि" }

                }
            }
        ],
        [DateObject.calendars.ARABIC]: [
            {
                index: 1, locals: {
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "احد" },
                    [DateObject.locals.EN]: { name: "al-'ahad", shortName: "Aha" },
                    [DateObject.locals.FA]: { name: "يکشنبه", shortName: "یک" },
                    [DateObject.locals.HI]: { name: "रविवार", shortName: "रवि" }
                }
            },
            {
                index: 2, locals: {
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locals.EN]: { name: "al-'ithnayn", shortName: "Ith" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locals.HI]: { name: "सोमवार", shortName: "सोम" }
                }
            },
            {
                index: 3, locals: {
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثلا" },
                    [DateObject.locals.EN]: { name: "ath-thalatha", shortName: "Tha" },
                    [DateObject.locals.FA]: { name: "سه شنبه", shortName: "سه" },
                    [DateObject.locals.HI]: { name: "मंगलवार", shortName: "मंगल" }
                }
            },
            {
                index: 4, locals: {
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ارب" },
                    [DateObject.locals.EN]: { name: "al-'arb`a'", shortName: "Arb" },
                    [DateObject.locals.FA]: { name: "چهار شنبه", shortName: "چهار" },
                    [DateObject.locals.HI]: { name: "बुधवार", shortName: "बुध" }
                }
            },
            {
                index: 5, locals: {
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locals.EN]: { name: "al-khamis", shortName: "Kha" },
                    [DateObject.locals.FA]: { name: "پنج شنبه	", shortName: "پنج" },
                    [DateObject.locals.HI]: { name: "गुरुवार", shortName: "गुरु" }
                }
            },
            {
                index: 6, locals: {
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locals.EN]: { name: "al-jum`a", shortName: "Jum" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locals.HI]: { name: "शुक्रवार", shortName: "शुक्र" }
                }
            },
            {
                index: 0, locals: {
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سبت" },
                    [DateObject.locals.EN]: { name: "as-sabt", shortName: "Sab" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locals.HI]: { name: "शनिवार", shortName: "शनि" }
                }
            },
        ],
        [DateObject.calendars.INDIAN]: [
            {
                index: 0, locals: {
                    [DateObject.locals.EN]: { name: "Ravivara", shortName: "Rav" },
                    [DateObject.locals.FA]: { name: "يکشنبه", shortName: "یک" },
                    [DateObject.locals.AR]: { name: "الأحد", shortName: "احد" },
                    [DateObject.locals.HI]: { name: "रविवार", shortName: "रवि" }
                }
            },
            {
                index: 1, locals: {
                    [DateObject.locals.EN]: { name: "Somavara", shortName: "Som" },
                    [DateObject.locals.FA]: { name: "دوشنبه", shortName: "دو" },
                    [DateObject.locals.AR]: { name: "الإثنينِ", shortName: "ثن" },
                    [DateObject.locals.HI]: { name: "सोमवार", shortName: "सोम" }
                }
            },
            {
                index: 2, locals: {
                    [DateObject.locals.EN]: { name: "Mangalavara", shortName: "Man" },
                    [DateObject.locals.FA]: { name: "سه شنبه	", shortName: "سه" },
                    [DateObject.locals.AR]: { name: "الثلاثاء", shortName: "ثلا" },
                    [DateObject.locals.HI]: { name: "मंगलवार", shortName: "मंगल" }
                }
            },
            {
                index: 3, locals: {
                    [DateObject.locals.EN]: { name: "Budhavara", shortName: "Bud" },
                    [DateObject.locals.FA]: { name: "چهار شنبه", shortName: "چهار" },
                    [DateObject.locals.AR]: { name: "الأربعاء", shortName: "ارب" },
                    [DateObject.locals.HI]: { name: "बुधवार", shortName: "बुध" }
                }
            },
            {
                index: 4, locals: {
                    [DateObject.locals.EN]: { name: "Brihaspatvara", shortName: "Bri" },
                    [DateObject.locals.FA]: { name: "پنج شنبه	", shortName: "پنج" },
                    [DateObject.locals.AR]: { name: "الخميس", shortName: "خم" },
                    [DateObject.locals.HI]: { name: "गुरुवार", shortName: "गुरु" }
                }
            },
            {
                index: 5, locals: {
                    [DateObject.locals.EN]: { name: "Sukravara", shortName: "Suk" },
                    [DateObject.locals.FA]: { name: "جمعه", shortName: "جم" },
                    [DateObject.locals.AR]: { name: "الجمعة", shortName: "جم" },
                    [DateObject.locals.HI]: { name: "शुक्रवार", shortName: "शुक्र" }
                }
            },
            {
                index: 6, locals: {
                    [DateObject.locals.EN]: { name: "Sanivara", shortName: "San" },
                    [DateObject.locals.FA]: { name: "شنبه", shortName: "شن" },
                    [DateObject.locals.AR]: { name: "السّبت", shortName: "سبت" },
                    [DateObject.locals.HI]: { name: "शनिवार", shortName: "शनि" }
                }
            }
        ]
    }

    #digits = {
        [DateObject.locals.EN]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        [DateObject.locals.FA]: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        [DateObject.locals.AR]: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        [DateObject.locals.HI]: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    }

    #meridiems = {
        [DateObject.locals.EN]: [{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }],
        [DateObject.locals.FA]: [{ name: "قبل از ظهر", shortName: "ق.ظ" }, { name: "بعد از ظهر", shortName: "ب.ظ" }],
        [DateObject.locals.AR]: [{ name: "قبل الظهر", shortName: "ق.ظ" }, { name: "بعد الظهر", shortName: "ب.ظ" }],
        [DateObject.locals.HI]: [{ name: "दोपहर से पहले", shortName: "पूर्वाह्न" }, { name: "मध्याह्न के बाद", shortName: "अपराह्न" }]
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
                    "local",
                    "format",
                    "ignoreList"
                ].includes(key)) //e.g: new DateObject({ calendar: "gregorian" })

        if (mustSetNewDate) obj.date = new Date()

        this.#format = obj.format

        if (typeof obj.date === "string") {
            if (this.#isoDate.test(obj.date)) {
                obj.date = new Date(obj.date)
            } else {
                this.parse(obj.date)

                mustGetLeaps = false
            }
        }

        if (obj.date instanceof DateObject || obj.date instanceof Date || typeof obj.date === "number") {
            this.setDate(obj.date)

            if (obj.calendar) this.convert(obj.calendar)

            mustGetLeaps = false
        }

        if (obj.local) {
            obj.local = DateObject.locals[obj.local.toUpperCase()] || DateObject.locals.EN
            this.#local = obj.local
        }

        delete obj.calendar
        delete obj.local
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

        if (this.#local !== DateObject.locals.en) {
            let digits = this.#digits[this.#local]

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
            case "a": return this.hour >= 12 ? this.#meridiems[this.#local][1].shortName : this.#meridiems[this.#local][0].shortName
            case "A": return this.hour >= 12 ? this.#meridiems[this.#local][1].name : this.#meridiems[this.#local][0].name
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

    setDate(date) {
        if (!date instanceof Date && !date instanceof DateObject) return this
        if (typeof date === "string" && this.#isoDate.test(date)) date = new Date(date)
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
            this.#local = date.local.toUpperCase()
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

            if (object.local) {
                this.setLocal(object.local)
                delete object.local
            }

            for (let key in object) this.set(key, object[key])

            return this
        }

        switch (key) {
            case "calendar": return this.convert(value)
            case "local": return this.setLocal(value)
            case "format": return this.setFormat(value)
            case "year": return this.setYear(value)
            case "month": return this.setMonth(value)
            case "day": return this.setDay(value)
            case "hour": return this.setHour(value)
            case "minute": return this.setMinute(value)
            case "second": return this.setSecond(value)
            case "millisecond": return this.setMillisecond(value)
            case "date": return this.setDate(value)
            case "ignoreList": return this.setIgnoreList(value)
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
            local: this.#local.toLowerCase(),
            format: this.#format || "YYYY/MM/DD"
        }
    }

    toJSON() {
        return this.toObject()
    }

    valueOf() {
        let days = this.dayOfBeginning + this.#epoch[this.#calendar] - this.#epoch["unix"]
        let offset = this.#isUTC ? 0 : (new Date().getTimezoneOffset() * 60 * 1000)

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

        let days = this.#day
        let months = this.months

        for (let i = 0; i < months.length; i++) {
            if (i >= this.#month) break

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
        let weekDay = this.#weekDays[this.#calendar][index]

        if (!weekDay) return {}

        let names = this.#custom.weekDays ? this.#custom.weekDays[weekDay.index] : weekDay.locals[this.#local]

        weekDay = {
            index: weekDay.index,
            number: weekDay.index + 1,
            toString: function () { return this.number },
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
            let $month = this.#custom.months ? this.#custom.months[index] : month.locals[this.#local]

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
            let $week = this.#custom.weekDays ? this.#custom.weekDays[index] : week.locals[this.#local]

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

    get isUTC() {
        return this.#isUTC
    }

    get unix() {
        return Math.round(this.valueOf() / 1000)
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

    set ignoreList(ignoreList) {
        if (Array.isArray(ignoreList)) this.#ignoreList = ignoreList
    }

    #toNumber = value => {
        if (!isNaN(value)) return parseInt(value)
    }
}