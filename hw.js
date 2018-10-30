let htmlData = `          
<ul class="weather">
<li>
<h3>禮拜⼀</h3>
<h5>晴天</h5>
</li>
<li>
<h3>禮拜⼆</h3>
<h5>雨天</h5>
</li>
<li>
<h3>禮拜三</h3>
<h5>陰天</h5>
</li>
</ul>
`

console.log(htmlData)

// Step 1: remove \n  ,Step 2: remove class  ,Step 3: 
var datasplit = htmlData.replace(/\n/g, "").replace(/ class=\"(.*?)\"/g, "").match(/<li>(.*?)<\/li>/g) 

var datas = []
for(var i=0; i<datasplit.length; i++) {
	var weekdate = datasplit[i].match(/<h3>(.*?)<\/h3>/)[1].trim()
	var weather = datasplit[i].match(/<h5>(.*?)<\/h5>/)[1].trim()

	 var commentObj = {
    	weekdate: weekdate,
    	weather: weather
  	 }

  	 datas.push(commentObj)
}

console.log(datas)