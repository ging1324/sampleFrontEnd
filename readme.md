<pre>
vue / react 모두 npm install 하세요   
실행시 react 는 npm start / vue 는 npm run serve 입니다.   
테스트 계정은 test/1234 입니다.   
</pre>
CEKeitor에 대하여
=============
<pre>
ckeditor 적용에 대하여...  
ckeditor 적용 예제는 react 의 게시판 글작성 부분에 있습니다.  
boardAdd.js 파일입니다.  
옵션등은 기본으로 두었어요  
옵션에 대한 부분은 각자 찾아서 해보길 권합니다.  
해봐야 늘고 해봐야 알고... 
구글에서 ckeditor option 일라고만 쳐도 많아요   
<br/>
글작성 페이지를 보면 editor를 바로 받아오는게 아닌, state에 내용이 바뀔때마다 set 해주고 있어요  
이는 에디터의 elemenet 를 찾아가도 대상값을 받아올 수 없어서 그러는데요  
(뭣때문인지는 기억이 잘 안나네요)  
그래서 내용이 바뀔때마다 state에 값을 널어주고 최종적으로 저장 버튼을 누를 때 해당 값을 가져와서 사용합니다.
react 가 아닌 경우는 input type hidden 을 하나 만들고 해당 element 에 값을 넣어주겠죠. 그리고 그 값을 사용합니다.
</pre>
