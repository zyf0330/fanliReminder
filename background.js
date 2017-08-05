chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if(changeInfo.url){
		chrome.tabs.executeScript({
			code: String.raw
				`
					var href = "${changeInfo.url}";
					var taobao = [
						'buy.tmall.com/order/confirm_order.htm',
						'buy.taobao.com/auction'
					]
					var other = [
						'www.amazon.cn/gp/buy/(addressselect|payselect|spc)/handlers/display',
						'trade.jd.\\w+/shopping/order/get(Easy)?OrderInfo'
					]
					var isTaobao = taobao.find(url => href.match(new RegExp(url))) != null;
					var isOther = other.find(url => href.match(new RegExp(url))) != null;
					var msg = null
					if(isTaobao || isOther){
						msg = '别忘了使用返利网'
					}
					if(isTaobao){
						msg += '\n使用手淘下单'
					}
					if(msg != null){
						alert(msg)
					}
				`
		});
	}
})
