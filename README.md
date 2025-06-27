# chatgpt-cosmic-viewer
Turn ChatGPT conversation logs into a dynamic, elegant visual experience — right in your browser, with zero backend. ✨🛸

<details>
<summary>🇬🇧 English Version</summary>

# 🌌 Cosmic Conversation Viewer 🌌

This project is an interactive web interface designed to display exported ChatGPT conversations from a `JSON` file in a sleek and attractive manner. It's built entirely with vanilla HTML, CSS, and JavaScript, with no backend dependencies, making it fully portable and easy to use.

Transform your static conversation log files into a dynamic and visual experience!

### 🎨 Live Demo 🎨
*(It is highly recommended to place an animated `GIF` here showing the interface in action)*



## ✨ Features

*   **📁 Local JSON File Import:** Easily upload your conversation file directly from your device using the `File System API`.
*   **🎨 Modern & Attractive Design:** A modern UI inspired by Glassmorphism and Cyberpunk aesthetics.
*   **🌗 Light & Dark Mode:** Switch between a comfortable light theme and a sleek dark theme. Your preference is saved locally.
*   **💬 Interactive Chat View:** Messages are displayed in the familiar chat bubble style, distinguishing between user and ChatGPT messages.
*   **📜 Full Markdown Support:** Renders formatted text (headings, lists, code blocks, tables, blockquotes) correctly and beautifully.
*   **📱 Responsive Design:** A great user experience across all devices, from large desktop screens to mobile phones.
*   **⏳ Skeleton Loaders:** Enhances user experience by displaying placeholder structures while a conversation is loading.
*   **🚀 Zero Backend Dependency:** Everything runs directly in your browser. Your privacy is 100% guaranteed as your data never leaves your machine.
*   **📦 Single File Application:** Easy to distribute and use—just one `index.html` file.

## 🚀 How to Use

It's incredibly simple:
1.  Download the `index.html` file from this repository.
2.  Open it in any modern web browser (e.g., Chrome, Firefox, Edge).
3.  Click the **"Import JSON File"** button in the sidebar.
4.  Select your `.json` conversation file.
5.  Enjoy exploring your conversations in their new design! ✨

## 📜 Required JSON Structure

For the viewer to work correctly, your JSON file must adhere to the following structure: an array of conversation objects.

Each conversation object must contain:
*   `title` (optional): A string representing the conversation's title.
*   `messages`: An array of message objects.

Each message object must contain:
*   `author`: A string identifying the sender (should be `"user"` for the user or any other name for ChatGPT).
*   `content`: A string containing the message text, which can include Markdown formatting.

**Example:**
```json
[
  {
    "title": "Creative video script",
    "messages": [
      {
        "author": "user",
        "content": "Write a creative video script"
      },
      {
        "author": "ChatGPT",
        "content": "Of course! To write a creative script, I need a few more details..."
      }
    ]
  }
]
```

## 🛠️ Tech Stack

*   **HTML5**
*   **CSS3** (with CSS Variables for easy theming)
*   **JavaScript (ES6+)**
*   **[Marked.js](https://marked.js.org/)**: A library to parse Markdown into HTML.
*   **[DOMPurify](https://github.com/cure53/DOMPurify)**: A library to sanitize HTML and prevent XSS attacks.

## 🤝 Contributing

Contributions are welcome to make this project even better! Feel free to open an `issue` to discuss a new idea or report a bug. If you want to contribute code:
1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
</details>

---



# 🌌 عارض المحادثات الكوني 🌌

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

هذا المشروع هو عبارة عن واجهة ويب تفاعلية، مصممة لعرض محادثات ChatGPT المصدرة بصيغة `JSON` بأسلوب أنيق وجذاب. تم بناؤه بالكامل باستخدام HTML، CSS، و JavaScript فقط، دون الحاجة لأي خلفية برمجية (Backend)، مما يجعله سهل الاستخدام ومحمولاً بالكامل.

حوّل ملفات المحادثات النصية الجامدة إلى تجربة بصرية ديناميكية!

### 🎨 عرض حي للواجهة 🎨
*(ننصح بشدة بوضع صورة متحركة `GIF` هنا تظهر الواجهة وهي تعمل)*



## ✨ المميزات

*   **📁 استيراد ملفات JSON المحلية:** يمكنك بسهولة رفع ملف محادثاتك مباشرة من جهازك باستخدام `File System API`.
*   **🎨 تصميم عصري وجذاب:** واجهة مستخدم حديثة مستوحاة من أسلوب الـ Glassmorphism و Cyberpunk.
*   **🌗 وضع ليلي ونهاري:** اختر بين الوضع المضيء المريح أو الوضع المظلم الأنيق، مع حفظ اختيارك في المتصفح.
*   **💬 عرض تفاعلي للمحادثات:** يتم عرض الرسائل بأسلوب فقاعات الدردشة المألوف، مع تمييز رسائل المستخدم ورسائل ChatGPT.
*   **📜 دعم كامل لـ Markdown:** يتم عرض النصوص المنسقة (عناوين، قوائم، أكواد برمجية، جداول، اقتباسات) بشكل صحيح وجميل.
*   **📱 تصميم متجاوب:** تجربة استخدام ممتازة على جميع الأجهزة، من شاشات سطح المكتب الكبيرة إلى الهواتف المحمولة.
*   **⏳ هياكل تحميل (Skeleton Loaders):** تحسين تجربة المستخدم عبر عرض هياكل مؤقتة أثناء تحميل المحادثة.
*   **🚀 لا يعتمد على أي خادم:** كل شيء يعمل مباشرة في متصفحك. خصوصيتك مضمونة 100% لأن بياناتك لا تغادر جهازك.
*   **📦 كل شيء في ملف واحد:** سهولة في التوزيع والاستخدام، فقط ملف `index.html` واحد.

## 🚀 كيفية الاستخدام

الأمر في غاية البساطة:
1.  قم بتنزيل ملف `index.html` من هذا المستودع.
2.  افتح الملف في أي متصفح ويب حديث (مثل Chrome, Firefox, Edge).
3.  انقر على زر **"استيراد ملف JSON"** الموجود في الشريط الجانبي.
4.  اختر ملف المحادثات الخاص بك بصيغة `.json`.
5.  استمتع باستكشاف محادثاتك بتصميمها الجديد! ✨

## 📜 بنية ملف الـ JSON المطلوبة

لكي تعمل الواجهة بشكل صحيح، يجب أن يكون ملف الـ JSON الخاص بك يتبع الهيكلية التالية: مصفوفة من كائنات المحادثات.

كل كائن محادثة يجب أن يحتوي على:
*   `title` (اختياري): سلسلة نصية (string) تمثل عنوان المحادثة.
*   `messages`: مصفوفة (array) من كائنات الرسائل.

كل كائن رسالة يجب أن يحتوي على:
*   `author`: سلسلة نصية (string) تحدد المرسل (يجب أن تكون `"user"` للمستخدم أو أي اسم آخر لـ ChatGPT).
*   `content`: سلسلة نصية (string) تحتوي على نص الرسالة، ويمكن أن يتضمن تنسيق Markdown.

**مثال:**
```json
[
  {
    "title": "كتابة اسكربت فيديو",
    "messages": [
      {
        "author": "user",
        "content": "اكتب اسكربت فيديو ابداعي"
      },
      {
        "author": "ChatGPT",
        "content": "بالطبع! هكتب لك اسكربت فيديو إبداعي، بس محتاج أعرف شوية تفاصيل..."
      }
    ]
  },
  {
    "title": "منصة تعليمية بالتلعيب",
    "messages": [
      {
        "author": "user",
        "content": "بناء منصة تعليمية بمبدا التلعيب 🥺"
      },
      {
        "author": "ChatGPT",
        "content": "أوه ياسلام! 😍🔥 \nعايز تبني منصة تعليمية تعتمد على \"مبدأ التلعيب\"؟"
      }
    ]
  }
]
```

## 🛠️ التقنيات المستخدمة

*   **HTML5**
*   **CSS3** (مع متغيرات CSS لتسهيل تخصيص السمات)
*   **JavaScript (ES6+)**
*   **[Marked.js](https://marked.js.org/)**: مكتبة لتحويل Markdown إلى HTML.
*   **[DOMPurify](https://github.com/cure53/DOMPurify)**: مكتبة لتنقية الـ HTML وحمايته من هجمات XSS.

## 🤝 المساهمة

المساهمات مرحب بها لجعل هذا المشروع أفضل! لا تتردد في فتح `issue` لمناقشة فكرة جديدة أو الإبلاغ عن خطأ. إذا أردت المساهمة بالكود:
1.  قم بعمل Fork للمشروع.
2.  أنشئ فرعًا جديدًا للميزة الخاصة بك (`git checkout -b feature/AmazingFeature`).
3.  قم بعمل Commit لتغييراتك (`git commit -m 'Add some AmazingFeature'`).
4.  قم برفع الكود إلى الفرع (`git push origin feature/AmazingFeature`).
5.  افتح طلب سحب (Pull Request).

## 📜 الترخيص

هذا المشروع مرخص تحت رخصة MIT. انظر ملف `LICENSE` لمزيد من التفاصيل.

