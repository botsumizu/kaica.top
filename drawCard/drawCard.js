const rectangles = document.querySelectorAll('.card');

rectangles.forEach(rectangle => {
  rectangle.addEventListener('click', () => {
    const i = rectangle.dataset.i;
    rectangle.textContent = '';
    let img, text, targetPage;
    switch (i) {
      case '1':
        img = document.createElement('img');
        img.src = '../img/jiandui.png';
        text = document.createElement('p');
        text.textContent = '舰队';
        targetPage = '../intro/jiandui/jd.html';
        break;
      case '2':
        img = document.createElement('img');
        img.src = '../img/wuqi.png';
        text = document.createElement('p');
        text.textContent = '舰载武器';
        targetPage = '../intro/wuqi/wq.html';
        break;
      case '3':
        img = document.createElement('img');
        img.src = '../img/fuzhu.png';
        text = document.createElement('p');
        text.textContent = '辅助舰艇';
        targetPage = '../intro/fuzhu/fz.html';
        break;
        case '4':
        img = document.createElement('img');
        img.src = '../img/quzhu.png';
        text = document.createElement('p');
        text.textContent = '驱逐舰';
        targetPage = '../intro/quzhu/qz.html';
        break;
        case '5':
        img = document.createElement('img');
        img.src = '../img/hangmu.png';
        text = document.createElement('p');
        text.textContent = '航空母舰';
        targetPage = '../intro/hangmu/hm.html';
        break;
        case '6':
        img = document.createElement('img');
        img.src = '../img/qianting.png';
        text = document.createElement('p');
        text.textContent = '潜艇';
        targetPage = '../intro/qianting/qt.html';
        break;
        case '7':
        img = document.createElement('img');
        img.src = '../img/huwei.png';
        text = document.createElement('p');
        text.textContent = '护卫舰';
        targetPage = '../intro/huwei/hw.html';
        break;
        case '8':
        img = document.createElement('img');
        img.src = '../img/denglu.png';
        text = document.createElement('p');
        text.textContent = '登陆舰';
        targetPage = '../intro/denglu/dl.html';
        break;
        case '9':
        img = document.createElement('img');
        img.src = '../img/jianzaiji.png';
        text = document.createElement('p');
        text.textContent = '舰载机';
        targetPage = '../intro/jianzaiji/jzj.html';
        break;
      default:
        break;
    }
    rectangle.appendChild(img);
    rectangle.appendChild(text);
    setTimeout(() => {
      window.location.href = targetPage;
    }, 1500);
  });
});