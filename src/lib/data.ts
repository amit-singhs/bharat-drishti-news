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
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "white house politics",
    author: "ऐलिस ओलस्टीन और मेगन विल्सन द्वारा",
    date: "25 जुलाई, 2024",
    authorImage: "https://placehold.co/100x100.png"
  },
  {
    id: "2",
    category: "राष्ट्रीय",
    headline: "निवेशकों के आर्थिक डर यहाँ हैं - और ट्रम्प की प्रतिक्रिया से पोषित हैं",
    summary: "एक नई अनिश्चितता की लहर वॉल स्ट्रीट पर छा रही है क्योंकि निवेशक पूर्व राष्ट्रपति के नवीनतम आर्थिक प्रस्तावों पर प्रतिक्रिया दे रहे हैं।",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "stock market",
    author: "जॉन डो द्वारा",
    date: "25 जुलाई, 2024",
  },
  {
    id: "3",
    category: "राष्ट्रीय",
    headline: "कथित बाल यौन गिरोह पर तड़पते हुए, अलबामा समुदाय पूछता है: 'क्या किसी को पता नहीं था?'",
    summary: "प्रार्थना सभाओं और अन्य समारोहों में, काउंटी के निवासियों ने इस अहसास के साथ संघर्ष किया ہے کہ ان کے شہر میں ہولناک جرائم ہو رہے ہوں گے۔",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "sad community",
    author: "एमिली बैक्सटर द्वारा",
    date: "25 जुलाई, 2024",
  },
   {
    id: "4",
    category: "राजनीति",
    headline: "एक राष्ट्रपति अभियान के निर्णायक क्षण",
    summary: "टेलीविजन पर होने वाली बहसों से लेकर अक्टूबर के आश्चर्यजनक खुलासों तक, राष्ट्रपति चुनावों को आकार देने वाली प्रमुख घटनाओं पर एक नजर।",
    imageUrl: "https://placehold.co/800x500.png",
    imageHint: "election debate",
    author: "राष्ट्रपति इतिहासकार द्वारा",
    date: "24 जुलाई, 2024",
  },
  {
    id: "5",
    category: "विचार",
    headline: "अमेरिका घर पर रहने वालों का देश बनता जा रहा है",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "person watching tv",
    author: "डाना मिलबैंक",
    authorImage: "https://placehold.co/40x40.png",
    date: "24 जुलाई, 2024",
  },
  {
    id: "6",
    category: "विचार",
    headline: "रूस पर अधिकतम दबाव डालने के लिए तेल पर माध्यमिक प्रतिबंधों की आवश्यकता है",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "oil derrick",
    author: "संपादकीय बोर्ड",
    authorImage: "https://placehold.co/40x40.png",
    date: "24 जुलाई, 2024",
  },
  {
    id: "7",
    category: "विचार",
    headline: "सांख्यिकीविद् को बर्खास्त करने से नौकरी के आंकड़े नहीं बदलेंगे",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "woman at desk",
    author: "मेगन मैकआर्डल",
    authorImage: "https://placehold.co/40x40.png",
    date: "23 जुलाई, 2024",
  },
    {
    id: "8",
    category: "विचार",
    headline: "अमेरिकी राजमार्गों पर 845,000 मौतें। मुख्य कारण का समाधान क्यों नहीं?",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "car highway",
    author: "जोश मैक्स",
    authorImage: "https://placehold.co/40x40.png",
    date: "23 जुलाई, 2024",
  },
    {
    id: "9",
    category: "विचार",
    headline: "अमेरिका को क्रिप्टो महाशक्ति बनाने का रोडमैप",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "bitcoin mining",
    author: "स्कॉट बेसेंट",
    authorImage: "https://placehold.co/40x40.png",
    date: "22 जुलाई, 2024",
  },
  {
    id: "10",
    category: "विचार",
    headline: "कृपया बिखर जाएं, 'नेकेड गन' रिबूट। यहां देखने के लिए कुछ नहीं है।",
    summary: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "old film camera",
    author: "विल लीच",
    authorImage: "https://placehold.co/40x40.png",
    date: "22 जुलाई, 2024",
  },
  {
    id: '11',
    category: 'व्यापार',
    headline: 'कार्यकर्ताओं की एक नई पीढ़ी के लिए कार्यालय संस्कृति कैसे बदल रही है',
    summary: 'हाइब्रिड काम से लेकर लचीले घंटों तक, कंपनियां नए कर्मचारी अपेक्षाओं के अनुकूल हो रही हैं।',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'modern office',
    author: 'सारा चेन द्वारा',
    date: '21 जुलाई, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  },
  {
    id: '12',
    category: 'तकनीक',
    headline: 'स्वास्थ्य सेवा में एआई क्रांति पहले से ही यहां है',
    summary: 'आर्टिफिशियल इंटेलिजेंस डायग्नोस्टिक्स, दवा की खोज और रोगी देखभाल को बदल रहा है।',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'futuristic healthcare',
    author: 'डेविड ली द्वारा',
    date: '20 जुलाई, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  },
  {
    id: '13',
    category: 'जलवायु',
    headline: 'शहर शहरी गर्मी द्वीपों का मुकाबला करने के लिए हरी छतों की ओर रुख कर रहे हैं',
    summary: 'छत के बगीचे और वनस्पति शहरों को ठंडा करने और तूफानी पानी का प्रबंधन करने में मदद कर रहे हैं।',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'rooftop garden',
    author: 'मारिया गार्सिया द्वारा',
    date: '19 जुलाई, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  },
  {
    id: '14',
    category: 'कल्याण',
    headline: '20 मिनट की सैर के लाभों के पीछे का विज्ञान',
    summary: 'यहां तक कि गतिविधि के छोटे फटने का भी शारीरिक और मानसिक स्वास्थ्य पर महत्वपूर्ण सकारात्मक प्रभाव पड़ सकता है।',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'woman jogging',
    author: 'डॉ. एमिली कार्टर द्वारा',
    date: '18 जुलाई, 2024',
    authorImage: 'https://placehold.co/100x100.png'
  }
];
