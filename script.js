let currentQuestion = 0;
let personalityTraits = { creative: 0, social: 0, calm: 0, ambitious: 0, leader: 0, adventurous: 0, resilient: 0 };

const questions = [
  {
    question: "لما تكون متوتر أو في حالة ضغوط، إزاي بتتعامل مع الموقف؟ 🧘‍♀️",
    options: [
      { text: "أحاول أن أهدأ وأخذ لحظة للراحة. 🌿", trait: "calm" },
      { text: "أبحث عن طرق جديدة للتعامل مع المواقف الصعبة. 💡", trait: "creative" },
      { text: "أتكلم مع حد من الأصدقاء وأحكي له عشان يهون علي. 📞", trait: "social" }
    ]
  },
  {
    question: "إنت بتحب تتعامل مع التحديات؟ كيف تتصرف لما تواجه واحد؟ 💪",
    options: [
      { text: "أنا دايمًا بحاول أبتكر حلول جديدة وأفكار مبتكرة. 💡", trait: "creative" },
      { text: "أنا بشوف التحدي كفرصة للنمو والتعلم. 🚀", trait: "ambitious" },
      { text: "أفضل أن أواجه التحديات مع مجموعة من الناس عشان أتعلم منهم. 👫", trait: "social" }
    ]
  },
  {
    question: "هل بتحب تحط أهداف كبيرة وتحققها؟ كيف بتتعامل مع هدفك الأكبر؟ 🎯",
    options: [
      { text: "بحب أني أحط أهداف واضحة وأشتغل على تحقيقها. 🎯", trait: "ambitious" },
      { text: "بحب التغيير وأبحث عن تحديات جديدة باستمرار. 🌟", trait: "adventurous" },
      { text: "أكون مرن في تحقيق الأهداف وأتعلم من الأخطاء. 🧠", trait: "resilient" }
    ]
  },
  {
    question: "إنت عندك قدرة على القيادة؟ هل بتحب تبقى قائد في المواقف؟ 🧑‍💼",
    options: [
      { text: "بحب أني أكون قائد وأوجه الفريق لتحقيق أهداف مشتركة. 🚀", trait: "leader" },
      { text: "أنا بحب أن أكون في الخلف وأساعد الآخرين من غير ما أتدخل كثير. 🤝", trait: "social" },
      { text: "أفضل أن أكون مرن وأسمح للفريق بأن يعبر عن آرائهم بحرية. 🗣️", trait: "calm" }
    ]
  },
  {
    question: "كيف تحب تستمتع بوقتك؟ 🎉",
    options: [
      { text: "أحب أن أكتشف أماكن جديدة وأعيش مغامرات جديدة. 🌍", trait: "adventurous" },
      { text: "أفضل أن أكون وسط أصدقائي وأشارك في الأنشطة الاجتماعية. 🥳", trait: "social" },
      { text: "أستمتع بالهدوء وأخذ فترات راحة للتفكير أو القراءة. 📚", trait: "calm" }
    ]
  },
  {
    question: "لو في موقف صعب حصل في حياتك، إزاي بتتعامل معاه؟ ⚡",
    options: [
      { text: "بحاول أن أتعلم من الموقف وأستخدمه كدافع للنمو. 🌱", trait: "resilient" },
      { text: "أبحث عن حلول مبتكرة وأتعلم طرق جديدة للتعامل مع التحدي. 💡", trait: "creative" },
      { text: "أحاول أن أكون بجانب الآخرين وأحصل على دعمهم. 🤗", trait: "social" }
    ]
  },
  // إضافة المزيد من الأسئلة بناءً على هذا النمط...
];

// تغيير الألوان بشكل عشوائي في كل مرة
const colors = ["#FFEB3B", "#FF5722", "#8BC34A", "#9C27B0", "#00BCD4"];

function startGame() {
  showQuestion(currentQuestion);
}

function showQuestion(index) {
  if (index < questions.length) {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // تغيير اللون
    
    const questionData = questions[index];

    document.getElementById('questionContainer').innerHTML = `
      <h2>${questionData.question}</h2>
      <div>
        ${questionData.options.map((option, i) => `
          <button onclick="answerQuestion(${i}, '${option.trait}')">${option.text}</button>
        `).join('')}
      </div>
    `;
    
    // إظهار الإيموجي تفاعلًا مع السؤال
    document.getElementById('feedback').innerHTML = "🤩 إنت جاوبت! خليني أشوف نتيجتك!";
  } else {
    showResult();
  }
}

function answerQuestion(selectedIndex, trait) {
  // تحديث الشخصية بناءً على الاختيار
  personalityTraits[trait]++;
  
  // إضافة إيموجي تفاعلي بعد الإجابة
  document.getElementById('feedback').innerHTML = "🎉 إجابة رائعة! أكمل كده!";
  document.getElementById('feedback').classList.add('success');
  document.getElementById('feedback').classList.remove('error');

  currentQuestion++;
  
  // الانتقال للسؤال التالي بعد 2 ثانية
  setTimeout(() => {
    document.getElementById('feedback').innerHTML = '';
    showQuestion(currentQuestion);
  }, 2000);
}

function showResult() {
  let analysis = "";
  let advice = "";

  // تحليل الشخصية بناءً على الإجابات
  if (personalityTraits.creative > personalityTraits.social && personalityTraits.creative > personalityTraits.cal) {
    analysis = "أنت شخص مبدع وبتحب دايمًا تستكشف أفكار وحلول جديدة! 🎨";
    advice = "استمر في تطوير إبداعك! جرب دايمًا أفكار جديدة ومبتكرة. 💡";
  } else if (personalityTraits.social > personalityTraits.creative && personalityTraits.social > personalityTraits.cal) {
    analysis = "أنت شخص اجتماعي، بتحب التواصل مع الناس وبتستمتع بالتفاعل معهم! 🥳";
    advice = "حافظ على التواصل مع الآخرين! أنت شخص مهم جدًا في بناء المجتمعات. 👥";
  } else if (personalityTraits.adventurous > personalityTraits.social && personalityTraits.adventurous > personalityTraits.creative) {
    analysis = "أنت شخص مغامر، بتحب التحديات والاستكشاف! 🌍";
    advice = "تابع مغامراتك، ولا تخف من المجهول! كل تحدي هو فرصة للتعلم. 🚀";
  } else if (personalityTraits.resilient > personalityTraits.creative && personalityTraits.resilient > personalityTraits.social) {
    analysis = "أنت شخص مرن، بتحب تتعلم من كل تحدي وتواجه الصعوبات بكل هدوء! 🌱";
    advice = "استمر في صبرك! المرونة هي مفتاح النجاح. حاول دائمًا التعلم من تجاربك. 📚";
  } else if (personalityTraits.ambitious > personalityTraits.social && personalityTraits.ambitious > personalityTraits.creative) {
    analysis = "أنت شخص طموح، بتحب تحدي نفسك وتحقيق أهدافك الكبيرة! 🎯";
    advice = "ابقَ طموحًا! أهدافك في الحياة تستحق العمل الجاد لتحقيقها. 💪";
  } else if (personalityTraits.leader > personalityTraits.social && personalityTraits.leader > personalityTraits.creative) {
    analysis = "أنت قائد بالفطرة! بتحب أن تقود وتوجه الآخرين. 👑";
    advice = "تمسك بمهارات القيادة بتاعتك! أنت قادر على تحفيز الآخرين وتحقيق النجاح الجماعي. 🚀";
  } else {
    analysis = "أنت شخص هادئ، متوازن وبتحب الحياة البسيطة. 🌿";
    advice = "حافظ على هدوءك وركز على الجوانب الإيجابية في الحياة. هدوءك هو قوتك. 🧘‍♀️";
  }

  document.body.style.backgroundColor = "#FFFFFF"; // إعادة اللون الأصلي
  document.getElementById('gameTitle').innerHTML = analysis;
  document.getElementById('questionContainer').innerHTML = `
    <h2>${analysis}</h2>
    <p>${advice}</p>
    <button onclick="restartGame()">ابدأ من جديد 🎯</button>
  `;
}

function restartGame() {
  currentQuestion = 0;
  personalityTraits = { creative: 0, social: 0, calm: 0, ambitious: 0, leader: 0, adventurous: 0, resilient: 0 };
  startGame();
}

startGame(); // بداية اللعبة
