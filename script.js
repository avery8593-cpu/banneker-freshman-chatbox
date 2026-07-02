// Knowledge Base - FAQ Answers
const knowledgeBase = {
    BSI: {
        keywords: ['bsi', 'summer institute', 'banneker summer'],
        answer: `<strong>🎓 Banneker Summer Institute (BSI)</strong><br><br>Yes! All incoming freshmen are <strong>required</strong> to attend BSI. It's a crucial part of your Banneker experience!<br><br><strong>During BSI, you'll:</strong><br>• Meet your classmates before school starts<br>• Learn about Banneker's expectations and academic culture<br>• Participate in bonding activities<br>• Learn about clubs, sports, and extracurricular activities<br>• Choose your academic pathway (AP/Honors or Pre-IB)<br>• Complete any required placement testing<br><br>BSI helps ease your transition and prepares you for the rigorous academics ahead!`
    },

    pathways: {
        keywords: ['ap', 'pre-ib', 'pathway', 'which pathway', 'difference'],
        answer: `<strong>🎯 AP/Honors vs Pre-IB Pathway</strong><br><br><strong>Pre-IB Pathway:</strong><br>• Designed for students interested in the International Baccalaureate (IB) Diploma Programme<br>• Freshmen take French or Spanish<br>• You can later switch to the AP/Honors pathway if you change your mind<br><br><strong>AP/Honors Pathway:</strong><br>• Freshmen take Latin<br>• You can switch to French or Spanish starting sophomore year<br>• ⚠️ <strong>Important:</strong> Once you choose AP/Honors as a freshman, you CANNOT switch to Pre-IB later!<br><br><strong>Pro Tip:</strong> Choose carefully during BSI! Both pathways lead to success—it's about what interests you most.`
    },

    schedule: {
        keywords: ['time', 'hours', 'start', 'end', 'schedule', 'school day'],
        answer: `<strong>⏰ Banneker School Hours</strong><br><br>• <strong>Doors Open:</strong> 8:00 AM<br>• <strong>School Begins:</strong> 8:45 AM<br>• <strong>School Ends:</strong> 3:15 PM<br><br><strong>Important:</strong> Be in your classroom by 8:45 AM, not just entering the building!<br><br><strong>After-School AP Classes:</strong> 3:15 PM – 4:30 PM (optional for freshmen)`
    },

    clubs: {
        keywords: ['clubs', 'activities', 'extracurricular', 'what can i join', 'sports', 'team'],
        answer: `<strong>🏆 Clubs & Extracurricular Activities</strong><br><br>Banneker has SO many ways to get involved! Here are some popular options:<br><br><strong>Sports:</strong> Basketball, Soccer, Volleyball, Track & Field, Softball<br><br><strong>Academic Clubs:</strong> Robotics, Debate, Model UN, It's Academic, Chess Club<br><br><strong>Cultural:</strong> African Student Union, International Club, French Club, Spanish Honor Society, LatinX Club<br><br><strong>Creative:</strong> Drama Club, Dance Team, Orchestra, Photography Club, Poetry Club, Newspaper, Yearbook<br><br><strong>Leadership:</strong> Student Government (SGA), National Honor Society, Peer Mediation, Ethics Bowl<br><br><strong>Service:</strong> Garden Club, Recycling Club, EcoRise<br><br><strong>Special Interest:</strong> Esports, Book Club, Men of Strength (MOST), Women Inspiring Strength & Empowerment (WISE)<br><br><strong>Plus:</strong> You can even help start NEW clubs! Join early to make friends faster!`
    },

    placements: {
        keywords: ['placement test', 'languages', 'french', 'spanish', 'latin', 'world language'],
        answer: `<strong>🌍 Placement Testing & World Languages</strong><br><br><strong>Will I take a placement test?</strong><br>Possibly! If you already have experience in a world language, you may take a placement test to determine your level.<br><br><strong>Banneker Offers Three Languages:</strong><br>• French<br>• Spanish<br>• Latin<br><br><strong>Quick Reminder:</strong><br>• If you choose Pre-IB, you'll take French or Spanish as a freshman<br>• If you choose AP/Honors, you'll take Latin as a freshman`
    },

    ap_classes: {
        keywords: ['ap classes', 'ap course', 'advanced placement', 'after school ap'],
        answer: `<strong>📚 AP Classes at Banneker</strong><br><br><strong>Freshman AP:</strong><br>Every freshman takes <strong>Pre-AP World History</strong>, which prepares you for AP World History in sophomore year.<br><br><strong>After-School AP Options:</strong><br>Want an extra challenge? Freshmen can take ONE after-school AP class (3:15–4:30 PM):<br>• AP African American Studies<br>• AP Macroeconomics<br>• AP Computer Science Principles<br><br>These are optional but great if you want to challenge yourself!`
    },

    difficulty: {
        keywords: ['hard', 'difficult', 'rigorous', 'challenging', 'is banneker hard'],
        answer: `<strong>📖 Is Banneker Hard?</strong><br><br>Yes—Banneker is known for its <strong>challenging academics</strong>. You'll have regular homework, projects, and assessments.<br><br><strong>But here's the good news:</strong><br>✅ Your teachers are here to help<br>✅ Your counselors provide support<br>✅ Your classmates are going through it too<br>✅ You're not alone in this!<br><br>The key is staying organized, asking questions when you need help, and not procrastinating. Thousands of students have succeeded at Banneker—and so can you! 💪`
    },

    events: {
        keywords: ['dances', 'prom', 'winter ball', 'events', 'school events', 'pep rally'],
        answer: `<strong>🎉 School Events & Celebrations</strong><br><br><strong>Dances:</strong><br>• Winter Ball (Every December!) 🎄<br>• Senior Prom (for seniors)<br><br><strong>Throughout the Year:</strong><br>• Pep rallies<br>• School spirit events<br>• Assemblies<br>• Awards ceremonies<br><br>Get involved early and make the most of these moments! There's always something happening at Banneker!`
    },

    service: {
        keywords: ['community service', 'service hours', 'required', 'graduation'],
        answer: `<strong>🤝 Community Service</strong><br><br>Yes! Community service is <strong>part of Banneker's graduation requirements</strong>.<br><br>You'll complete service hours throughout your entire high school career while giving back to your community. It's not just a requirement—it's about making a real difference!`
    },

    banneker_different: {
        keywords: ['what makes banneker', 'different', 'special', 'unique', 'why banneker'],
        answer: `<strong>⭐ What Makes Banneker Special?</strong><br><br>Banneker is a <strong>nationally recognized college preparatory school</strong> with:<br><br>✨ Rigorous Honors courses<br>✨ Advanced Placement (AP) programs<br>✨ International Baccalaureate (IB) programs<br>✨ Strong college preparation<br>✨ Community service opportunities<br>✨ Leadership development<br>✨ Competitive athletics<br>✨ Hundreds of clubs and extracurricular activities<br><br>You'll be challenged academically while preparing for success in college and beyond. It's not just about grades—it's about developing into well-rounded leaders! 🎓`
    },

    nervous: {
        keywords: ['nervous', 'scared', 'worried', 'anxious', 'first day', 'stressed'],
        answer: `<strong>💙 Feeling Nervous? That's Completely Normal!</strong><br><br>Almost EVERYONE feels nervous before their first day at Banneker. Here's what's important to know:<br><br>✅ <strong>You're not alone</strong>—every freshman feels this way<br>✅ <strong>BSI helps ease the transition</strong>—you'll meet classmates and teachers before day one<br>✅ <strong>Familiar faces will greet you</strong>—you'll already know people on the first day!<br><br><strong>Advice from Upper-Classmen:</strong><br>• Take BSI seriously—it really helps<br>• Stay organized from day one<br>• Don't procrastinate<br>• Ask questions when confused<br>• Join clubs and attend events<br>• Remember that EVERYONE is adjusting<br><br>By the time school starts, you'll be ready. You've got this! 🐾`
    },

    advice: {
        keywords: ['advice', 'tips', 'tips for freshman', 'suggestions', 'what should i do'],
        answer: `<strong>💡 Advice from Upper-Classmen</strong><br><br>Here's what successful Banneker students wish they'd known:<br><br>1️⃣ <strong>Take BSI seriously</strong>—it really sets you up for success<br>2️⃣ <strong>Stay organized from day one</strong>—get a planner and use it<br>3️⃣ <strong>Don't procrastinate</strong>—start assignments early<br>4️⃣ <strong>Ask questions</strong>—teachers want to help!<br>5️⃣ <strong>Join clubs early</strong>—you'll make friends faster<br>6️⃣ <strong>Attend school events</strong>—pep rallies, assemblies, etc.<br>7️⃣ <strong>Balance it all</strong>—don't let academics consume everything<br>8️⃣ <strong>Remember</strong>: Everyone is adjusting during freshman year<br><br>You've got a whole community of Bulldogs supporting you! 🐾`
    },

    general: {
        keywords: ['hello', 'hi', 'hey', 'what can you help', 'how', 'tell me'],
        answer: `Hey there, future Bulldog! 🐂 I'm here to help with your freshman questions!<br><br>I can answer questions about:<br>• 📋 <strong>BSI</strong> (Banneker Summer Institute)<br>• 🎯 <strong>Academic Pathways</strong> (AP/Honors vs Pre-IB)<br>• 📅 <strong>Schedule & Hours</strong><br>• 🏆 <strong>Clubs & Sports</strong><br>• 📚 <strong>AP Classes</strong><br>• 🎉 <strong>School Events</strong><br>• 💪 <strong>Getting Adjusted</strong><br>• And much more!<br><br>What would you like to know? Pick a question above or ask me anything! 🐾`
    }
};

// Function to send message
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();

    if (message === '') return;

    // Add user message to chat
    addMessage(message, 'user');
    input.value = '';

    // Get bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

// Function to handle question clicks
function handleQuestion(questionType) {
    const input = document.getElementById('userInput');
    input.value = '';

    // Get the answer based on question type
    const answer = knowledgeBase[questionType].answer;

    // Add user indication
    addMessage(`Tell me about ${questionType}...`, 'user');

    // Add bot response
    setTimeout(() => {
        addMessage(answer, 'bot');
    }, 300);
}

// Function to add message to chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="bulldog-avatar">🐂</div>
            <div class="message-content">${text}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">${escapeHtml(text)}</div>
        `;
    }

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to get bot response
function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check each knowledge base entry
    for (const [key, value] of Object.entries(knowledgeBase)) {
        for (const keyword of value.keywords) {
            if (lowerMessage.includes(keyword)) {
                return value.answer;
            }
        }
    }

    // Default response if no keywords match
    return `I'm not sure about that one, but I can help with questions about:<br><br>📋 Banneker Summer Institute (BSI)<br>🎯 Academic Pathways (AP/Honors vs Pre-IB)<br>📅 School Schedule & Hours<br>🏆 Clubs & Sports<br>📚 AP Classes<br>🎉 School Events<br>💪 Getting Adjusted to Banneker<br><br>Try asking about any of these topics, or click the quick questions above!`;
}

// Function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Welcome message on load
window.addEventListener('load', () => {
    // Chat is ready!
});