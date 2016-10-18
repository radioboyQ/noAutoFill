(function(){    
    chrome.extension.sendRequest({
        autofill:'off'
    },function(){       
        var inputnodes = document.getElementsByTagName('input');    
        for(var i=0;i<inputnodes.length;i++){       
            inputnodes[i].setAttribute('autocomplete','off');
        }       
        var formnodes = document.getElementsByTagName("form");    
        for(var i=0;i<formnodes.length;i++){                    
            formnodes[i].setAttribute('autocomplete','off');
        }
	var textnodes = document.getElementsByTagName('text');
	for(var i=0;i<formnodes.length;i++){
            formnodes[i].setAttribute('autocomplete','off');
        }       
  });
})();
