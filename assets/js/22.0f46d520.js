(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{395:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"config-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-options"}},[e._v("#")]),e._v(" Config Options")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"basic-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-config"}},[e._v("#")]),e._v(" Basic Config")]),e._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[e._v("#")]),e._v(" title")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Default: (Empty string)")])]),e._v(" "),a("p",[e._v("The event title (i.e., summary). Line breaks are automatically stripped.")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Default: (Empty string)")])]),e._v(" "),a("p",[e._v("The event description. Line breaks are automatically converted to "),a("code",[e._v("\\n")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" location")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Default: (Empty string)")])]),e._v(" "),a("p",[e._v("A summary description of the event location. Line breaks are automatically stripped.")]),e._v(" "),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" start")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Date")]),a("OutboundLink")],1),e._v(", or "),a("code",[e._v("string")]),e._v(" (deprecated)")]),e._v(" "),a("li",[e._v("Required: "),a("strong",[e._v("yes")])]),e._v(" "),a("li",[e._v("Valid value: a valid "),a("code",[e._v("Date")]),e._v(" reference, or any "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 8601"),a("OutboundLink")],1),e._v(" value (deprecated).")])]),e._v(" "),a("p",[e._v("The event start timestamp. See "),a("RouterLink",{attrs:{to:"/docs/date.html"}},[e._v("date formats")]),e._v(" for more information.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Specifying dates as strings is deprecated and will be removed in version "),a("strong",[e._v("5.0.0")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[e._v("#")]),e._v(" end")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Date")]),a("OutboundLink")],1),e._v(", or "),a("code",[e._v("string")]),e._v(" (deprecated)")]),e._v(" "),a("li",[e._v("Required: "),a("strong",[e._v("yes")]),e._v(", if not an all-day event")]),e._v(" "),a("li",[e._v("Valid value: a valid "),a("code",[e._v("Date")]),e._v(" reference, or any "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 8601"),a("OutboundLink")],1),e._v(" value (deprecated).")])]),e._v(" "),a("p",[e._v("The event end timestamp. For all-day events, this field should be omitted. See "),a("RouterLink",{attrs:{to:"/docs/date.html"}},[e._v("date formats")]),e._v(" for more information.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Deprecation Notice")]),e._v(" "),a("p",[e._v("Specifying dates as strings is deprecated and will be removed in version "),a("strong",[e._v("5.0.0")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"recurrence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence"}},[e._v("#")]),e._v(" Recurrence")]),e._v(" "),a("p",[e._v("The recurrence of an event is how often the event is supposed to occur. Some examples of this could be:")]),e._v(" "),a("ul",[a("li",[e._v("an event that occurs once every Friday")]),e._v(" "),a("li",[e._v("an event that occurs every other week")]),e._v(" "),a("li",[e._v("an event that occurs daily for five days")])]),e._v(" "),a("p",[e._v("Recurrence is "),a("strong",[e._v("optional")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Deprecation Notice")]),e._v(" "),a("p",[e._v("This feature is not supported in Outlook online calendars.")])]),e._v(" "),a("h3",{attrs:{id:"recurrence-frequency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-frequency"}},[e._v("#")]),e._v(" recurrence.frequency")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Valid value: any of "),a("code",[e._v("DAILY")]),e._v(", "),a("code",[e._v("WEEKLY")]),e._v(", "),a("code",[e._v("MONTHLY")]),e._v(", of "),a("code",[e._v("YEARLY")])])]),e._v(" "),a("p",[e._v("The Julian interval of how often this event should occur. The interval (i.e., the time between recurrences) is dictated by "),a("a",{attrs:{href:"#recurrence-interval"}},[a("code",[e._v("interval")])]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"recurrence-interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-interval"}},[e._v("#")]),e._v(" recurrence.interval")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Valid value: any positive integer")])]),e._v(" "),a("p",[e._v("The amount of time that will occur between recurrences. The scale of the time depends on "),a("a",{attrs:{href:"#recurrence-frequency"}},[a("code",[e._v("frequency")])]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),a("ul",[a("li",[e._v("An event that occurs once every day: "),a("code",[e._v("{ frequency: 'DAILY', interval: 1 }")])]),e._v(" "),a("li",[e._v("An event that occurs once every second Friday: "),a("code",[e._v("{ frequency: 'WEEKLY', interval: 2 }")])]),e._v(" "),a("li",[e._v("An event that occurs once every three months: "),a("code",[e._v("{ frequency: 'MONTHLY', interval: 3 }")])])])]),e._v(" "),a("h3",{attrs:{id:"recurrence-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-count"}},[e._v("#")]),e._v(" recurrence.count")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Valid value: any positive integer")])]),e._v(" "),a("p",[e._v("The maximum number of times the event should repeat.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),a("p",[e._v("If this parameter is specified in conjunction with "),a("a",{attrs:{href:"#recurrence-end"}},[a("code",[e._v("end")])]),e._v(", the recurrence will end either when "),a("code",[e._v("count")]),e._v(" is completed, or when "),a("code",[e._v("end")]),e._v(" occurs, whichever happens first.")])]),e._v(" "),a("h3",{attrs:{id:"recurrence-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-end"}},[e._v("#")]),e._v(" recurrence.end")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Date")]),a("OutboundLink")],1),e._v(", or "),a("code",[e._v("string")]),e._v(" (deprecated)")]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Valid value: a valid "),a("code",[e._v("Date")]),e._v(" reference, or any "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO 8601"),a("OutboundLink")],1),e._v(" value (deprecated).")])]),e._v(" "),a("p",[e._v("The latest date that this event may occur on. See "),a("RouterLink",{attrs:{to:"/docs/date.html"}},[e._v("time formats")]),e._v(" for more information.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),a("ul",[a("li",[e._v("Specifying dates as strings is deprecated and will be removed in version "),a("strong",[e._v("5.0.0")]),e._v(".")]),e._v(" "),a("li",[e._v("If this parameter is specified in conjunction with "),a("a",{attrs:{href:"#recurrence-end"}},[a("code",[e._v("end")])]),e._v(", the recurrence will end either when "),a("code",[e._v("count")]),e._v(" is completed, or when "),a("code",[e._v("end")]),e._v(" occurs, whichever happens first.")])])]),e._v(" "),a("h3",{attrs:{id:"recurrence-weekdays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-weekdays"}},[e._v("#")]),e._v(" recurrence.weekdays")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string[]")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Valid value: an array containing any non-repeating strings of "),a("code",[e._v("SU")]),e._v(", "),a("code",[e._v("MO")]),e._v(", "),a("code",[e._v("TU")]),e._v(", "),a("code",[e._v("WE")]),e._v(", "),a("code",[e._v("TH")]),e._v(", "),a("code",[e._v("FR")]),e._v(" or "),a("code",[e._v("SA")]),e._v(", optionally prefixed by an integer.")])]),e._v(" "),a("p",[e._v("The days of the week that the event should occur on. The interval (i.e., the time between recurrences) is dictated by "),a("a",{attrs:{href:"#recurrence-interval"}},[a("code",[e._v("interval")])]),e._v(".")]),e._v(" "),a("p",[e._v("These days may be prefixed with a non-zero integer to represent the occurrence to fall on the "),a("code",[e._v("n")]),e._v("th day. Negative integers may be used to represent the "),a("code",[e._v("n")]),e._v("th "),a("em",[e._v("last")]),e._v(" day. Defaults to "),a("code",[e._v("1")]),e._v(" if no integer prefix is specified.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),a("ul",[a("li",[e._v("The first Sunday of the month: "),a("code",[e._v("SU")])]),e._v(" "),a("li",[e._v("The second Wednesday of the month: "),a("code",[e._v("2WE")])]),e._v(" "),a("li",[e._v("The "),a("em",[e._v("last")]),e._v(" Friday of the month: "),a("code",[e._v("-1FR")])]),e._v(" "),a("li",[e._v("The "),a("em",[e._v("second-to-last")]),e._v(" Thursday of the month: "),a("code",[e._v("-2TH")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"#recurrence-frequency"}},[a("code",[e._v("frequency")])]),e._v(" parameter must be set to "),a("code",[e._v("WEEKLY")]),e._v(" or "),a("code",[e._v("MONTHLY")]),e._v(" for "),a("code",[e._v("weekdays")]),e._v(" to take effect.")]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("MONTHLY")]),e._v(" mode, Yahoo! Calendar only supports one "),a("strong",[e._v("nonnegative")]),e._v(" weekday.")])])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Caution when specifying weekdays using Yahoo! Calendar in MONTHLY mode")]),e._v(" "),a("p",[e._v("Only the first "),a("strong",[e._v("nonnegative")]),e._v(" "),a("em",[e._v("n")]),e._v("th-day(s) prefix is taken into account, and used for the rest of the days of the week specified.")]),e._v(" "),a("p",[e._v("For example, if you pass in "),a("code",[e._v("['2FR', '1TU']")]),e._v(" (every second Friday and every first Tuesday), it would fall back to "),a("code",[e._v("['2FR', 'TU")]),e._v("]` ("),a("strong",[e._v("every second Friday")]),e._v(" "),a("em",[e._v("and")]),e._v(" "),a("strong",[e._v("every second Tuesday")]),e._v(") instead.")])]),e._v(" "),a("h3",{attrs:{id:"recurrence-monthdays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-monthdays"}},[e._v("#")]),e._v(" recurrence.monthdays")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number[]")])]),e._v(" "),a("li",[e._v("Required: no")]),e._v(" "),a("li",[e._v("Valid value: an array of any non-repeating, positive integers between "),a("code",[e._v("1")]),e._v(" and "),a("code",[e._v("31")])])]),e._v(" "),a("p",[e._v("The days of the month that the event should occur on. The interval (i.e., the time between recurrences) is dictated by "),a("a",{attrs:{href:"#recurrence-interval"}},[a("code",[e._v("interval")])]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"#recurrence-frequency"}},[a("code",[e._v("frequency")])]),e._v(" parameter must be set to "),a("code",[e._v("MONTHLY")]),e._v(" for "),a("code",[e._v("monthdays")]),e._v(" to take effect.")]),e._v(" "),a("li",[e._v("Non-existent days (e.g., February 30) will be ignored.")])])]),e._v(" "),a("h3",{attrs:{id:"recurrence-weekstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence-weekstart"}},[e._v("#")]),e._v(" recurrence.weekstart")]),e._v(" "),a("p",[e._v("The day of the week to denote when the the week starts on.")]),e._v(" "),a("h4",{attrs:{id:"example-with-end-of-month-skipping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-with-end-of-month-skipping"}},[e._v("#")]),e._v(" Example with end-of-month skipping")]),e._v(" "),a("p",[e._v("An example where the days generated makes a difference because of "),a("code",[e._v("weekstart")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  frequency"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'WEEKLY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  count"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  weekdays"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'TU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  weekstart"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'MO'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This will generate a recurrence that occurs on August 5, 10, 19, and 24.")]),e._v(" "),a("p",[e._v("However, changing "),a("code",[e._v("weekstart")]),e._v(" from "),a("code",[e._v("MO")]),e._v(" to "),a("code",[e._v("SU")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  frequency"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'WEEKLY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  count"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  weekdays"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'TU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  weekstart"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SU'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This will instead generate a recurrence that occurs on August 5, 10, 19, and 31.")]),e._v(" "),a("h4",{attrs:{id:"example-with-invalid-dates-ignored"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-with-invalid-dates-ignored"}},[e._v("#")]),e._v(" Example with invalid dates ignored")]),e._v(" "),a("p",[e._v("In the following example, the invalid date of February 30 will be ignored.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  frequency"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'MONTHLY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  count"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  monthdays"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  weekstart"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SU'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This will generate recurrences on the following dates:")]),e._v(" "),a("ul",[a("li",[e._v("January 15 and 30")]),e._v(" "),a("li",[e._v("February 15")]),e._v(" "),a("li",[e._v("March 15, 30")])])])}),[],!1,null,null,null);t.default=s.exports}}]);