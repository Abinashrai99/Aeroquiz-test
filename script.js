/**
 * AEROQUIZ PRO - MASTER ENGINE
 * Includes: Search with Logos, Category-Specific Quizzes, and Professional HUD
 */

const DB = {
    domestic: [
        {"c": "AGR", "n": "Agra Airport, Uttar Pradesh", "f": "in"}, {"c": "AGX", "n": "Agatti, Lakshadweep", "f": "in"},
        {"c": "AMD", "n": "Ahmedabad, Gujarat", "f": "in"}, {"c": "ATQ", "n": "Amritsar, Punjab", "f": "in"},
        {"c": "AYJ", "n": "Ayodhya, Uttar Pradesh", "f": "in"}, {"c": "BBI", "n": "Bhubaneswar, Odisha", "f": "in"},
        {"c": "BDQ", "n": "Vadodara, Gujarat", "f": "in"}, {"c": "BEK", "n": "Rae Bareli, Uttar Pradesh", "f": "in"},
        {"c": "BHJ", "n": "Bhuj, Gujarat", "f": "in"}, {"c": "BHO", "n": "Bhopal, Madhya Pradesh", "f": "in"},
        {"c": "BHU", "n": "Bhavnagar, Gujarat", "f": "in"}, {"c": "BLR", "n": "Bengaluru, Karnataka", "f": "in"},
        {"c": "BOM", "n": "Mumbai, Maharashtra", "f": "in"}, {"c": "CCJ", "n": "calicut, Kerala", "f": "in"},
        {"c": "CCU", "n": "Kolkata, West Bengal", "f": "in"}, {"c": "CJB", "n": "Coimbatore, Tamil Nadu", "f": "in"},
        {"c": "CNN", "n": "Kannur, Tamil Nadu", "f": "in"}, {"c": "COK", "n": "Kochi, Kerala", "f": "in"},
        {"c": "DBR", "n": "Dibrugarh, Assam", "f": "in"}, {"c": "DED", "n": "Dehradun, Uttarakhand", "f": "in"},
        {"c": "DEL", "n": "IG Airport, Delhi", "f": "in"}, {"c": "DGH", "n": "Deoghar, Assam", "f": "in"},
        {"c": "DHM", "n": "Dharamshala, Himachal Pradesh", "f": "in"}, {"c": "DIU", "n": "Diu, Daman and Diu", "f": "in"},
        {"c": "DMU", "n": "Dimapur, Nagaland", "f": "in"}, {"c": "GAU", "n": "Guwahati, Assam", "f": "in"},
        {"c": "GAY", "n": "Gaya, Bihar", "f": "in"}, {"c": "GDB", "n": "Gondia, Maharashtra", "f": "in"},
        {"c": "GOI", "n": "Dabolim Airport, Goa", "f": "in"}, {"c": "GOP", "n": "Gorakhpur, Uttar Pradesh", "f": "in"},
        {"c": "GOX", "n": "Mopa, Goa", "f": "in"}, {"c": "GWL", "n": "Gwalior, Madhya Pradesh", "f": "in"},
        {"c": "HBX", "n": "Hubli, Karnataka", "f": "in"}, {"c": "HDO", "n": "Ghaziabad, Uttar Pradesh", "f": "in"},
        {"c": "HGI", "n": "itanagar, Arunachal Pradesh", "f": "in"}, {"c": "HJR", "n": "Khajuraho, Madhya Pradesh", "f": "in"},
        {"c": "HYD", "n": "Hyderabad, Telangana", "f": "in"}, {"c": "IDR", "n": "Indore, Madhya Pradesh", "f": "in"},
        {"c": "IMF", "n": "Imphal, Manipur", "f": "in"}, {"c": "ISK", "n": "Nashik, Maharashtra", "f": "in"},
        {"c": "IXA", "n": "Agartala, Tripura", "f": "in"}, {"c": "IXB", "n": "Siliguri, West Bengal", "f": "in"},
        {"c": "IXC", "n": "Chandigarh", "f": "in"}, {"c": "IXD", "n": "Prayagraj, Uttar Pradesh", "f": "in"},
        {"c": "IXE", "n": "Mangalore, Karnataka", "f": "in"}, {"c": "IXG", "n": "Belgaum, Karnataka", "f": "in"},
        {"c": "IXI", "n": "Lilabari, Assam", "f": "in"}, {"c": "IXJ", "n": "Jammu, J&K", "f": "in"},
        {"c": "IXL", "n": "Leh, Ladakh", "f": "in"}, {"c": "IXM", "n": "Madurai, Tamil Nadu", "f": "in"},
        {"c": "IXR", "n": "Ranchi, Jharkhand", "f": "in"}, {"c": "IXS", "n": "Silchar, Assam", "f": "in"},
        {"c": "IXU", "n": "Aurangabad, Maharashtra", "f": "in"}, {"c": "IXY", "n": "Kandla, Gujarat", "f": "in"},
        {"c": "IXZ", "n": "Port Blair", "f": "in"}, {"c": "JAI", "n": "Jaipur, Rajasthan", "f": "in"},
        {"c": "JDH", "n": "Jodhpur, Rajasthan", "f": "in"}, {"c": "JGB", "n": "Jagdalpur, Chhattisgarh", "f": "in"},
        {"c": "JLR", "n": "Jabalpur, Madhya Pradesh", "f": "in"}, {"c": "JRG", "n": "Jharsugada, Assam", "f": "in"},
        {"c": "JRH", "n": "Jorhat, Assam", "f": "in"}, {"c": "JSA", "n": "Jaisalmer, Rajasthan", "f": "in"},
        {"c": "KBK", "n": "kushinagar, Andhra Pradesh", "f": "in"}, {"c": "KJB", "n": "kurnool, Andhra Pradesh", "f": "in"},
        {"c": "KLH", "n": "Kolhapur, Maharashtra", "f": "in"}, {"c": "KNU", "n": "Kanpur, Uttar Pradesh", "f": "in"},
        {"c": "KQH", "n": "kishangarh, Rajasthan", "f": "in"}, {"c": "LKO", "n": "Lucknow, Uttar Pradesh", "f": "in"},
        {"c": "MAA", "n": "Chennai, Tamil Nadu", "f": "in"}, {"c": "MYQ", "n": "Mysore, Karnataka", "f": "in"},
        {"c": "NAG", "n": "Nagpur, Maharashtra", "f": "in"}, {"c": "PAT", "n": "Patna, Bihar", "f": "in"},
        {"c": "PBD", "n": "Porbandar, Gujarat", "f": "in"}, {"c": "PGH", "n": "Nainital Pantnagar", "f": "in"},
        {"c": "PNQ", "n": "Pune, Maharashtra", "f": "in"}, {"c": "PNY", "n": "Pondicherry, Puducherry", "f": "in"},
        {"c": "RAJ", "n": "Rajkot, Gujarat", "f": "in"}, {"c": "RDP", "n": "Durgapur, West Bengal", "f": "in"},
        {"c": "RJA", "n": "Rajahmundry, Andhra Pradesh", "f": "in"}, {"c": "RRL", "n": "Rae Bareli, Uttar Pradesh", "f": "in"},
        {"c": "SHL", "n": "Shillong, Meghalaya", "f": "in"}, {"c": "STV", "n": "Surat, Gujarat", "f": "in"},
        {"c": "SXR", "n": "Srinagar, J&K", "f": "in"}, {"c": "TCR", "n": "Tuticorin, Tamil Nadu", "f": "in"},
        {"c": "TEZ", "n": "Tezpur, Assam", "f": "in"}, {"c": "TIR", "n": "Tirupati, Andhra Pradesh", "f": "in"},
        {"c": "TRV", "n": "Thiruvananthapuram, Kerala", "f": "in"}, {"c": "TRZ", "n": "Tiruchirappalli, Tamil Nadu", "f": "in"},
        {"c": "UDR", "n": "Udaipur, Rajasthan", "f": "in"}, {"c": "VGA", "n": "Vijayawada, Andhra Pradesh", "f": "in"},
        {"c": "VNS", "n": "Varanasi, Uttar Pradesh", "f": "in"}, {"c": "VTZ", "n": "Visakhapatnam, Andhra Pradesh", "f": "in"}
    ],
    intl: [
        {"c": "ATL", "n": "Hartsfield-Jackson Atlanta", "f": "us"}, {"c": "DXB", "n": "Dubai International", "f": "ae"},
        {"c": "DFW", "n": "Dallas/Fort Worth", "f": "us"}, {"c": "HND", "n": "Tokyo Haneda", "f": "jp"},
        {"c": "LHR", "n": "London Heathrow", "f": "gb"}, {"c": "DEN", "n": "Denver International", "f": "us"},
        {"c": "IST", "n": "Istanbul Airport", "f": "tr"}, {"c": "ORD", "n": "O'Hare Chicago", "f": "us"},
        {"c": "DEL", "n": "Indira Gandhi International", "f": "in"}, {"c": "PVG", "n": "Shanghai Pudong", "f": "cn"},
        {"c": "LAX", "n": "Los Angeles International", "f": "us"}, {"c": "CAN", "n": "Guangzhou Baiyun", "f": "cn"},
        {"c": "JFK", "n": "John F. Kennedy New York", "f": "us"}, {"c": "AMS", "n": "Amsterdam Schiphol", "f": "nl"},
        {"c": "MAD", "n": "Madrid-Barajas Adolfo Suárez", "f": "es"}, {"c": "FRA", "n": "Frankfurt Airport", "f": "de"},
        {"c": "ICN", "n": "Seoul Incheon", "f": "kr"}, {"c": "SIN", "n": "Singapore Changi", "f": "sg"},
        {"c": "BCN", "n": "Barcelona-El Prat", "f": "es"}, {"c": "MIA", "n": "Miami International", "f": "us"},
        {"c": "YYZ", "n": "Toronto Pearson", "f": "ca"}, {"c": "PEK", "n": "Beijing Capital", "f": "cn"},
        {"c": "CLT", "n": "Charlotte Douglas", "f": "us"}, {"c": "PHX", "n": "Phoenix Sky Harbor", "f": "us"},
        {"c": "IAH", "n": "Houston George Bush", "f": "us"}, {"c": "EWR", "n": "Newark Liberty", "f": "us"},
        {"c": "SEA", "n": "Seattle-Tacoma", "f": "us"}, {"c": "LGW", "n": "London Gatwick", "f": "gb"},
        {"c": "GRU", "n": "São Paulo-Guarulhos", "f": "br"}, {"c": "BOS", "n": "Boston Logan", "f": "us"},
        {"c": "MUC", "n": "Munich Airport", "f": "de"}, {"c": "LAS", "n": "Las Vegas Harry Reid", "f": "us"},
        {"c": "SZX", "n": "Shenzhen Bao'an", "f": "cn"}, {"c": "MEX", "n": "Mexico City International", "f": "mx"},
        {"c": "PKX", "n": "Beijing Daxing", "f": "cn"}, {"c": "SHA", "n": "Shanghai Hongqiao", "f": "cn"},
        {"c": "OSL", "n": "Oslo Gardermoen", "f": "no"}, {"c": "ZRH", "n": "Zurich Airport", "f": "ch"},
        {"c": "CPH", "n": "Copenhagen Airport", "f": "dk"}, {"c": "FCO", "n": "Rome Fiumicino", "f": "it"},
        {"c": "VIE", "n": "Vienna International", "f": "at"}, {"c": "LIS", "n": "Lisbon Portela", "f": "pt"},
        {"c": "DOH", "n": "Doha Hamad International", "f": "qa"}, {"c": "BKK", "n": "Bangkok Suvarnabhumi", "f": "th"},
        {"c": "KUL", "n": "Kuala Lumpur International", "f": "my"}, {"c": "HKG", "n": "Hong Kong International", "f": "hk"},
        {"c": "MEL", "n": "Melbourne Airport", "f": "au"}, {"c": "SYD", "n": "Sydney Kingsford Smith", "f": "au"},
        {"c": "AKL", "n": "Auckland Airport", "f": "nz"}
    ],
    airlines: [
        {"c": "EK", "n": "Emirates", "h": "Dubai (DXB)", "d": "emirates.com"},
        {"c": "JL", "n": "Japan Airlines", "h": "Tokyo Haneda (HND)", "d": "jal.co.jp"},
        {"c": "SQ", "n": "Singapore Airlines", "h": "Singapore Changi (SIN)", "d": "singaporeair.com"},
        {"c": "LH", "n": "Lufthansa", "h": "Frankfurt (FRA)", "d": "lufthansa.com"},
        {"c": "BA", "n": "British Airways", "h": "London Heathrow (LHR)", "d": "britishairways.com"},
        {"c": "QR", "n": "Qatar Airways", "h": "Hamad (DOH)", "d": "qatarairways.com"},
        {"c": "CX", "n": "Cathay Pacific", "h": "Hong Kong (HKG)", "d": "cathaypacific.com"},
        {"c": "6E", "n": "IndiGo", "h": "Delhi (DEL)", "d": "goindigo.in"},
        {"c": "AI", "n": "Air India", "h": "Delhi (DEL)", "d": "airindia.in"},
        {"c": "UK", "n": "Vistara", "h": "Delhi (DEL)", "d": "airvistara.com"},
        {"c": "EY", "n": "Etihad Airways", "h": "Abu Dhabi (AUH)", "d": "etihad.com"},
        {"c": "TK", "n": "Turkish Airlines", "h": "Istanbul (IST)", "d": "turkishairlines.com"},
        {"c": "AF", "n": "Air France", "h": "Paris (CDG)", "d": "airfrance.com"},
        {"c": "KL", "n": "KLM Royal Dutch", "h": "Amsterdam (AMS)", "d": "klm.com"},
        {"c": "QF", "n": "Qantas", "h": "Sydney (SYD)", "d": "qantas.com"},
        {"c": "SG", "n": "SpiceJet", "h": "Delhi (DEL)", "d": "spicejet.com"},
        {"c": "QP", "n": "Akasa Air", "h": "Mumbai (BOM)", "d": "akasaair.com"}
    ]
};

let game = { pool: [], idx: 0, pts: 0, mode: '', timer: null };

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startMission(mode) {
    game = { 
        pool: [...DB[mode]].sort(() => Math.random() - 0.5).slice(0, 20), 
        idx: 0, pts: 0, mode: mode 
    };
    showScreen('scr-game');
    renderQuestion();
}

function renderQuestion() {
    if (game.idx >= game.pool.length) return endMission();
    
    const q = game.pool[game.idx];
    const isReverse = Math.random() > 0.5; // Randomly flip question type
    
    document.getElementById('hud-q').innerText = game.idx + 1;
    document.getElementById('hud-p').innerText = game.pts;
    document.getElementById('feedback').innerText = "";

    const imgCont = document.getElementById('q-img-cont');
    const textCont = document.getElementById('q-text');
    imgCont.innerHTML = "";

    // AIRLINE SPECIAL LOGIC
    if (game.mode === 'airlines') {
        imgCont.innerHTML = `<img src="https://logo.clearbit.com/${q.d}" class="logo-large" onerror="this.src='https://via.placeholder.com/80?text=✈️'">`;
        
        if (isReverse) {
            // Type: Code + Hub -> Name
            textCont.innerHTML = `<span style="color:#3b82f6; font-size:1.8rem;">${q.c}</span><br><small>Main Hub: ${q.h}</small>`;
            setupOptions(q.n, 'n');
        } else {
            // Type: Name + Hub -> Code
            textCont.innerHTML = `${q.n}<br><small>Main Hub: ${q.h}</small>`;
            setupOptions(q.c, 'c');
        }
    } else {
        // Standard Airport logic
        textCont.innerHTML = q.n + (q.f ? `<img src="https://flagcdn.com/w40/${q.f}.png" class="flag-inline">` : "");
        setupOptions(q.c, 'c');
    }

    startTimer();
}

function setupOptions(correctVal, field) {
    let options = [correctVal];
    let pool = DB[game.mode].filter(x => x[field] !== correctVal);
    
    while (options.length < 4 && pool.length > 0) {
        let pick = pool.splice(Math.floor(Math.random() * pool.length), 1)[0][field];
        if (!options.includes(pick)) options.push(pick);
    }
    options.sort(() => Math.random() - 0.5);

    const grid = document.getElementById('opt-grid');
    grid.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-opt';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt === correctVal, correctVal);
        grid.appendChild(btn);
    });
}

function startTimer() {
    clearInterval(game.timer);
    let left = 100;
    game.timer = setInterval(() => {
        left -= 0.8; // Roughly 12 seconds
        document.getElementById('timer-bar').style.width = left + "%";
        if (left <= 0) { clearInterval(game.timer); checkAnswer(false, "Time Out"); }
    }, 100);
}

function checkAnswer(isOk, correctVal) {
    clearInterval(game.timer);
    document.querySelectorAll('.btn-opt').forEach(b => b.disabled = true);
    const feed = document.getElementById('feedback');

    if (isOk) {
        game.pts += 10;
        feed.innerHTML = "<span style='color:#10b981'>✔ CORRECT</span>";
        document.getElementById('aud-ok').play().catch(()=>{});
    } else {
        feed.innerHTML = `<span style='color:#ef4444'>✘ WRONG: ${correctVal}</span>`;
        document.getElementById('aud-no').play().catch(()=>{});
    }

    game.idx++;
    setTimeout(renderQuestion, 1500);
}

function endMission() {
    showScreen('scr-res');
    document.getElementById('res-score').innerText = game.pts;
    document.getElementById('res-acc').innerText = `Accuracy: ${Math.round((game.pts/(game.idx*10))*100)}%`;
}

window.onload = () => showScreen('scr-menu');