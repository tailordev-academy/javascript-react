(function(document) {
  const url = 'https://cdn.rawgit.com/dabbott/react-native-web-player/gh-v1.10.0/index.html';
  const snippets = Array.prototype.slice.call(document.querySelectorAll('pre code'));

  snippets
    .filter(s => /\.player/.test(s.className))
    .forEach(s => {
      const section = s.parentNode.parentNode;
      const iframe = document.createElement('iframe');
      const options = [
        { name: 'code', value: s.innerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">") },
        { name: 'title', value: 'JavaScript code' },
        { name: 'transpilerTitle', value: 'ES5 output (compiled with Babel)' },
        { name: 'playerTitle', value: 'Preview' },
        { name: 'styles', value: JSON.stringify({
          transpilerHeader: {
            backgroundColor: '#1abc9c',
          },
          playerHeader: {
            backgroundColor: '#1abc9c',
          },
          header: {
            color: '#222',
          },
        })},
      ];

      const platform = s.className.replace(/^lang-javascript\.player\.?/, '');
      if (platform === 'transpiler') {
        options.push({ name: 'panes', value: JSON.stringify(['editor', 'transpiler']) });
      } else if (platform === 'console') {
        options.push({ name: 'platform', value: 'web' });
        options.push({ name: 'panes', value: JSON.stringify(['editor', 'player']) });
        options.push({
          name: 'console',
          value: JSON.stringify({
            enabled: true,
            visible: true,
            maximized: true,
            collapsible: false
          })
        });
      } else {
        options.push({ name: 'platform', value: platform !== '' ? platform : 'web' });
        options.push({ name: 'panes', value: JSON.stringify(['editor', 'player']) });
      }

      const optionsString = options
        .map(o => `${o.name}=${encodeURIComponent(o.value)}`)
        .join('&')
      ;

      iframe.width = '100%';
      iframe.height = '450px';
      iframe.frameborder = 0;
      iframe.src = `${url}#${optionsString}`;

      section.append(iframe);
      section.querySelector('pre').remove();
    });
})(document);
