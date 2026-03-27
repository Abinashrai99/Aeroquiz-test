/**
 * AEROQUIZ PRO - SPECIAL MISSION: 33 TARGET AIRLINES
 * Question Type: "What is the IATA code and Main Hub point of [Airline Name]?"
 */

const DB = {
    airlines: [
        {c:"AA", n:"American Airlines", h:"Dallas (DFW)", d:"aa.com"},
        {c:"UA", n:"United Airlines", h:"Chicago (ORD)", d:"united.com"},
        {c:"DL", n:"Delta Air Lines", h:"Atlanta (ATL)", d:"delta.com"},
        {c:"WN", n:"Southwest Airlines", h:"Dallas Love Field (DAL)", d:"southwest.com"},
        {c:"B6", n:"JetBlue Airways", h:"New York (JFK)", d:"jetblue.com"},
        {c:"AS", n:"Alaska Airlines", h:"Seattle (SEA)", d:"alaskaair.com"},
        {c:"F9", n:"Frontier Airlines", h:"Denver (DEN)", d:"flyfrontier.com"},
        {c:"AC", n:"Air Canada", h:"Toronto (YYZ)", d:"aircanada.com"},
        {c:"NK", n:"Spirit Airlines", h:"Fort Lauderdale (FLL)", d:"spirit.com"},
        {c:"BA", n:"British Airways", h:"London (LHR)", d:"britishairways.com"},
        {c:"AF", n:"Air France", h:"Paris (CDG)", d:"airfrance.com"},
        {c:"LH", n:"Lufthansa", h:"Frankfurt (FRA)", d:"lufthansa.com"},
        {c:"SK", n:"SAS (Scandinavian Airlines)", h:"Copenhagen (CPH)", d:"sas.no"},
        {c:"KL", n:"KLM Royal Dutch Airlines", h:"Amsterdam (AMS)", d:"klm.com"},
        {c:"AY", n:"Finnair", h:"Helsinki (HEL)", d:"finnair.com"},
        {c:"TK", n:"Turkish Airlines", h:"Istanbul (IST)", d:"turkishairlines.com"},
        {c:"AZ", n:"ITA Airways", h:"Rome (FCO)", d:"ita-airways.com"},
        {c:"SA", n:"South African Airways", h:"Johannesburg (JNB)", d:"flysaa.com"},
        {c:"ET", n:"Ethiopian Airlines", h:"Addis Ababa (ADD)", d:"ethiopianairlines.com"},
        {c:"TU", n:"Tunisair", h:"Tunis (TUN)", d:"tunisair.com"},
        {c:"AT", n:"Royal Air Maroc", h:"Casablanca (CMN)", d:"royalairmaroc.com"},
        {c:"EK", n:"Emirates", h:"Dubai (DXB)", d:"emirates.com"},
        {c:"EY", n:"Etihad Airways", h:"Abu Dhabi (AUH)", d:"etihad.com"},
        {c:"WY", n:"Oman Air", h:"Muscat (MCT)", d:"omanair.com"},
        {c:"NH", n:"ANA (All Nippon Airways)", h:"Tokyo Haneda (HND)", d:"ana.co.jp"},
        {c:"SV", n:"Saudia", h:"Jeddah (JED)", d:"saudia.com"},
        {c:"AK", n:"AirAsia", h:"Kuala Lumpur (KUL)", d:"airasia.com"},
        {c:"CA", n:"Air China", h:"Beijing (PEK)", d:"airchina.com"},
        {c:"MU", n:"China Eastern Airlines", h:"Shanghai (PVG)", d:"ceair.com"},
        {c:"CZ", n:"China Southern Airlines", h:"Guangzhou (CAN)", d:"csair.com"},
        {c:"XS", n:"Air Sial", h:"Karachi (KHI)", d:"airsial.com"},
        {c:"LO", n:"LOT Polish Airlines", h:"Warsaw (WAW)", d:"lot.com"},
        {c:"QF", n:"Qantas", h:"Sydney (SYD)", d:"qantas.com"}
    ]
};

let game = { pool: [], idx: 0, pts: 0, timer: null };

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/**
 * START MISSION - Specifically for the 33 airlines provided.
 */
function startAirlineMission() {
    game = { 
        pool: [...DB.airlines].sort(() => Math.random() - 0.5), 
        idx: 0, pts: 0 
    };
    showScreen('scr-game');
    renderQuestion();
}

function renderQuestion() {
    if (game.idx >= game.pool.length) return endMission();
    
    const q = game.pool[game.idx];
    const isReverse = Math.random() > 0.5; // Toggle between Name -> Code/Hub and Code/Hub -> Name
    
    document.getElementById('hud-q').innerText = `${game.idx + 1} / ${game.pool.length}`;
    document.getElementById('hud-p').innerText = game.pts;
    document.getElementById('feedback').innerText = "";

    const imgCont = document.getElementById('q-img-cont');
    const textCont = document.getElementById('q-text');
    imgCont.innerHTML = `<img src="https://logo.clearbit.com/${q.d}" class="logo-large" onerror="this.src='https://via.placeholder.com/80?text=✈️'">`;

    if (isReverse) {
        // Question: Shown Code & Hub -> Identify Airline Name
        textCont.innerHTML = `What airline has IATA code <b>${q.c}</b> and Main Hub <b>${q.h}</b>?`;
        generateOptions(q.n, 'n');
    } else {
        // Question: Shown Name -> Identify Code & Hub
        textCont.innerHTML = `What is the IATA code and Main Hub point of <b>${q.n}</b>?`;
        generateOptions(`${q.c}, ${q.h}`, 'combined', q);
    }
    startTimer();
}

/**
 * GENERATE MULTIPLE CHOICE OPTIONS
 */
function generateOptions(correctValue, type, originalObj) {
    let options = [correctValue];
    let others = DB.airlines.filter(x => x.c !== (originalObj ? originalObj.c : ""));
    
    while(options.length < 4 && others.length > 0) {
        let rand = others.splice(Math.floor(Math.random() * others.length), 1)[0];
        let val = (type === 'n') ? rand.n : `${rand.c}, ${rand.h}`;
        if(!options.includes(val)) options.push(val);
    }
    
    options.sort(() => Math.random() - 0.5);
    const grid = document.getElementById('opt-grid');
    grid.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-opt';
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(opt === correctValue, correctValue);
        grid.appendChild(btn);
    });
}

function startTimer() {
    clearInterval(game.timer);
    let l = 100;
    game.timer = setInterval(() => {
        l -= 0.8; 
        document.getElementById('timer-bar').style.width = l + "%";
        if (l <= 0) { clearInterval(game.timer); checkAnswer(false, "Time Out"); }
    }, 100);
}

function checkAnswer(isOk, correctVal) {
    clearInterval(game.timer);
    document.querySelectorAll('.btn-opt').forEach(b => b.disabled = true);
    const feed = document.getElementById('feedback');

    if (isOk) {
        game.pts += 10;
        feed.innerHTML = "<span style='color:#10b981'>✔ CORRECT</span>";
    } else {
        feed.innerHTML = `<span style='color:#ef4444'>✘ WRONG: ${correctVal}</span>`;
    }

    game.idx++;
    setTimeout(renderQuestion, 1500);
}

function endMission() {
    showScreen('scr-res');
    document.getElementById('res-score').innerText = game.pts;
    document.getElementById('res-acc').innerText = `You completed all ${game.pool.length} Airlines!`;
}

function startDomesticMission() {
    game = { 
        pool: [...DB.domestic].sort(() => Math.random() - 0.5), 
        idx: 0, pts: 0, mode: 'domestic' 
    };
    showScreen('scr-game');
    renderQuestion();
}

function startIntlMission() {
    game = { 
        pool: [...DB.intl].sort(() => Math.random() - 0.5), 
        idx: 0, pts: 0, mode: 'intl' 
    };
    showScreen('scr-game');
    renderQuestion();
}

window.onload = () => showScreen('scr-menu');