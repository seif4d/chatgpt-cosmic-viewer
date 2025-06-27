#  🌌 chatgpt cosmic viewer
Turn ChatGPT conversation logs into a dynamic, elegant visual experience — right in your browser, with zero backend. ✨🛸

<details>
<summary>🇬🇧 English Version</summary>

# 🌌 Cosmic Conversation Viewer 🌌

This project is an interactive web interface designed to display exported ChatGPT conversations from a `JSON` file in a sleek and attractive manner. It's built entirely with vanilla HTML, CSS, and JavaScript, with no backend dependencies, making it fully portable and easy to use.

Transform your static conversation log files into a dynamic and visual experience!

### 🎨 Live Demo 🎨
<!--  Add a link to the live demo and a project screenshot/GIF here -->
<!-- Example: -->
<!-- ![Demo GIF](https://user-images.githubusercontent.com/username/repo/demo.gif) -->
**[🚀 Try it Live!](https://seif4d.github.io/chatgpt-cosmic-viewer/)** 

## 🤔 Why Choose This Viewer?

*   **🔒 Privacy First:** Your data never leaves your machine. All processing happens directly in your browser.
*   **🎨 Stunning Visual Experience:** A modern and engaging design that makes reading long conversations a pleasure.
*   **✨ Easy to Use:** A simple, straightforward interface. All you need is your JSON file and a web browser.

## ✨ Features

*   **📁 Local JSON File Import:** Easily upload your conversation file directly from your device.
*   **🎨 Modern & Attractive Design:** A UI inspired by Glassmorphism and Cyberpunk aesthetics.
*   **🌗 Light & Dark Mode:** Switch between a comfortable light theme and a sleek dark theme, with your preference saved locally.
*   **💬 Interactive Chat View:** Messages are displayed in the familiar chat bubble style, distinguishing between user and ChatGPT.
*   **📜 Full Markdown Support:** Renders formatted text (headings, lists, code blocks, etc.) correctly and beautifully.
*   **📱 Responsive Design:** A great user experience across all devices.
*   **⏳ Skeleton Loaders:** Enhances UX by displaying placeholders while conversations load.
*   **🚀 Zero Backend Dependency:** Everything runs in your browser.
*   **📦 Single File Application:** Easy to distribute and use—just one `index.html` file.

## 🚀 How to Use

1.  Download the `index.html` file from this repository.
2.  Open it in any modern web browser.
3.  Click the **"Import JSON File"** button.
4.  Select your `.json` conversation file (follow the guide below to prepare it).
5.  Enjoy your conversations in their new cosmic style! ✨

<details>
<summary><strong>📜 How to Prepare My Conversations File? (Click to expand)</strong></summary>

To convert your ChatGPT conversations into the required JSON format, follow these simple steps.

### 🧑‍🚀 Step 1: Export Your Data from ChatGPT

1.  Log in to [ChatGPT](https://chat.openai.com).
2.  Click your name in the bottom-left corner, then select **Settings**.
3.  Go to the **Data Controls** tab.
4.  Click **Export data**, then **Confirm export**.
5.  You will receive an email from OpenAI with a link to download your data.

### 📦 Step 2: Download and Unzip

1.  Open the email from OpenAI and click the **Download data export** link.
2.  Unzip the downloaded `.zip` file. You will find an important file named `chat.html` inside.

### 🪄 Step 3: The Conversion Magic (Run the Script)

1.  Open the `chat.html` file in a modern web browser (like Chrome or Firefox).
2.  Open the Developer Tools by pressing `F12` (or `Ctrl+Shift+I` / `Cmd+Opt+I`).
3.  Go to the **Console** tab.
4.  **Copy the entire code block below**, paste it into the console, and press `Enter`.

```javascript
// Paste the same JavaScript code from the Arabic section here.
(function() {
    const conversationNodes = document.querySelectorAll('body > div');
    const conversations = [];

    if (conversationNodes.length === 0) {
        alert("No conversation containers found. The structure of 'chat.html' might have changed.");
        return;
    }

    conversationNodes.forEach(node => {
        const titleNode = node.querySelector('h1, h2, h3, h4, h5, h6');
        const messageNodes = node.querySelectorAll('div > div:nth-child(2)');

        if (messageNodes.length > 0) {
            const conversation = {
                title: titleNode ? titleNode.textContent.trim() : `Conversation on ${new Date().toLocaleDateString()}`,
                messages: []
            };

            messageNodes.forEach(msgNode => {
                const authorNode = msgNode.querySelector('div:first-child');
                const contentNode = msgNode.querySelector('div:nth-child(2)');

                if (authorNode && contentNode) {
                    let author = authorNode.textContent.trim();
                    if (author.toLowerCase() === 'assistant') {
                        author = 'ChatGPT';
                    }

                    conversation.messages.push({
                        author: author,
                        content: contentNode.textContent.trim()
                    });
                }
            });

            if (conversation.messages.length > 0) {
                conversations.push(conversation);
            }
        }
    });

    if (conversations.length === 0) {
        alert("Extraction failed. Could not parse messages from the file.");
        return;
    }

    const jsonString = JSON.stringify(conversations, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversations.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(`Success! ${conversations.length} conversations have been exported to 'conversations.json'. Check your downloads folder.`);
})();
```

The script will automatically create and download a file named **`conversations.json`**.

### 🌌 Step 4: Explore the Cosmos!

1.  Go back to the **"Cosmic Conversation Viewer"**.
2.  Click **"Import JSON File"**.
3.  Select the **`conversations.json`** file you just downloaded.
4.  Enjoy your conversations! ✨

</details>

## 🔮 Future Plans

*   [ ] 🔍 Search within conversations.
*   [ ] 🎨 More customization options and themes.
*   [ ] 📤 Export conversation as an image or PDF.
*   [ ] 🔗 Share a link to a specific conversation (while maintaining privacy).

## 🛠️ Tech Stack

*   **HTML5**
*   **CSS3** (with CSS Variables for theming)
*   **JavaScript (ES6+)**
*   **[Marked.js](https://marked.js.org/)**: For parsing Markdown to HTML.
*   **[DOMPurify](https://github.com/cure53/DOMPurify)**: For sanitizing HTML and preventing XSS.

## 🤝 Contributing

Contributions are welcome! Feel free to open an `issue` to discuss a new idea or report a bug. To contribute code:
1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📜 License

This project is licensed under the MIT License.

</details>

# 🌌 عارض المحادثات الكوني 🌌

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

هذا المشروع هو عبارة عن واجهة ويب تفاعلية، مصممة لعرض محادثات ChatGPT المصدرة بصيغة `JSON` بأسلوب أنيق وجذاب. تم بناؤه بالكامل باستخدام HTML، CSS، و JavaScript فقط، دون الحاجة لأي خلفية برمجية (Backend)، مما يجعله سهل الاستخدام ومحمولاً بالكامل.

حوّل ملفات المحادثات النصية الجامدة إلى تجربة بصرية ديناميكية!

### 🎨 عرض حي للواجهة 🎨
<!--  ضع هنا رابط العرض الحي وصورة متحركة للمشروع -->
<!-- مثال: -->
<!-- ![Demo GIF](https://user-images.githubusercontent.com/username/repo/demo.gif) -->
<!-- **[🚀 جرب الواجهة الآن!](https://seif4d.github.io/chatgpt-cosmic-viewer/)** -->

## 🤔 لماذا هذا العارض هو خيارك الأفضل؟

*   **🔒 الخصوصية أولاً:** بياناتك لا تغادر جهازك أبداً. كل عمليات المعالجة تتم في متصفحك مباشرة.
*   **🎨 تجربة بصرية مذهلة:** تصميم عصري وجذاب يجعل قراءة محادثاتك الطويلة أمراً ممتعاً.
*   **✨ سهل الاستخدام:** واجهة بسيطة ومباشرة. كل ما تحتاجه هو ملف `JSON` ومتصفح ويب.

## ✨ المميزات

*   **📁 استيراد ملفات JSON المحلية:** يمكنك بسهولة رفع ملف محادثاتك مباشرة من جهازك.
*   **🎨 تصميم عصري وجذاب:** واجهة مستخدم حديثة مستوحاة من أسلوب الـ Glassmorphism و Cyberpunk.
*   **🌗 وضع ليلي ونهاري:** اختر بين الوضع المضيء المريح أو الوضع المظلم الأنيق، مع حفظ اختيارك في المتصفح.
*   **💬 عرض تفاعلي للمحادثات:** يتم عرض الرسائل بأسلوب فقاعات الدردشة المألوف، مع تمييز رسائل المستخدم ورسائل ChatGPT.
*   **📜 دعم كامل لـ Markdown:** يتم عرض النصوص المنسقة (عناوين، قوائم، أكواد برمجية، جداول، اقتباسات) بشكل صحيح وجميل.
*   **📱 تصميم متجاوب:** تجربة استخدام ممتازة على جميع الأجهزة، من شاشات سطح المكتب الكبيرة إلى الهواتف المحمولة.
*   **⏳ هياكل تحميل (Skeleton Loaders):** تحسين تجربة المستخدم عبر عرض هياكل مؤقتة أثناء تحميل المحادثة.
*   **🚀 لا يعتمد على أي خادم:** كل شيء يعمل مباشرة في متصفحك.
*   **📦 كل شيء في ملف واحد:** سهولة في التوزيع والاستخدام، فقط ملف `index.html` واحد.

## 🚀 كيفية الاستخدام

الأمر في غاية البساطة:
1.  قم بتنزيل ملف `index.html` من هذا المستودع.
2.  افتح الملف في أي متصفح ويب حديث (مثل Chrome, Firefox, Edge).
3.  انقر على زر **"استيراد ملف JSON"** الموجود في الشريط الجانبي.
4.  اختر ملف المحادثات الخاص بك بصيغة `.json` (اتبع الشرح أدناه لإعداده).
5.  استمتع باستكشاف محادثاتك بتصميمها الجديد! ✨

<details>
<summary><strong>📜 كيف أجهز ملف محادثاتي؟ (اضغط هنا لفتح الشرح)</strong></summary>

لتحويل محادثاتك من ChatGPT إلى صيغة JSON التي يفهمها التطبيق، اتبع هذه الخطوات البسيطة. لا تقلق، العملية أسهل مما تبدو!

### 🧑‍🚀 الخطوة الأولى: طلب بياناتك من ChatGPT

1.  افتح موقع [ChatGPT](https://chat.openai.com) وسجل دخولك.
2.  انقر على اسمك في الزاوية السفلية اليسرى، ثم اختر **Settings**.
3.  في نافذة الإعدادات، اذهب إلى **Data Controls**.
4.  اضغط على زر **Export data** ثم **Confirm export**.
5.  سيصلك بريد إلكتروني من OpenAI قريبًا يحتوي على رابط لتنزيل بياناتك.

### 📦 الخطوة الثانية: تحميل وفك ضغط الملف

1.  افتح بريدك الإلكتروني وابحث عن رسالة بعنوان "Your ChatGPT data export is ready".
2.  اضغط على رابط **Download data export** لتحميل ملف `.zip`.
3.  قم بفك الضغط عن هذا الملف. ستجد بداخله ملفًا مهمًا اسمه `chat.html`.

### 🪄 الخطوة الثالثة: سحر التحويل (تشغيل الكود)

1.  افتح ملف `chat.html` في متصفح ويب حديث (مثل Google Chrome أو Firefox).
2.  افتح "أدوات المطور" (Developer Tools) بالضغط على `F12` (أو `Ctrl+Shift+I` / `Cmd+Opt+I`).
3.  انتقل إلى تبويب **Console**.
4.  **انسخ الكود التالي بالكامل**، ثم الصقه في الـ Console واضغط `Enter`.

```javascript
(function() {
    const conversationNodes = document.querySelectorAll('body > div');
    const conversations = [];

    if (conversationNodes.length === 0) {
        alert("لم يتم العثور على أي محادثات. قد يكون هيكل ملف chat.html قد تغير.");
        return;
    }

    conversationNodes.forEach(node => {
        const titleNode = node.querySelector('h1, h2, h3, h4, h5, h6');
        const messageNodes = node.querySelectorAll('div > div:nth-child(2)');

        if (messageNodes.length > 0) {
            const conversation = {
                title: titleNode ? titleNode.textContent.trim() : `محادثة بتاريخ ${new Date().toLocaleDateString()}`,
                messages: []
            };

            messageNodes.forEach(msgNode => {
                const authorNode = msgNode.querySelector('div:first-child');
                const contentNode = msgNode.querySelector('div:nth-child(2)');

                if (authorNode && contentNode) {
                    let author = authorNode.textContent.trim();
                    if (author.toLowerCase() === 'assistant') {
                        author = 'ChatGPT';
                    }

                    conversation.messages.push({
                        author: author,
                        content: contentNode.textContent.trim()
                    });
                }
            });

            if (conversation.messages.length > 0) {
                conversations.push(conversation);
            }
        }
    });

    if (conversations.length === 0) {
        alert("فشل الاستخراج. لم نتمكن من تحليل الرسائل من الملف.");
        return;
    }

    const jsonString = JSON.stringify(conversations, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversations.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(`نجاح! تم تصدير ${conversations.length} محادثة إلى ملف 'conversations.json'. تحقق من مجلد التنزيلات.`);
})();
```

بمجرد الضغط على `Enter`، سيقوم الكود تلقائيًا بإنشاء وتحميل ملف اسمه **`conversations.json`** إلى جهازك.

### 🌌 الخطوة الرابعة والأخيرة: استكشاف الكون!

1.  ارجع إلى واجهة **"عارض المحادثات الكوني"**.
2.  انقر على زر **"استيراد ملف JSON"**.
3.  اختر ملف **`conversations.json`** الذي قمت بتنزيله للتو.
4.  استمتع باستعراض محادثاتك بشكلها الجديد والمذهل! ✨

</details>

## 🔮 خطط مستقبلية

*   [ ] 🔍 خاصية البحث داخل المحادثات.
*   [ ] 🎨 خيارات تخصيص إضافية للواجهة (Themes).
*   [ ] 📤 تصدير المحادثة كصورة أو ملف PDF.
*   [ ] 🔗 مشاركة رابط لعرض محادثة معينة (مع الحفاظ على الخصوصية).

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

هذا المشروع مرخص تحت رخصة MIT.
