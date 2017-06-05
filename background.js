chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if(changeInfo.url){
		chrome.tabs.executeScript({
			code: String.raw
				`
					var href = "${changeInfo.url}";
					var tarUrls = [
						'buy.tmall.com/order/confirm_order.htm',
						'buy.taobao.com/auction',
						'www.amazon.cn/gp/buy/(addressselect|payselect|spc)/handlers/display',
						'trade.jd.\\w+/shopping/order/get(Easy)?OrderInfo'
					]
					var isTar = tarUrls.find(url => href.match(new RegExp(url))) != null;
					if(isTar){
						alert('别忘了使用返利网')
					}
				`
		});
	}
})
