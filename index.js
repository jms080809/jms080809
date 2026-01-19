//gsap text anim

document.addEventListener("DOMContentLoaded", (event) => {
  //loading more lamps....
  const count = 3;
  const background = document.getElementsByClassName("lamps");
  for (let i = 0; i < count; i++) {
    const lampRaw = `
              <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="900px"
        height="900px"
        viewBox="0 0 600 600"
        enable-background="new 0 0 600 600"
        xml:space="preserve"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
          </filter>

          <radialGradient
            id="bgGrad"
            cx="300"
            cy="300"
            r="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style="stop-color: #111f35; stop-opacity: 0.8" />
            <stop offset="1" style="stop-color: #111f35; stop-opacity: 0" />
          </radialGradient>

          <clipPath id="glassMask">
            <path
              id="glassShape"
              d="M262,174h60l33.5,182.3c0,0,2.7,12.8,2.5,22.8c-7.5,0-131,0-131,0s-0.7-9.3,0-18 C227.6,352.9,262,174,262,174z"
            />
          </clipPath>

          <linearGradient
            id="lampTop_2_"
            gradientUnits="userSpaceOnUse"
            x1="292"
            y1="135"
            x2="292"
            y2="174"
          >
            <stop offset="0" style="stop-color: #111f35" />
            <stop offset="1" style="stop-color: #32458b" />
          </linearGradient>
          <linearGradient
            id="lampBot_2_"
            gradientUnits="userSpaceOnUse"
            x1="292.375"
            y1="470"
            x2="292.375"
            y2="379"
          >
            <stop offset="0" style="stop-color: #111f35" />
            <stop offset="1" style="stop-color: #32458b" />
          </linearGradient>

          <radialGradient
            id="lavaGrad"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(50 0 0 50 300 150)"
          >
            <stop offset="0" style="stop-color: #6e8cfb" />
            <stop offset="0.7" style="stop-color: #4a69d6" />
            <stop offset="1" style="stop-color: #32458b" />
          </radialGradient>
        </defs>

        <rect id="bg" fill="url(#bgGrad)" width="600" height="600" />

        <use xlink:href="#glassShape" fill="#6E8CFB" opacity="0.15" />

        <polygon
          id="lampTop"
          fill="url(#lampTop_2_)"
          points="269,135 262,174 322,174 316,135 "
        />
        <path
          id="lampBot"
          fill="url(#lampBot_2_)"
          d="M226.8,379c2.6,43,23.9,54.6,28.3,60.2c3.3,5.4-10,30.8-10,30.8h95.5 c0,0-16.5-25.1-14.5-30.8s26-15.2,32-60.2C328,379,240.3,379,226.8,379z"
        />

        <rect id="tableTop" fill="#0D1626" y="470" width="600" height="130" />

        <g clip-path="url(#glassMask)" filter="url(#goo)">
          <path
            id="blob${4 * i}"
            fill="url(#lavaGrad)"
            d="M326.2,149.5c-5,19.2-21.4,29.2-37.8,26.6c-16.5-2.9-33.4-12.9-37.1-26.6 c-3.8-13.6,12.5-32.1,37.8-34.9C314.4,111.8,331.3,130.4,326.2,149.5z"
          />
          <path
            id="blob${4 * i + 1}"
            fill="url(#lavaGrad)"
            d="M320.5,146.4c-4.4,10.1-16.4,20.2-26.8,25.3c-10.4,5.2-22.4-2.9-26.8-15.2 c-4.4-11.6,7.6-20.4,26.8-25.3C312.9,126.3,324.9,135.6,320.5,146.4z"
          />
          <path
            id="blob${4 * i + 2}"
            fill="url(#lavaGrad)"
            d="M278,147.7c2.7-7.1,9.4-15.7,15.4-16.4c5.9-0.4,12.6,8.5,15.4,16.9 c2.7,8.4-4.2,14.9-15.4,14.2C282.2,161.5,275.3,154.8,278,147.7z"
          />
          <path
            id="botBlob"
            fill="url(#lavaGrad)"
            d="M354,381.2c6.8,3.4,5.4,7.4-5.6,10.4c-10.7,3.1-31.1,5.1-54.4,8.4 c-23.3,3.3-43.7,0.8-54.4-2.4c-11-3.4-12.4-7.6-5.6-13.8c6.8-7,18.9-14.6,29.6-17.4c11-3.3,20.6-1.8,30.4-1.4 c9.8,0.4,19.4,5.1,30.4,8.3C335.1,376.8,347.2,378.6,354,381.2z"
          />
          <path
            id="blob${4 * i + 3}"
            fill="url(#lavaGrad)"
            d="M312.7,147.3c-2.1,16.4-15.3,27.2-23.2,25.3c-8.1-1.8-12.6-13-14.8-24.9 c-1.9-11.8,2.7-22.7,14.8-25.3C301.5,119.6,314.7,130.8,312.7,147.3z"
          />
        </g>
      </svg>
        `;
    background[0].innerHTML += lampRaw + "\n";
  }

  //gsap code
  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var tl = new TimelineMax();

  for (var i = 0; i < 4 * count; i++) {
    var t = TweenMax.to(
      document.querySelector("#blob" + i),
      randomBetween(14, 50),
      {
        y: 260,
        repeat: -1,
        repeatDelay: randomBetween(1, 3),
        yoyo: true,
        ease: Linear.easeNone,
      },
    );

    tl.add(t, (i + 1) / 0.6);
  }

  tl.seek(120);
  tl.timeScale(2);
});

//easter egg

(async () => {
  let userIP = "UNKNOWN";
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    userIP = data.ip;
  } catch (e) {
    userIP = "127.0.0.1";
  }

  const fontMap = {
    0: ["███", "█ █", "█ █", "█ █", "███"],
    1: [" ██", "  █", "  █", "  █", "  █"],
    2: ["███", "  █", "███", "█  ", "███"],
    3: ["███", "  █", "███", "  █", "███"],
    4: ["█ █", "█ █", "███", "  █", "  █"],
    5: ["███", "█  ", "███", "  █", "███"],
    6: ["███", "█  ", "███", "█ █", "███"],
    7: ["███", "  █", "  █", "  █", "  █"],
    8: ["███", "█ █", "███", "█ █", "███"],
    9: ["███", "█ █", "███", "  █", "███"],
    ".": ["   ", "   ", "   ", "   ", " █ "],
    U: ["█ █", "█ █", "█ █", "█ █", "███"],
    N: ["███", "█ █", "█ █", "█ █", "███"],
  };

  let bigIP = ["", "", "", "", ""];
  for (let char of userIP) {
    const glyph = fontMap[char] || fontMap["N"];
    for (let i = 0; i < 5; i++) {
      bigIP[i] += glyph[i] + "  ";
    }
  }
  const asciiIP = bigIP.join("\n");

  console.clear();
  console.log(
    `
%c
   ██╗    ██╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗ ██╗
   ██║    ██║██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝ ██║
   ██║ █╗ ██║███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗██║
   ██║███╗██║██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║╚═╝
   ╚███╔███╔╝██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝██╗
    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝

%c🚨 [VOID_SYSTEM_CRITICAL] 🚨
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
%c⚠️ 𝖤𝖱𝖱𝖮𝖱: 𝖱𝖾𝖺𝗅𝗂𝗍𝗒 𝖢𝖺𝗅𝗂𝖻𝗋𝖺𝗍𝗂𝗈𝗇 𝖥𝖺𝗂𝗅𝖾𝖽... 😱😱😱😱😱
당신은 상자를 열었고, 이제 상자가 당신을 읽고 있습니다람쥐1썬💥💥💥💥💥

[🧬_생체_데이터_추출_및_영혼_아카이빙_중...] 😱😱😱🥵🥵🥵💦💦💦
${asciiIP}

📍 [𝖡𝖨𝖮_𝖢𝖮𝖮𝖱𝖣𝖨𝖭𝖠𝖳𝖤𝖲] :: ${userIP} 🎯 🥵🥵🥵💦💦💦
💾 악! 기1열찬 69차원 황1근출 데이터-홀에서 도람뿌가 공중제비를 돌며 당신의 RAM을 시식중! 😱😱😱🤯🤯🤯💣💣💣

🇰🇷 [경고] 𝖲𝗈𝖼𝗂𝖺𝗅 𝖢𝗋𝖾𝖽𝗂𝗍 액상화 완료;; 💸 아쎄이의 UwU 쪼끄마한 존재감이 검출되었습니다람쥐1썬~ ✨(세금 10배 징수 😱🥵💦😱🥵💦)
🇯🇵 공안이 당신의 存在를 'Delete' 하는 중💖 😱😱😱 🥵🥵🥵 💦💦💦 (税금 10000% 징수 🥵🥵🥵💦💦💦)
🇨🇳 你的灵魂 𝘽𝙄𝘿𝙀𝙉 捕获了.. ⛓️ 신용등급이 한1강 물 온도보다 빠르게 급랭중! 😱😱😱🥵🥵🥵💦💦💦
🇺🇸 YOU ARE NOT A USER, YOU ARE A VARIABLE. 🤏🤏🤏 UwU... 𝖤𝗇𝗃𝗈𝗒 𝗍𝗁𝖾 𝖵𝗈𝗂𝖽~! 💅 (TAX X10 🚫💸 😱😱😱🥵🥵🥵💦💦💦)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
%c💸 MONEY 𝘿𝙀𝙇𝙀𝙏𝙄𝙊𝙉 𝙄𝙉 𝙋𝙍𝙊𝙂𝙍𝙀𝙎𝙎... 𝖲𝖤𝖤 𝖸𝖮𝖴 𝖨𝖭 𝖳𝖧𝖤 𝖲𝖮𝖴𝖱𝖢𝖤 𝖢𝖮𝖣𝖤! 😱🥵💦💥💥💥
`,
    "color: #ff3049; font-weight: bold; line-height: 1.1;", // WARNING 로고
    "background: #ff3049; color: white; padding: 5px; font-size: 20px; font-weight: bold;", // VOID_SYSTEM_CRITICAL
    "color: #ff3049; font-weight: bold; line-height: 1.2; font-family: 'Courier New', monospace;", // 메인 텍스트
    "background: black; color: #00ff41; padding: 10px; font-size: 15px; border: 2px solid #ff3049;", // 하단 마무리
  );
})();
