// pages/api/hello.js
// export default (req, res) => {
//   res.json({ message: '"{\"data\":[{\"fcmToken\":\"d6oo7uBfIHlJvQktBLpF31:APA91bEi5-swxuQ1DiM96yU87TG8Gr1QPhjJkrEM_o-s6PPf7N7kuVL-sO8TVrjvascNYuAnpe9WEePe-TcOd6sfCWpTdSCSLCuaZHV1WvfoD0yb9i5UY0AWv7VwdCFM7_ej40Yv9BRh\",\"phoneNo\":\"9783246247\",\"name\":\"Pankaj\",\"fcmClickActionUrl\":\"nipunlakshya://chatbot\",\"url\":\"http://google.com\"}]}"' });
// };

// export default (req, res) => {
//     const jsonStr = '{"data":[{"fcmToken":"d6oo7uBfIHlJvQktBLpF31:APA91bEi5-swxuQ1DiM96yU87TG8Gr1QPhjJkrEM_o-s6PPf7N7kuVL-sO8TVrjvascNYuAnpe9WEePe-TcOd6sfCWpTdSCSLCuaZHV1WvfoD0yb9i5UY0AWv7VwdCFM7_ej40Yv9BRh","phoneNo":"9783246247","name":"Pankaj","fcmClickActionUrl":"nipunlakshya://chatbot","url":"http://google.com"}]}';
//     const jsonData = JSON.parse(jsonStr);
//     res.json(jsonData);
// };

function hello(req, res){
    console.log(req.url);
    const entry = {
        "fcmToken": "d6oo7uBfIHlJvQktBLpF31:APA91bEi5-swxuQ1DiM96yU87TG8Gr1QPhjJkrEM_o-s6PPf7N7kuVL-sO8TVrjvascNYuAnpe9WEePe-TcOd6sfCWpTdSCSLCuaZHV1WvfoD0yb9i5UY0AWv7VwdCFM7_ej40Yv9BRh",
        "phoneNo": "9783246247",
        "name": "Pankaj",
        "fcmClickActionUrl": "nipunlakshya://chatbot",
        "url": "http://google.com"
    };

    const data = Array(10).fill(entry);

    res.json({ data });
}

function count(req, res){
    console.log(req.url);
    const entry = {
        "fcmToken": "d6oo7uBfIHlJvQktBLpF31:APA91bEi5-swxuQ1DiM96yU87TG8Gr1QPhjJkrEM_o-s6PPf7N7kuVL-sO8TVrjvascNYuAnpe9WEePe-TcOd6sfCWpTdSCSLCuaZHV1WvfoD0yb9i5UY0AWv7VwdCFM7_ej40Yv9BRh",
        "phoneNo": "9783246247",
        "name": "Pankaj",
        "fcmClickActionUrl": "nipunlakshya://chatbot",
        "url": "http://google.com"
    };

    const data = Array(10).fill(entry);

    res.json({ data });
}

export default hello