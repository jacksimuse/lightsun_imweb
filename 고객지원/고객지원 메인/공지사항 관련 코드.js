<script>
/* ===== 공지사항 글쓴이 ↔ 작성시간 순서 변경 ===== */
/* 대상 위젯: #w20260212d95b584371ad3 */
(function() {
    function init() {
        var widget = document.getElementById('w20260212d95b584371ad3');
        if (!widget) return;

        /* 각 게시글의 li_body에서 name과 time 순서 교체 */
        var bodies = widget.querySelectorAll('.li_body');
        bodies.forEach(function(body) {
            var name = body.querySelector('li.name');
            var time = body.querySelector('li.time');
            if (name && time) {
                name.parentNode.insertBefore(time, name);
            }
        });

        /* 헤더도 동일하게 교체 */
        var headers = widget.querySelectorAll('.li_header');
        headers.forEach(function(header) {
            var name = header.querySelector('li.name');
            var date = header.querySelector('li.date');
            if (name && date) {
                name.parentNode.insertBefore(date, name);
            }
        });

        console.log('[공지사항] 글쓴이 ↔ 작성시간 순서 변경 완료');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 300); });
    } else {
        setTimeout(init, 300);
    }
    window.addEventListener('load', function() { setTimeout(init, 500); });
})();
</script>
