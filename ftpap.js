// <div id="target">...</div>などの要素にクリックイベントを設定
document.getElementById( "bx1" ).addEventListener( "click", function( event ) {
	var clickX = event.pageX ;
	var clickY = event.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるクリック位置を計算
	var x = clickX - positionX ;
	var y = clickY - positionY ;

  document.getElementById('ct4').innerHTML = x;
  document.getElementById('ct5').innerHTML = y;
} ) ;
