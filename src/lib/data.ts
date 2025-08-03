export type Article = {
  id: string;
  category: string;
  headline: string;
  summary: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  authorImage?: string;
  date: string;
};

export const dummyArticles: Article[] = [
  {
    id: "1",
    category: "राजनीति",
    headline: "व्हाइट हाउस के पास आईवीएफ देखभाल को अनिवार्य करने की कोई योजना नहीं, अभियान प्रतिज्ञा के बावजूद",
    summary: "पिछले साल, डोनाल्ड ट्रम्प ने कहा था कि यदि वे कार्यालय में लौटते हैं, तो सरकार बीमा कंपनियों को इसके इलाज को कवर करने के लिए नियम जारी करेगी।",
    imageUrl: "https://images.unsplash.com/photo-1550531996-ff3dcede9477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxEb25hbGQlMjBUcnVtcHxlbnwwfHx8fDE3NTQyNDUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "white house politics",
    author: "ऐलिस ओलस्टीन और मेगन विल्सन द्वारा",
    date: "25 जुलाई, 2024",
    authorImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop"
  },
  {
    id: "2",
    category: "राष्ट्रीय",
    headline: "निवेशकों के आर्थिक डर यहाँ हैं - और ट्रम्प की प्रतिक्रिया से पोषित हैं",
    summary: "एक नई अनिश्चितता की लहर वॉल स्ट्रीट पर छा रही है क्योंकि निवेशक पूर्व राष्ट्रपति के नवीनतम आर्थिक प्रस्तावों पर प्रतिक्रिया दे रहे हैं।",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    imageHint: "stock market",
    author: "जॉन डो द्वारा",
    date: "25 जुलाई, 2024",
    authorImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "3",
    category: "राष्ट्रीय",
    headline: "कथित बाल यौन गिरोह पर तड़पते हुए, अलबामा समुदाय पूछता है: 'क्या किसी को पता नहीं था?'",
    summary: "प्रार्थना सभाओं और अन्य समारोहों में, काउंटी के निवासियों ने इस अहसास के साथ संघर्ष किया है कि उनके शहर में भयानक अपराध हो रहे होंगे।",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoYXBweSUyMGtpZHN8ZW58MHx8fHwxNzU0MjQ1MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "sad community",
    author: "एमिली बैक्सटर द्वारा",
    date: "25 जुलाई, 2024",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
   {
    id: "4",
    category: "राजनीति",
    headline: "एक राष्ट्रपति अभियान के निर्णायक क्षण",
    summary: "टेलीविजन पर होने वाली बहसों से लेकर अक्टूबर के आश्चर्यजनक खुलासों तक, राष्ट्रपति चुनावों को आकार देने वाली प्रमुख घटनाओं पर एक नजर।",
    imageUrl: "https://images.unsplash.com/photo-1550531996-ff3dcede9477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxEb25hbGQlMjBUcnVtcHxlbnwwfHx8fDE3NTQyNDUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "election debate",
    author: "राष्ट्रपति इतिहासकार द्वारा",
    date: "24 जुलाई, 2024",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "5",
    category: "विचार",
    headline: "अमेरिका घर पर रहने वालों का देश बनता जा रहा है",
    summary: "",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    imageHint: "person watching tv",
    author: "डाना मिलबैंक",
    authorImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
    date: "24 जुलाई, 2024",
  },
  {
    id: "6",
    category: "विचार",
    headline: "रूस पर अधिकतम दबाव डालने के लिए तेल पर माध्यमिक प्रतिबंधों की आवश्यकता है",
    summary: "",
    imageUrl: "https://images.unsplash.com/photo-1563279313-ab3a059d0a64?q=80&w=2070&auto=format&fit=crop",
    imageHint: "oil derrick",
    author: "संपादकीय बोर्ड",
    authorImage: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1974&auto=format&fit=crop",
    date: "24 जुलाई, 2024",
  },
  {
    id: "7",
    category: "विचार",
    headline: "सांख्यिकीविद् को बर्खास्त करने से नौकरी के आंकड़े नहीं बदलेंगे",
    summary: "",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
    imageHint: "woman at desk",
    author: "मेगन मैकआर्डल",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    date: "23 जुलाई, 2024",
  },
    {
    id: "8",
    category: "विचार",
    headline: "अमेरिकी राजमार्गों पर 845,000 मौतें। मुख्य कारण का समाधान क्यों नहीं?",
    summary: "",
    imageUrl: "https://images.unsplash.com/photo-1574636913-4445584852d7?q=80&w=2070&auto=format&fit=crop",
    imageHint: "car highway",
    author: "जोश मैक्स",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    date: "23 जुलाई, 2024",
  },
    {
    id: "9",
    category: "विचार",
    headline: "अमेरिका को क्रिप्टो महाशक्ति बनाने का रोडमैप",
    summary: "",
    imageUrl: "https://images.unsplash.com/photo-1621405940955-fd9b8c872146?q=80&w=2070&auto=format&fit=crop",
    imageHint: "bitcoin mining",
    author: "स्कॉट बेसेंट",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    date: "22 जुलाई, 2024",
  },
  {
    id: "10",
    category: "विचार",
    headline: "कृपया बिखर जाएं, 'नेकेड गन' रिबूट। यहां देखने के लिए कुछ नहीं है।",
    summary: "",
    imageUrl: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=2070&auto=format&fit=crop",
    imageHint: "old film camera",
    author: "विल लीच",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    date: "22 जुलाई, 2024",
  },
  {
    id: '11',
    category: 'व्यापार',
    headline: 'कार्यकर्ताओं की एक नई पीढ़ी के लिए कार्यालय संस्कृति कैसे बदल रही है',
    summary: 'हाइब्रिड काम से लेकर लचीले घंटों तक, कंपनियां नए कर्मचारी अपेक्षाओं के अनुकूल हो रही हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    imageHint: 'modern office',
    author: 'सारा चेन द्वारा',
    date: '21 जुलाई, 2024',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '12',
    category: 'तकनीक',
    headline: 'स्वास्थ्य सेवा में एआई क्रांति पहले से ही यहां है',
    summary: 'आर्टिफिशियल इंटेलिजेंस डायग्नोस्टिक्स, दवा की खोज और रोगी देखभाल को बदल रहा है।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'futuristic healthcare',
    author: 'डेविड ली द्वारा',
    date: '20 जुलाई, 2024',
    authorImage: 'https://images.unsplash.com/photo-1580852300654-03ab8572ca60?q=80&w=1968&auto=format&fit=crop'
  },
  {
    id: '13',
    category: 'जलवायु',
    headline: 'शहर शहरी गर्मी द्वीपों का मुकाबला करने के लिए हरी छतों की ओर रुख कर रहे हैं',
    summary: 'छत के बगीचे और वनस्पति शहरों को ठंडा करने और तूफानी पानी का प्रबंधन करने में मदद कर रहे हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1694532297471-a6e2bb054c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxncmVlbiUyMHJvb2Z0b3BzfGVufDB8fHx8MTc1NDI0NTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'rooftop garden',
    author: 'मारिया गार्सिया द्वारा',
    date: '19 जुलाई, 2024',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    id: '14',
    category: 'कल्याण',
    headline: '20 मिनट की सैर के लाभों के पीछे का विज्ञान',
    summary: 'यहां तक कि गतिविधि के छोटे फटने का भी शारीरिक और मानसिक स्वास्थ्य पर महत्वपूर्ण सकारात्मक प्रभाव पड़ सकता है।',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'woman jogging',
    author: 'डॉ. एमिली कार्टर द्वारा',
    date: '18 जुलाई, 2024',
    authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop'
  },
  {
    id: '15',
    category: 'राय',
    headline: 'सार्वजनिक परिवहन का भविष्य इलेक्ट्रिक और स्वायत्त है',
    summary: '',
    imageUrl: 'https://images.unsplash.com/photo-1558280139-4d55b33190a9?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'electric bus',
    author: 'जेनिफर लुईस',
    authorImage: 'https://images.unsplash.com/photo-1599577182189-e160533519d6?q=80&w=1974&auto=format&fit=crop',
    date: '17 जुलाई, 2024'
  },
  {
    id: '16',
    category: 'राय',
    headline: 'क्या रिमोट काम यहाँ रहने के लिए है? पेशेवरों और विपक्ष',
    summary: '',
    imageUrl: 'https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'home office',
    author: 'रॉबर्ट जॉनसन',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    date: '16 जुलाई, 2024'
  },
  {
    id: '17',
    category: 'राय',
    headline: 'मानसिक स्वास्थ्य के बारे में बात करने के महत्व को पहचानना',
    summary: '',
    imageUrl: 'https://images.unsplash.com/photo-1594125674939-57e78d15024b?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'support group',
    author: 'सामंथा मिलर',
    authorImage: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop',
    date: '15 जुलाई, 2024'
  },
  {
    id: '18',
    category: 'राय',
    headline: 'कैसे प्रौद्योगिकी हमारे पढ़ने के तरीके को बदल रही है',
    summary: '',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'reading on tablet',
    author: 'माइकल ब्राउन',
    authorImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1976&auto=format&fit=crop',
    date: '14 जुलाई, 2024'
  },
  {
    id: '19',
    category: 'विश्व',
    headline: 'अमेज़ॅन वर्षावन में वनों की कटाई धीमी हो रही है, लेकिन खतरा बना हुआ है',
    summary: 'ब्राजील सरकार के प्रयासों से वनों की कटाई की दरों में कमी आई है, लेकिन विशेषज्ञ चेतावनी देते हैं कि वर्षावन अभी भी खतरे में है।',
    imageUrl: 'https://images.unsplash.com/photo-1552863779-1a59e58564a5?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'amazon rainforest',
    author: 'कार्लोस सिल्वा',
    date: '13 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: '20',
    category: 'खेल',
    headline: 'रिकॉर्ड तोड़ने वाली भीड़ के बीच ओलंपिक मशाल पेरिस पहुंची',
    summary: 'ग्रीष्मकालीन खेलों के लिए उत्साह के बीच हजारों लोग प्रतिष्ठित लौ को देखने के लिए एकत्र हुए।',
    imageUrl: 'https://images.unsplash.com/photo-1549923019-ec45c3a388f4?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'olympic torch',
    author: 'सोफी डबॉइस',
    date: '12 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: '21',
    category: 'विज्ञान',
    headline: 'जेम्स वेब टेलीस्कोप ने सबसे पुरानी ज्ञात आकाशगंगा की खोज की',
    summary: 'नई खोज ब्रह्मांड की प्रारंभिक समझ को चुनौती देती है और गठन के सिद्धांतों पर सवाल उठाती है।',
    imageUrl: 'https://images.unsplash.com/photo-1630766761899-4a973059954a?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'galaxy stars',
    author: 'खगोल विज्ञान टुडे',
    date: '11 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: '22',
    category: 'संस्कृति',
    headline: 'दुनिया भर में पारंपरिक शिल्प कौशल का पुनरुद्धार',
    summary: 'कारीगर बड़े पैमाने पर उत्पादन के युग में हाथ से बनी वस्तुओं को संरक्षित और बढ़ावा दे रहे हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1518005244513-74a434b93757?q=80&w=1939&auto=format&fit=crop',
    imageHint: 'artisan pottery',
    author: 'कला और विरासत पत्रिका',
    date: '10 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: '23',
    category: 'स्वास्थ्य',
    headline: 'वैश्विक मानसिक स्वास्थ्य संकट से निपटने के लिए विशेषज्ञ एकजुट हुए',
    summary: 'विश्व स्वास्थ्य संगठन की एक नई रिपोर्ट कलंक को कम करने और देखभाल तक पहुंच में सुधार करने के लिए कार्रवाई का आह्वान करती है।',
    imageUrl: 'https://images.unsplash.com/photo-1504813182658-bdda04d2d4e2?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'mental health awareness',
    author: 'स्वास्थ्य रिपोर्टर',
    date: '9 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop"
  },
  {
    id: '24',
    category: 'शिक्षा',
    headline: 'डिजिटल युग में शिक्षा का भविष्य',
    summary: 'कैसे ऑनलाइन शिक्षण और एआई व्यक्तिगत शिक्षा के अनुभवों को आकार दे रहे हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxEaWdpdGFsJTIwRWR1Y2F0aW9ufGVufDB8fHx8MTc1NDI0NTIxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'online learning',
    author: 'एजुकेशन वीकली',
    date: '8 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: '25',
    category: 'जीवनशैली',
    headline: 'धीमी यात्रा की कला: सार्थक अनुभवों के लिए दुनिया की खोज',
    summary: 'पर्यटन से परे जाकर स्थानीय संस्कृतियों और वातावरण से जुड़ें।',
    imageUrl: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxleHBsb3JhdGlvbnxlbnwwfHx8fDE3NTQyNDUzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: "slow travel",
    author: 'यात्रा + आराम',
    date: '7 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: '26',
    category: 'भोजन',
    headline: 'पौधा-आधारित आहार का उदय और यह आपके स्वास्थ्य के लिए क्या मायने रखता है',
    summary: 'पोषण विशेषज्ञ पौधे-आधारित भोजन के लाभों और सतत भोजन विकल्पों पर चर्चा करते हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'plant-based meal',
    author: 'पोषण समाचार',
    date: '6 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: '27',
    category: 'तकनीक',
    headline: '5जी कनेक्टिविटी का भविष्य और हमारे जीवन पर इसका प्रभाव',
    summary: 'विशेषज्ञों का कहना है कि 5जी तकनीक समाज के हर पहलू में क्रांति लाएगी।',
    imageUrl: 'https://images.unsplash.com/photo-1589463203954-a0352528734e?q=80&w=1964&auto=format&fit=crop',
    imageHint: '5g technology',
    author: 'टेक क्रॉनिकल्स',
    date: '5 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: '28',
    category: 'व्यापार',
    headline: 'गिग इकोनॉमी का उदय और पारंपरिक रोजगार पर इसका प्रभाव',
    summary: 'अधिक लोग लचीले काम के लिए फ्रीलांसिंग और स्वतंत्र अनुबंध की ओर रुख कर रहे हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'freelance work',
    author: 'बिजनेस इनसाइडर',
    date: '4 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: '29',
    category: 'विश्व',
    headline: 'वैश्विक नेता जलवायु परिवर्तन पर कार्रवाई के लिए शिखर सम्मेलन में एकत्रित हुए',
    summary: 'पेरिस में होने वाली बैठक का उद्देश्य ग्रीनहाउस गैस उत्सर्जन को कम करने के लिए प्रतिबद्धताओं को मजबूत करना है।',
    imageUrl: 'https://images.unsplash.com/photo-1498624237839-a6e5bce4579c?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'climate summit',
    author: 'रॉयटर्स',
    date: '3 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: '30',
    category: 'विज्ञान',
    headline: 'मंगल ग्रह पर उपनिवेशीकरण की दौड़: चुनौतियां और अवसर',
    summary: 'नासा और स्पेसएक्स लाल ग्रह पर मनुष्यों को भेजने की महत्वाकांक्षी योजनाओं के साथ आगे बढ़ रहे हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1610221974332-9457d5448373?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'mars colonization',
    author: 'स्पेस.कॉम',
    date: '2 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop"
  },
  {
    id: '31',
    category: 'संस्कृति',
    headline: 'स्ट्रीमिंग सेवाओं का उदय और फिल्म उद्योग पर उनका प्रभाव',
    summary: 'नेटफ्लिक्स, डिज़्नी+ और अन्य प्लेटफ़ॉर्म मनोरंजन परिदृश्य को नया आकार दे रहे हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'streaming service',
    author: 'वैराइटी',
    date: '1 जुलाई, 2024',
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];
