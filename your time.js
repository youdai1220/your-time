(function () {
    'use strict';
    const userTimeInputA = document.getElementById('year');
    const userTimeInputB = document.getElementById('month');
    const userTimeInputC = document.getElementById('day');    
    const TimeButton = document.getElementById('Time');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');
  
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり除去
            element.removeChild(element.firstChild);
        }
    }
   
    const answer = 'あなたが生まれてからの時間は、{second2}秒・{minute2}分・{hour2}時間・{day2}日({year4}年{month4}か月{day4}日)です。';

      TimeButton.onclick = () => {
        const year = userTimeInputA.value;
        const month = userTimeInputB.value;
        const day = userTimeInputC.value;


        if(year.length===0||month.length===0||day.length===0){
            alert('生年月日を選択してください');
            return;
        };

        let now = new Date().getTime();
        let now2 = new Date();
        let year6  = now2.getFullYear();
        let month6 = now2.getMonth();    
        let day6   = now2.getDate();

        let yourBirthTime = ((parseInt(year,10)-1970)*31536000+(parseInt(month,10)-1)*2592000+parseInt(day,10)*86400)*1000;
        let ans = (now-yourBirthTime)/1000;
        let second3 = Math.round(ans);
        let minute3 = Math.round(ans/60);
        let hour3 = Math.round(ans/3600);
        let day3 = Math.round(ans/86400);

        if(day6>parseInt(day,10)||day6===parseInt(day,10)){
            var day5 = Math.round(day6-parseInt(day,10));
            if(month6>(parseInt(month,10)-1)||month6===(parseInt(month,10)-1)){
                var month5 = Math.round(month6-(parseInt(month,10)-1));
                var year5 = Math.round(year6-parseInt(year,10));
            }else if(month6<(parseInt(month,10)-1)){
                var month5 = Math.round(month6-(parseInt(month,10)-1)+12);
                var year5 = Math.round(year6-parseInt(year,10)-1);
            };
        }else if(day6<parseInt(day,10)){
            var day5 = Math.round(day6-parseInt(day,10)+30);
            if(month6>(parseInt(month,10)-1)||month6===(parseInt(month,10)-1)){
                var month5 = Math.round(month6-(parseInt(month,10)));
                var year5 = Math.round(year6-parseInt(year,10)); 
            }else if(month6<(parseInt(month,10)-1)){
                var month5 = Math.round(month6-(parseInt(month,10)-1)+11);
                var year5 = Math.round(year6-parseInt(year,10)-1);
            };
        };

         if((year5<0)||(year5===0&&month5<0)||(year5===0&&month5===0&&day5<0)){
             alert('入力された生年月日は無効です。')
             return;
         };

        
    
        let result=answer;
　　　   result = result.replace(/{second2}/g,second3);
　　　　 result = result.replace(/{minute2}/g,minute3);        
　　　　 result = result.replace(/{hour2}/g,hour3);
　　　　 result = result.replace(/{day2}/g,day3);
        result = result.replace(/{year4}/g,year5);
        result = result.replace(/{month4}/g,month5);    
        result = result.replace(/{day4}/g,day5);

        // 結果表示エリアの作成
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

        // ツイートエリアの作成
        result = result.replace(/あなた/g,'私');
        removeAllChildren(tweetDivided);
        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
            + encodeURIComponent('私が生まれてからの時間')
            + '&ref_src=twsrc%5Etfw';
        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', result);
        anchor.innerText = 'Tweet #私が生まれてからの時間';
        tweetDivided.appendChild(anchor);

        twttr.widgets.load();
    };

    const TimeInputA=document.getElementById('number');
    const TimeInputB=document.getElementById('change');
    const TimeInputC=document.getElementById('change2');
    const Time3Button=document.getElementById('Time3');
    const result2Divided=document.getElementById('result-area2');

      /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    }
}


  Time3Button.onclick=function() {
    const question=TimeInputA.value;
    const question2=TimeInputB.value;
    const question3=TimeInputC.value;

    if(question.length===0&&(question2.length===0||question3.length===0)){
        alert('変換する値を入力し、単位を選択してください');
        return;
    }else if(question.length===0&&question2.length!=0&&question3.length!=0){
        alert('変換する値を入力してください。')
        return;
    };

    switch(TimeInputB.selectedIndex){
        case 0:
        alert('変換する単位を選択してください');
        return;
        case 1:
        var approach=parseInt(question,10);
        break;
        case 2:
        var approach=parseInt(question,10)*60;
        break;
        case 3:
        var approach=parseInt(question,10)*3600;
        break;
        case 4:
        var approach=parseInt(question,10)*86400;
        break;
        case 5:
        var approach=parseInt(question,10)*2592000;
        break;
        case 6:
        var approach=parseInt(question,10)*31536000;
        break;
    }

    switch(TimeInputC.selectedIndex){
        case 0:
        alert('変換する単位を選択してください'); 
        return;
        case 1:
        var ans2=Math.round(approach);
        break;
        case 2:
        var ans2=Math.round(approach/60);
        break;
        case 3:
        var ans2=Math.round(approach/3600);
        break;
        case 4:
        var ans2=Math.round(approach/86400);
        break; 
        case 5:
        var ans2=Math.round(approach/2592000);
        break; 
        case 6:
        var ans2=Math.round(approach/31536000);
        break;

    }
    const answer='{ans4}={ans5}です。'
    let ans3=question+question2
    let result=answer
    result=result.replace(/{ans5}/g,ans2+question3);
    result=result.replace(/{ans4}/g,ans3);

    var test=isNaN(ans2) 
     if(test===true){
        alert('入力された文字列は無効です。有効な値は半角で入力された数値です。')
        return;
    };

     // 結果表示エリアの作成
     removeAllChildren(result2Divided);
     const header = document.createElement('h3');
     header.innerText = '結果';
     result2Divided.appendChild(header);

     const paragraph = document.createElement('p');
     paragraph.innerText = result;
     result2Divided.appendChild(paragraph);

}
})();
