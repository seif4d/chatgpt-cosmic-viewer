
        document.addEventListener('DOMContentLoaded', () => {

             const body = document.body;
             const fileInput = document.getElementById('fileInput');
             const statusMessage = document.getElementById('statusMessage');
             const conversationList = document.getElementById('conversation-list');
             const conversationDisplayMessages = document.getElementById('conversation-display-messages');
             const conversationTitleDisplay = document.getElementById('conversation-title-display');
             const initialMessage = document.getElementById('initial-message');
             const darkModeToggle = document.getElementById('darkModeToggle');
             const sidebarToggle = document.getElementById('sidebarToggle');
             const sidebar = document.getElementById('sidebar');

             const svgIconSun = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zm-9 7c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0-18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm-5.66 2.93c.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41zm11.32 0c.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41zm-1.41 11.32c-.39.39-1.02.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41zm-9.9 0c-.39.39-1.02.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41z"/></svg>`;
             const svgIconMoon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.37 5.51c-.18.64.27 1.27.94 1.41.92.19 1.79.56 2.54 1.08.53.37.82.96.76 1.58-.07.72-.48 1.33-1.06 1.77-.44.33-.7.85-.66 1.38.05.58.49 1.04 1.07 1.23.8.27 1.64.39 2.49.36.71-.02 1.37-.22 1.95-.54.49-.26.85-.74.85-1.3 0-.5-.25-.93-.65-1.21-.38-.28-.79-.5-1.21-.66-.43-.16-.74-.51-.81-.96-.06-.44.12-.88.45-1.17.49-.43 1.1-.67 1.75-.75.7-.09 1.35.2 1.79.71.26.3.66.45 1.05.36.39-.09.69-.42.75-.83.1-.7-.25-1.37-.83-1.82-.64-.5-1.4-.8-2.2-.93C14.32 3.63 10.79 3.46 7.74 5.2c-.6.34-1 .96-.93 1.63.03.32.14.63.31.9.27.43.14.99-.29 1.26-.43.27-.99.14-1.26-.29-.43-.67-.65-1.41-.64-2.17C4.95 4.71 7.29 2.91 10.08 2.3c1.09-.23 2.23-.23 3.34.01.73.15 1.44.42 2.08.81.5.29.94.69 1.28 1.18.33.49.54 1.06.59 1.67.06.7-.17 1.38-.62 1.94-.51.62-1.26.98-2.07 1.04-.78.06-1.53-.15-2.17-.53-.5-.3-.92-.75-1.16-1.29-.13-.3-.4-.51-.74-.59-.34-.08-.71.04-1 .29z"/></svg>`;
             const svgIconMenu = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
             const svgIconClose = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>`;

             let allConversations = [];
             let activeListItem = null;
             let isDarkMode = false;
             let primaryColorRGB = { r: 102, g: 93, b: 245 };

             function initializeTheme() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
             }

            function setDarkMode(isDark) {
                 isDarkMode = isDark;
                 if (isDark) {
                     body.classList.add('dark-mode');
                     darkModeToggle.innerHTML = svgIconSun;
                     darkModeToggle.title = 'الوضع الفاتح';
                     primaryColorRGB = { r: 126, g: 120, b: 250 };
                 } else {
                     body.classList.remove('dark-mode');
                     darkModeToggle.innerHTML = svgIconMoon;
                     darkModeToggle.title = 'الوضع الداكن';
                     primaryColorRGB = { r: 102, g: 93, b: 245 };
                 }
                 body.style.setProperty('--primary-rgb', `${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}`);
                 sidebarToggle.innerHTML = svgIconMenu;
                 sidebarToggle.title = 'عرض القائمة';
                 sidebar.classList.remove('visible');
                 body.classList.remove('sidebar-overlay-active');
             }

             function toggleDarkMode() {
                 setDarkMode(!isDarkMode);
                 localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
             }

             function toggleSidebar(forceOpen = null) {
                  const shouldBeVisible = forceOpen === null ? !sidebar.classList.contains('visible') : forceOpen;
                 if (shouldBeVisible) {
                     sidebar.classList.add('visible');
                     body.classList.add('sidebar-overlay-active');
                     sidebarToggle.innerHTML = svgIconClose;
                     sidebarToggle.title = 'إخفاء القائمة';
                 } else {
                     sidebar.classList.remove('visible');
                     body.classList.remove('sidebar-overlay-active');
                     sidebarToggle.innerHTML = svgIconMenu;
                     sidebarToggle.title = 'عرض القائمة';
                 }
             }

            function handleFileSelect(event) {
                const file = event.target.files[0];
                if (!file) {
                    statusMessage.textContent = 'لم يتم اختيار ملف.';
                    return;
                }
                if (!file.type.includes('json') && !file.name.endsWith('.json')) {
                    statusMessage.textContent = 'خطأ: الملف ليس JSON.';
                    alert('الرجاء اختيار ملف بصيغة JSON.');
                    fileInput.value = null;
                    return;
                }
                resetUIBeforeLoad();
                const reader = new FileReader();
                reader.onload = (e) => processFileContent(e.target.result);
                reader.onerror = handleFileReadError;
                reader.readAsText(file);
            }

             function resetUIBeforeLoad() {
                 conversationList.innerHTML = '';
                 conversationDisplayMessages.innerHTML = '';
                 conversationTitleDisplay.textContent = '---';
                 initialMessage.style.display = 'block';
                 initialMessage.innerHTML = "يتم الآن استدعاء البيانات الكونية...";
                 statusMessage.innerHTML = ' <span class="loader"></span> جاري فتح البوابة الزمنية...';
                 allConversations = [];
                 activeListItem = null;
                 if (window.innerWidth <= 768) toggleSidebar(false);
             }

            function processFileContent(content) {
                 statusMessage.innerHTML = '<span class="loader"></span> تحليل النجوم...';
                 requestAnimationFrame(() => {
                     try {
                         allConversations = JSON.parse(content);
                         if (!Array.isArray(allConversations)) throw new Error("البيانات تسبح في فضاء غير معروف (مصفوفة مطلوبة).");
                         statusMessage.textContent = `🌌 تم استقبال ${allConversations.length} إشارة كونية! 🌌`;
                         initialMessage.textContent = "اختر إشارة لاستكشاف تفاصيلها المذهلة ✨";
                         populateSidebar();
                         if (allConversations.length > 0) {
                             const firstItem = conversationList.querySelector('li');
                             if (firstItem) firstItem.click();
                         } else {
                             conversationTitleDisplay.textContent = 'الفضاء الخالي!';
                             initialMessage.textContent = "لا توجد إشارات مسجلة في هذا السجل الكوني.";
                         }
                     } catch (parseError) {
                         handleJsonParseError(parseError);
                     }
                 });
            }

            function handleFileReadError(e) {
                console.error("FileReader Error:", e);
                statusMessage.textContent = '⚠️ فشل الاتصال بالبعد الآخر!';
                initialMessage.innerHTML = "حدث اضطراب كوني أثناء محاولة قراءة الملف.";
                conversationTitleDisplay.textContent = 'خطأ الاتصال';
                alert('خطأ في قراءة الملف.');
                fileInput.value = null;
            }

            function handleJsonParseError(error) {
                console.error("JSON Parse Error:", error);
                statusMessage.textContent = `⚠️ تشويش في الإشارة (JSON)`;
                initialMessage.innerHTML = `<b>خطأ في فك الشفرة:</b><br>${error.message}.<br>يبدو أن الإشارة تالفة، تأكد من سلامة ملف JSON.`;
                conversationTitleDisplay.textContent = 'خطأ في الإشارة';
                alert(`خطأ في تحليل ملف JSON:\n${error.message}`);
                fileInput.value = null;
            }

            function populateSidebar() {
                conversationList.innerHTML = '';
                if (allConversations.length === 0) return;
                const fragment = document.createDocumentFragment();
                allConversations.forEach((convo, index) => {
                    const listItem = document.createElement('li');
                    const titleText = convo.title || `الإشارة الغامضة #${index + 1}`;
                    listItem.textContent = titleText;
                    listItem.title = titleText;
                    listItem.dataset.index = index;
                    listItem.addEventListener('click', () => {
                        if (activeListItem) activeListItem.classList.remove('active');
                        listItem.classList.add('active');
                        activeListItem = listItem;
                        displayConversation(index);
                        if (window.innerWidth <= 768 && sidebar.classList.contains('visible')) {
                            toggleSidebar(false);
                        }
                    });
                    fragment.appendChild(listItem);
                });
                conversationList.appendChild(fragment);
            }

            function displayConversation(index) {
                 if (index < 0 || index >= allConversations.length) return;

                 const conversationData = allConversations[index];
                 conversationTitleDisplay.textContent = conversationData.title || `الإشارة الغامضة #${index + 1}`;
                 initialMessage.style.display = 'none';

                conversationDisplayMessages.innerHTML = generateSkeletonLoadersHTML(5);
                 conversationDisplayMessages.scrollTop = 0;

                 setTimeout(() => {
                     const fragment = document.createDocumentFragment();
                     let messageDelay = 0;

                     if (conversationData.messages && conversationData.messages.length > 0) {
                         conversationData.messages.forEach(messageData => {
                             if (isValidMessage(messageData)) {
                                 const messageElement = createMessageElement(messageData);
                                 messageElement.style.animationDelay = `${messageDelay}ms`;
                                 fragment.appendChild(messageElement);
                                 messageDelay += 70;
                             }
                         });
                     } else {
                        const noMessages = document.createElement('p');
                        noMessages.textContent = "سكون كوني... لا توجد أصداء هنا. ☄️";
                        noMessages.style.cssText = 'text-align: center; color: var(--text-secondary); padding: 40px; font-style: italic; font-size: 1.15em;';
                         fragment.appendChild(noMessages);
                    }

                    conversationDisplayMessages.innerHTML = '';
                    conversationDisplayMessages.appendChild(fragment);

                }, 250);
             }

            function generateSkeletonLoadersHTML(count = 3) {
                let html = '';
                for (let i = 0; i < count; i++) {
                    const isUser = i % 2 !== 0;
                    html += `
                        <div class="skeleton-message ${isUser ? 'user-skel' : 'ai-skel'}" style="animation-delay: ${i * 100}ms;">
                            <div class="skeleton-avatar"></div>
                            <div class="skeleton-content">
                                <div class="skeleton-line short"></div>
                                <div class="skeleton-line"></div>
                                <div class="skeleton-line medium"></div>
                                ${ Math.random() > 0.4 ? '<div class="skeleton-line short"></div>' : '' }
                            </div>
                        </div>
                    `;
                }
                return html;
            }

             function isValidMessage(messageData) {
                 return messageData && typeof messageData.author === 'string' && typeof messageData.content === 'string';
             }

            function createMessageElement(messageData) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message';

                const authorSpan = document.createElement('span');
                authorSpan.className = 'author';
                // Display custom author names with icons
                if (messageData.author.toLowerCase() === 'user') {
                    authorSpan.textContent = 'أنت 🚀';
                    messageDiv.classList.add('user-message');
                } else {
                    authorSpan.textContent = 'ChatGPT 🤖';
                    messageDiv.classList.add('ai-message');
                }
                messageDiv.appendChild(authorSpan);

                const contentDiv = document.createElement('div');
                contentDiv.className = 'message-content';
                try {
                    const rawHtml = marked.parse(messageData.content);
                    contentDiv.innerHTML = DOMPurify.sanitize(rawHtml);
                } catch (e) {
                    console.error("Markdown/Sanitize Error:", e, "Msg:", messageData);
                    contentDiv.textContent = messageData.content;
                }
                messageDiv.appendChild(contentDiv);

                return messageDiv;
            }

             // --- Event Listeners & Initial State ---
             initializeTheme();
             fileInput.addEventListener('change', handleFileSelect);
             darkModeToggle.addEventListener('click', toggleDarkMode);
             sidebarToggle.addEventListener('click', () => toggleSidebar());
             document.addEventListener('click', (event) => {
                if (window.innerWidth <= 768 && sidebar.classList.contains('visible')) {
                    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target) && event.target !== sidebarToggle ) {
                        toggleSidebar(false);
                    }
                }
             });

             statusMessage.textContent = '🌌 مستعد لاستقبال الإشارات الكونية...';
             conversationTitleDisplay.textContent = '🌌 عارض المحادثات الكوني 🌌';

        });
