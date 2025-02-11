//変数numにランダムで１以上の変数を代入する
let num=Math.floor(Math.random()*50);


//変数numの値を出力する
console.log(num);


//変数numの値は3と5の倍数であれば「3と5の倍数です」の文字列を出力する
if(num % 3 === 0 && num % 5 === 0){
  console.log("3と5の倍数です");
}

//変数numの値は3の倍数であれば「3の倍数です」の文字列を出力する
else if (num % 3=== 0 ){
  console.log("3の倍数です");
}

//変数numの値は5の倍数であれば「5の倍数です」の文字列を出力する
else if (num % 5=== 0){
  console.log("5の倍数です");
}
//それ以外の場合は変数numの値を出力する
else {
  console.log(num);
}
