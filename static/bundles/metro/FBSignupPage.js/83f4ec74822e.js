__d(function(g,r,i,a,m,e,d){"use strict";function n(n){var o=n.children,t=n.isSmallWidth,s=n.showHeader,l=void 0===s||s;return a(d[17]).createElement("div",{className:"_lTir"},a(d[17]).createElement(i(d[28]),null),a(d[17]).createElement(i(d[29]),null),a(d[17]).createElement(i(d[30]),{id:i(d[7]).fbSignupPage,title:u}),a(d[17]).createElement("div",{className:"_0r0cu"},l&&a(d[17]).createElement("div",{className:"w8Ejx"},a(d[17]).createElement(i(d[31]),{className:"Szr5J t98Id "+(t?"":"coreSpriteLoggedOutWordmark")+" "+(t?"coreSpriteMobileNavTypeLogo":""),href:"/"},r(d[3])(2521))),o))}function o(n){var o=n.url;return a(d[17]).createElement("div",{className:"BdFXH"},a(d[17]).createElement("img",{alt:r(d[3])(3073),className:"ulnoR",src:o}))}function t(){return a(d[17]).createElement("div",{className:"_ltf8"},a(d[17]).createElement(i(d[32]),{position:"absolute",size:"medium"}))}function s(n){var o=n.message,t=n.onGoHome;return a(d[17]).createElement("div",{className:"rYEZO"},a(d[17]).createElement(i(d[33]).Body,null,o),a(d[17]).createElement(i(d[34]),{marginTop:5},a(d[17]).createElement(i(d[35]),{color:"ig-secondary-button",onClick:t},r(d[3])(1559))))}function l(n){var o=n.requestInFlight;return a(d[17]).createElement(i(d[36]),{pageIdentifier:i(d[7]).fbSignupPage,requestInFlight:o})}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]),r(d[2]);var u=r(d[3])(3194),c=(function(u){function c(n){var o,t;return t=u.call(this,n)||this,t.$Page3=function(n){t.props.igAccount||t.setState({earlyError:a(d[5]).ERROR_FB_COULDNT_LOAD_INFO})},t.$Page4=function(){t.props.history.push('/')},t.$Page1=null,t.$Page2=null,t.state={earlyError:null!==(o=n.oAuthResponse)&&void 0!==o&&o.success?void 0:a(d[5]).ERROR_SIGNUP_UNKNOWN},t}i(d[4])(c,u);var p=c.prototype;return p.getExtraDataForLogger=function(){return{type:'fb',platform:r(d[6]).getAppPlatform(),source:i(d[7]).fbSignupPage}},p.componentDidMount=function(){var n=this;window.history.replaceState&&window.history.replaceState({},'',r(d[8]).SIGNUP_PATH);var o=1,t=setInterval(function(){o-- >0?i(d[9]).reloadSDK():(clearInterval(t),i(d[10])._("79bd1bc421163e1cf897231646323ff7")||r(d[11]).logAction_DEPRECATED('signupFBConnectFailed',n.getExtraDataForLogger()),i(d[12]).incr('web.signup.signup_fb_connect_failed'),r(d[13]).logLoggedOutCtaEvent({ctaType:'fb_signup_page',ctaVersion:'',eventName:'fb_connect_failed'}),n.$Page3())},5e3);if(i(d[9]).sdkReady(function(){return clearInterval(t)}),r(d[6]).isLoggedIn()){var s;if(null!==(s=this.props.oAuthResponse)&&void 0!==s&&s.accessToken&&!0===i(d[14])._("f32ccf5136ea284a177598172705431b","48d7c64d7adf7cbd2f84bfcb56bd6d62")){var l,u=null===(l=this.props.oAuthResponse)||void 0===l?void 0:l.accessToken;r(d[15]).saveAccessToken(u),this.props.onLinkAccountToFB(this.props.oAuthResponse)}else i(d[16])('fb oauth token is missing'),this.props.history.push('/')}else this.props.onLoadFBSignupOAuthLandingPage()},p.componentDidUpdate=function(n,o){this.$Page1&&!this.isFormVisible(n)&&this.$Page1.focusUsername()},p.isFormVisible=function(n){return null===n.igAccount&&null!=n.fbPictureUrl&&null!==n.usernameSuggestions&&void 0!==n.usernameSuggestions},p.needEmailOrPhone=function(){var n=this.props,o=n.fbEmail,t=n.fbPhone;return!o&&!(!o&&t)},p.render=function(){var u,c=this,p=!0;if(this.state.earlyError)u=a(d[17]).createElement(s,{message:this.state.earlyError,onGoHome:this.$Page4});else if(this.props.fbProfileError&&!this.props.igAccount)u=a(d[17]).createElement(s,{message:a(d[5]).ERROR_FB_COULDNT_LOAD_INFO,onGoHome:this.$Page4});else if(this.props.hasTwoFactorChallenge)u=a(d[17]).createElement(a(d[17]).Fragment,null,a(d[17]).createElement("h1",{className:"Szr5J SIUqf coreSpriteLock"}),a(d[17]).createElement(l,{requestInFlight:this.props.requestInFlight}));else if(this.props.deletionDate&&this.props.deletionNonce&&this.props.igAccount)u=a(d[17]).createElement(i(d[18]),{onClose:function(){c.props.onClearStopDeletionNonce(),r(d[19]).redirect('/')},onStopDeletion:function(){c.props.onLoadFBSignupOAuthLandingPage(),c.props.onClearStopDeletionNonce()},stopDeletionDate:this.props.deletionDate,stopDeletionNonce:this.props.deletionNonce,username:this.props.igAccount.username});else if(this.isFormVisible(this.props)){var f=this.props,h=f.fbName,v=f.fbPictureUrl;v&&h||i(d[20])(0),this.props.fbEmail||this.props.fbPhone||i(d[20])(0),u=a(d[17]).createElement(a(d[17]).Fragment,null,a(d[17]).createElement(o,{url:v}),a(d[17]).createElement(i(d[21]),{canUsePhone:!1,className:"c3Opt",errorNonce:this.props.errorNonce,fbConnectedStatus:this.props.fbConnectStatus,fbUserID:this.props.fbUserID,gdprRequired:!1,hideFBOption:!0,hideHeader:!0,initialFullName:h,needEmailOrPhone:this.needEmailOrPhone(),needPassword:!0,onSignupFocusChange:this.props.onFocusChange,onSubmit:function(n){c.props.onSignupWithFB(n,c.props.accessToken,c.props.accountId)},pageIdentifier:i(d[7]).fbSignupPage,ref:function(n){return c.$Page1=n},requestInFlight:this.props.requestInFlight,requireUsername:!0,signupResult:this.props.signupResult,usernameSuggestions:this.props.usernameSuggestions||[]}))}else p=!1,u=a(d[17]).createElement(t,null);return a(d[17]).createElement(n,{isSmallWidth:this.props.isSmallWidth,showHeader:p},u)},c})(a(d[17]).Component),p=r(d[26]).withIGRouter(r(d[27]).connect(function(n){var o,t,s,l,u,c,p,f,h,v,b,E,P=n.auth,S=n.fb,F=n.signup,N=n.twoFactor,A=(null===F||void 0===F?void 0:F.requestInFlight)||(null===N||void 0===N?void 0:N.requestInFlight)||!1;return{accessToken:null===F||void 0===F?void 0:null===(o=F.fbOAuth)||void 0===o?void 0:o.accessToken,accountId:null===F||void 0===F?void 0:null===(t=F.fbProfile)||void 0===t?void 0:t.id,deletionDate:null===S||void 0===S?void 0:S.deletionDate,deletionNonce:S.deletionNonce,errorNonce:(null===F||void 0===F?void 0:F.submissionCount)||0,fbConnectStatus:S.status,fbEmail:null===F||void 0===F?void 0:null===(s=F.fbProfile)||void 0===s?void 0:null===(l=s.result)||void 0===l?void 0:l.email,fbName:null===F||void 0===F?void 0:null===(u=F.fbProfile)||void 0===u?void 0:null===(c=u.result)||void 0===c?void 0:c.name,fbPhone:null===F||void 0===F?void 0:null===(p=F.fbProfile)||void 0===p?void 0:null===(f=p.result)||void 0===f?void 0:f.phone,fbPictureUrl:null===F||void 0===F?void 0:null===(h=F.fbProfile)||void 0===h?void 0:null===(v=h.result)||void 0===v?void 0:v.profilePictureUrl,fbProfileError:null===F||void 0===F?void 0:null===(b=F.fbProfile)||void 0===b?void 0:b.error,fbUserID:Number(null===S||void 0===S?void 0:null===(E=S.authResponse)||void 0===E?void 0:E.userID),igAccount:(null===S||void 0===S?void 0:S.igProfile)||null,igAccounts:(null===S||void 0===S?void 0:S.igProfiles)||null,isSmallWidth:n.displayProperties.viewportWidth<640,oAuthResponse:null===F||void 0===F?void 0:F.fbOAuth,requestInFlight:A,signupResult:null===F||void 0===F?void 0:F.signupResult,hasTwoFactorChallenge:!!N,usernameSuggestions:null===F||void 0===F?void 0:F.usernameSuggestions,nextUrl:P.next}},function(n){return{onLinkAccountToFB:function(o){if(null!=o){var t=o.accessToken,s=o.returnURL;n(r(d[22]).linkAccountToFB(t,s))}},onLoadFBSignupOAuthLandingPage:function(){n(r(d[23]).loadFBSignupOAuthLandingPage())},onFocusChange:function(o,t){n(r(d[23]).changeFBSignupFormFocus(o,t))},onClearStopDeletionNonce:function(){n(r(d[23]).clearStopDeletionNonce())},onSignupWithFB:(function(){var o=i(d[24])(i(d[25]).mark(function o(t,s,l){return i(d[25]).wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(r(d[23]).signupWithFB(t,i(d[7]).fbSignupPage));case 2:case"end":return o.stop()}},o)}));return function(n,t,s){return o.apply(this,arguments)}})()}})(c));e.PAGE_ID=i(d[7]).fbSignupPage,e.FBSignupPage=p},6619136,[12583076,6619137,12583033,12517438,12517452,12582964,12517383,12517578,12517449,12517867,12517435,12517516,12517490,12517873,12517458,12517872,12517476,3,12321101,12517457,3276908,12321057,12517864,12517875,12517378,12517379,12517838,5,12583082,3866629,12583215,12582976,12582972,12582965,12582974,12582968,12321065]);
__d(function() {},6619137,[]);