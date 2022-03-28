'use strict';

let getExampleData = function (key) {
	let example = {
    "delivery": [
        {
            "city_id": "3",
            "city_name": "\u0411\u0440\u043e\u0432\u0430\u0440\u0438",
            "regions": {
                "2": {
                    "region_id": "2",
                    "region_name": "\u0411\u0440\u043e\u0432\u0430\u0440\u0438",
                    "store_id": "2",
                    "store_origin_id": "2614",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 4"
                }
            }
        },
        {
            "city_id": "41",
            "city_name": "\u0411\u0443\u0447\u0430",
            "regions": {
                "49": {
                    "region_id": "49",
                    "region_name": "\u0411\u0443\u0447\u0430",
                    "store_id": "59",
                    "store_origin_id": "2917",
                    "store_address": "\u0421\u0430\u0434\u043e\u0432\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "11",
            "city_name": "\u0412\u0438\u0448\u0433\u043e\u0440\u043e\u0434",
            "regions": {
                "62": {
                    "region_id": "62",
                    "region_name": "\u0412\u0438\u0448\u0433\u043e\u0440\u043e\u0434",
                    "store_id": "22",
                    "store_origin_id": "2616",
                    "store_address": "\u042f\u0433\u0456\u0434\u043d\u0430 \u0432\u0443\u043b, 5\u0430"
                }
            }
        },
        {
            "city_id": "4",
            "city_name": "\u0412\u0438\u0448\u043d\u0435\u0432\u0435",
            "regions": {
                "3": {
                    "region_id": "3",
                    "region_name": "\u0412\u0438\u0448\u043d\u0435\u0432\u0435",
                    "store_id": "57",
                    "store_origin_id": "2662",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 2-\u041b"
                }
            }
        },
        {
            "city_id": "30",
            "city_name": "\u0413\u0430\u0442\u043d\u0435",
            "regions": {
                "53": {
                    "region_id": "53",
                    "region_name": "\u0413\u0430\u0442\u043d\u0435",
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        },
        {
            "city_id": "43",
            "city_name": "\u0413\u043e\u0440\u0435\u043d\u043a\u0430",
            "regions": {
                "51": {
                    "region_id": "51",
                    "region_name": "\u0413\u043e\u0440\u0435\u043d\u043a\u0430",
                    "store_id": "59",
                    "store_origin_id": "2917",
                    "store_address": "\u0421\u0430\u0434\u043e\u0432\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "40",
            "city_name": "\u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",
            "regions": {
                "47": {
                    "region_id": "47",
                    "region_name": "\u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",
                    "store_id": "59",
                    "store_origin_id": "2917",
                    "store_address": "\u0421\u0430\u0434\u043e\u0432\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "5",
            "city_name": "\u0406\u0440\u043f\u0456\u043d\u044c",
            "regions": {
                "4": {
                    "region_id": "4",
                    "region_name": "\u0406\u0440\u043f\u0456\u043d\u044c",
                    "store_id": "4",
                    "store_origin_id": "2475",
                    "store_address": "\u0413.\u0421\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0438 \u0432\u0443\u043b, 11"
                }
            }
        },
        {
            "city_id": "1",
            "city_name": "\u041a\u0438\u0457\u0432",
            "regions": {
                "8": {
                    "region_id": "8",
                    "region_name": "\u0410\u043a\u0430\u0434\u0435\u043c\u043c\u0456\u0441\u0442\u0435\u0447\u043a\u043e",
                    "store_id": "7",
                    "store_origin_id": "555",
                    "store_address": "\u0432\u0443\u043b. \u0410\u043a. \u0414\u043e\u0431\u0440\u043e\u0445\u043e\u0442\u043e\u0432\u0430 11\u0410"
                },
                "30": {
                    "region_id": "30",
                    "region_name": "\u0411\u0435\u0440\u0435\u0437\u043d\u044f\u043a\u0438",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "10": {
                    "region_id": "10",
                    "region_name": "\u0411\u0435\u0440\u043a\u043e\u0432\u0446\u0456",
                    "store_id": "7",
                    "store_origin_id": "555",
                    "store_address": "\u0432\u0443\u043b. \u0410\u043a. \u0414\u043e\u0431\u0440\u043e\u0445\u043e\u0442\u043e\u0432\u0430 11\u0410"
                },
                "46": {
                    "region_id": "46",
                    "region_name": "\u0411\u043e\u0440\u0438\u0441\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430",
                    "store_id": "58",
                    "store_origin_id": "2657",
                    "store_address": "\u041a\u0438\u0440\u0438\u043b\u0430 \u041e\u0441\u044c\u043c\u0430\u043a\u0430 \u0432\u0443\u043b, 1\u0411"
                },
                "44": {
                    "region_id": "44",
                    "region_name": "\u0411\u043e\u0440\u0442\u043d\u0438\u0447\u0456",
                    "store_id": "58",
                    "store_origin_id": "2657",
                    "store_address": "\u041a\u0438\u0440\u0438\u043b\u0430 \u041e\u0441\u044c\u043c\u0430\u043a\u0430 \u0432\u0443\u043b, 1\u0411"
                },
                "40": {
                    "region_id": "40",
                    "region_name": "\u0412\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u0430\u0440",
                    "store_id": "15",
                    "store_origin_id": "310",
                    "store_address": "\u0432\u0443\u043b. \u041f\u0456\u0432\u043d\u0456\u0447\u043d\u0430 46"
                },
                "20": {
                    "region_id": "20",
                    "region_name": "\u0412\u0456\u0434\u0440\u0430\u0434\u043d\u0438\u0439",
                    "store_id": "9",
                    "store_origin_id": "2613",
                    "store_address": "\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 9\u0431"
                },
                "35": {
                    "region_id": "35",
                    "region_name": "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u043a\u0430",
                    "store_id": "12",
                    "store_origin_id": "1321",
                    "store_address": "\u0432\u0443\u043b. \u041c\u0438\u0440\u043e\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430 11"
                },
                "11": {
                    "region_id": "11",
                    "region_name": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u043e",
                    "store_id": "8",
                    "store_origin_id": "148",
                    "store_address": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u043f\u0440-\u0442, 104"
                },
                "28": {
                    "region_id": "28",
                    "region_name": "\u0414\u0430\u0440\u043d\u0438\u0446\u044f",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "16": {
                    "region_id": "16",
                    "region_name": "\u0414\u0435\u043c\u0456\u0457\u0432\u043a\u0430",
                    "store_id": "8",
                    "store_origin_id": "148",
                    "store_address": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u043f\u0440-\u0442, 104"
                },
                "21": {
                    "region_id": "21",
                    "region_name": "\u0414\u043e\u0440\u043e\u0433\u043e\u0436\u0438\u0447\u0456",
                    "store_id": "10",
                    "store_origin_id": "189",
                    "store_address": "\u0432\u0443\u043b. \u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u044c\u043a\u0430 6\u0410"
                },
                "14": {
                    "region_id": "14",
                    "region_name": "\u0416\u0443\u043b\u044f\u043d\u0438",
                    "store_id": "8",
                    "store_origin_id": "148",
                    "store_address": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u043f\u0440-\u0442, 104"
                },
                "12": {
                    "region_id": "12",
                    "region_name": "\u0406\u043f\u043e\u0434\u0440\u043e\u043c",
                    "store_id": "8",
                    "store_origin_id": "148",
                    "store_address": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u043f\u0440-\u0442, 104"
                },
                "18": {
                    "region_id": "18",
                    "region_name": "\u041a\u0430\u0440\u0430\u0432\u0430\u0454\u0432\u0456 \u0434\u0430\u0447\u0456",
                    "store_id": "9",
                    "store_origin_id": "2613",
                    "store_address": "\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 9\u0431"
                },
                "37": {
                    "region_id": "37",
                    "region_name": "\u041a\u0438\u0442\u0430\u0457\u0432",
                    "store_id": "26",
                    "store_origin_id": "2512",
                    "store_address": "\u0426\u0456\u043b\u0438\u043d\u043d\u0430 \u0432\u0443\u043b, 2\u0410"
                },
                "38": {
                    "region_id": "38",
                    "region_name": "\u041a\u043e\u0440\u0447\u0443\u0432\u0430\u0442\u0435",
                    "store_id": "26",
                    "store_origin_id": "2512",
                    "store_address": "\u0426\u0456\u043b\u0438\u043d\u043d\u0430 \u0432\u0443\u043b, 2\u0410"
                },
                "42": {
                    "region_id": "42",
                    "region_name": "\u041b\u0438\u043f\u043a\u0438",
                    "store_id": "18",
                    "store_origin_id": "613",
                    "store_address": "\u0432\u0443\u043b. \u0412.\u0412\u0430\u0441\u0438\u043b\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u0430 143\\/2"
                },
                "33": {
                    "region_id": "33",
                    "region_name": "\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u0438\u0439 \u043c\u0430\u0441\u0438\u0432",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "34": {
                    "region_id": "34",
                    "region_name": "\u041b\u0456\u0441\u043e\u0432\u0438\u0439",
                    "store_id": "12",
                    "store_origin_id": "1321",
                    "store_address": "\u0432\u0443\u043b. \u041c\u0438\u0440\u043e\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430 11"
                },
                "23": {
                    "region_id": "23",
                    "region_name": "\u041b\u0443\u043a'\u044f\u043d\u0456\u0432\u043a\u0430",
                    "store_id": "10",
                    "store_origin_id": "189",
                    "store_address": "\u0432\u0443\u043b. \u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u044c\u043a\u0430 6\u0410"
                },
                "41": {
                    "region_id": "41",
                    "region_name": "\u041c\u0456\u043d\u0441\u044c\u043a\u0438\u0439 \u043c\u0430\u0441\u0438\u0432",
                    "store_id": "15",
                    "store_origin_id": "310",
                    "store_address": "\u0432\u0443\u043b. \u041f\u0456\u0432\u043d\u0456\u0447\u043d\u0430 46"
                },
                "22": {
                    "region_id": "22",
                    "region_name": "\u041d\u0438\u0432\u043a\u0438",
                    "store_id": "10",
                    "store_origin_id": "189",
                    "store_address": "\u0432\u0443\u043b. \u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u044c\u043a\u0430 6\u0410"
                },
                "9": {
                    "region_id": "9",
                    "region_name": "\u041d\u043e\u0432\u043e\u0431\u0435\u043b\u0438\u0447\u0456",
                    "store_id": "7",
                    "store_origin_id": "555",
                    "store_address": "\u0432\u0443\u043b. \u0410\u043a. \u0414\u043e\u0431\u0440\u043e\u0445\u043e\u0442\u043e\u0432\u0430 11\u0410"
                },
                "39": {
                    "region_id": "39",
                    "region_name": "\u041e\u0431\u043e\u043b\u043e\u043d\u044c",
                    "store_id": "15",
                    "store_origin_id": "310",
                    "store_address": "\u0432\u0443\u043b. \u041f\u0456\u0432\u043d\u0456\u0447\u043d\u0430 46"
                },
                "29": {
                    "region_id": "29",
                    "region_name": "\u041e\u0441\u043e\u043a\u043e\u0440\u043a\u0438",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "43": {
                    "region_id": "43",
                    "region_name": "\u041f\u0435\u0447\u0435\u0440\u0441\u044c\u043a",
                    "store_id": "18",
                    "store_origin_id": "613",
                    "store_address": "\u0432\u0443\u043b. \u0412.\u0412\u0430\u0441\u0438\u043b\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u0430 143\\/2"
                },
                "27": {
                    "region_id": "27",
                    "region_name": "\u041f\u043e\u0437\u043d\u044f\u043a\u0438",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "19": {
                    "region_id": "19",
                    "region_name": "\u041f\u0440\u043e\u0442\u0430\u0441\u0456\u0432 \u042f\u0440",
                    "store_id": "9",
                    "store_origin_id": "2613",
                    "store_address": "\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 9\u0431"
                },
                "31": {
                    "region_id": "31",
                    "region_name": "\u0420\u0443\u0441\u0430\u043d\u0456\u0432\u043a\u0430",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "7": {
                    "region_id": "7",
                    "region_name": "\u0421\u0432\u044f\u0442\u043e\u0448\u0438\u043d\u043e",
                    "store_id": "7",
                    "store_origin_id": "555",
                    "store_address": "\u0432\u0443\u043b. \u0410\u043a. \u0414\u043e\u0431\u0440\u043e\u0445\u043e\u0442\u043e\u0432\u0430 11\u0410"
                },
                "25": {
                    "region_id": "25",
                    "region_name": "\u0421\u0438\u0440\u0435\u0446\u044c",
                    "store_id": "10",
                    "store_origin_id": "189",
                    "store_address": "\u0432\u0443\u043b. \u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u044c\u043a\u0430 6\u0410"
                },
                "15": {
                    "region_id": "15",
                    "region_name": "\u0421\u043e\u0432\u043a\u0438",
                    "store_id": "8",
                    "store_origin_id": "148",
                    "store_address": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u043f\u0440-\u0442, 104"
                },
                "13": {
                    "region_id": "13",
                    "region_name": "\u0422\u0435\u0440\u0435\u043c\u043a\u0438",
                    "store_id": "8",
                    "store_origin_id": "148",
                    "store_address": "\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u043f\u0440-\u0442, 104"
                },
                "36": {
                    "region_id": "36",
                    "region_name": "\u0422\u0440\u043e\u0454\u0449\u0438\u043d\u0430",
                    "store_id": "13",
                    "store_origin_id": "320",
                    "store_address": "\u0432\u0443\u043b. \u0414\u0440\u0430\u0439\u0437\u0435\u0440\u0430 24"
                },
                "32": {
                    "region_id": "32",
                    "region_name": "\u0425\u0430\u0440\u043a\u0456\u0432\u0441\u044c\u043a\u0438\u0439 \u043c\u0430\u0441\u0438\u0432",
                    "store_id": "11",
                    "store_origin_id": "1894",
                    "store_address": "\u0422\u0438\u0447\u0438\u043d\u0438 \u0432\u0443\u043b, 15 \u0410"
                },
                "45": {
                    "region_id": "45",
                    "region_name": "\u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u0445\u0443\u0442\u0456\u0440",
                    "store_id": "58",
                    "store_origin_id": "2657",
                    "store_address": "\u041a\u0438\u0440\u0438\u043b\u0430 \u041e\u0441\u044c\u043c\u0430\u043a\u0430 \u0432\u0443\u043b, 1\u0411"
                },
                "17": {
                    "region_id": "17",
                    "region_name": "\u0427\u043e\u043a\u043e\u043b\u043e\u0432\u043a\u0430",
                    "store_id": "9",
                    "store_origin_id": "2613",
                    "store_address": "\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 9\u0431"
                },
                "26": {
                    "region_id": "26",
                    "region_name": "\u0428\u0435\u0432\u0447\u0435\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0438\u0439",
                    "store_id": "10",
                    "store_origin_id": "189",
                    "store_address": "\u0432\u0443\u043b. \u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u044c\u043a\u0430 6\u0410"
                },
                "24": {
                    "region_id": "24",
                    "region_name": "\u0428\u0443\u043b\u044f\u0432\u043a\u0430",
                    "store_id": "10",
                    "store_origin_id": "189",
                    "store_address": "\u0432\u0443\u043b. \u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u044c\u043a\u0430 6\u0410"
                }
            }
        },
        {
            "city_id": "34",
            "city_name": "\u041a\u043e\u0437\u0438\u043d",
            "regions": {
                "60": {
                    "region_id": "60",
                    "region_name": "\u041a\u043e\u0437\u0438\u043d",
                    "store_id": "56",
                    "store_origin_id": "2316",
                    "store_address": "\u041e\u0431\u0443\u0445\u0456\u0432\u0441\u044c\u043a\u0435 \u0448\u043e\u0441\u0435, 39"
                }
            }
        },
        {
            "city_id": "13",
            "city_name": "\u041a\u0440\u044e\u043a\u0456\u0432\u0449\u0438\u043d\u0430",
            "regions": {
                "48": {
                    "region_id": "48",
                    "region_name": "\u041a\u0440\u044e\u043a\u0456\u0432\u0449\u0438\u043d\u0430",
                    "store_id": "57",
                    "store_origin_id": "2662",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 2-\u041b"
                }
            }
        },
        {
            "city_id": "36",
            "city_name": "\u041b\u0456\u0441\u043d\u0438\u043a\u0438",
            "regions": {
                "61": {
                    "region_id": "61",
                    "region_name": "\u041b\u0456\u0441\u043d\u0438\u043a\u0438",
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        },
        {
            "city_id": "49",
            "city_name": "\u041d\u043e\u0432\u0456 \u041f\u0435\u0442\u0440\u0456\u0432\u0446\u0456",
            "regions": {
                "59": {
                    "region_id": "59",
                    "region_name": "\u041d\u043e\u0432\u0456 \u041f\u0435\u0442\u0440\u0456\u0432\u0446\u0456",
                    "store_id": "22",
                    "store_origin_id": "2616",
                    "store_address": "\u042f\u0433\u0456\u0434\u043d\u0430 \u0432\u0443\u043b, 5\u0430"
                }
            }
        },
        {
            "city_id": "44",
            "city_name": "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u043a\u0438",
            "regions": {
                "52": {
                    "region_id": "52",
                    "region_name": "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u043a\u0438",
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        },
        {
            "city_id": "48",
            "city_name": "\u041e\u0441\u0435\u0449\u0438\u043d\u0430",
            "regions": {
                "58": {
                    "region_id": "58",
                    "region_name": "\u041e\u0441\u0435\u0449\u0438\u043d\u0430",
                    "store_id": "22",
                    "store_origin_id": "2616",
                    "store_address": "\u042f\u0433\u0456\u0434\u043d\u0430 \u0432\u0443\u043b, 5\u0430"
                }
            }
        },
        {
            "city_id": "6",
            "city_name": "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u0456\u0432\u0441\u044c\u043a\u0430 \u0411\u043e\u0440\u0449\u0430\u0433\u0456\u0432\u043a\u0430",
            "regions": {
                "5": {
                    "region_id": "5",
                    "region_name": "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u0456\u0432\u0441\u044c\u043a\u0430 \u0411\u043e\u0440\u0449\u0430\u0433\u0456\u0432\u043a\u0430",
                    "store_id": "5",
                    "store_origin_id": "2364",
                    "store_address": "\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 1\u0410"
                }
            }
        },
        {
            "city_id": "42",
            "city_name": "\u041f\u0443\u0449\u0430-\u0412\u043e\u0434\u0438\u0446\u044f",
            "regions": {
                "50": {
                    "region_id": "50",
                    "region_name": "\u041f\u0443\u0449\u0430-\u0412\u043e\u0434\u0438\u0446\u044f",
                    "store_id": "59",
                    "store_origin_id": "2917",
                    "store_address": "\u0421\u0430\u0434\u043e\u0432\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "7",
            "city_name": "\u0421\u043e\u0444\u0456\u0457\u0432\u0441\u044c\u043a\u0430 \u0411\u043e\u0440\u0449\u0430\u0433\u0456\u0432\u043a\u0430",
            "regions": {
                "6": {
                    "region_id": "6",
                    "region_name": "\u0421\u043e\u0444\u0456\u0457\u0432\u0441\u044c\u043a\u0430 \u0411\u043e\u0440\u0449\u0430\u0433\u0456\u0432\u043a\u0430",
                    "store_id": "6",
                    "store_origin_id": "2344",
                    "store_address": "\u0421\u0430\u0433\u0430\u0439\u0434\u0430\u0447\u043d\u043e\u0433\u043e \u0432\u0443\u043b,20\u0410"
                }
            }
        },
        {
            "city_id": "46",
            "city_name": "\u0425\u043e\u0434\u043e\u0441\u0456\u0432\u043a\u0430",
            "regions": {
                "56": {
                    "region_id": "56",
                    "region_name": "\u0425\u043e\u0434\u043e\u0441\u0456\u0432\u043a\u0430",
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        },
        {
            "city_id": "26",
            "city_name": "\u0425\u043e\u0442\u0456\u0432",
            "regions": {
                "54": {
                    "region_id": "54",
                    "region_name": "\u0425\u043e\u0442\u0456\u0432",
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        },
        {
            "city_id": "18",
            "city_name": "\u0425\u043e\u0442\u044f\u043d\u0456\u0432\u043a\u0430",
            "regions": {
                "57": {
                    "region_id": "57",
                    "region_name": "\u0425\u043e\u0442\u044f\u043d\u0456\u0432\u043a\u0430",
                    "store_id": "22",
                    "store_origin_id": "2616",
                    "store_address": "\u042f\u0433\u0456\u0434\u043d\u0430 \u0432\u0443\u043b, 5\u0430"
                }
            }
        },
        {
            "city_id": "45",
            "city_name": "\u0427\u0430\u0431\u0430\u043d\u0438",
            "regions": {
                "55": {
                    "region_id": "55",
                    "region_name": "\u0427\u0430\u0431\u0430\u043d\u0438",
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        }
    ],
    "pickup": [
        {
            "city_id": "23",
            "city_name": "\u0411\u0435\u0440\u0435\u0437\u0430\u043d\u044c",
            "stores": {
                "39": {
                    "store_id": "39",
                    "store_origin_id": "1868",
                    "store_address": "\u0428\u0435\u0432\u0447\u0435\u043d\u043a\u0456\u0432 \u0428\u043b\u044f\u0445 \u0432\u0443\u043b, 140\u0410"
                }
            }
        },
        {
            "city_id": "9",
            "city_name": "\u0411\u0456\u043b\u043e\u0433\u043e\u0440\u043e\u0434\u043a\u0430",
            "stores": {
                "20": {
                    "store_id": "20",
                    "store_origin_id": "2510",
                    "store_address": "\u0412\u043e\u043b\u043e\u0434\u0438\u043c\u0438\u0440\u0441\u044c\u043a\u0430 \u0432\u0443\u043b 35\\/1"
                }
            }
        },
        {
            "city_id": "2",
            "city_name": "\u0411\u043e\u0440\u0438\u0441\u043f\u0456\u043b\u044c",
            "stores": {
                "31": {
                    "store_id": "31",
                    "store_origin_id": "1689",
                    "store_address": "\u0432\u0443\u043b. \u041c\u043e\u043c\u043e\u0442\u0430 42\\/5"
                },
                "1": {
                    "store_id": "1",
                    "store_origin_id": "2379",
                    "store_address": "\u0413\u043e\u043b\u043e\u0432\u0430\u0442\u043e\u0433\u043e \u0432\u0443\u043b, 30"
                },
                "28": {
                    "store_id": "28",
                    "store_origin_id": "2738",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0438\u0439 \u0448\u043b\u044f\u0445, 60"
                }
            }
        },
        {
            "city_id": "3",
            "city_name": "\u0411\u0440\u043e\u0432\u0430\u0440\u0438",
            "stores": {
                "32": {
                    "store_id": "32",
                    "store_origin_id": "2614",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 4"
                }
            }
        },
        {
            "city_id": "11",
            "city_name": "\u0412\u0438\u0448\u0433\u043e\u0440\u043e\u0434",
            "stores": {
                "22": {
                    "store_id": "22",
                    "store_origin_id": "2616",
                    "store_address": "\u042f\u0433\u0456\u0434\u043d\u0430 \u0432\u0443\u043b, 5\u0430"
                }
            }
        },
        {
            "city_id": "37",
            "city_name": "\u0412\u0456\u0442\u0430-\u041f\u043e\u0448\u0442\u043e\u0432\u0430",
            "stores": {
                "53": {
                    "store_id": "53",
                    "store_origin_id": "2547",
                    "store_address": "\u0411\u043e\u044f\u0440\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 4\u0411"
                }
            }
        },
        {
            "city_id": "15",
            "city_name": "\u0412\u043e\u0440\u0437\u0435\u043b\u044c",
            "stores": {
                "27": {
                    "store_id": "27",
                    "store_origin_id": "2511",
                    "store_address": "\u041a\u0443\u0440\u043e\u0440\u0442\u043d\u0430 \u0432\u0443\u043b, 60\u0410"
                }
            }
        },
        {
            "city_id": "39",
            "city_name": "\u0412\u043e\u0440\u043e\u043d\u044c\u043a\u0456\u0432",
            "stores": {
                "55": {
                    "store_id": "55",
                    "store_origin_id": "2394",
                    "store_address": "\u0412\u0438\u0448\u043d\u0435\u0432\u0430 \u0432\u0443\u043b, 18"
                }
            }
        },
        {
            "city_id": "30",
            "city_name": "\u0413\u0430\u0442\u043d\u0435",
            "stores": {
                "46": {
                    "store_id": "46",
                    "store_origin_id": "2472",
                    "store_address": "\u0406\u043d\u0441\u0442\u0438\u0442\u0443\u0442\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 16"
                }
            }
        },
        {
            "city_id": "14",
            "city_name": "\u0413\u043b\u0435\u0432\u0430\u0445\u0430",
            "stores": {
                "25": {
                    "store_id": "25",
                    "store_origin_id": "2378",
                    "store_address": "\u0413\u0440\u0443\u0448\u0435\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0432\u0443\u043b, 42"
                }
            }
        },
        {
            "city_id": "28",
            "city_name": "\u0413\u043d\u0456\u0434\u0438\u043d",
            "stores": {
                "44": {
                    "store_id": "44",
                    "store_origin_id": "1780",
                    "store_address": "\u0432\u0443\u043b. \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430 23\u0410"
                }
            }
        },
        {
            "city_id": "21",
            "city_name": "\u0413\u043e\u0440\u0430",
            "stores": {
                "37": {
                    "store_id": "37",
                    "store_origin_id": "1862",
                    "store_address": "\u041a\u0430\u043b\u0438\u043d\u043e\u0432\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "35",
            "city_name": "\u0413\u043e\u0440\u0435\u043d\u0438\u0447\u0456",
            "stores": {
                "51": {
                    "store_id": "51",
                    "store_origin_id": "2681",
                    "store_address": "\u0421\u0442\u043e\u043b\u0438\u0447\u043d\u0430 \u0432\u0443\u043b"
                }
            }
        },
        {
            "city_id": "40",
            "city_name": "\u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",
            "stores": {
                "59": {
                    "store_id": "59",
                    "store_origin_id": "2917",
                    "store_address": "\u0421\u0430\u0434\u043e\u0432\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "24",
            "city_name": "\u0413\u0440\u0435\u0431\u0456\u043d\u043a\u0438",
            "stores": {
                "40": {
                    "store_id": "40",
                    "store_origin_id": "2329",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 99"
                }
            }
        },
        {
            "city_id": "19",
            "city_name": "\u0414\u0438\u043c\u0435\u0440",
            "stores": {
                "35": {
                    "store_id": "35",
                    "store_origin_id": "999",
                    "store_address": "\u0432\u0443\u043b. \u0411\u0443\u0434\u0430\u0440\u0456\u043d\u0430 5"
                }
            }
        },
        {
            "city_id": "25",
            "city_name": "\u0417\u0430\u0437\u0456\u043c'\u0454",
            "stores": {
                "41": {
                    "store_id": "41",
                    "store_origin_id": "1886",
                    "store_address": "\u0432\u0443\u043b. \u041b\u0456\u0441\u043e\u0432\u0430 55"
                }
            }
        },
        {
            "city_id": "20",
            "city_name": "\u0406\u0432\u0430\u043d\u043a\u0456\u0432",
            "stores": {
                "36": {
                    "store_id": "36",
                    "store_origin_id": "2790",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 32"
                }
            }
        },
        {
            "city_id": "5",
            "city_name": "\u0406\u0440\u043f\u0456\u043d\u044c",
            "stores": {
                "30": {
                    "store_id": "30",
                    "store_origin_id": "1929",
                    "store_address": "\u0421\u043e\u0431\u043e\u0440\u043d\u0430 \u0432\u0443\u043b, 160\u0411"
                }
            }
        },
        {
            "city_id": "38",
            "city_name": "\u041a\u0430\u0442\u044e\u0436\u0430\u043d\u043a\u0430",
            "stores": {
                "54": {
                    "store_id": "54",
                    "store_origin_id": "2797",
                    "store_address": "\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430 \u0432\u0443\u043b"
                }
            }
        },
        {
            "city_id": "1",
            "city_name": "\u041a\u0438\u0457\u0432",
            "stores": {
                "26": {
                    "store_id": "26",
                    "store_origin_id": "2512",
                    "store_address": "\u0426\u0456\u043b\u0438\u043d\u043d\u0430 \u0432\u0443\u043b, 2\u0410"
                }
            }
        },
        {
            "city_id": "34",
            "city_name": "\u041a\u043e\u0437\u0438\u043d",
            "stores": {
                "50": {
                    "store_id": "50",
                    "store_origin_id": "1691",
                    "store_address": "\u0432\u0443\u043b. \u0421\u043e\u043b\u043e\u0432\`\u044f\u043d\u0435\u043d\u043a\u0430 60"
                },
                "56": {
                    "store_id": "56",
                    "store_origin_id": "2316",
                    "store_address": "\u041e\u0431\u0443\u0445\u0456\u0432\u0441\u044c\u043a\u0435 \u0448\u043e\u0441\u0435, 39"
                }
            }
        },
        {
            "city_id": "13",
            "city_name": "\u041a\u0440\u044e\u043a\u0456\u0432\u0449\u0438\u043d\u0430",
            "stores": {
                "24": {
                    "store_id": "24",
                    "store_origin_id": "2680",
                    "store_address": "\u041e\u0434\u0435\u0441\u044c\u043a\u0430 \u0432\u0443\u043b"
                }
            }
        },
        {
            "city_id": "36",
            "city_name": "\u041b\u0456\u0441\u043d\u0438\u043a\u0438",
            "stores": {
                "52": {
                    "store_id": "52",
                    "store_origin_id": "2785",
                    "store_address": "\u0432\u0443\u043b. \u0412\u0430\u0442\u0443\u0442\u0456\u043d\u0430 164"
                }
            }
        },
        {
            "city_id": "10",
            "city_name": "\u041b\u044e\u0442\u0456\u0436",
            "stores": {
                "21": {
                    "store_id": "21",
                    "store_origin_id": "2473",
                    "store_address": "\u0412\u0438\u0437\u0432\u043e\u043b\u0438\u0442\u0435\u043b\u0456\u0432 \u0432\u0443\u043b, 56\u0410"
                }
            }
        },
        {
            "city_id": "12",
            "city_name": "\u041c\u0430\u043a\u0430\u0440\u0456\u0432",
            "stores": {
                "23": {
                    "store_id": "23",
                    "store_origin_id": "2705",
                    "store_address": "\u0414.\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0432\u0443\u043b. 1"
                }
            }
        },
        {
            "city_id": "16",
            "city_name": "\u041c\u0438\u043b\u0430",
            "stores": {
                "29": {
                    "store_id": "29",
                    "store_origin_id": "2330",
                    "store_address": "\u041a\u043e\u043c\u0430\u0440\u043e\u0432\u0430 \u0443\u043b, 44\u0412"
                }
            }
        },
        {
            "city_id": "32",
            "city_name": "\u041c\u043b\u0438\u043d\u043e\u0432\u043e",
            "stores": {
                "48": {
                    "store_id": "48",
                    "store_origin_id": "2709",
                    "store_address": "\u0432\u0443\u043b. \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0456\u0432\u0441\u044c\u043a\u0430 56"
                }
            }
        },
        {
            "city_id": "6",
            "city_name": "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u0456\u0432\u0441\u044c\u043a\u0430 \u0411\u043e\u0440\u0449\u0430\u0433\u0456\u0432\u043a\u0430",
            "stores": {
                "60": {
                    "store_id": "60",
                    "store_origin_id": "2890",
                    "store_address": "\u0421\u043e\u0431\u043e\u0440\u043d\u0430 \u0432\u0443\u043b, 16A"
                }
            }
        },
        {
            "city_id": "22",
            "city_name": "\u041f\u0456\u0441\u043a\u0456\u0432\u043a\u0430",
            "stores": {
                "38": {
                    "store_id": "38",
                    "store_origin_id": "2717",
                    "store_address": "\u0432\u0443\u043b. \u0424\u0456\u043b\u0456\u043f\u043e\u0432\u0430 16\u0411"
                }
            }
        },
        {
            "city_id": "17",
            "city_name": "\u041f\u043e\u0433\u0440\u0435\u0431\u0438",
            "stores": {
                "33": {
                    "store_id": "33",
                    "store_origin_id": "2359",
                    "store_address": "\u0421\u043e\u0431\u043e\u0440\u043d\u0430 \u0432\u0443\u043b, 2"
                }
            }
        },
        {
            "city_id": "29",
            "city_name": "\u0421\u0442\u0430\u0432\u0438\u0449\u0435",
            "stores": {
                "45": {
                    "store_id": "45",
                    "store_origin_id": "1887",
                    "store_address": "\u0432\u0443\u043b. \u041f\u0430\u0440\u043a\u043e\u0432\u0430 4"
                }
            }
        },
        {
            "city_id": "27",
            "city_name": "\u0422\u0430\u0440\u0430\u0449\u0430",
            "stores": {
                "43": {
                    "store_id": "43",
                    "store_origin_id": "1846",
                    "store_address": "\u0432\u0443\u043b. \u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u043e\u0433\u043e 6"
                }
            }
        },
        {
            "city_id": "26",
            "city_name": "\u0425\u043e\u0442\u0456\u0432",
            "stores": {
                "42": {
                    "store_id": "42",
                    "store_origin_id": "2805",
                    "store_address": "\u0432\u0443\u043b. \u0428\u0435\u0432\u0447\u0435\u043d\u043a\u043e"
                }
            }
        },
        {
            "city_id": "18",
            "city_name": "\u0425\u043e\u0442\u044f\u043d\u0456\u0432\u043a\u0430",
            "stores": {
                "34": {
                    "store_id": "34",
                    "store_origin_id": "2474",
                    "store_address": "\u0412\u0430\u043b\u043e\u0432\u0430 \u0432\u0443\u043b, 2\u0412"
                }
            }
        },
        {
            "city_id": "31",
            "city_name": "\u0427\u0443\u0431\u0438\u043d\u0441\u044c\u043a\u0435",
            "stores": {
                "47": {
                    "store_id": "47",
                    "store_origin_id": "2721",
                    "store_address": "\u0411\u043e\u0440\u0438\u0441\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430 \u0432\u0443\u043b, 8"
                }
            }
        },
        {
            "city_id": "8",
            "city_name": "\u0429\u0430\u0441\u043b\u0438\u0432\u0435",
            "stores": {
                "19": {
                    "store_id": "19",
                    "store_origin_id": "2315",
                    "store_address": "\u0425\u0430\u0440\u043a\u0456\u0432\u0441\u044c\u043a\u0435 \u0448\u043e\u0441\u0435, 15"
                }
            }
        },
        {
            "city_id": "33",
            "city_name": "\u042f\u0433\u043e\u0442\u0438\u043d",
            "stores": {
                "49": {
                    "store_id": "49",
                    "store_origin_id": "1665",
                    "store_address": "\u0432\u0443\u043b. \u041d\u0435\u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456 130"
                }
            }
        }
    ]
  };
	return example[key];
};