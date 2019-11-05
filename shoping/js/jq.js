
/*
	功能：求数数组和
	参数：一个数组
	返回值：和的结果
*/ 

function sum (arr) {
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		num += arr[i];
	}
	return num;
}
/*
	功能：获取元素
	参数：[childNode,parentNode];
		childNode:一个dom元素
		parentNode:父级元素
	返回值：元素
*/
function $(name,parent){
	var parent = parent || document;
	var str;
	str = name.split('#')[1];
	if (name.charAt(0) == "#") {
		return parent.getElementById(str);
		
	}else if(name.charAt(0) == ".") {
		str = name.split('.')[1];
		
		var arr2 = [];
		// 获取页面的所有元素
		var all = document.getElementsByTagName("*");
		// 得到有classname的元素
		for (var i = 0; i < all.length; i++) {
			var onoff = false;
			if (all[i].className){
				
				var arr = all[i].className.split(" ");

				for (var j = 0; j < arr.length; j++){
					
					if(arr[j] === str){
						arr2.push(all[i])
					}
				}
				
			}
		}
		return arr2;
		
	}else{
		return parent.getElementsByTagName(name);
	}
	}

/*
	功能：事件绑定
	参数：[el,event,fn]
		el:dom元素
		event：不带on的事件
		fn：事件执行的代码
	返回值：undefind;
*/
function bind(el,event,fn) {
	el['on' + event] = fn;
}
/*

*/
function forEach(obj,fn) {
	for (var i = 0; i < obj.length; i++) {
		fn(obj[i],i);
	}
}

function addClass(el,className){
	
	
		if(el.className.indexOf(className) == -1){
			el.className = el.className +' '+ className;
		}
	
}
			
function removeClass(el,className){
	var arr=[];
	if(el.className){
		arr = el.className.split(" ");
		
		if(arr.indexOf(className) != -1){
			
			arr.splice(arr.indexOf(className),1);
			el.className = arr.join("");
		}
	}
}

