
const REMOTE = require('electron').remote
const MAIN = REMOTE.require('./main.js')

// let button = document.createElement('button')
// button.textContent = "Open window"
// document.body.appendChild(button)
// button.addEventListener('click', () => {
//   MAIN.openWindow();
// })

$(function(){
  const OS = require('os')
  const prettyBytes = require('pretty-bytes')
  const UL = $('.flipster ul');

  $('.stats').append('Número de procesadores:' + OS.cpus().length + '&nbsp;');
  $('.stats').append('Mem libre:' + prettyBytes(OS.freemem()));

	$.get('http://enupal.com/blog/rss', function(response){

		const rss = $(response)

		rss.find('item').each(function(){
			const item = $(this)

			const content = item.find('description').html().split('</a></div>')[0]+'</a></div>'

			const urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g;

			const imageSource = content.match(urlRegex)[1];

			const li = $('<li><img /><a target="_blank"></a></li>')

			li.find('a')
				.attr('href', item.find('link').text())
				.html('<br>'+ item.find('title').text())

			li.find('img').attr('src', imageSource)
			li.find('img').attr('width', 400)
			li.find('img').attr('height', 300)

			li.appendTo(UL)
		});

		// init plugin
		$('.flipster').flipster({
			style: 'carousel'
		});

	});

});
