// Triaglify
    var pattern = Trianglify({
        width: window.innerWidth, 
        height: window.innerHeight
    });
    //Render to <canvas id="heroBackground"></canvas>
	pattern.canvas(document.getElementById('heroBackground'));