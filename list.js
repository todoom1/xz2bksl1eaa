(function() {
    var secretApps = [
{img: './png/dfgj.jpg', name: '巅峰国际', xurl: ' aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTQ0MjM4Nw=='},
{img: './png/cfgj.jpg', name: '超凡国际', xurl: ' aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnB0PTJFRUQ3RTA1LURGRUMtNkIxNi0wMEZGLTk4RjM3NEIzMEY2NQ=='},
{img: './png/jlgj.jpg', name: '君临国际', xurl: ' aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjM5NzAmc2VsZlBsYW5JZD03MjI='},
{img: './png/dd28.jpg', name: '多多28', xurl: 'aHR0cHM6Ly9pemN2b2ouaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDIxJnRvcElkPTM0MDE3NjQzMTU2NjY5ODQ'},
{img: './png/ztgj.jpg', name: '征途国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnB0PUIwOUVFNEQzLThGOEEtMUE5Ri1CNDZGLTZBN0ZDODVGRTJFMg'},
{img: './png/yh.png', name: '壹号娱乐', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9OTg0MDNGN0MtMkJEOS0zMDZFLUQwM0YtNjcyQjBGQTdFNTcy'},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD01Nzg2MyZzZWxmUGxhbklkPTY2NzYz'},
{img: './png/ffyl.jpg', name: '非凡国际', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTY3MjE3NjM0ODMyMjQ0MjImc2VsZlBsYW5JZD0xMzIxMDM'},
{img: './png/hygj.jpg', name: '汇赢国际', xurl: 'aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTEzNzQ2JnNlbGZQbGFuSWQ9MTE3Nw=='},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTgmdG9wSWQ9MjYzOTkmc2VsZlBsYW5JZD00NTk4'}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026美加墨世界杯<br>-查看赛事赛程-");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "XZ11.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问XZ11！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
