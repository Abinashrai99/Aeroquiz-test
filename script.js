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
