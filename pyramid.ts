function draw(n:number):void {
    var str:String = "";
    var i = 0, j = 0; //i是行，j是列，n是想要的行数
    var A = new Array();
    for (j = 0; j < n; j++) {
        for (i = 0; i < j; i++) {
            A[i][j] =  " ";
            console.log(A[i][j]);
        }
        for (i = n; i < n + j - 1; i++) {
            A[i][j] =  "*";
            console.log(A[i][j]);
        }
        for (i = 2*n-1; i > n + j; i--) {
            A[i][j] =  " ";
            console.log(A[i][j]);
        }
    }
}

draw(3);
