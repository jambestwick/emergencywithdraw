(this.webpackJsonpemergencywithdraw=this.webpackJsonpemergencywithdraw||[]).push([[0],{355:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_masterchef","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"fetchPools","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"want","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint16","name":"depFee","type":"uint16"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"internalType":"struct Pool[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract Masterchef","name":"mc","type":"address"},{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"getPoolStandard","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"want","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint16","name":"depFee","type":"uint16"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"internalType":"struct Pool","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenDetails","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenName","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mc","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract Masterchef","name":"mc","type":"address"}],"name":"isStandardChef","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')},356:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"address","name":"want","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accBELTPerShare","type":"uint256"},{"internalType":"uint16","name":"depFee","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"}]')},382:function(e,t,n){},383:function(e,t,n){},404:function(e,t){},425:function(e,t){},427:function(e,t){},500:function(e,t){},502:function(e,t){},534:function(e,t){},539:function(e,t){},541:function(e,t){},548:function(e,t){},561:function(e,t){},584:function(e,t){},601:function(e,t){},674:function(e,t){},830:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(43),s=n.n(i),c=(n(382),n(14)),u=n.n(c),o=n(65),p=n(79),d=(n(383),n(836)),l=n(838),y=n(370),m=n(355),f=n(356),b={fetcher:{137:"0x9BD3829315A2F076a7702885c3D0aE9184B76643",56:""}},h=function(e,t){var n=e.utils.toBN,a={56:n(5).mul(n(10).pow(n(9))),137:n(1).mul(n(10).pow(n(9)))};return t in a?a[t]:0},v=function(e,t,n,a){if(void 0!==n)return new n.eth.Contract(e,t,{gasPrice:h(n,a).toString()})},j=function(e,t){if(void 0!==e&&void 0!==t)return v(m,function(e){return function(e,t){return e[t]?e[t]:e[56]}(b.fetcher,e)}(t),e,t)},w=function(e,t,n){if(void 0!==e&&void 0!==e.eth&&null!=n)return v(f,n,e,t)},g=function(e,t,n,a){return Object(o.a)(u.a.mark((function r(){var i,s,c;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=w(e,t,n),r.next=4,i.methods.emergencyWithdraw(a).send({from:e.currentProvider.selectedAddress,gasPrice:h(e,t)});case 4:return s=r.sent,r.next=7,s.wait();case 7:return c=r.sent,y.a.open({message:"Transaction Succeeded"}),r.abrupt("return",c.status);case 12:r.prev=12,r.t0=r.catch(0),console.error(r.t0),y.a.open({message:"Transaction failed"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))},T=Object(a.createContext)(),O=Object(a.createContext)(),x=function(){var e=Object(a.useContext)(T).web3,t=Object(a.useState)(),n=Object(p.a)(t,2),r=n[0],i=n[1],s=Object(a.useContext)(O),c=s.masterchefAddress,d=s.userAddress,l=function(){var e=Object(a.useContext)(T),t=e.web3,n=e.chainId;return Object(a.useMemo)((function(){return j(t,n)}),[t,n])}();return Object(a.useEffect)((function(){(function(){var t=Object(o.a)(u.a.mark((function t(){var n,a,r,i,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==l&&void 0!==e&&void 0!==c&&void 0!==d){t.next=2;break}return t.abrupt("return",[]);case 2:n=[],a=[],r=0,i=10,t.prev=6;case 7:return t.next=9,l.methods.fetchPools(c,d,r,i).call();case 9:for(a=(a=t.sent).filter((function(e){return"0x0000000000000000000000000000000000000000"!==e.want})),s=0;s<a.length;s++)o=a[s],n.push({name:o.name,symbol:o.symbol,amount:o.amount,pid:r+s,want:o.want,mc:c});r+=i;case 13:if(a.length>=i&&r<=200){t.next=7;break}case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(6),console.error(t.t0),y.a.open({message:"Unable to fetch masterchef",description:"Are you sure the address is correct?"});case 20:return t.abrupt("return",n);case 21:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(){return t.apply(this,arguments)}})()().then((function(e){i(e)}))}),[c,d,l,e]),r},P=n(840),S=n(371),k={137:"https://polygonscan.com",56:"https://bscscan.com"},I=function(e,t){return k[e]+"/address/"+t},M=n(31);var C=function(e){var t=e.name,n=e.symbol,a=e.amount,r=e.pid,i=e.chainId,s=e.want,c=e.onEmergencyWithdraw;return Object(M.jsxs)(l.b.Item,{children:[Object(M.jsx)(l.b.Item.Meta,{avatar:Object(M.jsx)(P.a,{src:"https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=010"}),title:Object(M.jsxs)("a",{target:"_blank",rel:"noreferrer",href:I(i,s),children:[t," - pid: ",r]}),description:a+" "+n}),Object(M.jsxs)("div",{children:[" ",Object(M.jsx)(S.a,{type:"primary",danger:!0,onClick:c,children:"Emergency Withdraw"})]})]})};var A=function(){var e=x(),t=Object(a.useContext)(T),n=t.web3,r=t.chainId,i=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(n,r,t.mc,t.pid)();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(d.a,{orientation:"left",children:"Pools"}),Object(M.jsx)(l.b,{className:"demo-loadmore-list",size:"large",itemLayout:"horizontal",dataSource:e,renderItem:function(e){return Object(M.jsx)(C,{name:e.name,symbol:e.symbol,amount:e.amount,pid:e.pid,chainId:r,want:e.want,onEmergencyWithdraw:function(){return i(e)}})}})]})},E=n(839).a.Search;var F=function(e){var t=e.onStart;return Object(M.jsx)(E,{placeholder:"Masterchef",allowClear:!0,enterButton:"Start",size:"large",onSearch:t})},B=n(364),N=n.n(B),D=n(366),L=n.n(D),W=n(367),J={walletconnect:{package:n.n(W).a,options:{infuraId:"5b7ed00b5a864d5797572f8cfcc5052e"}}},_=new L.a({cacheProvider:!0,providerOptions:J}),z=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({web3:void 0,chainId:void 0}),s=Object(p.a)(i,2),c=s[0],d=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.connect();case 2:return t=e.sent,r(t),n=new N.a(t),e.next=7,n.eth.net.getId();case 7:return a=e.sent,e.abrupt("return",{web3:n,chainId:a});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){d(e)}))}),[n]),c};var R=function(){var e=z(),t=e.web3,n=e.chainId,r=Object(a.useState)(void 0),i=Object(p.a)(r,2),s=i[0],c=i[1],d=Object(a.useState)("0x0000000000000000000000000000000000000000"),l=Object(p.a)(d,2),y=l[0],m=l[1];Object(a.useEffect)((function(){void 0!==t&&void 0!==t.currentProvider&&void 0!==t.currentProvider.selectedAddress&&m(t.currentProvider.selectedAddress)}),[t]);var f=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(T.Provider,{value:{web3:t,chainId:n},children:Object(M.jsx)(O.Provider,{value:{masterchefAddress:s,userAddress:y},children:Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(F,{onStart:f}),Object(M.jsx)(A,{})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,841)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(R,{})}),document.getElementById("root")),U()}},[[830,1,2]]]);
//# sourceMappingURL=main.62b853f7.chunk.js.map