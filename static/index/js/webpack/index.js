import Cassette from './molecule/_cassette';

// カセットdomにイベントを定義
var $cassettes = document.getElementsByClassName("var-output-cassette");
var CassetteInstance = new Cassette($cassettes[0]);
$cassettes[0].onclick = function() {CassetteInstance.toggleColor('red');};
