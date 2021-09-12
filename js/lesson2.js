function fizzbuzz() {
    const fizzNum = Number(document.getElementById("fizzNo").value);
    const buzzNum = Number(document.getElementById("buzzNo").value);
    //document.でhtmlから要素を取得
    //getElementById:idでelementを取得→htmlのidは重複不可なので1つの要素が呼び出される.重複すると最初の要素,対象idがないとnull
    //valueでinputされた値の取得を宣言,valueなしだとその要素を丸ごと読み込む(input type = ・・・ id = "text1")を読み込む
    //valueの返り値は文字列なのでNumber()で数値にする
    const fbArry = [];

    if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || fizzNum === 0 || buzzNum === 0) {
        document.getElementById("fizzbuzz-result").textContent = "整数値を入力してください";
        return;
    }

    for (let i = 1; i < 100; i++) {
        if (i % fizzNum === 0 && i % buzzNum === 0) {
            fbArry.push("<p>" + "FizzBuzz" + i + "</p>");
        } else if (i % fizzNum === 0) {
            fbArry.push("<p>" + "Fizz" + i + "</p>");
        } else if (i % buzzNum === 0) {
            fbArry.push("<p>" + "Buzz" + i + "</p>");
        }
    }

    const fbHTML = fbArry.join("");
    //配列fbArryを文字列にし横並びにする

    document.getElementById("fizzbuzz-result").innerHTML = fbHTML;
    //HTMLのfizzbuzz-resultの所に.innerHTMLで fbHTML をさし込む
}
