
    let xxx=`<center>
    <img class="di" src="https://microintel.github.io/Resources/images/mib.png" id="im" width="10%" style="border-radius: 20%;">
    <br>
    <h3><b>MICRO BROWSER</b></h3>
    <br>
    
    <input class="di" id="s1" type="text" placeholder="Search here">
    <button class="di" onclick="search()">Search</button>
    
    
    </center>
    <br>
    <center>
    <div class="cmc">
    <a href="https://microintel.github.io/cie/" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microevaluator.jpg">
    <center> <p class="infoOfPro">Diploma CIE Book Evaluator</p></center>
    </div>
    </a>
    
    <a href="https://microintel.github.io/Result/" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microresult.jpg">
    <center> <p class="infoOfPro" >Dte Result Portal[2022-24]</p></center>
    </div>
    </a>
    
    <a href="https://microintel.github.io/Micrography/" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/micrography.jpg">
    <center> <p class="infoOfPro">Convert Your MSG To Another Form</p></center>
    </div>
    </a>
    
    <a href="https://nikhil2005858.github.io/microdisk/new12.html" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microdisk.gif">
    <center> <p class="infoOfPro">For Downloading Movies,Series..</p></center>
    </div>
    </a>
    
    <a href="https://microintel.github.io/xox/" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microPlay.png">
    <center>  <p class="infoOfPro">Simple Game</p></center>
    </div>
    </a>
    
    
    <div onclick="alert('This project is still in development and it will launch soon')" class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microTunes.png">
    <center>  <p class="infoOfPro">Self healing Musics</p></center>
    </div>
    
    <div onclick="alert('This project is still in development and it will launch soon')" class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microLearn.png">
    <center>  <p class="infoOfPro">Learn Basics Of Programing</p></center>
    </div>
    
    <a href="https://microintel.github.io/microinjection/" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microinj.gif">
    <center>  <p class="infoOfPro">A Simple Web Injection.</p></center>
    </div>
    </a>
    </div>
    </center>`;
    document.getElementById('m').innerHTML=xxx;
    
        function search() {
        var a = document.getElementById("s1").value;
        var st=a.length;
        
        if (st> 8 && a.startsWith("https://")) {
        window.open(a);
        }
        else {
        var b = "https://duckduckgo.com/?q=" +a+ "&ia=web";
        window.open(b);
        }
        }