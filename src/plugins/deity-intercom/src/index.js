module.exports = function (context, options) {
  return {
    name: 'deity-intercom',
    injectHtmlTags() {
      return {
        // postBodyTags: [
        //   {
        //     tagName: "script",
        //     innerHTML: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${options.appId}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`
        //   },
        //   {
        //     tagName: "script",
        //     innerHTML: `window.Intercom('boot', {
        //       app_id: '${options.appId}',
        //     });`
        //   }
        // ],
      };
    },
  };
};
