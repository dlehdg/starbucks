
      
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
      
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', { // YouTube api에서 id가 play인 값을 인수
          
          videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 id
          playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 id 목록
          },
          events: {
            onReady: function (event) { // 객체 데이터 내부에 함수 데이터를 할당하는 것 - 메소드
              event.target.mute() // 음소거
              
            }
          }
        });
      }