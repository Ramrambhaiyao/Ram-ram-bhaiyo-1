const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "jaanbot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "all reply",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣","मेरे पिता जी का तो कोई ऐसा दोस्त भी नही जो अमरीश पुरी की तरह ये कह दे..चल इस दोस्ती को रिश्तेदारी में बदल दे !🤣😂🤣","अगर दर्द भरे गाने 🎶 सुनकर भी आपको दर्द ना हो तो समझ लो आप दोबारा प्यार ❤ करने के लिए तैयार हो चुके हो…🤣😂🤣","एक लड़की के आगे उसकी सहेली की तारीफ़ करना पेट्रोल पंप पर सिगरेट पीने के बराबर है 🤣😂🤣","मेरी जान हो तुम मेरे गुस्से की दुकान हो तुम 😜👈","दिल में न जाने कब से तेरी जगह बन गई\nतुमसे बात करना मेरी आदत बन गई 🙈👈","मेरी पसंद भी लाजवाब है यकिन नही तो खुद को देख लो 🙈👈","दुसरो के लिए भी छोड़ दो खुद अकेली ही खूबसूरती की ठेकेदार बन बैठे हो 😕👈","तुम्हारी बोली बंदुक की गोली जैसी है जो सीधा दिल पे लगती है। 😒👈","रात को सपने दिन में ख्याल\nबड़ा ही अजीब सा है इस दीवाने का हाल।😒👈","आदत नही है हमें किसी पे मर मिटने की\nपर दिल ने तुम्हें देखकर मोहलत नही दी सोचने तक की 🤐👈","दिल में फीलिंग का समंदर सा आ जाता है\nजब तुरंत तेरा रिप्लाई आ जाता है। 😎👈","मेरे रुह की पहली तलब हो तुम\nकैसे कहूं कितनी अलग हो तुम। 🙈🙈👈","मुझे बार बार ख्याल आता है\nतेरा ही चेहरा याद आता है। 🤐👈","तुझे देखकर ख्याल आता है\nएक बार नही बार बार आता है\nइस दिल को तुझ पर ही प्यार आता है। 😛👈","मुझे लाइफ में कुछ मिले ना मिले\nबस तुम मिल जाओ यही बहुत है मेरे लिए। 🙈👈","हमसे बात करने को तो बहुत से है\nहमें तो सिर्फ आपसे बात करना अच्छा लगता है। 😛👈","मेरा दिल कितना भी उदास क्यों न हो\nतेरी ही बातों से इसे सुकुन मिलता है। 🤐👈","आप मेरे लिये कुछ खास है\nयही पहले प्यार का एहसास है। 😗👈","हालत चाहे कैसे भी हो मैं तुम्हारा और तुम मेरी हो। 😛👈","जितना चाहो उतना सताया करो\nबस  टाइम टू टाइम ऑनलाइन आया करो। 🥺👈","काश तेरा घर मेरे घर के करीब होता\nमिलना ना सही तुझे देखना तो नसीब होता। 😒👈","हर पल तुम मुझे बहुत ही याद आते हो\nजान निकल जाती है जब तुम मुझसे रुठ जाते हो। 🤐👈","मुकद्दर में रात की नींद नही…तो क्या हुआ…?? हम भी मुकद्दर के सिकन्दर हैं…दोपहर को सो जाते हैं…🤣😂","लड़कियों से बहस करने का मतलब दादी को iphone चलाना सिखाना है🤣😂🤣","घर की इज्जत बेटियों के हाथ में होती है और प्रॉपर्टी के कागज़ नालायकों के हाथ में 🤣😂🤣","मेरी हर गलती ये सोच कर माफ़ कर देना दोस्तों…कि तुम कोन से शरीफ़ हो ?? 🤣😂🤣","हर कामयाब स्टूडेंट के पीछे माँ की चप्पल का हाथ होता है !! 🤣😂🤣","एक बात थी मेरे ज़हन में सोचा आज पूछ ही लूँ ये जो इज़्ज़त का सवाल होता है…वो कितने नंबरों का होता है ? 🤣😂🤣","किस्मत आजमा चुका हूं नसीब आजमा रहा हूं FACEBOOK पर एक लड़की पटाने के चक्कर में 15 लड़के पटा चुका हूँ 🤣😂🤣","खुद के पास गर्लफ्रेंड नही होगी फिर भी दुसरो को गर्लफ्रेंड पटाने के नुस्खे देते है…ऐसे हैं हमारे दोस्त 🤣😂🤣","ये पाप धोने के लिये कौन सा साबुन अच्छा रहेगा ? 🤣😂🤣","रास्ते पलट देते हैं हम जब कोई आकर यह कह दे कि आगे चालान काट रहे हैं…🤣😂🤣" , "🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बॉट बॉट ना बोल ओए जानू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बॉट बॉट करते हो___😁" , " 🌸====『 आदि बाबू तेरा baind बजा देंगे गलत आदेश मत देना________🙈😜 " , "🌸====『 अभी बोला तो दोबारा मत बोलना____🙂" , "🌸====『 बोल दे कोई नहीं देख रहा हे___ 🙄☢━💛🌹💛" , "🌸====『 हाय मैं मर जावा एके चुम्मा तो देदो काफी दिन से चुम्मी नहीं मिली_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 बोलो मेरी जान क्या हाल है आपका _____😚 " , "🌸====『 चुप रह नहीं बाहर आके तेरा दांत तोड़ दूंगा___♡• || •___'[💔]~~🖤 " , "🌸====『 हां मेरी जान चलो तारों के शहर में रोमांस करेंगे _____😹🙈", "🌸====『 तेरी याद ना आये ऐसा कोई दिन नहीं ___😝🙈🙈🙈 " , "🌸====『 जिंदगी में लगने लगे कि कोई अपना नहीं है तो आ जाना मेरे पास में रख लूंगा _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 कल हवेली मिल जरा तू कुछ कम है___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान Mat करो आदि बाबू जी देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『 बाबू तुम तो वही हो ना मेरे आदि बाबू बोस की चप्पल लेकर भाग गए चप्पल 420_________😹😹","🌸====『 चलो जानी हम सदी कर लेते हे भाग के______🙈😁", "🌸====『 हम मेरी जान बोलो क्या कम था ____"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi h kiya") || (event.body.toLowerCase() == "koi hai kiya") || (event.body.toLowerCase() == "Koi hai kya")) {
     return api.sendMessage("मैं हूं ना जानेमन 🙂🤟", threadID);
   };

    if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "call") || (event.body.toLowerCase() == "call aaja") || (event.body.toLowerCase() == "Call aao sab")) {
     return api.sendMessage("मैं कैसे कॉल आऊं मैं तो बोट हूं 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "kya rahe ho") || (event.body.toLowerCase() == "kkrh")) {
    return api.sendMessage("लूंगी डांस कर रहा हूं करना है मेरे साथ 🤨👈", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("कोई इसको लात मार के जगाओ ग्रुप में ही सो गया 🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("उफ्फ कितनी गर्मी है 🥵🥵👈", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha g") || (event.body.toLowerCase() == "oo acha ji")) {
     return api.sendMessage("हांजी बाबू 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "tamina") || (event.body.toLowerCase() == "kamine")) {
     return api.sendMessage("तू डबल कमीना 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("🥳", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo lwo") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("मुझे लूडो खेलना नही आता 🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kiya hua")) {
     return api.sendMessage("कुछ नही बाबू 😒👈", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("BOT") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `✧════•❁${name}❁•════✧\n\n


      ${rand}
      
    \n\n                       🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍आदि बाबू`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
