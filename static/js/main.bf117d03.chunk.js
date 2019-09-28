(window["webpackJsonpinfo-boba-watch"]=window["webpackJsonpinfo-boba-watch"]||[]).push([[0],{33:function(e,t,n){e.exports=n(48)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(10),r=n.n(i),s=(n(38),n(39),n(11)),c=n(12),l=n(18),d=n(13),m=n(19),h=[{title:"How do I download the app?",desc:'Check below for instructions on how to install the web app on your device:\n            <br />\n            <h2>iOS:</h2> \n            Open up <a href="https://boba.watch">https://boba.watch</a> in Safari (not Chrome). \n            <br />\n            &emsp;1. Click on the [ + ] icon on the bottom.\n            <br />\n            &emsp;2. Find the \'Add to Home Screen\' option \n            <br />\n            &emsp;3. Confirm \'Add\'\n            <div class="images images-ios">\n                <div id="ios-1" class="image"></div>\n                <div id="ios-2" class="image"></div>\n                <div id="ios-3" class="image"></div>\n            </div>\n            After the download, the start icon should be visible on your home screen.\n            <br />\n            <h2>Android:</h2> \n            Open up <a href="https://boba.watch">https://boba.watch</a> in Chrome. \n            <br />\n            &emsp;1. Select the 3 dot icon in the top-right corner\n            <br />\n            &emsp;2. Find the \'Add to Home screen\' option\n            <br />\n            &emsp;3. Confirm \'Add\'\n            <br />\n            <div class="images images-android">\n                <div id="android-1" class="image"></div>\n                <div id="android-2" class="image"></div>\n                <div id="android-3" class="image"></div>\n            </div>\n            After the download, the start icon should be visible on your home screen.\n        '},{title:"How to use Boba Watch?",desc:'Boba Watch is a memey, finance focused app that keeps tracks of your boba drinking\n        metrics such as the time, place, and cost of the purchases you make. \n        <br />\n        <br />\n        To get started, add a drink by pressing the ( + ) icon on the bottom of your home screen.\n        <div class="images images-add">\n        <div id="add-1" class="image"></div>\n        </div>\n        After pressing the add icon, the app should prompt you for details of what drink to add.\n        <div class="images images-add">\n        <div id="add-2" class="image"></div>\n        </div>\n        The only required sections are the price and the date/time. The date/time will automatically be set\n        to the current time and if you want to change it, simply tap on it to edit the time. The rest of \n        the sections can be left blank although it\'s recommended to fill it out (with the exception of the description).\n        <br />\n        <br />\n        After filling out the details, tap "Add" to complete the process and wait for the confirmation prompt. Ensure you \n        have a good internet connection or you can try at another time.\n        '},{title:"Why do I need a Facebook account to login?",desc:"We don't want people to abuse our app by making a billion accounts and taking\n        the service down for everyone so we currently use Facebook's login system since they \n        a ton of security precautions in place to prevent these things. Your privacy is \n        important to us and the only data we use from your Facebook account is your name\n        and your most recent profile picture. (We do plan on adding a Google and Twitter sign up\n        in the near future)\n        <br />\n        Also who likes remembering another password with numbers, special symbols, both upper and\n        lower case letters and a mininmum length of 25 characters? Definately not me."},{title:"When will desktop mode come out?",desc:"Desktop mode is a feature that we are currently working on. \n        Since we're only a small team of 3, it takes time to design, develop, \n        and ship a functionality we want to include. It's a priority and we hope \n        to have it done soon! In the meantime, you can shape your browser into\n        the corresponding mobile dimensions to get the same effect"},{title:"Drinks aren't updated on new device",desc:"Logging out and logging back in will ensure that your app makes a new call\n        to our server to retrieve the latest information stored on your account.\n        To log out, click on your user profile on the top right corner and click logout."},{title:"Public / private profile issues",desc:"Toggling the public setting on your user settings and getting a successful \n        alert message will ensure that our database gets a new setting change. This problem\n        usually arises when you're using multiple devices and one has not updated."},{title:"Suggestions and Features",desc:'We would LOVE to hear from the community to see what kind of features you \n        would like to see. Let us know on our <a href="https://www.facebook.com/bobawatch/">\n         facebook page </a> and we\'ll try to get back to you!'}],u=n(62),p=n(31),g=n.n(p),f=n(28),b=n.n(f),w=(n(40),function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={open:!1},n.toggle=function(){n.setState((function(e){return{open:!e.open}}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"thaman-color"},a.a.createElement("div",{className:"faq-question--title",onClick:this.toggle},this.props.title,a.a.createElement("div",{className:"expand-icon"},this.state.open?a.a.createElement(b.a,null):a.a.createElement(g.a,null))),a.a.createElement(u.a,{in:this.state.open},a.a.createElement("div",{className:"faq-question--description",dangerouslySetInnerHTML:{__html:this.props.desc}})))}}]),t}(o.Component)),y=(n(47),function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={content:h.map((function(e,t){return a.a.createElement(w,{key:t,title:e.title,desc:e.desc})}))},n.componentDidMount=function(){var e=document.getElementsByClassName("image");Array.from(e).forEach((function(e){e.addEventListener("click",n.enlarge)}))},n.enlarge=function(e){var t=e.target,n=(t.currentStyle||window.getComputedStyle(t,!1)).backgroundImage.slice(4,-1).replace(/"/g,""),o=document.createElement("div");o.className="fullscreen-image",o.style.backgroundImage="url('".concat(n,"')"),o.onclick=function(){document.body.removeChild(o)},document.body.appendChild(o)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,this.state.content)}}]),t}(o.Component)),v=n(61);var F=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"faq-title--holder",onClick:function(){window.location="https://boba.watch/"}},a.a.createElement("div",{className:"faq-title--logo"}),a.a.createElement(v.a,{variant:"h1"},"boba watch")),a.a.createElement("div",{className:"faq-section--label"},"FAQ ",a.a.createElement("span",null," Frequently Asked Questions ")),a.a.createElement("div",{className:"faq-holder"},a.a.createElement(y,null)),a.a.createElement("div",{className:"footer"},a.a.createElement("a",{href:"https://www.termsfeed.com/privacy-policy/e27edfdb317844b935f5c050baeed143"}," Privacy Policy "),a.a.createElement("a",{href:"https://www.instagram.com/bingeboba/"}," Instagram "),a.a.createElement("a",{href:"https://www.facebook.com/bobawatch/"}," Facebook ")))},k=n(32),E=Object(k.a)({overrides:{MuiButton:{text:{backgroundColor:"#F68080",borderRadius:3,border:0,color:"white",height:30,padding:"0 30px",margin:"20px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, 0.3)",fontFamily:"Poppins",fontWeight:700,fontSize:14,"&:hover":{backgroundColor:"#FFDCDC"}}},MuiBottomNavigation:{root:{backgroundColor:"#FFAFA4"}},MuiBottomNavigationAction:{root:{color:"#000000"},iconOnly:{color:"#FF0000"},wrapper:{color:"#FFFFFF "}},MuiDialogActions:{action:{color:"#FFFFFF"}}},palette:{primary:{main:"#F68080",light:"#FFDCDC",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF",contrastText:"#F68080"}},typography:{useNextVariants:!0,h1:{fontFamily:"Poppins",fontWeight:700,color:"#000000",fontSize:44,marginBottom:20},h2:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:48,margin:0},h3:{fontFamily:"Poppins",fontWeight:700,color:"#F68080",fontSize:24,marginBottom:"16px"},h4:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:24},h5:{fontFamily:"Poppins",fontWeight:700,color:"#000000",fontSize:18},h6:{fontFamily:"Poppins",color:"#F68080",fontSize:12}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(63);r.a.render(a.a.createElement(A.a,{theme:E},a.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.bf117d03.chunk.js.map