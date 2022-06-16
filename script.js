alert("來~歡迎光臨這邊坐喔");
var user_name = prompt("來~手伸出來，告訴阿姨你叫什麼名字:");
alert(user_name + "有沒有人跟你說過，你這種手很好命喔...");
var nail_service = confirm("阿姨幫你指甲彩繪齁[Cancel/OK]")
if(nail_service){
    alert("(你不情願地等阿姨蹂躪完你的指甲)") 
} else{
    alert("什麼，你沒有要指甲彩繪唷？") 
}

function ask_your_age(){
var user_age = prompt("好啦，西元幾年出生:");
if(Number(user_age) <= 1993 && Number(user_age) > 1922){
    alert(`西元${user_age}年, 民國${user_age - 1911}年....`)
    alert("你老妹捏，hen老很老捏")
} else if(Number(user_age) > 1993 && Number(user_age) < 2022){
    alert("你粉年輕捏...")
} else if(Number(user_age) <= 1922 && Number(user_age) > 0){
    alert("你這麼老，清朝人喔?")
} else if(Number(user_age) >= 2022){
    alert("...你應該還沒出生啦齁，所以你的命阿姨算不出來")
}
else{
    ask_your_age();
}
}
ask_your_age();

alert(".........");
alert("你帶著廖麗芳老師的占卜結果和人生智慧離開了店鋪...");
