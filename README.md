<h1 id="versions-manager-api"><strong>versions-manager-api</strong></h1>
<p>This is the back end service of the versions display application, you can get the client side application here: <a href="https://github.com/yonatankr/versions-display">Versions Display</a>.</p>
<h2 id="prerequisites"><strong>Prerequisites:</strong></h2>
<p>This service uses:</p>
<ol>
<li>Node.js (Express)</li>
<li>MySql</li>
</ol>
<h2 id="getting-started"><strong>Getting Started:</strong></h2>
<p>Docker: If you are comfortable with docker, it is already setup, just run docker-compose up and it will load all the services required.</p>
<p>Manual:</p>
<ol>
<li>make sure you’re mySql instance is running.</li>
<li>npm install</li>
<li>npm start</li>
</ol>
<p>This will run the app on port 3001</p>
<h2 id="sending-events-to-the-service"><strong>Sending Events To The Service:</strong></h2>
<p>This service expects to receive updates from any build tool (TC \ Jenkins…) in the following format:</p>
<pre><code>{
	"projectName" : "[name]",
	"buildStatus" : "[complete]", 
	"commits" : [
        {
			"username" : "Awesome developer 1",
            "imageUrl" : "[urlToDeveloper1Image]",
			"commit_message" : "commit message"
		},
		{
			"username" : "Awesome developer 2",
            "imageUrl" : "[urlToDeveloper1Image]",
			"commit_message" : "commit message"
		},
	],
	"versionData" : {
		"version" : "1.24",
		"buildTime" : "2017-09-29 13:28:39",
		"environment" : "Production"
	}
}
</code></pre>
<h2 id="sending-updates-to-the-client">Sending Updates to the client:</h2>
<p>The service will update the client using <a href="http://Socket.IO">Socket.IO</a> by sending the event : “versionEvent” which can be</p>
<pre><code>socket.on('versionEvent', versionEvent =&gt; {
    notifyClients(versionEvent);
})
</code></pre>

