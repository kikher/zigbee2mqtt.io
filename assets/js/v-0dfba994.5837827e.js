"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92820],{347332:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-0dfba994","path":"/guide/adapters/flashing/flashing_the_cc2538.html","title":"Flashing the firmware on the CC2538 MODULE","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]}],"git":{"updatedTime":1706817532000},"filePathRelative":"guide/adapters/flashing/flashing_the_cc2538.md"}')},740686:(e,a,t)=>{t.r(a),t.d(a,{default:()=>q});var r=t(166252);const i=t.p+"assets/img/cc2538-jtag-2.88e4ab40.jpg",n=t.p+"assets/img/cc2538-jtag-3.98498905.jpg",l=t.p+"assets/img/cc2538-jtag-1.08ea6bcf.jpg",s=t.p+"assets/img/cc2538-jtag-4.a4cf0bc3.jpg",o=t.p+"assets/img/cc2538-jtag-5.e8b0db3a.jpg",c=t.p+"assets/img/cc2538-jtag-6.5d2a2d7e.jpg",d=t.p+"assets/img/cc2538-jtag-7.5cc9adce.jpg",h=(0,r._)("h1",{id:"flashing-the-firmware-on-the-cc2538-module",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#flashing-the-firmware-on-the-cc2538-module","aria-hidden":"true"},"#"),(0,r.Uk)(" Flashing the firmware on the CC2538 MODULE")],-1),g={href:"https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=jlink+V8+jtag",target:"_blank",rel:"noopener noreferrer"},u=(0,r._)("h2",{id:"windows",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,r.Uk)(" Windows")],-1),m={href:"https://www.segger.com/downloads/jlink/",target:"_blank",rel:"noopener noreferrer"},p=(0,r._)("img",{src:i,alt:""},null,-1),f=(0,r._)("li",null,[(0,r.Uk)("Open SEGGER J-Link Configurator and ensure your JTAG has the latest firmware (upgrade it if this is not your case) "),(0,r._)("img",{src:n,alt:""})],-1),w=(0,r._)("li",null,[(0,r.Uk)("Connect JTAG programmer to CC2538 module following below diagram: "),(0,r._)("img",{src:l,alt:""})],-1),_={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},k=(0,r._)("li",null,[(0,r.Uk)('Open SEGGER J-Link Flash and select "Create a New Project" '),(0,r._)("img",{src:s,alt:""})],-1),b=(0,r._)("li",null,[(0,r.Uk)("Make sure you select the right module [TI CC2538SF53] and [JTAG] as Target Interface "),(0,r._)("img",{src:o,alt:""})],-1),v=(0,r._)("li",null,[(0,r.Uk)('Now select "Open Data File..." and select the right firmware [MODKAMRU_V3_USB.hex] '),(0,r._)("img",{src:c,alt:""})],-1),j=(0,r._)("li",null,[(0,r.Uk)("Now as a final step in order to successfully program the module select first [Target/Manual Programming/Erase Chip] (or press F4) and then [Target/Manual Programming/Program & Verify] (or press F6) "),(0,r._)("img",{src:d,alt:""})],-1),T=(0,r.uE)('<h1 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version" aria-hidden="true">#</a> How-to check the installed firmware version</h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the above example the version is <code>20190425</code>.</p>',4),U={},q=(0,t(983744).Z)(U,[["render",function(e,a){const t=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[h,(0,r._)("p",null,[(0,r.Uk)("The CC2538 module needs to be flashed with a custom firmware. This firmware can be flashed with a JTAG programmer. The programmer can be found on "),(0,r._)("a",g,[(0,r.Uk)("Aliexpress"),(0,r.Wm)(t)])]),u,(0,r._)("ol",null,[(0,r._)("li",null,[(0,r.Uk)("Install SEGGER "),(0,r._)("a",m,[(0,r.Uk)("J-Link Software"),(0,r.Wm)(t)]),p]),f,w,(0,r._)("li",null,[(0,r.Uk)("Download "),(0,r._)("a",_,[(0,r.Uk)("latest firmware"),(0,r.Wm)(t)])]),k,b,v,j]),T])}]])}}]);