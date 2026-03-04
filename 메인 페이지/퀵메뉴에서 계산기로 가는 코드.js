<script>
  (function() {
      // 중복 실행 방지 플래그
      var isExecuted = false;

      // 섹션 ID와 버튼 ID 설정
      var sectionId = 's2026010276d5280eadb04';
      var targetWidgetId = 'w2026010288bf73e119742';  // 스크롤 목표 위젯
      //var buttonId = 'calcTriggerBtn';

        function scrollToTarget(callback) {
        // 먼저 현재 위치 확인
        console.log('현재 scrollTop:', document.documentElement.scrollTop);

        // 고정값으로 테스트 (숫자 조정)
        window.scrollTo({
            top: 3285,
            behavior: 'smooth'
        });

        if (callback) {
            setTimeout(callback, 800);
        }
    }

      // 수익계산기 실행 함수
      function executeCalculator() {
          // 이미 실행됐으면 중단
          if (isExecuted) {
              console.log('[수익계산기] 이미 실행됨 - 중복 방지');
              return;
          }

          var section = document.getElementById(sectionId);
          //var button = document.getElementById(buttonId);

          if (!section) {
              console.log('[수익계산기] 섹션을 찾을 수 없습니다. ID:', sectionId);
              return;
          }

        //   if (!button) {
        //       console.log('[수익계산기] 버튼을 찾을 수 없습니다. ID:', buttonId);
        //       return;
        //   }

          // 실행 플래그 설정
          isExecuted = true;

          console.log('[수익계산기] 실행 시작');

          // 섹션으로 스크롤 후 버튼 클릭
          scrollToTarget(function() {
            //   button.click();
            //   console.log('[수익계산기] 버튼 클릭 완료');

              // URL에서 파라미터 제거
              if (window.location.search.includes('action=calculator')) {
                  var cleanUrl = window.location.pathname + window.location.hash;
                  window.history.replaceState({}, document.title, cleanUrl);
              }

              // 일정 시간 후 플래그 리셋 (다음 클릭을 위해)
              setTimeout(function() {
                  isExecuted = false;
              }, 2000);
          });
      }

      // URL 파라미터 확인 후 자동 실행
      function checkUrlAndExecute() {
          var urlParams = new URLSearchParams(window.location.search);
          var action = urlParams.get('action');

          if (action === 'calculator') {
              executeCalculator();
          }
      }

      // 메인페이지 퀵메뉴 수익계산기 버튼 직접 처리
    //   function bindQuickMenuButton() {
    //       // 퀵메뉴의 수익계산기 버튼 찾기
    //       var quickMenuBtn = document.querySelector('.ls-qm-btn[data-name="수익계산기"]');

    //       if (quickMenuBtn) {
    //           quickMenuBtn.addEventListener('click', function(e) {
    //               // 현재 페이지가 메인(index)인지 확인
    //               var currentPath = window.location.pathname;
    //               if (currentPath === '/' || currentPath === '/index' || currentPath.includes('/index')) {
    //                   // 메인페이지에 있으면 페이지 이동 없이 직접 실행
    //                   e.preventDefault();
    //                   executeCalculator();
    //               }
    //               // 다른 페이지면 기본 링크 동작 (페이지 이동)
    //           });
    //           console.log('[수익계산기] 퀵메뉴 버튼 바인딩 완료');
    //       }
    //   }

      // 초기화 함수 (한 번만 실행)
      var isInitialized = false;
      function init() {
          if (isInitialized) return;
          isInitialized = true;

          // 퀵메뉴 버튼 바인딩
          //bindQuickMenuButton();

          // URL 파라미터 확인 (다른 페이지에서 넘어온 경우)
          checkUrlAndExecute();
      }

      // 페이지 로드 완료 후 실행
      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function() {
              setTimeout(init, 300);
          });
      } else {
          setTimeout(init, 300);
      }

      // window load 백업 (아임웹 동적 로딩 대응)
      window.addEventListener('load', function() {
          setTimeout(init, 500);
      });
  })();
  </script>
