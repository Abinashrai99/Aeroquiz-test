const DB = {
    domestic: [
        {"c": "DEL", "n": "Indira Gandhi Intl, Delhi", "f": "in"}, {"c": "BOM", "n": "Mumbai Airport", "f": "in"},
        {"c": "BLR", "n": "Bengaluru Airport", "f": "in"}, {"c": "MAA", "n": "Chennai Intl", "f": "in"},
        {"c": "CCU", "n": "Kolkata, West Bengal", "f": "in"}, {"c": "HYD", "n": "Hyderabad, Telangana", "f": "in"},
        {"c": "PNQ", "n": "Pune, Maharashtra", "f": "in"}, {"c": "AMD", "n": "Ahmedabad, Gujarat", "f": "in"}
    ],
    intl: [
        {"c": "DXB", "n": "Dubai International", "f": "ae"}, {"c": "LHR", "n": "London Heathrow", "f": "gb"},
        {"c": "SIN", "n": "Singapore Changi", "f": "sg"}, {"c": "JFK", "n": "New York JFK", "f": "us"}
    ],
    airlines: [
        {c:"EK", n:"Emirates", h:"Dubai (DXB)", d:"emirates.com"},
        {c:"JL", n:"Japan Airlines", h:"Tokyo Haneda (HND)", d:"jal.co.jp"},
        {c:"SQ", n:"Singapore Airlines", h:"Singapore (SIN)", d:"singaporeair.com"},
        {c:"LH", n:"Lufthansa", h:"Frankfurt (FRA)", d:"lufthansa.com"},
        {c:"AT", n:"ROYAL AIR MAROC", h:"Casablanca (CMN)", d:"royalairmaroc.com"},
        {c:"BA", n:"British Airways", h:"London (LHR)", d:"britishairways.com"},
        {c:"QR", n:"Qatar Airways", h:"Hamad (DOH)", d:"qatarairways.com"},
        {c:"CX", n:"Cathay Pacific", h:"Hong Kong (HKG)", d:"cathaypacific.com"},
        {c:"KE", n:"Korean Air", h:"Seoul (ICN)", d:"koreanair.com"},
        {c:"NH", n:"ANA", h:"Tokyo Haneda (HND)", d:"ana.co.jp"},
        {c:"BR", n:"EVA Air", h:"Taiwan (TPE)", d:"evaair.com"},
        {c:"AY", n:"Finnair", h:"Helsinki (HEL)", d:"finnair.com"},
        {c:"TG", n:"Thai Airways", h:"Bangkok (BKK)", d:"thaiairways.com"},
        {c:"VN", n:"Vietnam Airlines", h:"Noi Bai (HAN)", d:"vietnamairlines.com"},
        {c:"MH", n:"Malaysia Airlines", h:"Kuala Lumpur (KUL)", d:"malaysiaairlines.com"},
        {c:"WY", n:"Oman Air", h:"Muscat (MCT)", d:"omanair.com"},
        {c:"TK", n:"Turkish Airlines", h:"Istanbul (IST)", d:"turkishairlines.com"},
        {c:"EY", n:"Etihad Airways", h:"Abu Dhabi (AUH)", d:"etihad.com"},
        {c:"OZ", n:"Asiana Airlines", h:"Seoul (ICN)", d:"flyasiana.com"},
        {c:"K6", n:"Air Cambodia", h:"Phnom Penh (PNH)", d:"aircambodia.com"},
        {c:"AZ", n:"ITA Airways", h:"Rome (FCO)", d:"ita-airways.com"},
        {c:"G9", n:"AIR ARABIA", h:"Sharjah (SHJ)", d:"airarabia.com"},
        {c:"AK", n:"AIR ASIA", h:"Kuala Lumpur (KUL)", d:"airasia.com"},
        {c:"KC", n:"AIR ASTANA", h:"Almaty (ALA)", d:"airastana.com"},
        {c:"WS", n:"WESTJET", h:"Calgary (YYC)", d:"westjet.com"},
        {c:"CA", n:"AIR CHINA", h:"Beijing (PEK)", d:"airchina.com"},
        {c:"AC", n:"AIR CANADA", h:"Toronto (YYZ)", d:"aircanada.com"},
        {c:"MK", n:"AIR MAURITUS", h:"Mauritius (MRU)", d:"airmauritius.com"},
        {c:"HM", n:"AIR SEYCHELLES", h:"Seychelles (SEZ)", d:"airseychelles.com"},
        {c:"TC", n:"AIR TANZANIA", h:"Dar es Salaam (DAR)", d:"airtanzania.co.tz"},
        {c:"UA", n:"UNITED AIRLINE", h:"Chicago (ORD)", d:"united.com"},
        {c:"AA", n:"AMERICAN AIRLINES", h:"Dallas (DFW)", d:"aa.com"},
        {c:"GP", n:"APG AIRLINE", h:"Toulouse (TLS)", d:"apg-airlines.com"},
        {c:"AV", n:"AVIANCA AIRLINES", h:"Bogota (BOG)", d:"avianca.com"},
        {c:"J2", n:"AZERBAIJAN AIRLINES", h:"Baku (GYD)", d:"azal.az"},
        {c:"ID", n:"BATIK AIR", h:"Jakarta (CGK)", d:"batikair.com"},
        {c:"B3", n:"BHUTAN (Drukair)", h:"Paro (PBH)", d:"drukair.com.bt"},
        {c:"BG", n:"BIMAN BANGLADESH", h:"Dhaka (DAC)", d:"biman-airlines.com"},
        {c:"AF", n:"AIR FRANCE", h:"Paris (CDG)", d:"airfrance.com"},
        {c:"CZ", n:"CHINA SOUTHERN", h:"Guangzhou (CAN)", d:"csair.com"},
        {c:"DL", n:"DELTA AIRLINE", h:"Atlanta (ATL)", d:"delta.com"},
        {c:"MS", n:"EGYPTAIR", h:"Cairo (CAI)", d:"egyptair.com"},
        {c:"ET", n:"ETHIOPIAN AIRLINES", h:"Addis Ababa (ADD)", d:"ethiopianairlines.com"},
        {c:"FJ", n:"FIJI AIRWAYS", h:"Nadi (NAN)", d:"fijiairways.com"},
        {c:"W2", n:"FLEXFLIGHT", h:"Copenhagen (CPH)", d:"flexflight.dk"},
        {c:"SV", n:"SAUDI ARABIAN", h:"Jeddah (JED)", d:"saudia.com"},
        {c:"FZ", n:"FLY DUBAI", h:"Dubai (DXB)", d:"flydubai.com"},
        {c:"XY", n:"FLYNAS AIR", h:"Riyadh (RUH)", d:"flynas.com"},
        {c:"GF", n:"GULF AIRLINE", h:"Bahrain (BAH)", d:"gulfair.com"},
        {c:"HR", n:"HAHN AIR", h:"Dusseldorf (DUS)", d:"hahnair.com"},
        {c:"PR", n:"Philippine Airlines", h:"Manila (MNL)", d:"philippineairlines.com"},
        {c:"J9", n:"JAZEERA AIRWAYS", h:"Kuwait (KWI)", d:"jazeeraairways.com"},
        {c:"JQ", n:"JET STAR", h:"Melbourne (MEL)", d:"jetstar.com"},
        {c:"KQ", n:"KENYA AIRLINE", h:"Nairobi (NBO)", d:"kenya-airways.com"},
        {c:"KU", n:"KUWAIT AIRWAYS", h:"Kuwait (KWI)", d:"kuwaitairways.com"},
        {c:"JJ", n:"LATAM BRASIL", h:"São Paulo (GRU)", d:"latamairlines.com"},
        {c:"LO", n:"LOT Polish", h:"Warsaw (WAW)", d:"lot.com"},
        {c:"OD", n:"BATIK AIR MALAYSIA", h:"Kuala Lumpur (KUL)", d:"malindoair.com"},
        {c:"8M", n:"MYANMAR AIRWAYS", h:"Yangon (RGN)", d:"maiair.com"},
        {c:"NO", n:"NEOS S.P.A", h:"Milan (MXP)", d:"neosair.it"},
        {c:"NZ", n:"NEW ZEALAND", h:"Auckland (AKL)", d:"airnewzealand.co.nz"},
        {c:"QF", n:"QANTAS", h:"Sydney (SYD)", d:"qantas.com"},
        {c:"RJ", n:"ROYAL JORDANIAN", h:"Amman (AMM)", d:"rj.com"},
        {c:"RA", n:"ROYAL NEPAL", h:"Kathmandu (KTM)", d:"nepalairlines.com.np"},
        {c:"WB", n:"RWANDAIR", h:"Kigali (KGL)", d:"rwandair.com"},
        {c:"OV", n:"SALAM AIR", h:"Muscat (MCT)", d:"salamair.com"},
        {c:"AI", n:"AIR INDIA", h:"Delhi (DEL)", d:"airindia.in"},
        {c:"SK", n:"SCANDINAVIAN", h:"Copenhagen (CPH)", d:"sas.no"},
        {c:"TR", n:"SCOOT AIRLINE", h:"Singapore (SIN)", d:"flyscoot.com"},
        {c:"SA", n:"SOUTH AFRICAN", h:"Johannesburg (JNB)", d:"flysaa.com"},
        {c:"6E", n:"IndiGo", h:"Delhi (DEL)", d:"goindigo.in"},
        {c:"UL", n:"SRILANKAN", h:"Colombo (CMB)", d:"srilankan.com"},
        {c:"QP", n:"AKASA", h:"Mumbai (BOM)", d:"akasaair.com"},
        {c:"9I", n:"ALLIANCE AIR", h:"Delhi (DEL)", d:"allianceair.in"},
        {c:"SL", n:"THAI LION", h:"Don Mueang (DMK)", d:"lionairthai.com"},
        {c:"WE", n:"THAI SMILE", h:"Bangkok (BKK)", d:"thaismileair.com"},
        {c:"S9", n:"FLY BIG", h:"Delhi (DEL)", d:"flybig.in"},
        {c:"T5", n:"TURKMENISTAN", h:"Ashgabat (ASB)", d:"turkmenistanairlines.tm"},
        {c:"SG", n:"SPICEJET", h:"Delhi (DEL)", d:"spicejet.com"},
        {c:"BS", n:"US BANGLA", h:"Dhaka (DAC)", d:"usbair.com"},
        {c:"HY", n:"UZBEKISTAN", h:"Tashkent (TAS)", d:"uzairways.com"},
        {c:"VJ", n:"VIETJET AIR", h:"Saigon (SGN)", d:"vietjetair.com"},
        {c:"VS", n:"VIRGIN ATLANTIC", h:"London (LHR)", d:"virginatlantic.com"},
        {c:"S5", n:"STAR AIR", h:"Bengaluru (BLR)", d:"starair.in"},
        {c:"MF", n:"XIAMEN AIRLINES", h:"Xiamen (XMN)", d:"xiamenair.com"}
    ]
};

let game = { pool: [], idx: 0, pts: 0, mode: '', timer: null };

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startMission(mode) {
    // FIXED: Removed .slice(0, 20) to include ALL items in the category
    game = { 
        pool: [...DB[mode]].sort(() => Math.random() - 0.5), 
        idx: 0, pts: 0, mode: mode 
    };
    showScreen('scr-game');
    renderQuestion();
}

function renderQuestion() {
    // FIXED: Correct check to ensure game ends only when pool is empty
    if (game.idx >= game.pool.length) return endMission();
    
    const q = game.pool[game.idx];
    const isReverse = Math.random() > 0.5;
    
    document.getElementById('hud-q').innerText = game.idx + 1 + "/" + game.pool.length;
    document.getElementById('hud-p').innerText = game.pts;
    document.getElementById('feedback').innerText = "";

    const imgCont = document.getElementById('q-img-cont');
    const textCont = document.getElementById('q-text');
    imgCont.innerHTML = "";

    if (game.mode === 'airlines') {
        imgCont.innerHTML = `<img src="https://logo.clearbit.com/${q.d}" class="logo-large" onerror="this.src='https://via.placeholder.com/80?text=✈️'">`;
        if (isReverse) {
            textCont.innerHTML = `<span style="color:#3b82f6; font-size:1.6rem;">${q.c}</span><br><small>Main Hub: ${q.h}</small>`;
            generateOptions(q.n, 'n');
        } else {
            textCont.innerHTML = `${q.n}<br><small>Main Hub: ${q.h}</small>`;
            generateOptions(q.c, 'c');
        }
    } else {
        textCont.innerHTML = q.n + (q.f ? `<img src="https://flagcdn.com/w40/${q.f}.png" class="flag-inline">` : "");
        generateOptions(q.c, 'c');
    }
    startTimer();
}

function generateOptions(correctValue, keyToUse) {
    let options = [correctValue];
    let others = DB[game.mode].filter(x => x[keyToUse] !== correctValue);
    while(options.length < 4 && others.length > 0) {
        let pick = others.splice(Math.floor(Math.random()*others.length), 1)[0][keyToUse];
        if(!options.includes(pick)) options.push(pick);
    }
    options.sort(() => Math.random() - 0.5);
    const grid = document.getElementById('opt-grid');
    grid.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-opt';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt === correctValue, correctValue);
        grid.appendChild(btn);
    });
}

function startTimer() {
    clearInterval(game.timer);
    let l = 100;
    game.timer = setInterval(() => {
        l -= 0.7; // Speed adjusted
        document.getElementById('timer-bar').style.width = l + "%";
        if (l <= 0) { clearInterval(game.timer); checkAnswer(false, "Timeout"); }
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
    setTimeout(renderQuestion, 1400);
}

function endMission() {
    showScreen('scr-res');
    document.getElementById('res-score').innerText = game.pts;
    document.getElementById('res-acc').innerText = `Completed ${game.pool.length} Questions`;
}
