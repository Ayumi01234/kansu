
// もしボタン１を押したら、コンピューターの手のところにランダムで相手の手を表示させ、
// 結果はのところに、勝ちか負けか引き分けを表示させる


$('#btn1').on('click', function() {

  const randomNumber = Math.ceil(Math.random()*3);
  if (randomNumber === 1){
      $("#result1").html('ぐー');
      $("#result2").html('引き分け');
  }else if (randomNumber === 2){
      $("#result1").html('ちょき');
      $("#result2").html('あなたの勝ち');
  }else {
      $("#result").html('パー');
      $("#result2").html('あなたの負け');
  }
})

$('#btn2').on('click', function() {

  const randomNumber = Math.ceil(Math.random()*3);
  if (randomNumber === 1){
      $("#result1").html('ぐー');
      $("#result2").html('あなたの負け');
  }else if (randomNumber === 2){
      $("#result1").html('ちょき');
      $("#result2").html('引き分け');
  }else {
      $("#result").html('パー');
      $("#result2").html('あなたの勝ち');
  }
})
Ss
$('#btn3').on('click', function() {

  const randomNumber = Math.ceil(Math.random()*3);
  if (randomNumber === 1){
      $("#result1").html('ぐー');
      $("#result2").html('あなたの勝ち');
  }else if (randomNumber === 2){
      $("#result1").html('ちょき');
      $("#result2").html('あなたの負け');
  }else {
      $("#result").html('パー');
      $("#result2").html('引き分け');
  }
})

console.log();

// $("#result1").html('ぐー');