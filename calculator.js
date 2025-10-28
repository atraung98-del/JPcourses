function myResult(){
    let refValue=80;
let score;
score=prompt("点数を入力してください",80);
if(score===100){
    console.log('百点満点');
}if(score>=refValue){
    console.log('合格です。');
    console.log('よく頑張りましたね。');
}else{
    console.log('不合格です。');
    console.log('もう少し頑張りましょう');
}
}
// /
function theMonth(){
let month;
month=prompt("月をご記入ください",1);
if(month==12||month==1||month==2){
    console.log('冬');
}else if(month>=3 && month<=5){
    console.log('春');
}else if(month>=6 && month<=8){
    console.log('夏');
}else if(month>=9 && month<=11){
    console.log('秋');
}else{
    console.log('1から12をご記入ください');
}
}
