'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

var _year = new WeakMap();

var _month = new WeakMap();

var _day = new WeakMap();

var _hour = new WeakMap();

var _minute = new WeakMap();

var _second = new WeakMap();

var _millisecond = new WeakMap();

var _format = new WeakMap();

var _locale = new WeakMap();

var _calendar = new WeakMap();

var _isUTC = new WeakMap();

var _leaps = new WeakMap();

var _custom = new WeakMap();

var _isoDate = new WeakMap();

var _ignoreList = new WeakMap();

var _reverse = new WeakMap();

var _months = new WeakMap();

var _weekDays = new WeakMap();

var _digits = new WeakMap();

var _meridiems = new WeakMap();

var _epoch = new WeakMap();

var _yearLength = new WeakMap();

var _fix = new WeakMap();

var _getLeaps = new WeakMap();

var _guessYear = new WeakMap();

var _toNumber = new WeakMap();

var DateObject = /*#__PURE__*/function () {
  function DateObject(object) {
    var _this = this,
        _locales,
        _locales2,
        _locales3,
        _locales4,
        _locales5,
        _locales6,
        _locales7,
        _locales8,
        _locales9,
        _locales10,
        _locales11,
        _locales12,
        _locales13,
        _locales14,
        _locales15,
        _locales16,
        _locales17,
        _locales18,
        _locales19,
        _locales20,
        _locales21,
        _locales22,
        _locales23,
        _locales24,
        _locales25,
        _locales26,
        _locales27,
        _locales28,
        _locales29,
        _locales30,
        _locales31,
        _locales32,
        _locales33,
        _locales34,
        _locales35,
        _locales36,
        _locales37,
        _locales38,
        _locales39,
        _locales40,
        _locales41,
        _locales42,
        _locales43,
        _locales44,
        _locales45,
        _locales46,
        _locales47,
        _locales48,
        _value,
        _locales49,
        _locales50,
        _locales51,
        _locales52,
        _locales53,
        _locales54,
        _locales55,
        _locales56,
        _locales57,
        _locales58,
        _locales59,
        _locales60,
        _locales61,
        _locales62,
        _locales63,
        _locales64,
        _locales65,
        _locales66,
        _locales67,
        _locales68,
        _locales69,
        _locales70,
        _locales71,
        _locales72,
        _locales73,
        _locales74,
        _locales75,
        _locales76,
        _value2,
        _value3,
        _value4,
        _value5,
        _value6;

    _classCallCheck(this, DateObject);

    _year.set(this, {
      writable: true,
      value: void 0
    });

    _month.set(this, {
      writable: true,
      value: void 0
    });

    _day.set(this, {
      writable: true,
      value: void 0
    });

    _hour.set(this, {
      writable: true,
      value: void 0
    });

    _minute.set(this, {
      writable: true,
      value: void 0
    });

    _second.set(this, {
      writable: true,
      value: void 0
    });

    _millisecond.set(this, {
      writable: true,
      value: void 0
    });

    _format.set(this, {
      writable: true,
      value: void 0
    });

    _locale.set(this, {
      writable: true,
      value: DateObject.locales.EN
    });

    _calendar.set(this, {
      writable: true,
      value: DateObject.calendars.GREGORIAN
    });

    _isUTC.set(this, {
      writable: true,
      value: false
    });

    _leaps.set(this, {
      writable: true,
      value: []
    });

    _custom.set(this, {
      writable: true,
      value: {}
    });

    _isoDate.set(this, {
      writable: true,
      value: /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/
    });

    _ignoreList.set(this, {
      writable: true,
      value: []
    });

    _reverse.set(this, {
      writable: true,
      value: {
        "YYYY": function YYYY(string) {
          return _classPrivateFieldSet(_this, _year, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "YY": function YY(string) {
          switch (_classPrivateFieldGet(_this, _calendar)) {
            case DateObject.calendars.PERSIAN:
              string = "13" + string;
              break;

            case DateObject.calendars.ARABIC:
              string = "14" + string;
              break;

            default:
              string = "20" + string;
          }

          _classPrivateFieldSet(_this, _year, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "MMMM": function MMMM(string) {
          return _classPrivateFieldSet(_this, _month, _this.months.findIndex(function (month) {
            return string.toLowerCase() === month.name.toLowerCase();
          }));
        },
        "MMM": function MMM(string) {
          return _classPrivateFieldSet(_this, _month, _this.months.findIndex(function (month) {
            return string.toLowerCase() === month.shortName.toLowerCase();
          }));
        },
        "MM": function MM(string) {
          return _classPrivateFieldSet(_this, _month, _classPrivateFieldGet(_this, _toNumber).call(_this, string) - 1);
        },
        "M": function M(string) {
          return _classPrivateFieldSet(_this, _month, _classPrivateFieldGet(_this, _toNumber).call(_this, string) - 1);
        },
        "DD": function DD(string) {
          return _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "D": function D(string) {
          return _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "HH": function HH(string) {
          return _classPrivateFieldSet(_this, _hour, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "H": function H(string) {
          return _classPrivateFieldSet(_this, _hour, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "hh": function hh(string) {
          var hour = _classPrivateFieldGet(_this, _toNumber).call(_this, string);

          _classPrivateFieldSet(_this, _hour, hour > 12 ? hour - 12 : hour);
        },
        "h": function h(string) {
          var hour = _classPrivateFieldGet(_this, _toNumber).call(_this, string);

          _classPrivateFieldSet(_this, _hour, hour > 12 ? hour - 12 : hour);
        },
        "mm": function mm(string) {
          return _classPrivateFieldSet(_this, _minute, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "m": function m(string) {
          return _classPrivateFieldSet(_this, _minute, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "ss": function ss(string) {
          return _classPrivateFieldSet(_this, _second, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "s": function s(string) {
          return _classPrivateFieldSet(_this, _second, _classPrivateFieldGet(_this, _toNumber).call(_this, string));
        },
        "SSS": function SSS(string) {
          return _this.millisecond = _classPrivateFieldGet(_this, _toNumber).call(_this, string);
        },
        "SS": function SS(string) {
          return _this.millisecond = _classPrivateFieldGet(_this, _toNumber).call(_this, string);
        },
        "S": function S(string) {
          return _this.millisecond = _classPrivateFieldGet(_this, _toNumber).call(_this, string);
        }
      }
    });

    _months.set(this, {
      writable: true,
      value: (_value = {}, _defineProperty(_value, DateObject.calendars.GREGORIAN, [{
        length: 31,
        locales: (_locales = {}, _defineProperty(_locales, DateObject.locales.EN, {
          name: "January",
          shortName: "Jan"
        }), _defineProperty(_locales, DateObject.locales.FA, {
          name: "ژانویه",
          shortName: "ژان"
        }), _defineProperty(_locales, DateObject.locales.AR, {
          name: "يناير",
          shortName: "ينا"
        }), _defineProperty(_locales, DateObject.locales.HI, {
          name: "जनवरी",
          shortName: "जन"
        }), _locales)
      }, {
        length: undefined,
        locales: (_locales2 = {}, _defineProperty(_locales2, DateObject.locales.EN, {
          name: "February",
          shortName: "Feb"
        }), _defineProperty(_locales2, DateObject.locales.FA, {
          name: "فوریه",
          shortName: "فور"
        }), _defineProperty(_locales2, DateObject.locales.AR, {
          name: "فبراير",
          shortName: "فبر"
        }), _defineProperty(_locales2, DateObject.locales.HI, {
          name: "फ़रवरी",
          shortName: "फ़र"
        }), _locales2)
      }, {
        length: 31,
        locales: (_locales3 = {}, _defineProperty(_locales3, DateObject.locales.EN, {
          name: "March",
          shortName: "Mar"
        }), _defineProperty(_locales3, DateObject.locales.FA, {
          name: "مارس",
          shortName: "ما"
        }), _defineProperty(_locales3, DateObject.locales.AR, {
          name: "مارس",
          shortName: "ما"
        }), _defineProperty(_locales3, DateObject.locales.HI, {
          name: "मार्च",
          shortName: "मार्च"
        }), _locales3)
      }, {
        length: 30,
        locales: (_locales4 = {}, _defineProperty(_locales4, DateObject.locales.EN, {
          name: "April",
          shortName: "Apr"
        }), _defineProperty(_locales4, DateObject.locales.FA, {
          name: "آوریل",
          shortName: "آور"
        }), _defineProperty(_locales4, DateObject.locales.AR, {
          name: "إبريل",
          shortName: "إبر"
        }), _defineProperty(_locales4, DateObject.locales.HI, {
          name: "अप्रैल",
          shortName: "अप्रैल"
        }), _locales4)
      }, {
        length: 31,
        locales: (_locales5 = {}, _defineProperty(_locales5, DateObject.locales.EN, {
          name: "May",
          shortName: "May"
        }), _defineProperty(_locales5, DateObject.locales.FA, {
          name: "مه",
          shortName: "مه"
        }), _defineProperty(_locales5, DateObject.locales.AR, {
          name: "مايو",
          shortName: "ما"
        }), _defineProperty(_locales5, DateObject.locales.HI, {
          name: "मई",
          shortName: "मई"
        }), _locales5)
      }, {
        length: 30,
        locales: (_locales6 = {}, _defineProperty(_locales6, DateObject.locales.EN, {
          name: "June",
          shortName: "Jun"
        }), _defineProperty(_locales6, DateObject.locales.FA, {
          name: "ژوئن",
          shortName: "ژو"
        }), _defineProperty(_locales6, DateObject.locales.AR, {
          name: "يونيو",
          shortName: "يو"
        }), _defineProperty(_locales6, DateObject.locales.HI, {
          name: "जून",
          shortName: "जून"
        }), _locales6)
      }, {
        length: 31,
        locales: (_locales7 = {}, _defineProperty(_locales7, DateObject.locales.EN, {
          name: "July",
          shortName: "Jul"
        }), _defineProperty(_locales7, DateObject.locales.FA, {
          name: "ژوئیه",
          shortName: "ژوئیه"
        }), _defineProperty(_locales7, DateObject.locales.AR, {
          name: "يوليو",
          shortName: "يوليو"
        }), _defineProperty(_locales7, DateObject.locales.HI, {
          name: "जुलाई",
          shortName: "जुल"
        }), _locales7)
      }, {
        length: 31,
        locales: (_locales8 = {}, _defineProperty(_locales8, DateObject.locales.EN, {
          name: "August",
          shortName: "Aug"
        }), _defineProperty(_locales8, DateObject.locales.FA, {
          name: "اوت",
          shortName: "اوت"
        }), _defineProperty(_locales8, DateObject.locales.AR, {
          name: "أغسطس",
          shortName: "أغس"
        }), _defineProperty(_locales8, DateObject.locales.HI, {
          name: "अगस्त",
          shortName: "अग"
        }), _locales8)
      }, {
        length: 30,
        locales: (_locales9 = {}, _defineProperty(_locales9, DateObject.locales.EN, {
          name: "September",
          shortName: "Sep"
        }), _defineProperty(_locales9, DateObject.locales.FA, {
          name: "سپتامبر",
          shortName: "سپ"
        }), _defineProperty(_locales9, DateObject.locales.AR, {
          name: "سبتمبر",
          shortName: "سب"
        }), _defineProperty(_locales9, DateObject.locales.HI, {
          name: "सितंबर",
          shortName: "सित"
        }), _locales9)
      }, {
        length: 31,
        locales: (_locales10 = {}, _defineProperty(_locales10, DateObject.locales.EN, {
          name: "October",
          shortName: "Oct"
        }), _defineProperty(_locales10, DateObject.locales.FA, {
          name: "اکتبر",
          shortName: "اک"
        }), _defineProperty(_locales10, DateObject.locales.AR, {
          name: "أكتوبر",
          shortName: "اک"
        }), _defineProperty(_locales10, DateObject.locales.HI, {
          name: "अक्तूबर",
          shortName: "अक्तू"
        }), _locales10)
      }, {
        length: 30,
        locales: (_locales11 = {}, _defineProperty(_locales11, DateObject.locales.EN, {
          name: "November",
          shortName: "Nov"
        }), _defineProperty(_locales11, DateObject.locales.FA, {
          name: "نوامبر",
          shortName: "نو"
        }), _defineProperty(_locales11, DateObject.locales.AR, {
          name: "نوفمبر",
          shortName: "نو"
        }), _defineProperty(_locales11, DateObject.locales.HI, {
          name: "नवंबर",
          shortName: "नव"
        }), _locales11)
      }, {
        length: 31,
        locales: (_locales12 = {}, _defineProperty(_locales12, DateObject.locales.EN, {
          name: "December",
          shortName: "Dec"
        }), _defineProperty(_locales12, DateObject.locales.FA, {
          name: "دسامبر",
          shortName: "دس"
        }), _defineProperty(_locales12, DateObject.locales.AR, {
          name: "ديسمبر",
          shortName: "دس"
        }), _defineProperty(_locales12, DateObject.locales.HI, {
          name: "दिसंबर",
          shortName: "दिस"
        }), _locales12)
      }]), _defineProperty(_value, DateObject.calendars.PERSIAN, [{
        length: 31,
        locales: (_locales13 = {}, _defineProperty(_locales13, DateObject.locales.EN, {
          name: "Farvardin",
          shortName: "Far"
        }), _defineProperty(_locales13, DateObject.locales.FA, {
          name: "فروردین",
          shortName: "فر"
        }), _defineProperty(_locales13, DateObject.locales.AR, {
          name: "فروردین",
          shortName: "فر"
        }), _defineProperty(_locales13, DateObject.locales.HI, {
          name: "फर्वादिन",
          shortName: "फर्वादिन"
        }), _locales13)
      }, {
        length: 31,
        locales: (_locales14 = {}, _defineProperty(_locales14, DateObject.locales.EN, {
          name: "Ordibehesht",
          shortName: "Ord"
        }), _defineProperty(_locales14, DateObject.locales.FA, {
          name: "اردیبهشت",
          shortName: "ار"
        }), _defineProperty(_locales14, DateObject.locales.AR, {
          name: "اردیبهشت",
          shortName: "ار"
        }), _defineProperty(_locales14, DateObject.locales.HI, {
          name: "ओर्दिवेहेस्ट",
          shortName: "ओर्दिवेहेस्ट"
        }), _locales14)
      }, {
        length: 31,
        locales: (_locales15 = {}, _defineProperty(_locales15, DateObject.locales.EN, {
          name: "Khordad",
          shortName: "Kho"
        }), _defineProperty(_locales15, DateObject.locales.FA, {
          name: "خرداد",
          shortName: "خرد"
        }), _defineProperty(_locales15, DateObject.locales.AR, {
          name: "خرداد",
          shortName: "خرد"
        }), _defineProperty(_locales15, DateObject.locales.HI, {
          name: "खोरर्दाद",
          shortName: "खोरर्दाद"
        }), _locales15)
      }, {
        length: 31,
        locales: (_locales16 = {}, _defineProperty(_locales16, DateObject.locales.EN, {
          name: "Tir",
          shortName: "Tir"
        }), _defineProperty(_locales16, DateObject.locales.FA, {
          name: "تیر",
          shortName: "تیر"
        }), _defineProperty(_locales16, DateObject.locales.AR, {
          name: "تیر",
          shortName: "تیر"
        }), _defineProperty(_locales16, DateObject.locales.HI, {
          name: "टिर",
          shortName: "टिर"
        }), _locales16)
      }, {
        length: 31,
        locales: (_locales17 = {}, _defineProperty(_locales17, DateObject.locales.EN, {
          name: "Mordad",
          shortName: "Mor"
        }), _defineProperty(_locales17, DateObject.locales.FA, {
          name: "مرداد",
          shortName: "مر"
        }), _defineProperty(_locales17, DateObject.locales.AR, {
          name: "مرداد",
          shortName: "مر"
        }), _defineProperty(_locales17, DateObject.locales.HI, {
          name: "मोरदाद",
          shortName: "मोरदाद"
        }), _locales17)
      }, {
        length: 31,
        locales: (_locales18 = {}, _defineProperty(_locales18, DateObject.locales.EN, {
          name: "Shahrivar",
          shortName: "Sha"
        }), _defineProperty(_locales18, DateObject.locales.FA, {
          name: "شهریور",
          shortName: "شه"
        }), _defineProperty(_locales18, DateObject.locales.AR, {
          name: "شهریور",
          shortName: "شه"
        }), _defineProperty(_locales18, DateObject.locales.HI, {
          name: "शाहरीवर्",
          shortName: "शाहरीवर्"
        }), _locales18)
      }, {
        length: 30,
        locales: (_locales19 = {}, _defineProperty(_locales19, DateObject.locales.EN, {
          name: "Mehr",
          shortName: "Meh"
        }), _defineProperty(_locales19, DateObject.locales.FA, {
          name: "مهر",
          shortName: "مه"
        }), _defineProperty(_locales19, DateObject.locales.AR, {
          name: "مهر",
          shortName: "مه"
        }), _defineProperty(_locales19, DateObject.locales.HI, {
          name: "मेहर",
          shortName: "मेहर"
        }), _locales19)
      }, {
        length: 30,
        locales: (_locales20 = {}, _defineProperty(_locales20, DateObject.locales.EN, {
          name: "Aban",
          shortName: "Aba"
        }), _defineProperty(_locales20, DateObject.locales.FA, {
          name: "آبان",
          shortName: "آبا"
        }), _defineProperty(_locales20, DateObject.locales.AR, {
          name: "آبان",
          shortName: "آبا"
        }), _defineProperty(_locales20, DateObject.locales.HI, {
          name: "अवन",
          shortName: "अवन"
        }), _locales20)
      }, {
        length: 30,
        locales: (_locales21 = {}, _defineProperty(_locales21, DateObject.locales.EN, {
          name: "Azar",
          shortName: "Aza"
        }), _defineProperty(_locales21, DateObject.locales.FA, {
          name: "آذر",
          shortName: "آذ"
        }), _defineProperty(_locales21, DateObject.locales.AR, {
          name: "آذر",
          shortName: "آذ"
        }), _defineProperty(_locales21, DateObject.locales.HI, {
          name: "अज़र",
          shortName: "अज़र"
        }), _locales21)
      }, {
        length: 30,
        locales: (_locales22 = {}, _defineProperty(_locales22, DateObject.locales.EN, {
          name: "Dey",
          shortName: "Dey"
        }), _defineProperty(_locales22, DateObject.locales.FA, {
          name: "دی",
          shortName: "دی"
        }), _defineProperty(_locales22, DateObject.locales.AR, {
          name: "دی",
          shortName: "دی"
        }), _defineProperty(_locales22, DateObject.locales.HI, {
          name: "डे",
          shortName: "डे"
        }), _locales22)
      }, {
        length: 30,
        locales: (_locales23 = {}, _defineProperty(_locales23, DateObject.locales.EN, {
          name: "Bahman",
          shortName: "Bah"
        }), _defineProperty(_locales23, DateObject.locales.FA, {
          name: "بهمن",
          shortName: "بهم"
        }), _defineProperty(_locales23, DateObject.locales.AR, {
          name: "بهمن",
          shortName: "بهم"
        }), _defineProperty(_locales23, DateObject.locales.HI, {
          name: "बहमन",
          shortName: "बहमन"
        }), _locales23)
      }, {
        length: undefined,
        locales: (_locales24 = {}, _defineProperty(_locales24, DateObject.locales.EN, {
          name: "Esfand",
          shortName: "Esf"
        }), _defineProperty(_locales24, DateObject.locales.FA, {
          name: "اسفند",
          shortName: "اسف"
        }), _defineProperty(_locales24, DateObject.locales.AR, {
          name: "اسفند",
          shortName: "اسف"
        }), _defineProperty(_locales24, DateObject.locales.HI, {
          name: "ईस्फन्द्",
          shortName: "ईस्फन्द्"
        }), _locales24)
      }]), _defineProperty(_value, DateObject.calendars.ARABIC, [{
        length: 30,
        locales: (_locales25 = {}, _defineProperty(_locales25, DateObject.locales.AR, {
          name: "محرم",
          shortName: "محرم"
        }), _defineProperty(_locales25, DateObject.locales.EN, {
          name: "Muharram",
          shortName: "Mu"
        }), _defineProperty(_locales25, DateObject.locales.FA, {
          name: "محرم",
          shortName: "محرم"
        }), _defineProperty(_locales25, DateObject.locales.HI, {
          name: "मुहर्रम",
          shortName: "मुहर्रम"
        }), _locales25)
      }, {
        length: 29,
        locales: (_locales26 = {}, _defineProperty(_locales26, DateObject.locales.AR, {
          name: "صفر",
          shortName: "صفر"
        }), _defineProperty(_locales26, DateObject.locales.EN, {
          name: "Safar",
          shortName: "Sa"
        }), _defineProperty(_locales26, DateObject.locales.FA, {
          name: "صفر",
          shortName: "صفر"
        }), _defineProperty(_locales26, DateObject.locales.HI, {
          name: "सफर",
          shortName: "सफर"
        }), _locales26)
      }, {
        length: 30,
        locales: (_locales27 = {}, _defineProperty(_locales27, DateObject.locales.AR, {
          name: "ربیع الاول",
          shortName: "ربیع الاول"
        }), _defineProperty(_locales27, DateObject.locales.EN, {
          name: "Rabi`al-Awwal",
          shortName: "RI"
        }), _defineProperty(_locales27, DateObject.locales.FA, {
          name: "ربیع الاول",
          shortName: "ربیع الاول"
        }), _defineProperty(_locales27, DateObject.locales.HI, {
          name: "राबी प्रथम",
          shortName: "राबी प्रथम"
        }), _locales27)
      }, {
        length: 29,
        locales: (_locales28 = {}, _defineProperty(_locales28, DateObject.locales.AR, {
          name: "ربیع الثانی",
          shortName: "ربیع الثانی"
        }), _defineProperty(_locales28, DateObject.locales.EN, {
          name: "Rabi`ath-Thani",
          shortName: "RII"
        }), _defineProperty(_locales28, DateObject.locales.FA, {
          name: "ربیع الثانی",
          shortName: "ربیع الثانی"
        }), _defineProperty(_locales28, DateObject.locales.HI, {
          name: "राबी द्वितीय",
          shortName: "राबी द्वितीय"
        }), _locales28)
      }, {
        length: 30,
        locales: (_locales29 = {}, _defineProperty(_locales29, DateObject.locales.AR, {
          name: "جمادی الاول",
          shortName: "جمادی الاول"
        }), _defineProperty(_locales29, DateObject.locales.EN, {
          name: "Jumada l-Ula",
          shortName: "JI"
        }), _defineProperty(_locales29, DateObject.locales.FA, {
          name: "جمادی الاول",
          shortName: "جمادی الاول"
        }), _defineProperty(_locales29, DateObject.locales.HI, {
          name: "जुम्डा प्रथम",
          shortName: "जुम्डा प्रथम"
        }), _locales29)
      }, {
        length: 29,
        locales: (_locales30 = {}, _defineProperty(_locales30, DateObject.locales.AR, {
          name: "جمادی الثانی",
          shortName: "جمادی الثانی"
        }), _defineProperty(_locales30, DateObject.locales.EN, {
          name: "Jumada t-Tania",
          shortName: "JII"
        }), _defineProperty(_locales30, DateObject.locales.FA, {
          name: "جمادی الثانی",
          shortName: "جمادی الثانی"
        }), _defineProperty(_locales30, DateObject.locales.HI, {
          name: "जुम्डा द्वितीय",
          shortName: "जुम्डा द्वितीय"
        }), _locales30)
      }, {
        length: 30,
        locales: (_locales31 = {}, _defineProperty(_locales31, DateObject.locales.AR, {
          name: "رجب",
          shortName: "رجب"
        }), _defineProperty(_locales31, DateObject.locales.EN, {
          name: "Rajab",
          shortName: "Ra"
        }), _defineProperty(_locales31, DateObject.locales.FA, {
          name: "رجب",
          shortName: "رجب"
        }), _defineProperty(_locales31, DateObject.locales.HI, {
          name: "रजब",
          shortName: "रजब"
        }), _locales31)
      }, {
        length: 29,
        locales: (_locales32 = {}, _defineProperty(_locales32, DateObject.locales.AR, {
          name: "شعبان",
          shortName: "شعبان"
        }), _defineProperty(_locales32, DateObject.locales.EN, {
          name: "Sha`ban",
          shortName: "Sh"
        }), _defineProperty(_locales32, DateObject.locales.FA, {
          name: "شعبان",
          shortName: "شعبان"
        }), _defineProperty(_locales32, DateObject.locales.HI, {
          name: "शावन",
          shortName: "शावन"
        }), _locales32)
      }, {
        length: 30,
        locales: (_locales33 = {}, _defineProperty(_locales33, DateObject.locales.AR, {
          name: "رمضان",
          shortName: "رمضان"
        }), _defineProperty(_locales33, DateObject.locales.EN, {
          name: "Ramadan",
          shortName: "Ra"
        }), _defineProperty(_locales33, DateObject.locales.FA, {
          name: "رمضان",
          shortName: "رمضان"
        }), _defineProperty(_locales33, DateObject.locales.HI, {
          name: "रमजान",
          shortName: "रमजान"
        }), _locales33)
      }, {
        length: 29,
        locales: (_locales34 = {}, _defineProperty(_locales34, DateObject.locales.AR, {
          name: "شوال",
          shortName: "شوال"
        }), _defineProperty(_locales34, DateObject.locales.EN, {
          name: "Shawwal",
          shortName: "Sh"
        }), _defineProperty(_locales34, DateObject.locales.FA, {
          name: "شوال",
          shortName: "شوال"
        }), _defineProperty(_locales34, DateObject.locales.HI, {
          name: "शव्व्ल",
          shortName: "शव्व्ल"
        }), _locales34)
      }, {
        length: 30,
        locales: (_locales35 = {}, _defineProperty(_locales35, DateObject.locales.AR, {
          name: "ذیقعده ",
          shortName: "ذیقعده"
        }), _defineProperty(_locales35, DateObject.locales.EN, {
          name: "Dhu l-Qa`da ",
          shortName: "DhQ"
        }), _defineProperty(_locales35, DateObject.locales.HI, {
          name: "जिल-क्दाह ",
          shortName: "जिल-क्दाह"
        }), _locales35)
      }, {
        length: undefined,
        locales: (_locales36 = {}, _defineProperty(_locales36, DateObject.locales.AR, {
          name: "ذیحجه",
          shortName: "ذیحجه"
        }), _defineProperty(_locales36, DateObject.locales.EN, {
          name: "Dhu l-Hijja",
          shortName: "DhH"
        }), _defineProperty(_locales36, DateObject.locales.FA, {
          name: "ذیحجه",
          shortName: "ذیحجه"
        }), _defineProperty(_locales36, DateObject.locales.HI, {
          name: "जिल्-हिज्जाह",
          shortName: "जिल्-हिज्जाह"
        }), _locales36)
      }]), _defineProperty(_value, DateObject.calendars.INDIAN, [{
        length: undefined,
        locales: (_locales37 = {}, _defineProperty(_locales37, DateObject.locales.EN, {
          name: "Chaitra",
          shortName: "Cha"
        }), _defineProperty(_locales37, DateObject.locales.FA, {
          name: "چیتره",
          shortName: "چیت"
        }), _defineProperty(_locales37, DateObject.locales.AR, {
          name: "شيترا",
          shortName: "شیت"
        }), _defineProperty(_locales37, DateObject.locales.HI, {
          name: "चैत्र",
          shortName: "चैत्र"
        }), _locales37)
      }, {
        length: 31,
        locales: (_locales38 = {}, _defineProperty(_locales38, DateObject.locales.EN, {
          name: "Vaishakh",
          shortName: "Vai"
        }), _defineProperty(_locales38, DateObject.locales.FA, {
          name: "ویشاکهه",
          shortName: "ویش"
        }), _defineProperty(_locales38, DateObject.locales.AR, {
          name: "فيشاخ",
          shortName: "فیش"
        }), _defineProperty(_locales38, DateObject.locales.HI, {
          name: "वैशाख",
          shortName: "वैशाख"
        }), _locales38)
      }, {
        length: 31,
        locales: (_locales39 = {}, _defineProperty(_locales39, DateObject.locales.EN, {
          name: "Jyaishtha",
          shortName: "Jya"
        }), _defineProperty(_locales39, DateObject.locales.FA, {
          name: "جییشته",
          shortName: "جیش"
        }), _defineProperty(_locales39, DateObject.locales.AR, {
          name: "جیشتا",
          shortName: "جیش"
        }), _defineProperty(_locales39, DateObject.locales.HI, {
          name: "ज्येष्ठ",
          shortName: "ज्येष्ठ"
        }), _locales39)
      }, {
        length: 31,
        locales: (_locales40 = {}, _defineProperty(_locales40, DateObject.locales.EN, {
          name: "Ashadha",
          shortName: "Ash"
        }), _defineProperty(_locales40, DateObject.locales.FA, {
          name: "آشادهه",
          shortName: "آشا"
        }), _defineProperty(_locales40, DateObject.locales.AR, {
          name: "أشاد",
          shortName: "أشا"
        }), _defineProperty(_locales40, DateObject.locales.HI, {
          name: "आषाढ़",
          shortName: "आषाढ़"
        }), _locales40)
      }, {
        length: 31,
        locales: (_locales41 = {}, _defineProperty(_locales41, DateObject.locales.EN, {
          name: "Shravana",
          shortName: "Shr"
        }), _defineProperty(_locales41, DateObject.locales.FA, {
          name: "شراونه",
          shortName: "شرا"
        }), _defineProperty(_locales41, DateObject.locales.AR, {
          name: "شرافان",
          shortName: "شرا"
        }), _defineProperty(_locales41, DateObject.locales.HI, {
          name: "श्रावण",
          shortName: "श्रावण"
        }), _locales41)
      }, {
        length: 31,
        locales: (_locales42 = {}, _defineProperty(_locales42, DateObject.locales.EN, {
          name: "Bhadrapad",
          shortName: "Bha"
        }), _defineProperty(_locales42, DateObject.locales.FA, {
          name: "بهادره",
          shortName: "بها"
        }), _defineProperty(_locales42, DateObject.locales.AR, {
          name: "بهادرابادا",
          shortName: "بها"
        }), _defineProperty(_locales42, DateObject.locales.HI, {
          name: "भाद्रपद",
          shortName: "भाद्रपद"
        }), _locales42)
      }, {
        length: 30,
        locales: (_locales43 = {}, _defineProperty(_locales43, DateObject.locales.EN, {
          name: "Ashwin",
          shortName: "Ash"
        }), _defineProperty(_locales43, DateObject.locales.FA, {
          name: "آشوین",
          shortName: "آشو"
        }), _defineProperty(_locales43, DateObject.locales.AR, {
          name: "اشوين",
          shortName: "اشو"
        }), _defineProperty(_locales43, DateObject.locales.HI, {
          name: "आश्विन",
          shortName: "आश्विन"
        }), _locales43)
      }, {
        length: 30,
        locales: (_locales44 = {}, _defineProperty(_locales44, DateObject.locales.EN, {
          name: "Kartik",
          shortName: "Kar"
        }), _defineProperty(_locales44, DateObject.locales.FA, {
          name: "کارتیکه",
          shortName: "کار"
        }), _defineProperty(_locales44, DateObject.locales.AR, {
          name: "كارتيك",
          shortName: "کار"
        }), _defineProperty(_locales44, DateObject.locales.HI, {
          name: "कार्तिक",
          shortName: "कार्तिक"
        }), _locales44)
      }, {
        length: 30,
        locales: (_locales45 = {}, _defineProperty(_locales45, DateObject.locales.EN, {
          name: "Agrahayana",
          shortName: "Agr"
        }), _defineProperty(_locales45, DateObject.locales.FA, {
          name: "اگرهینه",
          shortName: "اگر"
        }), _defineProperty(_locales45, DateObject.locales.AR, {
          name: "أجراهيان",
          shortName: "اجر"
        }), _defineProperty(_locales45, DateObject.locales.HI, {
          name: "अग्रहायण",
          shortName: "अग्रहायण"
        }), _locales45)
      }, {
        length: 30,
        locales: (_locales46 = {}, _defineProperty(_locales46, DateObject.locales.EN, {
          name: "Paush",
          shortName: "Pau"
        }), _defineProperty(_locales46, DateObject.locales.FA, {
          name: "پاوشه",
          shortName: "پاو"
        }), _defineProperty(_locales46, DateObject.locales.AR, {
          name: "بوش",
          shortName: "بوش"
        }), _defineProperty(_locales46, DateObject.locales.HI, {
          name: "पौष",
          shortName: "पौष"
        }), _locales46)
      }, {
        length: 30,
        locales: (_locales47 = {}, _defineProperty(_locales47, DateObject.locales.EN, {
          name: "Magh",
          shortName: "Mag"
        }), _defineProperty(_locales47, DateObject.locales.FA, {
          name: "ماگهه",
          shortName: "ماگ"
        }), _defineProperty(_locales47, DateObject.locales.AR, {
          name: "ماک",
          shortName: "ماک"
        }), _defineProperty(_locales47, DateObject.locales.HI, {
          name: "माघ",
          shortName: "माघ"
        }), _locales47)
      }, {
        length: 30,
        locales: (_locales48 = {}, _defineProperty(_locales48, DateObject.locales.EN, {
          name: "Phalgun",
          shortName: "Pha"
        }), _defineProperty(_locales48, DateObject.locales.FA, {
          name: "پهالگونه",
          shortName: "پها"
        }), _defineProperty(_locales48, DateObject.locales.AR, {
          name: "فالغون",
          shortName: "فال"
        }), _defineProperty(_locales48, DateObject.locales.HI, {
          name: "फाल्गुन",
          shortName: "फाल्गुन"
        }), _locales48)
      }]), _value)
    });

    _weekDays.set(this, {
      writable: true,
      value: (_value2 = {}, _defineProperty(_value2, DateObject.calendars.GREGORIAN, [{
        index: 0,
        locales: (_locales49 = {}, _defineProperty(_locales49, DateObject.locales.EN, {
          name: "Sunday",
          shortName: "Sun"
        }), _defineProperty(_locales49, DateObject.locales.FA, {
          name: "یکشنبه",
          shortName: "یک"
        }), _defineProperty(_locales49, DateObject.locales.AR, {
          name: "الأحد",
          shortName: "اح"
        }), _defineProperty(_locales49, DateObject.locales.HI, {
          name: "रविवार",
          shortName: "रवि"
        }), _locales49)
      }, {
        index: 1,
        locales: (_locales50 = {}, _defineProperty(_locales50, DateObject.locales.EN, {
          name: "Monday",
          shortName: "Mon"
        }), _defineProperty(_locales50, DateObject.locales.FA, {
          name: "دوشنبه",
          shortName: "دو"
        }), _defineProperty(_locales50, DateObject.locales.AR, {
          name: "الإثنينِ",
          shortName: "ثن"
        }), _defineProperty(_locales50, DateObject.locales.HI, {
          name: "सोमवार",
          shortName: "सोम"
        }), _locales50)
      }, {
        index: 2,
        locales: (_locales51 = {}, _defineProperty(_locales51, DateObject.locales.EN, {
          name: "Tuesday",
          shortName: "Tue"
        }), _defineProperty(_locales51, DateObject.locales.FA, {
          name: "سه شنبه",
          shortName: "سه"
        }), _defineProperty(_locales51, DateObject.locales.AR, {
          name: "الثلاثاء",
          shortName: "ثل"
        }), _defineProperty(_locales51, DateObject.locales.HI, {
          name: "मंगलवार",
          shortName: "मंगल"
        }), _locales51)
      }, {
        index: 3,
        locales: (_locales52 = {}, _defineProperty(_locales52, DateObject.locales.EN, {
          name: "Wednesday",
          shortName: "Wed"
        }), _defineProperty(_locales52, DateObject.locales.FA, {
          name: "چهارشنبه",
          shortName: "چهار"
        }), _defineProperty(_locales52, DateObject.locales.AR, {
          name: "الأربعاء",
          shortName: "ار"
        }), _defineProperty(_locales52, DateObject.locales.HI, {
          name: "बुधवार",
          shortName: "बुध"
        }), _locales52)
      }, {
        index: 4,
        locales: (_locales53 = {}, _defineProperty(_locales53, DateObject.locales.EN, {
          name: "Thursday",
          shortName: "Thu"
        }), _defineProperty(_locales53, DateObject.locales.FA, {
          name: "پنجشنبه",
          shortName: "پنج"
        }), _defineProperty(_locales53, DateObject.locales.AR, {
          name: "الخميس",
          shortName: "خم"
        }), _defineProperty(_locales53, DateObject.locales.HI, {
          name: "गुरुवार",
          shortName: "गुरु"
        }), _locales53)
      }, {
        index: 5,
        locales: (_locales54 = {}, _defineProperty(_locales54, DateObject.locales.EN, {
          name: "Friday",
          shortName: "Fri"
        }), _defineProperty(_locales54, DateObject.locales.FA, {
          name: "جمعه",
          shortName: "جم"
        }), _defineProperty(_locales54, DateObject.locales.AR, {
          name: "الجمعة",
          shortName: "جم"
        }), _defineProperty(_locales54, DateObject.locales.HI, {
          name: "शुक्रवार",
          shortName: "शुक्र"
        }), _locales54)
      }, {
        index: 6,
        locales: (_locales55 = {}, _defineProperty(_locales55, DateObject.locales.EN, {
          name: "Saturday",
          shortName: "Sat"
        }), _defineProperty(_locales55, DateObject.locales.FA, {
          name: "شنبه",
          shortName: "شن"
        }), _defineProperty(_locales55, DateObject.locales.AR, {
          name: "السّبت",
          shortName: "سب"
        }), _defineProperty(_locales55, DateObject.locales.HI, {
          name: "शनिवार",
          shortName: "शनि"
        }), _locales55)
      }]), _defineProperty(_value2, DateObject.calendars.PERSIAN, [{
        index: 1,
        locales: (_locales56 = {}, _defineProperty(_locales56, DateObject.locales.EN, {
          name: "YekShanbeh",
          shortName: "Yek"
        }), _defineProperty(_locales56, DateObject.locales.FA, {
          name: "یکشنبه",
          shortName: "یک"
        }), _defineProperty(_locales56, DateObject.locales.AR, {
          name: "الأحد",
          shortName: "اح"
        }), _defineProperty(_locales56, DateObject.locales.HI, {
          name: "रविवार",
          shortName: "रवि"
        }), _locales56)
      }, {
        index: 2,
        locales: (_locales57 = {}, _defineProperty(_locales57, DateObject.locales.EN, {
          name: "Doshanbeh",
          shortName: "Do"
        }), _defineProperty(_locales57, DateObject.locales.FA, {
          name: "دوشنبه",
          shortName: "دو"
        }), _defineProperty(_locales57, DateObject.locales.AR, {
          name: "الإثنينِ",
          shortName: "ثن"
        }), _defineProperty(_locales57, DateObject.locales.HI, {
          name: "सोमवार",
          shortName: "सोम"
        }), _locales57)
      }, {
        index: 3,
        locales: (_locales58 = {}, _defineProperty(_locales58, DateObject.locales.EN, {
          name: "Seshanbeh",
          shortName: "Se"
        }), _defineProperty(_locales58, DateObject.locales.FA, {
          name: "سه شنبه",
          shortName: "سه"
        }), _defineProperty(_locales58, DateObject.locales.AR, {
          name: "الثلاثاء",
          shortName: "ثل"
        }), _defineProperty(_locales58, DateObject.locales.HI, {
          name: "मंगलवार",
          shortName: "मंगल"
        }), _locales58)
      }, {
        index: 4,
        locales: (_locales59 = {}, _defineProperty(_locales59, DateObject.locales.EN, {
          name: "Chaharshanbeh",
          shortName: "Cha"
        }), _defineProperty(_locales59, DateObject.locales.FA, {
          name: "چهارشنبه",
          shortName: "چهار"
        }), _defineProperty(_locales59, DateObject.locales.AR, {
          name: "الأربعاء",
          shortName: "ار"
        }), _defineProperty(_locales59, DateObject.locales.HI, {
          name: "बुधवार",
          shortName: "बुध"
        }), _locales59)
      }, {
        index: 5,
        locales: (_locales60 = {}, _defineProperty(_locales60, DateObject.locales.EN, {
          name: "Panjshanbeh",
          shortName: "Pan"
        }), _defineProperty(_locales60, DateObject.locales.FA, {
          name: "پنجشنبه",
          shortName: "پنج"
        }), _defineProperty(_locales60, DateObject.locales.AR, {
          name: "الخميس",
          shortName: "خم"
        }), _defineProperty(_locales60, DateObject.locales.HI, {
          name: "गुरुवार",
          shortName: "गुरु"
        }), _locales60)
      }, {
        index: 6,
        locales: (_locales61 = {}, _defineProperty(_locales61, DateObject.locales.EN, {
          name: "Jom'eh",
          shortName: "Jom"
        }), _defineProperty(_locales61, DateObject.locales.FA, {
          name: "جمعه",
          shortName: "جم"
        }), _defineProperty(_locales61, DateObject.locales.AR, {
          name: "الجمعة",
          shortName: "جم"
        }), _defineProperty(_locales61, DateObject.locales.HI, {
          name: "शुक्रवार",
          shortName: "शुक्र"
        }), _locales61)
      }, {
        index: 0,
        locales: (_locales62 = {}, _defineProperty(_locales62, DateObject.locales.EN, {
          name: "Shanbeh",
          shortName: "Sha"
        }), _defineProperty(_locales62, DateObject.locales.FA, {
          name: "شنبه",
          shortName: "شن"
        }), _defineProperty(_locales62, DateObject.locales.AR, {
          name: "السّبت",
          shortName: "سب"
        }), _defineProperty(_locales62, DateObject.locales.HI, {
          name: "शनिवार",
          shortName: "शनि"
        }), _locales62)
      }]), _defineProperty(_value2, DateObject.calendars.ARABIC, [{
        index: 1,
        locales: (_locales63 = {}, _defineProperty(_locales63, DateObject.locales.AR, {
          name: "الأحد",
          shortName: "احد"
        }), _defineProperty(_locales63, DateObject.locales.EN, {
          name: "al-'ahad",
          shortName: "Aha"
        }), _defineProperty(_locales63, DateObject.locales.FA, {
          name: "يکشنبه",
          shortName: "یک"
        }), _defineProperty(_locales63, DateObject.locales.HI, {
          name: "रविवार",
          shortName: "रवि"
        }), _locales63)
      }, {
        index: 2,
        locales: (_locales64 = {}, _defineProperty(_locales64, DateObject.locales.AR, {
          name: "الإثنينِ",
          shortName: "ثن"
        }), _defineProperty(_locales64, DateObject.locales.EN, {
          name: "al-'ithnayn",
          shortName: "Ith"
        }), _defineProperty(_locales64, DateObject.locales.FA, {
          name: "دوشنبه",
          shortName: "دو"
        }), _defineProperty(_locales64, DateObject.locales.HI, {
          name: "सोमवार",
          shortName: "सोम"
        }), _locales64)
      }, {
        index: 3,
        locales: (_locales65 = {}, _defineProperty(_locales65, DateObject.locales.AR, {
          name: "الثلاثاء",
          shortName: "ثلا"
        }), _defineProperty(_locales65, DateObject.locales.EN, {
          name: "ath-thalatha",
          shortName: "Tha"
        }), _defineProperty(_locales65, DateObject.locales.FA, {
          name: "سه شنبه",
          shortName: "سه"
        }), _defineProperty(_locales65, DateObject.locales.HI, {
          name: "मंगलवार",
          shortName: "मंगल"
        }), _locales65)
      }, {
        index: 4,
        locales: (_locales66 = {}, _defineProperty(_locales66, DateObject.locales.AR, {
          name: "الأربعاء",
          shortName: "ارب"
        }), _defineProperty(_locales66, DateObject.locales.EN, {
          name: "al-'arb`a'",
          shortName: "Arb"
        }), _defineProperty(_locales66, DateObject.locales.FA, {
          name: "چهار شنبه",
          shortName: "چهار"
        }), _defineProperty(_locales66, DateObject.locales.HI, {
          name: "बुधवार",
          shortName: "बुध"
        }), _locales66)
      }, {
        index: 5,
        locales: (_locales67 = {}, _defineProperty(_locales67, DateObject.locales.AR, {
          name: "الخميس",
          shortName: "خم"
        }), _defineProperty(_locales67, DateObject.locales.EN, {
          name: "al-khamis",
          shortName: "Kha"
        }), _defineProperty(_locales67, DateObject.locales.FA, {
          name: "پنج شنبه	",
          shortName: "پنج"
        }), _defineProperty(_locales67, DateObject.locales.HI, {
          name: "गुरुवार",
          shortName: "गुरु"
        }), _locales67)
      }, {
        index: 6,
        locales: (_locales68 = {}, _defineProperty(_locales68, DateObject.locales.AR, {
          name: "الجمعة",
          shortName: "جم"
        }), _defineProperty(_locales68, DateObject.locales.EN, {
          name: "al-jum`a",
          shortName: "Jum"
        }), _defineProperty(_locales68, DateObject.locales.FA, {
          name: "جمعه",
          shortName: "جم"
        }), _defineProperty(_locales68, DateObject.locales.HI, {
          name: "शुक्रवार",
          shortName: "शुक्र"
        }), _locales68)
      }, {
        index: 0,
        locales: (_locales69 = {}, _defineProperty(_locales69, DateObject.locales.AR, {
          name: "السّبت",
          shortName: "سبت"
        }), _defineProperty(_locales69, DateObject.locales.EN, {
          name: "as-sabt",
          shortName: "Sab"
        }), _defineProperty(_locales69, DateObject.locales.FA, {
          name: "شنبه",
          shortName: "شن"
        }), _defineProperty(_locales69, DateObject.locales.HI, {
          name: "शनिवार",
          shortName: "शनि"
        }), _locales69)
      }]), _defineProperty(_value2, DateObject.calendars.INDIAN, [{
        index: 0,
        locales: (_locales70 = {}, _defineProperty(_locales70, DateObject.locales.EN, {
          name: "Ravivara",
          shortName: "Rav"
        }), _defineProperty(_locales70, DateObject.locales.FA, {
          name: "يکشنبه",
          shortName: "یک"
        }), _defineProperty(_locales70, DateObject.locales.AR, {
          name: "الأحد",
          shortName: "احد"
        }), _defineProperty(_locales70, DateObject.locales.HI, {
          name: "रविवार",
          shortName: "रवि"
        }), _locales70)
      }, {
        index: 1,
        locales: (_locales71 = {}, _defineProperty(_locales71, DateObject.locales.EN, {
          name: "Somavara",
          shortName: "Som"
        }), _defineProperty(_locales71, DateObject.locales.FA, {
          name: "دوشنبه",
          shortName: "دو"
        }), _defineProperty(_locales71, DateObject.locales.AR, {
          name: "الإثنينِ",
          shortName: "ثن"
        }), _defineProperty(_locales71, DateObject.locales.HI, {
          name: "सोमवार",
          shortName: "सोम"
        }), _locales71)
      }, {
        index: 2,
        locales: (_locales72 = {}, _defineProperty(_locales72, DateObject.locales.EN, {
          name: "Mangalavara",
          shortName: "Man"
        }), _defineProperty(_locales72, DateObject.locales.FA, {
          name: "سه شنبه	",
          shortName: "سه"
        }), _defineProperty(_locales72, DateObject.locales.AR, {
          name: "الثلاثاء",
          shortName: "ثلا"
        }), _defineProperty(_locales72, DateObject.locales.HI, {
          name: "मंगलवार",
          shortName: "मंगल"
        }), _locales72)
      }, {
        index: 3,
        locales: (_locales73 = {}, _defineProperty(_locales73, DateObject.locales.EN, {
          name: "Budhavara",
          shortName: "Bud"
        }), _defineProperty(_locales73, DateObject.locales.FA, {
          name: "چهار شنبه",
          shortName: "چهار"
        }), _defineProperty(_locales73, DateObject.locales.AR, {
          name: "الأربعاء",
          shortName: "ارب"
        }), _defineProperty(_locales73, DateObject.locales.HI, {
          name: "बुधवार",
          shortName: "बुध"
        }), _locales73)
      }, {
        index: 4,
        locales: (_locales74 = {}, _defineProperty(_locales74, DateObject.locales.EN, {
          name: "Brihaspatvara",
          shortName: "Bri"
        }), _defineProperty(_locales74, DateObject.locales.FA, {
          name: "پنج شنبه	",
          shortName: "پنج"
        }), _defineProperty(_locales74, DateObject.locales.AR, {
          name: "الخميس",
          shortName: "خم"
        }), _defineProperty(_locales74, DateObject.locales.HI, {
          name: "गुरुवार",
          shortName: "गुरु"
        }), _locales74)
      }, {
        index: 5,
        locales: (_locales75 = {}, _defineProperty(_locales75, DateObject.locales.EN, {
          name: "Sukravara",
          shortName: "Suk"
        }), _defineProperty(_locales75, DateObject.locales.FA, {
          name: "جمعه",
          shortName: "جم"
        }), _defineProperty(_locales75, DateObject.locales.AR, {
          name: "الجمعة",
          shortName: "جم"
        }), _defineProperty(_locales75, DateObject.locales.HI, {
          name: "शुक्रवार",
          shortName: "शुक्र"
        }), _locales75)
      }, {
        index: 6,
        locales: (_locales76 = {}, _defineProperty(_locales76, DateObject.locales.EN, {
          name: "Sanivara",
          shortName: "San"
        }), _defineProperty(_locales76, DateObject.locales.FA, {
          name: "شنبه",
          shortName: "شن"
        }), _defineProperty(_locales76, DateObject.locales.AR, {
          name: "السّبت",
          shortName: "سبت"
        }), _defineProperty(_locales76, DateObject.locales.HI, {
          name: "शनिवार",
          shortName: "शनि"
        }), _locales76)
      }]), _value2)
    });

    _digits.set(this, {
      writable: true,
      value: (_value3 = {}, _defineProperty(_value3, DateObject.locales.EN, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]), _defineProperty(_value3, DateObject.locales.FA, ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]), _defineProperty(_value3, DateObject.locales.AR, ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]), _defineProperty(_value3, DateObject.locales.HI, ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"]), _value3)
    });

    _meridiems.set(this, {
      writable: true,
      value: (_value4 = {}, _defineProperty(_value4, DateObject.locales.EN, [{
        name: "AM",
        shortName: "am"
      }, {
        name: "PM",
        shortName: "pm"
      }]), _defineProperty(_value4, DateObject.locales.FA, [{
        name: "قبل از ظهر",
        shortName: "ق.ظ"
      }, {
        name: "بعد از ظهر",
        shortName: "ب.ظ"
      }]), _defineProperty(_value4, DateObject.locales.AR, [{
        name: "قبل الظهر",
        shortName: "ق.ظ"
      }, {
        name: "بعد الظهر",
        shortName: "ب.ظ"
      }]), _defineProperty(_value4, DateObject.locales.HI, [{
        name: "दोपहर से पहले",
        shortName: "पूर्वाह्न"
      }, {
        name: "मध्याह्न के बाद",
        shortName: "अपराह्न"
      }]), _value4)
    });

    _epoch.set(this, {
      writable: true,
      value: (_value5 = {}, _defineProperty(_value5, DateObject.calendars.GREGORIAN, 1721424), _defineProperty(_value5, DateObject.calendars.PERSIAN, 1948319), _defineProperty(_value5, DateObject.calendars.ARABIC, 1948438), _defineProperty(_value5, DateObject.calendars.INDIAN, 1749628), _defineProperty(_value5, "unix", 2440587), _value5)
    });

    _yearLength.set(this, {
      writable: true,
      value: (_value6 = {}, _defineProperty(_value6, DateObject.calendars.GREGORIAN, 365), _defineProperty(_value6, DateObject.calendars.PERSIAN, 365), _defineProperty(_value6, DateObject.calendars.ARABIC, 354), _defineProperty(_value6, DateObject.calendars.INDIAN, 365), _value6)
    });

    _fix.set(this, {
      writable: true,
      value: function value() {
        var setMonth = function setMonth() {
          var mustGetLeaps = false;

          while (_classPrivateFieldGet(_this, _month) < 0) {
            _classPrivateFieldSet(_this, _month, _classPrivateFieldGet(_this, _month) + 12);

            _classPrivateFieldSet(_this, _year, _classPrivateFieldGet(_this, _year) - 1);

            if (_classPrivateFieldGet(_this, _year) === 0 && _this.calendar !== DateObject.calendars.INDIAN) _classPrivateFieldSet(_this, _year, -1);
            mustGetLeaps = true;
          }

          while (_classPrivateFieldGet(_this, _month) > 11) {
            _classPrivateFieldSet(_this, _month, _classPrivateFieldGet(_this, _month) - 12);

            _classPrivateFieldSet(_this, _year, _classPrivateFieldGet(_this, _year) + 1);

            if (_classPrivateFieldGet(_this, _year) === 0 && _this.calendar !== DateObject.calendars.INDIAN) _classPrivateFieldSet(_this, _year, 1);
            mustGetLeaps = true;
          }

          if (mustGetLeaps) _classPrivateFieldGet(_this, _getLeaps).call(_this);
        };

        if (!_this.isValid) return;

        while (_classPrivateFieldGet(_this, _millisecond) >= 1000) {
          _classPrivateFieldSet(_this, _millisecond, _classPrivateFieldGet(_this, _millisecond) - 1000);

          _classPrivateFieldSet(_this, _second, _classPrivateFieldGet(_this, _second) + 1);
        }

        while (_classPrivateFieldGet(_this, _millisecond) < 0) {
          _classPrivateFieldSet(_this, _millisecond, _classPrivateFieldGet(_this, _millisecond) + 1000);

          _classPrivateFieldSet(_this, _second, _classPrivateFieldGet(_this, _second) - 1);
        }

        while (_classPrivateFieldGet(_this, _second) >= 60) {
          _classPrivateFieldSet(_this, _second, _classPrivateFieldGet(_this, _second) - 60);

          _classPrivateFieldSet(_this, _minute, _classPrivateFieldGet(_this, _minute) + 1);
        }

        while (_classPrivateFieldGet(_this, _second) < 0) {
          _classPrivateFieldSet(_this, _second, _classPrivateFieldGet(_this, _second) + 60);

          _classPrivateFieldSet(_this, _minute, _classPrivateFieldGet(_this, _minute) - 1);
        }

        while (_classPrivateFieldGet(_this, _minute) >= 60) {
          _classPrivateFieldSet(_this, _minute, _classPrivateFieldGet(_this, _minute) - 60);

          _classPrivateFieldSet(_this, _hour, _classPrivateFieldGet(_this, _hour) + 1);
        }

        while (_classPrivateFieldGet(_this, _minute) < 0) {
          _classPrivateFieldSet(_this, _minute, _classPrivateFieldGet(_this, _minute) + 60);

          _classPrivateFieldSet(_this, _hour, _classPrivateFieldGet(_this, _hour) - 1);
        }

        while (_classPrivateFieldGet(_this, _hour) >= 24) {
          _classPrivateFieldSet(_this, _hour, _classPrivateFieldGet(_this, _hour) - 24);

          _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _day) + 1);
        }

        while (_classPrivateFieldGet(_this, _hour) < 0) {
          _classPrivateFieldSet(_this, _hour, _classPrivateFieldGet(_this, _hour) + 24);

          _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _day) - 1);
        }

        while (true) {
          var _this$month;

          if (_classPrivateFieldGet(_this, _month) < 0 || _classPrivateFieldGet(_this, _month) > 11) setMonth();

          while (_classPrivateFieldGet(_this, _day) < 1) {
            _classPrivateFieldSet(_this, _month, _classPrivateFieldGet(_this, _month) - 1);

            setMonth();

            _classPrivateFieldSet(_this, _day, _this.month.length + _classPrivateFieldGet(_this, _day));
          }

          if (_classPrivateFieldGet(_this, _day) <= _this.month.length || isNaN(_classPrivateFieldGet(_this, _day))) break;

          _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _day) - _this.month.length);

          _classPrivateFieldSet(_this, _month, (_this$month = +_classPrivateFieldGet(_this, _month)) + 1), _this$month;
        }

        if (!_classPrivateFieldGet(_this, _hour)) _classPrivateFieldSet(_this, _hour, 0);
        if (!_classPrivateFieldGet(_this, _minute)) _classPrivateFieldSet(_this, _minute, 0);
        if (!_classPrivateFieldGet(_this, _second)) _classPrivateFieldSet(_this, _second, 0);
        if (!_classPrivateFieldGet(_this, _millisecond)) _classPrivateFieldSet(_this, _millisecond, 0);
      }
    });

    _getLeaps.set(this, {
      writable: true,
      value: function value() {
        if (_classPrivateFieldGet(_this, _year) === 0 && _classPrivateFieldGet(_this, _calendar) !== DateObject.calendars.INDIAN) return;
        var year = undefined;

        if (_classPrivateFieldGet(_this, _calendar) !== DateObject.calendars.INDIAN) {
          year = _classPrivateFieldGet(_this, _year) > 0 ? 1 : -1;
        } else {
          year = 0;
        }

        var condition = function condition() {
          return _classPrivateFieldGet(_this, _year) > 0 ? year <= _classPrivateFieldGet(_this, _year) : _classPrivateFieldGet(_this, _year) <= year;
        },
            increase = function increase() {
          return _classPrivateFieldGet(_this, _year) > 0 ? year++ : year--;
        },
            isGregorianLeapYear = function isGregorianLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        };

        _classPrivateFieldSet(_this, _leaps, []);

        switch (_classPrivateFieldGet(_this, _calendar)) {
          case DateObject.calendars.PERSIAN:
            var delta = 0.242362,
                offset = _classPrivateFieldGet(_this, _year) > 0 ? 0.2684 : 0.7316,
                correct = {
              5: 4,
              38: 37,
              199: 198,
              232: 231,
              265: 264,
              298: 297,
              557: 558,
              590: 591,
              623: 624,
              982: 983,
              1015: 1016,
              1048: 1049,
              1081: 1082,
              1114: 1115,
              1242: 1243,
              1374: 1375,
              1407: 1408,
              1440: 1441,
              1506: 1507,
              1539: 1540,
              1572: 1573,
              1605: 1606,
              1931: 1932,
              1964: 1965,
              2063: 2064,
              2096: 2097,
              2687: 2686,
              2720: 2719,
              2753: 2752,
              2819: 2818,
              2852: 2851,
              2885: 2884,
              3017: 3016,
              3112: 3111,
              3145: 3144,
              3178: 3177,
              3211: 3210,
              3244: 3243,
              3277: 3276,
              3310: 3309,
              3343: 3342,
              3376: 3375,
              3409: 3408,
              3442: 3441,
              3508: 3507,
              3541: 3540,
              3574: 3573,
              3603: 3602,
              3607: 3606,
              3636: 3635,
              3669: 3668,
              3702: 3701,
              3706: 3705,
              3735: 3734,
              3768: 3767,
              3801: 3800,
              3834: 3833,
              3867: 3866,
              3900: 3899,
              3933: 3932,
              3966: 3965,
              3999: 3998,
              4065: 4064,
              4094: 4093,
              4098: 4097,
              4127: 4126,
              4131: 4130,
              4160: 4159,
              4193: 4192,
              4226: 4225,
              4259: 4258,
              4292: 4291,
              4325: 4324,
              4358: 4357,
              4391: 4390,
              4585: 4584,
              4618: 4617,
              4651: 4650,
              4750: 4749,
              4943: 4944,
              4976: 4977,
              5009: 5010,
              5170: 5171,
              5203: 5204,
              5236: 5237,
              5265: 5266,
              5269: 5270,
              5298: 5299,
              5302: 5303,
              5331: 5332,
              5335: 5336,
              5364: 5365,
              5368: 5369,
              5393: 5394,
              5397: 5398,
              5401: 5402,
              5426: 5427,
              5430: 5431,
              5434: 5435,
              5459: 5460,
              5463: 5464,
              5467: 5468,
              5492: 5493,
              5496: 5497,
              5500: 5501,
              5521: 5522,
              5525: 5526,
              5529: 5530,
              5554: 5555,
              5558: 5559,
              5562: 5563,
              5587: 5588,
              5591: 5592,
              5595: 5596,
              5616: 5617,
              5620: 5621,
              5624: 5625,
              5628: 5629,
              5649: 5650,
              5653: 5654,
              5657: 5658,
              5661: 5662,
              5682: 5683,
              5686: 5687,
              5690: 5691,
              5694: 5695,
              5715: 5716,
              5719: 5720,
              5723: 5724,
              5727: 5728,
              5744: 5745,
              5748: 5749,
              5752: 5753,
              5756: 5757,
              5760: 5761,
              5777: 5778,
              5781: 5782,
              5785: 5786,
              5789: 5790,
              5793: 5794,
              5810: 5811,
              5814: 5815,
              5818: 5819,
              5822: 5823,
              5826: 5827,
              5839: 5840,
              5843: 5844,
              5847: 5848,
              5851: 5852,
              5855: 5856,
              5859: 5860,
              5872: 5873,
              5876: 5877,
              5880: 5881,
              5884: 5885,
              5888: 5889,
              5892: 5893,
              5901: 5902,
              5905: 5906,
              5909: 5910,
              5913: 5914,
              5917: 5918,
              5921: 5922,
              5925: 5926,
              5934: 5935,
              5938: 5939,
              5942: 5943,
              5946: 5947,
              5950: 5951,
              5954: 5955,
              5958: 5959,
              5967: 5968,
              5971: 5972,
              5975: 5976,
              5979: 5980,
              5983: 5984,
              5987: 5988,
              5991: 5992,
              5996: 5997,
              6000: 6001,
              6004: 6005,
              6008: 6009,
              6012: 6013,
              6016: 6017,
              6020: 6021,
              6029: 6030,
              6033: 6034,
              6037: 6038,
              6041: 6042,
              6045: 6046,
              6049: 6050,
              6053: 6054,
              6058: 6059,
              6062: 6063,
              6066: 6067,
              6070: 6071,
              6074: 6075,
              6078: 6079,
              6082: 6083,
              6086: 6087,
              6091: 6092,
              6095: 6096,
              6099: 6100,
              6103: 6104,
              6107: 6108,
              6111: 6112,
              6115: 6116,
              6119: 6120,
              6124: 6125,
              6128: 6129,
              6132: 6133,
              6136: 6137,
              6140: 6141,
              6144: 6145,
              6148: 6149,
              6152: 6154,
              6157: 6158,
              6161: 6162,
              6165: 6166,
              6169: 6170,
              6173: 6174,
              6177: 6178,
              6181: 6182,
              6185: 6187,
              6190: 6191,
              6194: 6195,
              6198: 6199,
              6202: 6203,
              6206: 6207,
              6210: 6211,
              6214: 6215,
              6218: 6220,
              6223: 6224,
              6227: 6228,
              6231: 6232,
              6235: 6236,
              6239: 6240,
              6243: 6244,
              6247: 6249,
              6251: 6253,
              6256: 6257,
              6260: 6261,
              6264: 6265,
              6268: 6269,
              6272: 6273,
              6276: 6277,
              6280: 6282,
              6284: 6286,
              6289: 6290,
              6293: 6294,
              6297: 6298,
              6301: 6302,
              6305: 6306,
              6309: 6310,
              6313: 6315,
              6317: 6319,
              6322: 6323,
              6326: 6327,
              6330: 6331,
              6334: 6335,
              6338: 6339,
              6342: 6344,
              6346: 6348,
              6350: 6352,
              6355: 6356,
              6359: 6360,
              6363: 6364,
              6367: 6368,
              6371: 6372,
              6375: 6377,
              6379: 6381,
              6383: 6385,
              6388: 6389,
              6392: 6393,
              6396: 6397,
              6400: 6401,
              6404: 6406,
              6408: 6410,
              6412: 6414,
              6416: 6418,
              6421: 6422,
              6425: 6426,
              6429: 6430,
              6433: 6434,
              6437: 6439,
              6441: 6443,
              6445: 6447,
              6449: 6451,
              6454: 6455,
              6458: 6459,
              6462: 6463,
              6466: 6468,
              6470: 6472,
              6474: 6476,
              6478: 6480,
              6482: 6484,
              6487: 6488,
              6491: 6492,
              6495: 6496
            };

            while (condition()) {
              offset = offset + (_classPrivateFieldGet(_this, _year) > 0 ? delta : -1 * delta);
              if (offset > 1) offset -= 1;
              if (offset < 0) offset += 1;

              if (offset >= 0.257800926 && offset <= 0.5) {
                var $correct = correct[year] || year < -1 ? year + 1 : year;
                if (_classPrivateFieldGet(_this, _year) > 0 && $correct <= _classPrivateFieldGet(_this, _year)) _classPrivateFieldGet(_this, _leaps).push($correct);
                if (_classPrivateFieldGet(_this, _year) < 0) _classPrivateFieldGet(_this, _leaps).push($correct);
              }

              increase();
            }

            break;

          case DateObject.calendars.ARABIC:
            /**
             * @see https://en.wikipedia.org/wiki/Tabular_Islamic_calendar
             */
            while (condition()) {
              if ([2, 5, 7, 10, 13, 15, 18, 21, 24, 26, 29].includes(year % 30)) _classPrivateFieldGet(_this, _leaps).push(year);
              increase();
            }

            break;

          case DateObject.calendars.INDIAN:
            /**
            * To determine leap years, add 78 to the Saka year - 
            * if the result is a leap year in the Gregorian calendar, 
            * then the Saka year is a leap year as well.
            * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
            */
            while (condition()) {
              if (isGregorianLeapYear(year + 78)) _classPrivateFieldGet(_this, _leaps).push(year);
              increase();
            }

            break;

          default:
            while (condition()) {
              if (isGregorianLeapYear(year)) _classPrivateFieldGet(_this, _leaps).push(year);
              increase();
            }

        }
      }
    });

    _guessYear.set(this, {
      writable: true,
      value: function value(days, calendar) {
        var year = undefined;

        switch (calendar) {
          case DateObject.calendars.PERSIAN:
            year = ~~((days + 0.5) / 365.241);
            break;

          case DateObject.calendars.ARABIC:
            year = ~~((days - 0.5) / 354.366);
            break;

          default:
            year = ~~(days / 365.24);
        }

        return year + (_classPrivateFieldGet(_this, _year) > 0 ? 1 : -1);
      }
    });

    _toNumber.set(this, {
      writable: true,
      value: function value(_value7) {
        if (!isNaN(_value7)) return parseInt(_value7);
      }
    });

    var obj = object && object.constructor === Object ? _objectSpread2({}, object) : object;
    if (!obj || typeof obj === "boolean") obj = {
      date: new Date()
    }; //Default parameter doesn't work in null

    if (obj instanceof Date || obj instanceof DateObject || typeof obj === "string" || typeof obj === "number") obj = {
      date: obj
    };

    if (obj.calendar) {
      obj.calendar = DateObject.calendars[obj.calendar.toUpperCase()] || DateObject.calendars.GREGORIAN;

      _classPrivateFieldSet(this, _calendar, obj.calendar);
    }

    var _mustGetLeaps = true,
        validKeys = Object.keys(obj).filter(function (key) {
      return obj[key] || obj[key] === 0;
    }),
        mustSetNewDate = validKeys.length > 0 && validKeys.length <= 4 && validKeys.every(function (key) {
      return ["calendar", "locale", "format", "ignoreList"].includes(key);
    }); //e.g: new DateObject({ calendar: "gregorian" })

    if (mustSetNewDate) obj.date = new Date();

    _classPrivateFieldSet(this, _format, obj.format);

    if (obj.date instanceof DateObject || obj.date instanceof Date || typeof obj.date === "number" || typeof obj.date === "string") {
      this.setDate(obj.date);
      if (obj.calendar) this.convert(obj.calendar);
      _mustGetLeaps = false;
    }

    if (obj.locale) {
      obj.locale = DateObject.locales[obj.locale.toUpperCase()] || DateObject.locales.EN;

      _classPrivateFieldSet(this, _locale, obj.locale);
    }

    delete obj.calendar;
    delete obj.locale;
    delete obj.date;
    delete obj.format;

    for (var key in obj) {
      this.set(key, obj[key]);
    }

    if (_classPrivateFieldGet(this, _year) === 0 && _classPrivateFieldGet(this, _calendar) !== DateObject.calendars.INDIAN) {
      /**
       * All supported calendars in this library (except Indian calendar) start at
       * year:1, month:1, day:1 (Indian date start at year:0, month:1, day:1)
       * so the year before year 1 is year -1
       * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
       */
      _classPrivateFieldSet(this, _year, -1);
    }

    if (_mustGetLeaps) {
      _classPrivateFieldGet(this, _getLeaps).call(this);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }

  _createClass(DateObject, [{
    key: "parse",
    value: function parse(string) {
      if (!string) return this;

      var format = _classPrivateFieldGet(this, _format);

      if (_classPrivateFieldGet(this, _locale) !== DateObject.locales.en) {
        var digits = _classPrivateFieldGet(this, _digits)[_classPrivateFieldGet(this, _locale)];

        var _iterator = _createForOfIteratorHelper(digits),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var digit = _step.value;
            string = string.replace(new RegExp(digit, "g"), digits.indexOf(digit));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (!format) {
        var regex = /(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/;

        var _string$match = string.match(regex),
            _string$match2 = _slicedToArray(_string$match, 9),
            year = _string$match2[1],
            month = _string$match2[2],
            day = _string$match2[3],
            hour = _string$match2[4],
            minute = _string$match2[5],
            second = _string$match2[6],
            millisecond = _string$match2[7],
            a = _string$match2[8];

        if (month) {
          if (/\d+/.test(month)) {
            month = _classPrivateFieldGet(this, _toNumber).call(this, month) - 1;
          } else {
            month = this.months.findIndex(function ($month) {
              return new RegExp(month, "i").test($month.name);
            });
          }
        }

        _classPrivateFieldSet(this, _year, _classPrivateFieldGet(this, _toNumber).call(this, year));

        _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _toNumber).call(this, month));

        _classPrivateFieldSet(this, _day, _classPrivateFieldGet(this, _toNumber).call(this, day));

        _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _toNumber).call(this, hour));

        _classPrivateFieldSet(this, _minute, _classPrivateFieldGet(this, _toNumber).call(this, minute));

        _classPrivateFieldSet(this, _second, _classPrivateFieldGet(this, _toNumber).call(this, second));

        _classPrivateFieldSet(this, _millisecond, _classPrivateFieldGet(this, _toNumber).call(this, millisecond));

        if (a && a === "pm" && _classPrivateFieldGet(this, _hour) < 12) {
          _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
        }
      } else {
        var formatArray = format.split(/[^\w\u0600-\u06FF]/),
            stringArray = string.split(/[^\w\u0600-\u06FF]/);

        for (var i = 0; i < formatArray.length; i++) {
          var reverse = _classPrivateFieldGet(this, _reverse)[formatArray[i]];

          if (reverse && stringArray[i]) reverse(stringArray[i]);
        }
      }

      if (string.includes(_classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)][1].shortName) && _classPrivateFieldGet(this, _hour) < 12) {
        _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
      }

      if (string.includes(_classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)][1].name) && _classPrivateFieldGet(this, _hour) < 12) {
        _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
      }

      _classPrivateFieldGet(this, _getLeaps).call(this);

      _classPrivateFieldGet(this, _fix).call(this);

      return this;
    }
  }, {
    key: "convert",
    value: function convert() {
      var calendar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DateObject.calendars.GREGORIAN;
      calendar = DateObject.calendars[calendar.toUpperCase()];
      if (!calendar) throw new Error("calendar not found");
      if (calendar === _classPrivateFieldGet(this, _calendar)) return this;

      var days = this.toJulianDay() - _classPrivateFieldGet(this, _epoch)[calendar];

      var target = new DateObject({
        calendar: calendar,
        year: _classPrivateFieldGet(this, _guessYear).call(this, days, calendar),
        month: 1,
        day: 1
      });
      target.day += days - target.dayOfBeginning;

      _classPrivateFieldSet(this, _year, target.year);

      _classPrivateFieldSet(this, _month, target.month.index);

      _classPrivateFieldSet(this, _day, target.day);

      _classPrivateFieldSet(this, _leaps, target.leaps);

      _classPrivateFieldSet(this, _calendar, calendar);

      return this;
    }
  }, {
    key: "format",
    value: function format(_format2, ignoreList) {
      if (!this.isValid) return "";
      if (_format2 && typeof _format2 !== "string") return;
      if (!_format2) _format2 = _classPrivateFieldGet(this, _format) || "YYYY/MM/DD";
      if (!Array.isArray(ignoreList)) ignoreList = [];
      ignoreList = ignoreList.concat(_classPrivateFieldGet(this, _ignoreList));
      ignoreList = ignoreList.filter(function (item) {
        if (typeof item !== "string") {
          console.warn("type of all items in the ignore list must be string, found", _typeof(item));
          return false;
        }

        return true;
      }).map(function (string) {
        return string.replace(/[*/+\-()[\]{}\s$^]/g, function (w) {
          return "\\" + w;
        });
      });
      var regex = new RegExp("".concat(ignoreList.join("|")).concat(ignoreList.length > 0 ? "|" : "", "YYYY|YY|MMMM|MMM|MM|M|WW|W|DDDD|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|."), "g"),
          array = _format2.match(regex) || [],
          result = "";

      var _iterator2 = _createForOfIteratorHelper(array),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          result += ignoreList.includes(item) ? item : this.getProperty(item) || item;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (_classPrivateFieldGet(this, _locale) !== DateObject.locales.en) {
        var digits = _classPrivateFieldGet(this, _custom).digits || _classPrivateFieldGet(this, _digits)[_classPrivateFieldGet(this, _locale)];

        result = result.replace(/[0-9]/g, function (w) {
          return digits[w];
        });
      }

      return result;
    }
  }, {
    key: "getProperty",
    value: function getProperty(key) {
      var pad = function pad(number) {
        return number < 10 ? "0" + number : number;
      };

      switch (key) {
        case "YYYY":
          return this.year;

        case "YY":
          return this.year.toString().substring(2, 4);

        case "MMMM":
          return this.month.name;

        case "MMM":
          return this.month.shortName;

        case "MM":
          return pad(this.month.number);

        case "M":
          return this.month.number;

        case "WW":
          return pad(this.weekOfYear);

        case "W":
          return this.weekOfYear;

        case "DDDD":
          return this.dayOfYear;

        case "DDD":
          return this.dayOfYear;

        case "DD":
          return pad(this.day);

        case "D":
          return this.day;

        case "HH":
          return pad(this.hour);

        case "H":
          return this.hour;

        case "dddd":
          return this.weekDay.name;

        case "ddd":
          return this.weekDay.shortName;

        case "dd":
          return pad(this.weekDay.number);

        case "d":
          return this.weekDay.number;

        case "hh":
          return pad(this.hour > 12 ? this.hour - 12 : this.hour || 12);

        case "h":
          return this.hour > 12 ? this.hour - 12 : this.hour || 12;

        case "mm":
          return pad(this.minute);

        case "m":
          return this.minute;

        case "ss":
          return pad(this.second);

        case "s":
          return this.second;

        case "SSS":
          return _classPrivateFieldGet(this, _millisecond) < 10 ? "00".concat(_classPrivateFieldGet(this, _millisecond)) : _classPrivateFieldGet(this, _millisecond) < 100 ? "0".concat(_classPrivateFieldGet(this, _millisecond)) : _classPrivateFieldGet(this, _millisecond);

        case "SS":
          return _classPrivateFieldGet(this, _millisecond) < 10 ? "00" : _classPrivateFieldGet(this, _millisecond) < 100 ? ("0" + _classPrivateFieldGet(this, _millisecond)).substring(2, 0) : _classPrivateFieldGet(this, _millisecond).toString().substring(0, 2);

        case "S":
          return _classPrivateFieldGet(this, _millisecond) < 10 ? "0" : _classPrivateFieldGet(this, _millisecond) < 100 ? "0" : _classPrivateFieldGet(this, _millisecond).toString().substring(0, 1);

        case "a":
          return this.hour >= 12 ? _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)][1].shortName : _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)][0].shortName;

        case "A":
          return this.hour >= 12 ? _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)][1].name : _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)][0].name;

        default:
          return "";
      }
    }
  }, {
    key: "setYear",
    value: function setYear(number) {
      this.year = number;
      return this;
    }
  }, {
    key: "setMonths",
    value: function setMonths(value) {
      this.months = value;
      return this;
    }
  }, {
    key: "setMonth",
    value: function setMonth(number) {
      this.month = number;
      return this;
    }
  }, {
    key: "setWeekDays",
    value: function setWeekDays(value) {
      this.weekDays = value;
      return this;
    }
  }, {
    key: "setDigits",
    value: function setDigits(value) {
      this.digits = value;
      return this;
    }
  }, {
    key: "setDay",
    value: function setDay(number) {
      this.day = number;
      return this;
    }
  }, {
    key: "setHour",
    value: function setHour(number) {
      this.hour = number;
      return this;
    }
  }, {
    key: "setMinute",
    value: function setMinute(number) {
      this.minute = number;
      return this;
    }
  }, {
    key: "setSecond",
    value: function setSecond(number) {
      this.second = number;
      return this;
    }
  }, {
    key: "setMillisecond",
    value: function setMillisecond(number) {
      this.millisecond = number;
      return this;
    }
  }, {
    key: "setFormat",
    value: function setFormat(format) {
      _classPrivateFieldSet(this, _format, format);

      return this;
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this.locale = locale;
      return this;
    }
  }, {
    key: "setCalendar",
    value: function setCalendar(calendar) {
      this.calendar = calendar;
      return this;
    }
  }, {
    key: "setDate",
    value: function setDate(date) {
      if (typeof date === "string") {
        if (_classPrivateFieldGet(this, _isoDate).test(date)) {
          date = new Date(date);
        } else {
          return this.parse(date);
        }
      }

      if (typeof date === "number") date = new Date(date);

      if (date instanceof Date) {
        _classPrivateFieldSet(this, _calendar, DateObject.calendars.GREGORIAN);

        _classPrivateFieldSet(this, _year, date.getFullYear());

        _classPrivateFieldSet(this, _month, date.getMonth());

        _classPrivateFieldSet(this, _day, date.getDate());

        _classPrivateFieldSet(this, _hour, date.getHours());

        _classPrivateFieldSet(this, _minute, date.getMinutes());

        _classPrivateFieldSet(this, _second, date.getSeconds());

        _classPrivateFieldSet(this, _millisecond, date.getMilliseconds());

        _classPrivateFieldSet(this, _isUTC, false);

        _classPrivateFieldGet(this, _getLeaps).call(this);

        _classPrivateFieldGet(this, _fix).call(this);
      }

      if (date instanceof DateObject) {
        _classPrivateFieldSet(this, _year, date.year);

        _classPrivateFieldSet(this, _month, date.month.index);

        _classPrivateFieldSet(this, _day, date.day);

        _classPrivateFieldSet(this, _hour, date.hour);

        _classPrivateFieldSet(this, _minute, date.minute);

        _classPrivateFieldSet(this, _second, date.second);

        _classPrivateFieldSet(this, _millisecond, date.millisecond);

        _classPrivateFieldSet(this, _locale, date.locale.toUpperCase());

        _classPrivateFieldSet(this, _format, date._format);

        _classPrivateFieldSet(this, _leaps, date.leaps);

        _classPrivateFieldSet(this, _calendar, date.calendar.toUpperCase());

        _classPrivateFieldSet(this, _isUTC, date.isUTC);
      }

      return this;
    }
  }, {
    key: "setIgnoreList",
    value: function setIgnoreList(ignoreList) {
      this.ignoreList = ignoreList;
      return this;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (key === undefined || key === null) return this;

      if (key.constructor === Object) {
        var object = _objectSpread2({}, key);

        if (object.date) {
          this.setDate(object.date);
          delete object.date;
        }

        if (object.calendar) {
          this.convert(object.calendar);
          delete object.calendar;
        }

        if (object.locale) {
          this.setLocale(object.locale);
          delete object.locale;
        }

        for (var _key in object) {
          this.set(_key, object[_key]);
        }

        return this;
      }

      switch (key) {
        case "calendar":
          return this.convert(value);

        case "locale":
          return this.setLocale(value);

        case "format":
          return this.setFormat(value);

        case "year":
          return this.setYear(value);

        case "month":
          return this.setMonth(value);

        case "months":
          return this.setMonths(value);

        case "weekDays":
          return this.setWeekDays(value);

        case "day":
          return this.setDay(value);

        case "hour":
          return this.setHour(value);

        case "minute":
          return this.setMinute(value);

        case "second":
          return this.setSecond(value);

        case "millisecond":
          return this.setMillisecond(value);

        case "date":
          return this.setDate(value);

        case "ignoreList":
          return this.setIgnoreList(value);

        case "digits":
          return this.setDigits(value);

        default:
          return this;
      }
    }
  }, {
    key: "add",
    value: function add(duration, type) {
      duration = _classPrivateFieldGet(this, _toNumber).call(this, duration);
      if (!duration || !type) return this;

      switch (type) {
        case "years":
        case "year":
        case "y":
          this.year += duration;
          break;

        case "months":
        case "month":
        case "M":
          this.month += duration;
          break;

        case "days":
        case "day":
        case "d":
          this.day += duration;
          break;

        case "hours":
        case "hour":
        case "h":
          this.hour += duration;
          break;

        case "minutes":
        case "minute":
        case "m":
          this.minute += duration;
          break;

        case "seconds":
        case "second":
        case "s":
          this.second += duration;
          break;

        case "milliseconds":
        case "millisecond":
        case "ms":
          this.millisecond += duration;
          break;
      }

      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(duration, type) {
      return this.add(-duration, type);
    }
  }, {
    key: "toFirstOfYear",
    value: function toFirstOfYear() {
      this.month = 1;
      this.day = 1;
      return this;
    }
  }, {
    key: "toLastOfYear",
    value: function toLastOfYear() {
      if (this.day >= 29) this.day = 29;
      this.month = 12;
      this.toLastOfMonth();
      return this;
    }
  }, {
    key: "toFirstOfMonth",
    value: function toFirstOfMonth() {
      _classPrivateFieldSet(this, _day, 1);

      return this;
    }
  }, {
    key: "toLastOfMonth",
    value: function toLastOfMonth() {
      _classPrivateFieldSet(this, _day, 0);

      _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _month) + 1);

      _classPrivateFieldGet(this, _fix).call(this);

      return this;
    }
  }, {
    key: "toFirstOfWeek",
    value: function toFirstOfWeek() {
      this.day -= this.weekDay.index;
      return this;
    }
  }, {
    key: "toLastOfWeek",
    value: function toLastOfWeek() {
      this.day += 6 - this.weekDay.index;
      return this;
    }
  }, {
    key: "toFirstWeekOfYear",
    value: function toFirstWeekOfYear() {
      this.toFirstOfYear();
      if (this.weekDay.index === 0) return this;
      return this.toLastOfWeek().setDay(this.day + 1);
    }
  }, {
    key: "toLastWeekOfYear",
    value: function toLastWeekOfYear() {
      return this.toLastOfYear().toFirstOfWeek();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.format();
    }
  }, {
    key: "toDate",
    value: function toDate() {
      var date = new DateObject(this);
      if (_classPrivateFieldGet(this, _calendar) !== DateObject.calendars.GREGORIAN) date.convert(DateObject.calendars.GREGORIAN);
      return new Date(_classPrivateFieldGet(date, _year), _classPrivateFieldGet(date, _month), _classPrivateFieldGet(date, _day), _classPrivateFieldGet(date, _hour), _classPrivateFieldGet(date, _minute), _classPrivateFieldGet(date, _second), _classPrivateFieldGet(date, _millisecond));
    }
  }, {
    key: "toUTC",
    value: function toUTC() {
      if (!_classPrivateFieldGet(this, _isUTC)) {
        this.minute += new Date().getTimezoneOffset();

        _classPrivateFieldSet(this, _isUTC, true);
      }

      return this;
    }
  }, {
    key: "toUnix",
    value: function toUnix() {
      return this.unix;
    }
  }, {
    key: "toJulianDay",
    value: function toJulianDay() {
      return this.dayOfBeginning + _classPrivateFieldGet(this, _epoch)[_classPrivateFieldGet(this, _calendar)];
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        year: _classPrivateFieldGet(this, _year),
        month: this.month,
        day: _classPrivateFieldGet(this, _day),
        weekDay: this.weekDay,
        hour: _classPrivateFieldGet(this, _hour),
        minute: _classPrivateFieldGet(this, _minute),
        second: _classPrivateFieldGet(this, _second),
        millisecond: _classPrivateFieldGet(this, _millisecond),
        weekOfYear: this.weekOfYear,
        dayOfYear: this.dayOfYear,
        daysLeft: this.daysLeft,
        calendar: _classPrivateFieldGet(this, _calendar).toLowerCase(),
        locale: _classPrivateFieldGet(this, _locale).toLowerCase(),
        format: _classPrivateFieldGet(this, _format) || "YYYY/MM/DD"
      };
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toObject();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var days = this.dayOfBeginning + _classPrivateFieldGet(this, _epoch)[_classPrivateFieldGet(this, _calendar)] - _classPrivateFieldGet(this, _epoch).unix,
          offset = _classPrivateFieldGet(this, _isUTC) ? 0 : new Date().getTimezoneOffset() * 60 * 1000;

      return days * 24 * 60 * 60 * 1000 + _classPrivateFieldGet(this, _hour) * 60 * 60 * 1000 + _classPrivateFieldGet(this, _minute) * 60 * 1000 + _classPrivateFieldGet(this, _second) * 1000 + this.millisecond + offset;
    }
  }, {
    key: "dayOfBeginning",
    get: function get() {
      if (!this.isValid) return;
      var year = undefined;

      if (_classPrivateFieldGet(this, _calendar) !== DateObject.calendars.INDIAN) {
        year = _classPrivateFieldGet(this, _year) > 0 ? _classPrivateFieldGet(this, _year) - 1 : _classPrivateFieldGet(this, _year);
      } else {
        year = _classPrivateFieldGet(this, _year);
      }

      var days = year * _classPrivateFieldGet(this, _yearLength)[_classPrivateFieldGet(this, _calendar)];

      var leapsLength = this.isLeap ? this.leaps.length - 1 : this.leaps.length;
      if (_classPrivateFieldGet(this, _year) > 0) days += leapsLength;
      if (_classPrivateFieldGet(this, _year) < 0) days -= leapsLength;
      days += this.dayOfYear;
      return days;
    }
  }, {
    key: "dayOfYear",
    get: function get() {
      if (!this.isValid) return;

      var days = _classPrivateFieldGet(this, _day),
          months = this.months;

      for (var i = 0; i < _classPrivateFieldGet(this, _month); i++) {
        days += months[i].length;
      }

      return days;
    }
  }, {
    key: "weekOfYear",
    get: function get() {
      if (!this.isValid) return;
      return ~~(this.dayOfYear / 7) + 1;
    }
  }, {
    key: "daysLeft",
    get: function get() {
      if (!this.isValid) return;

      var yearLength = _classPrivateFieldGet(this, _yearLength)[_classPrivateFieldGet(this, _calendar)],
          days = this.isLeap ? yearLength + 1 : yearLength;

      return days - this.dayOfYear;
    }
  }, {
    key: "year",
    get: function get() {
      return _classPrivateFieldGet(this, _year);
    },
    set: function set(value) {
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _year, value);

      _classPrivateFieldGet(this, _getLeaps).call(this);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "month",
    get: function get() {
      var month = this.months[_classPrivateFieldGet(this, _month)];

      if (!month) return {};
      month.index = _classPrivateFieldGet(this, _month);
      month.number = month.index + 1;

      month.toString = function () {
        return this.number.toString();
      };

      month.valueOf = function () {
        return this.number;
      };

      return month;
    },
    set: function set(value) {
      if (value && value.constructor === Object && value.number) value = value.number;
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _month, value - 1);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "day",
    get: function get() {
      return _classPrivateFieldGet(this, _day);
    },
    set: function set(value) {
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _day, value);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "weekDay",
    get: function get() {
      var index = (this.toJulianDay() + 2) % 7,
          weekDay = _classPrivateFieldGet(this, _weekDays)[_classPrivateFieldGet(this, _calendar)][index];

      if (!weekDay) return {};
      var names = _classPrivateFieldGet(this, _custom).weekDays ? _classPrivateFieldGet(this, _custom).weekDays[weekDay.index] : weekDay.locales[_classPrivateFieldGet(this, _locale)];
      weekDay = _objectSpread2({
        index: weekDay.index,
        number: weekDay.index + 1,
        toString: function toString() {
          return this.number.toString();
        },
        valueOf: function valueOf() {
          return this.number;
        }
      }, names);
      return weekDay;
    }
  }, {
    key: "hour",
    get: function get() {
      return _classPrivateFieldGet(this, _hour);
    },
    set: function set(value) {
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _hour, value);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "minute",
    get: function get() {
      return _classPrivateFieldGet(this, _minute);
    },
    set: function set(value) {
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _minute, value);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "second",
    get: function get() {
      return _classPrivateFieldGet(this, _second);
    },
    set: function set(value) {
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _second, value);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "millisecond",
    get: function get() {
      return _classPrivateFieldGet(this, _millisecond);
    },
    set: function set(value) {
      value = _classPrivateFieldGet(this, _toNumber).call(this, value);

      _classPrivateFieldSet(this, _millisecond, value);

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "months",
    get: function get() {
      var _this2 = this;

      var months = _classPrivateFieldGet(this, _months)[_classPrivateFieldGet(this, _calendar)];

      switch (_classPrivateFieldGet(this, _calendar)) {
        case DateObject.calendars.GREGORIAN:
          months[1].length = this.isLeap ? 29 : 28;
          break;

        case DateObject.calendars.INDIAN:
          months[0].length = this.isLeap ? 31 : 30;
          break;

        default:
          months[11].length = this.isLeap ? 30 : 29;
      }

      months = months.map(function (month, index) {
        var $month = _classPrivateFieldGet(_this2, _custom).months ? _classPrivateFieldGet(_this2, _custom).months[index] : month.locales[_classPrivateFieldGet(_this2, _locale)];
        return _objectSpread2({
          length: month.length
        }, $month);
      });
      return months;
    },
    set: function set(value) {
      if (!value) return delete _classPrivateFieldGet(this, _custom).months;
      var isValidValue = Array.isArray(value) && value.length === 12 && value.every(function (array) {
        return Array.isArray(array) && array.length === 2 && array.every(function (string) {
          return typeof string === "string";
        });
      });
      if (!isValidValue) return console.warn("Invalid Months");
      _classPrivateFieldGet(this, _custom).months = value.map(function (array) {
        return {
          name: array[0],
          shortName: array[1]
        };
      });
    }
  }, {
    key: "weekDays",
    get: function get() {
      var _this3 = this;

      var weekDays = _classPrivateFieldGet(this, _weekDays)[_classPrivateFieldGet(this, _calendar)];

      weekDays.sort(function (a, b) {
        return a.index - b.index;
      });
      weekDays = weekDays.map(function (week, index) {
        var $week = _classPrivateFieldGet(_this3, _custom).weekDays ? _classPrivateFieldGet(_this3, _custom).weekDays[index] : week.locales[_classPrivateFieldGet(_this3, _locale)];
        return _objectSpread2({
          index: week.index,
          number: week.index + 1
        }, $week);
      });
      return weekDays;
    },
    set: function set(value) {
      if (!value) return delete _classPrivateFieldGet(this, _custom).weekDays;
      var isValidValue = Array.isArray(value) && value.length === 7 && value.every(function (array) {
        return Array.isArray(array) && array.length === 2 && array.every(function (string) {
          return typeof string === "string";
        });
      });
      if (!isValidValue) return console.warn("Invalid weekDays");
      _classPrivateFieldGet(this, _custom).weekDays = value.map(function (array) {
        return {
          name: array[0],
          shortName: array[1]
        };
      });
    }
  }, {
    key: "leaps",
    get: function get() {
      return _classPrivateFieldGet(this, _leaps);
    }
  }, {
    key: "calendar",
    get: function get() {
      return _classPrivateFieldGet(this, _calendar).toLowerCase();
    },
    set: function set(calendar) {
      this.convert(calendar);
    }
  }, {
    key: "locale",
    get: function get() {
      return _classPrivateFieldGet(this, _locale).toLowerCase();
    },
    set: function set(locale) {
      locale = locale.toUpperCase();
      if (!DateObject.locales[locale]) locale = DateObject.locales.EN;

      _classPrivateFieldSet(this, _locale, locale);
    }
  }, {
    key: "meridiems",
    get: function get() {
      return _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _locale)];
    }
  }, {
    key: "digits",
    get: function get() {
      return _classPrivateFieldGet(this, _custom).digits || _classPrivateFieldGet(this, _digits)[_classPrivateFieldGet(this, _locale)];
    },
    set: function set(value) {
      if (!value) return delete _classPrivateFieldGet(this, _custom).digits;
      var isValidValue = Array.isArray(value) && value.length === 10;
      if (!isValidValue) return console.warn("Invalid digits");
      _classPrivateFieldGet(this, _custom).digits = value;
    }
  }, {
    key: "_format",
    get: function get() {
      return _classPrivateFieldGet(this, _format);
    },
    set: function set(format) {
      if (typeof format !== "string") return;

      _classPrivateFieldSet(this, _format, format);
    }
  }, {
    key: "isLeap",
    get: function get() {
      return _classPrivateFieldGet(this, _leaps).includes(_classPrivateFieldGet(this, _year));
    }
  }, {
    key: "isValid",
    get: function get() {
      return !Number.isNaN(Number(_classPrivateFieldGet(this, _year) + _classPrivateFieldGet(this, _month) + _classPrivateFieldGet(this, _day)));
    }
  }, {
    key: "isUTC",
    get: function get() {
      return _classPrivateFieldGet(this, _isUTC);
    }
  }, {
    key: "unix",
    get: function get() {
      return (this.valueOf() - this.millisecond) / 1000;
    }
  }, {
    key: "ignoreList",
    get: function get() {
      return _classPrivateFieldGet(this, _ignoreList);
    },
    set: function set(ignoreList) {
      if (Array.isArray(ignoreList)) _classPrivateFieldSet(this, _ignoreList, ignoreList);
    }
  }]);

  return DateObject;
}();

_defineProperty(DateObject, "calendars", {
  GREGORIAN: "GREGORIAN",
  PERSIAN: "PERSIAN",
  ARABIC: "ARABIC",
  INDIAN: "INDIAN"
});

_defineProperty(DateObject, "locales", {
  EN: "EN",
  FA: "FA",
  AR: "AR",
  HI: "HI"
});

module.exports = DateObject;
