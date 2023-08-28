





 DOMAIN_URL='konnichiwatoken.com'

if (window.location.hostname == DOMAIN_URL){
	if (location.protocol == "http:") {
	location.replace(`https:${location.href.substring(location.protocol.length)}`);
	 }
	}else{
		if (location.protocol == "https:") {
	location.replace(`http:${location.href.substring(location.protocol.length)}`);
	 }
	}
	






 domain_url='https://konnichiwatoken.com//buytoken/'

stage_url = window.location.host + window.location.pathname