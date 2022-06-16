alert("來~歡迎光臨這邊坐喔");
var user_name = prompt("來手伸出來，你叫什麼名字:");
alert(user_name + "有沒有人跟你說過，你這種手很好命喔...");
var nail_service = confirm("阿姨幫你指甲彩繪齁[Y/N]")
if(nail_service){
    alert("(你不情願地等阿姨蹂躪完你的指甲)") 
} else{
    alert("什麼你沒有要指甲彩繪唷？") 
}
var user_age = prompt("好啦，西元幾年出生:");
if(Number(user_age) <= 1993){
    alert(`西元${user_age}年, 民國${user_age - 1911}年....`)
    alert("你老妹捏，hen老很老捏")
} else if(Number(user_age) > 1993){
    alert("你粉年輕捏...")
} 
alert(".........");
alert("你帶著廖麗芳老師的占卜結果和人生智慧離開了店鋪...");
